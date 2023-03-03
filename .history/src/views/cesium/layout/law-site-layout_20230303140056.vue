<template>
    <div class="magacesiummap-content">
        <div class="haedium">
            cesium地图
        </div>
        <div class="consgyams">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.magacesiummap-content{
    width: 100%;
    height: 100%;
}
.haedium{
    width: 100%;
    height: 200px;
}
.consgyams{
    height: calc(100% - 200px);
    border: 1px solid red;
}
</style>