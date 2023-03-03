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
</template>
<style lang="scss" scoped>
.proinsa{
  width: 100%;
  height: 100%;
  .proinsa-head{
    width: 100%;
    height: 100px;
    border: 1px solid red;
  }
  .proinsa-content{
    width: 100%;
    height: calc(100% - 100px);
    border: 1px solid red;
  }
}
</style>