import { createRouter, createWebHashHistory } from 'vue-router'

const routes: any = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/index.vue'),
    },
]
export default createRouter({
    history: createWebHashHistory(),

    routes: routes
})