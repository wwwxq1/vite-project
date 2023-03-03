import { createRouter, createWebHashHistory } from 'vue-router'

const routes: any = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/index.vue'),
    },
    {
        path: '/indexone',
        name: 'indexone',
        component: () => import('@/views/indexone.vue'),
    },
]
export default createRouter({
    history: createWebHashHistory(),

    routes: routes
})