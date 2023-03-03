<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
  headList:[
    { name:'第一个',value:1 },
    { name:'第二个',value:2 },
    { name:'第三个',value:3 }
  ]
})
</script>
<template>
  <div class="proinsa">
    <div class="proinsa-head">
      这是统一头部
      <div v-for="item in state.headList" :key="item.value">
        <div>{{ item.name }}</div>
      </div>
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
    display: flex;
  }
  .proinsa-content{
    width: 100%;
    height: calc(100% - 100px);
    border: 1px solid red;
  }
}
</style>