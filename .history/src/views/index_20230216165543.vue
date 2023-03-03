<script setup lang="ts">
import { reactive } from "@vue/reactivity";
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
    <div class="systemMonitoring-serviceMonitoring">
      <div class="cpu-neic">
        <div class="cpu-content">
          <div class="name-tile">CPU</div>
          <el-table :data="state.tableData" border :header-cell-style="{ color: '#004EB3' }" style="width: 100%">
            <el-table-column prop="date" align="center" label="属性" />
            <el-table-column prop="name" align="center" label="值" />
          </el-table>
        </div>
        <div class="neic-content">
          <div class="name-tile">内存</div>
          <el-table :data="state.tableData" border :header-cell-style="{ color: '#004EB3' }" style="width: 100%">
            <el-table-column prop="date" align="center" label="属性" />
            <el-table-column prop="name" align="center" label="内存" />
            <el-table-column prop="address" align="center" label="JVM" />
          </el-table>
        </div>
      </div>
      <el-card class="box-card" shadow="never">
        <template #header>
          <div class="card-header">
            <span>服务器信息</span>
          </div>
        </template>
        <div>
          <el-row class="elrowone">
            <el-col :offset="1" :span="7" >
              <span>服务器名称：3c2acf84c008</span>
            </el-col>
            <el-col :offset="1" :span="7">
              <span>操作系统：Linux</span>
            </el-col>
            <el-col :offset="1" :span="7">
              <span>服务器IP：172.17.0.4</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="1" :span="7" >
              <span>系统架构：amd64</span>
            </el-col>
            <el-col :offset="1" :span="7">
              <span>运行时间（天）：44</span>
            </el-col>
            <el-col :offset="1" :span="7">
              <span>使用内存：2.27M</span>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <el-card class="box-card" shadow="never">
        <template #header>
          <div class="card-header">
            <span>Java虚拟机信息</span>
          </div>
        </template>
        <div>
          <el-row class="elrowone">
            <el-col :offset="1" :span="7" >
              <span>Java名称：OpenJDK 64-Bite Server VM</span>
            </el-col>
            <el-col :offset="1" :span="7">
              <span>Java版本：1.8.0—312</span>
            </el-col>
            <el-col :offset="1" :span="7">
              <span>启动时间：2022-12-26 23:01:13</span>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="1" :span="7" >
              <span>运行时长：44天12小时28分钟</span>
            </el-col>
            <el-col :offset="1" :span="7">
              <span>安装路径：/usr/local/openjdk-8</span>
            </el-col>
            <el-col :offset="1" :span="7">
              <span>项目路径：/</span>
            </el-col>
          </el-row>
        </div>
      </el-card>
      <div class="disk-stte">
        <div class="disk-content">
          <div class="name-tile">磁盘状态</div>
          <el-table :data="state.diskData" border :header-cell-style="{ color: '#004EB3' }" style="width: 100%">
            <el-table-column prop="date" align="center" label="盘符路径" />
            <el-table-column prop="name" align="center" label="文件系统" />
            <el-table-column prop="type" align="center" label="盘符类型" />
            <el-table-column prop="size" align="center" label="总大小" />
            <el-table-column prop="oksize" align="center" label="可用大小" />
            <el-table-column prop="notsize" align="center" label="已用大小" />
            <el-table-column prop="bai" align="center" label="已用百分比" />
          </el-table>
        </div>
      </div>
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