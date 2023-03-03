import { createRouter, createWebHashHistory } from 'vue-router'

const routes: any = [
    {
        path: '/',
        redirect: { name: 'homeUimsp' },
        component: () => import('@/components'),
    },
]
export default createRouter({
    history: createWebHashHistory(),

    routes: routes
})