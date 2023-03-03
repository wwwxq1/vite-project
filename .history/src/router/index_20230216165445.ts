import { createRouter, createWebHashHistory } from 'vue-router'
import index from '@/views/index.vue'

const routes: any = [
    {
        path: '/',
        redirect: { name: 'homeUimsp' },
        component: () => index,
    },
]
export default createRouter({
    history: createWebHashHistory(),

    routes: routes
})