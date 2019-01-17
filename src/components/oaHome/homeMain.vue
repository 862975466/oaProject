<template>
  <div class="home-main1">
    <el-container style="width:100%;height: 100%; position: absolute;">
      <el-header>Header</el-header>
      <el-main>{{this.$store.state.loginUserData}}</el-main>
    </el-container>
  </div>
</template>

<script>
  import mockJs from '../../mock/mock'
  import { apiAddress } from '@/request/api';// 导入我们的api接口
  export default {
    name: "home-main",
    data(){
      return{

      }
    },
    mounted(){
    },
    methods:{
    }

  }
</script>

<style scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
