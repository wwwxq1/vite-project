import { createRouter, createWebHashHistory } from 'vue-router'
import CesiumRouter from './modules/dum-cesium'

const routes: any = [
    {
        path: '/',
        component: () => import('@/views/index.vue'),
        children: [
            CesiumRouter,
        ],
    },
]
export default createRouter({
    history: createWebHashHistory(),

    routes: routes
})