import { createRouter, createWebHistory } from 'vue-router'
import { courseBlocks } from '../content/course'

const blockRoutes = courseBlocks.map((block) => ({
  path: block.route,
  name: block.slug,
  component: () => import('../views/BlockIndexView.vue'),
  props: { blockSlug: block.slug },
}))

const sectionRoutes = courseBlocks.flatMap((block) =>
  block.sections.map((section) => ({
    path: `${block.route}/${section.id}`,
    name: `${block.slug}-${section.id}`,
    component: () => import('../views/SectionView.vue'),
    props: { blockSlug: block.slug, sectionId: section.id },
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
      component: () => import('../views/HomeView.vue'),
    },
    ...blockRoutes,
    ...sectionRoutes,
  ],
})

export default router
