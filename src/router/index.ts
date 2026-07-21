import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { bloquesCurso } from '../curso'

const rutasBloque = bloquesCurso.map((bloque) => ({
  path: `/${bloque.slug}`,
  name: bloque.slug,
  component: () => import('../views/Bloque.vue'),
  props: { slug: bloque.slug },
}))

const rutasApartado = bloquesCurso.flatMap((bloque) =>
  bloque.sections.map((apartado) => ({
    path: `/${bloque.slug}/${apartado.id}`,
    name: `${bloque.slug}-${apartado.id}`,
    component: () => import('../views/Apartado.vue'),
    props: { bloqueSlug: bloque.slug, apartadoId: apartado.id },
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
    },
    {
      path: '/ejemplos',
      name: 'ejemplos',
      component: () => import('../views/ejemplos/Ejemplos.vue'),
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

export default router
