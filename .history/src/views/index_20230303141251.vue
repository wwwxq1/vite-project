<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
})
</script>
<template>
  <div class="proinsa">
    <div class="proinsa-head">
      这是统一头部
    </div>
    <div class="proinsa-content">
      <router-view></router-view>
    </div>
  </div>
      <!-- <router-link to="/indexone" >跳没数据的页面</router-link> -->
</template>
<style lang="scss" scoped>
.proinsa{
  width: 100%;
  height: 100%;
  .proinsa-head{
    width: 100%;
    height: 200px;
  }
  .proinsa-content{
    width: 100%;
    height: calc(100% - 200px);
  }
}
</style>