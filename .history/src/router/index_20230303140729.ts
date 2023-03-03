import { createRouter, createWebHashHistory } from 'vue-router'
import CesiumRouter from './modules/dum-cesium'

const routes: any = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/index.vue'),
        children: CesiumRouter,
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