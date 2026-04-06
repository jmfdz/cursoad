import { createRouter, createWebHistory } from 'vue-router'
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

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    ...rutasBloque,
    ...rutasApartado,
  ],
})

export default router
