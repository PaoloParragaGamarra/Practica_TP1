import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', redirect: '/home' }, // Redirect to home page
        { path: '/home', component: () => import('../public/pages/home-page/home-page.component.vue') },
        { path: '/analytics/health-checks', component: () => import('../analytics/pages/health-check-page.vue') },
        { path: '/:pathMatch(.*)*', component: () => import('../public/pages/notfound-page/notfound-page.component.vue') }
    ]
})

export default router
