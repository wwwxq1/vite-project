<script setup lang="ts">
import { reactive } from "vue";
const state = reactive({
    tableData:[
        {date: '2016-05-03',name: 'Tom',address: 'No. 189, Grove St, Los Angeles',},
        {date: '2016-05-02',name: 'Tom',address: 'No. 189, Grove St, Los Angeles',},
        {date: '2016-05-04',name: 'Tom',address: 'No. 189, Grove St, Los Angeles',},
        {date: '2016-05-01',name: 'Tom',address: 'No. 189, Grove St, Los Angeles',},
      ],
      diskData:[
        {date: '2016-05-03',name: 'Tom',type:"撒",size:'9999G',oksize:'85',notsize:'55',bai:'95%'},
        {date: '2016-05-02',name: 'Tom',type:"撒",size:'9999G',oksize:'85',notsize:'55',bai:'95%'},
        {date: '2016-05-04',name: 'Tom',type:"撒",size:'9999G',oksize:'85',notsize:'55',bai:'95%'},
        {date: '2016-05-01',name: 'Tom',type:"撒",size:'9999G',oksize:'85',notsize:'55',bai:'95%'},
      ]
})
</script>
<template>
    <!-- 服务监控 -->
    <div>
      <router-link to="/" >跳有数据的页面</router-link>
    </div>
  </template>
  <style lang="scss" scoped>
  .systemMonitoring-serviceMonitoring{
    .el-card{
      margin-top: 40px;
    }
    .cpu-neic{
      display: flex;
      justify-content: space-around;
      padding: 23px 40px;
      background-color: #ffffff;
      .cpu-content{
        width: 48%;
      }
      .neic-content{
        width: 48%;
      }
      .name-tile{
        font-size: 32px;
        height: 60px;
        color: #4A4A4A;
        // margin-bottom: 20px;
      }
    }
    .card-header{
      color: #4A4A4A;
      font-size: 36px;
    }
  
    ::v-deep .el-card__header{
      background-color: #EBEEF3;
      color:  #4A4A4A;
      padding: 12px;
    }
    .el-row{
      margin-bottom: 40px;
    }
    .el-col{
      color: #4A4A4A;
      font-size: 0.95rem;
    }
    .elrowone{
      margin-top: 30px;
    }
    .disk-stte{
      padding: 23px 40px;
      margin-top: 40px;
      background-color: #ffffff;
      .name-tile{
        font-size: 32px;
        height: 60px;
        color: #4A4A4A;
        // margin-bottom: 20px;
      }
    }
  }
  </style>