<template>
    <div id="cesiumContainer">
        第一个cesium地图
    </div>
</template>
<script setup lang="ts">
import * as Cesium from 'cesium'
import { onMounted, reactive, ref } from 'vue'
const TDTTK = '9337647a52919b1dd3bc009c730b07a7'
const viewer = ref()
const state = reactive({
})
const initCesium = () => {
    viewer.value = new Cesium.Viewer('cesiumContainer',)
    var camera = viewer.value.camera;
    var scene = viewer.value.scene;
    camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(-74.01881302800248, 40.69114333714821, 2000),
        orientation: {
            heading: Cesium.Math.toRadians(0),
            pitch: Cesium.Math.toRadians(-45),
            roll: Cesium.Math.toRadians(0)
        }
    });
    scene.globe.enableLighting = true;
    scene.skyBox.show = false;
    // window.viewer = new Cesium.Viewer('cesiumContainer', {
    //     baseLayerPicker: true, // 如果设置为false，将不会创建右上角图层按钮。
    //     geocoder: true, // 如果设置为false，将不会创建右上角查询(放大镜)按钮。
    //     navigationHelpButton: true, // 如果设置为false，则不会创建右上角帮助(问号)按钮。
    //     homeButton: true, // 如果设置为false，将不会创建右上角主页(房子)按钮。
    //     sceneModePicker: true, // 如果设置为false，将不会创建右上角投影方式控件(显示二三维切换按钮)。
    //     animation: true, // 如果设置为false，将不会创建左下角动画小部件。
    //     timeline: true, // 如果设置为false，则不会创建正下方时间轴小部件。
    //     fullscreenButton: true, // 如果设置为false，将不会创建右下角全屏按钮。
    //     scene3DOnly: false, // 为 true 时，每个几何实例将仅以3D渲染以节省GPU内存。
    //     shouldAnimate: true, // 默认true ，否则为 false 。此选项优先于设置 Viewer＃clockViewModel 。
    //     // ps. Viewer＃clockViewModel 是用于控制当前时间的时钟视图模型。我们这里用不到时钟，就把shouldAnimate设为false
    //     infoBox: true, // 是否显示点击要素之后显示的信息
    //     sceneMode: 3, // 初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  this.Cesium.SceneMode
    //     requestRenderMode: false, // 启用请求渲染模式，不需要渲染，节约资源吧
    //     // 地图影像这里选择的是天地图
    //     imageryProvider: new Cesium.UrlTemplateImageryProvider({
    //       url: `https://t4.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILECOL={x}&TILEROW={y}&TILEMATRIX={z}&tk=${TDTTK}`,
    //       maximumLevel: 18,
    //     }),
    //     selectionIndicator: false, // 关闭绿色选择框
    // })

    // window.viewer._cesiumWidget._creditContainer.style.display = 'none' //去除cesium按钮
    // window.viewer.scene.globe.depthTestAgainstTerrain = true
}

onMounted(() => {
    initCesium()
})
</script>
<style lang="scss" scoped>
#cesiumContainer{
    width: 100%;
    height: 100%;
}
</style>