import { nextTick } from 'vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { bloquesCurso, tituloCurso } from '../curso'

declare module 'vue-router' {
  interface RouteMeta {
    TITULO?: string
  }
}

const nombreSitio = 'Accesibilidad, Usabilidad y UX'

// Los bloques ya no tienen pagina propia: el indice del curso esta en la portada.
// Se conservan como redireccion para no romper enlaces antiguos.
const rutasBloque = bloquesCurso.map((bloque) => ({
  path: `/${bloque.slug}`,
  redirect: `/${bloque.slug}/${bloque.sections[0].id}`,
}))

const rutasApartado = bloquesCurso.flatMap((bloque) =>
  bloque.sections.map((apartado) => ({
    path: `/${bloque.slug}/${apartado.id}`,
    name: `${bloque.slug}-${apartado.id}`,
    component: () => import('../views/Apartado.vue'),
    props: { bloqueSlug: bloque.slug, apartadoId: apartado.id },
    meta: { TITULO: apartado.title },
  })),
)

const history = import.meta.env.MODE === 'ua'
  ? createWebHashHistory(import.meta.env.BASE_URL)
  : createWebHistory(import.meta.env.BASE_URL)

const router = createRouter({
  history,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 96,
        behavior: from.path === to.path ? 'smooth' : 'auto',
      }
    }

    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Inicio.vue'),
      meta: { TITULO: tituloCurso },
    },
    {
      path: '/ejemplos',
      name: 'ejemplos',
      component: () => import('../views/ejemplos/Ejemplos.vue'),
      meta: { TITULO: 'Ejemplos' },
    },
    {
      path: '/fundamentos',
      redirect: '/accesibilidad-digital',
    },
    {
      path: '/fundamentos/cadua',
      redirect: '/herramientas/revision-accesibilidad',
    },
    {
      path: '/fundamentos/lector',
      redirect: '/herramientas/lector-pantalla',
    },
    {
      path: '/fundamentos/:apartadoId',
      redirect: (to) => `/accesibilidad-digital/${String(to.params.apartadoId)}`,
    },
    ...rutasBloque,
    ...rutasApartado,
  ],
})

let esCargaInicial = true

router.afterEach(async (to) => {
  document.title = to.meta.TITULO ? `${to.meta.TITULO} | ${nombreSitio}` : nombreSitio

  await nextTick()

  document.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]').forEach((enlace) => {
    const nombre = enlace.getAttribute('aria-label') ?? enlace.textContent?.trim()
    if (nombre && !nombre.includes('se abre en una ventana nueva')) {
      enlace.setAttribute('aria-label', `${nombre} (se abre en una ventana nueva)`)
    }
  })

  if (esCargaInicial) {
    esCargaInicial = false
    return
  }

  const foco =
    document.querySelector<HTMLElement>('main h1, [role="main"] h1') ??
    document.querySelector<HTMLElement>('main, [role="main"]')

  if (foco) {
    if (!foco.hasAttribute('tabindex')) foco.setAttribute('tabindex', '-1')
    foco.focus()
  }
})

export default router
