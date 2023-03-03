import { createRouter, createWebHashHistory } from 'vue-router'

const routes: any = [
    {
        path: '/',
        redirect: { name: 'homeUimsp' },
        component: () => import('@/views/index.vue'),
    },
]
export default createRouter({
    history: createWebHashHistory(),

    routes: routes
})