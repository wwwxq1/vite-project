import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import '@/styles/index.scss'
import * as Cesium from 'cesium'

const app = createApp(App)
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlOTgyNDZkNy1lYWQ4LTRkNDYtODhiYy1hY2I0OTFmMTU3NjEiLCJpZCI6MTI3MTE4LCJpYXQiOjE2Nzc4MjI2NjV9.osWpHYyhn82nwoZWt3aYeXRKeNoMh2xoNitHszE07QM'
app.config.globalProperties.$Cesium = Cesium
app.use(router)
app.use(store)
app.mount('#app')
