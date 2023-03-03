import CesiumLayout from '@/views/cesium/layout/law-site-layout.vue'

const CesiumRouter = {
    path: '/cesium',
    component: CesiumLayout,
    children: [
        { name:'cesiumOne', path:'/cesiumOne', component: () => import('@/views/cesium/one/index.vue') }
    ],
}

export default CesiumRouter