<template>
  <div class="index-main">
    <el-container style="width:100%;height: 100%; position: absolute;">
      <el-header>
        <div style="padding: 5px 0px;float: left"><img src="../assets/img/logoing.png" style="height: 50px;"></div>
        <ul class="navUl">
          <router-link tag="li" v-for="list in navUlDataArr" :key="list.id" :to="list.path">{{list.name}}</router-link>
        </ul>
      </el-header>
      <el-main>{{this.$store.state.loginUserData}}</el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "index-main",
    data(){
      return{
        navUlDataArr:[
          {
            name:"首页",
            path:"/homeMain",
          },
          {
            name:"数据中心",
            path:"/dataCore",
          },
          {
            name:"工作区",
            path:"/workArea",
          }

        ]
      }
    },
  }
</script>

<style scoped>
  .el-header {
    background-color: #38b48b;
    color: #333;
    line-height: 60px;
  }
  .navUl{
    margin-left: 15%;
    float: left;
  }
  .navUl li{
    width: 120px;
    height: 55px;
    line-height: 55px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    float: left;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>
