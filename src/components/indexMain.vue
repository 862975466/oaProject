<template>
  <div class="index-main">
    <el-container style="width:100%;height: 100%; position: absolute;">
      <el-header>
        <div style="padding: 7px 0px;float: left"><img src="../assets/img/logoing.png" style="height: 46px;"></div>
        <ul class="navUl">
          <router-link tag="li" v-for="list in navUlDataArr" :key="list.id" :to="list.path">{{list.name}}</router-link>
        </ul>
        <div style="float: right">
          <el-dropdown>
            <p>
              <span class="userNameIcon">{{userName|userNameIcon}}</span>
              <span style="color: #fff;cursor: pointer">{{userName}}</span>
            </p>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人资料</el-dropdown-item>
              <el-dropdown-item>安全设置</el-dropdown-item>
              <el-dropdown-item @click.native="cancelProiect">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: "index-main",
    filters:{
      userNameIcon(userName){
        if(userName.length > 2){
          userName = userName.substring((userName.length-2),(userName.length))
        }
        return userName;
      }
    },
    mounted(){
    },
    data(){
      return{
        navUlDataArr:[
          {
            name:"首页",
            path:"/",
          },
          {
            name:"数据中心",
            path:"/dataCorePage",
          },
          {
            name:"工作区",
            path:"/workAreaPage",
          }

        ]
      }
    },
    computed:{
      userName(){
        let userName = '';
        if(this.$store.state.accesstoken!=""){
          let loginUserData = this.$store.state.loginUserData;
          loginUserData = JSON.parse(loginUserData);
          userName = JSON.parse(JSON.stringify(loginUserData.userName));
        }
        return userName;
      }
    },
    methods:{
      cancelProiect(){
        this.$store.commit('delAccesstoken','',null);
        this.$router.push({path: 'login'});
      }
    }
  }
</script>

<style scoped>
  .el-header {
    height: 60px;
    line-height: 60px;
    background-color: #38b48b;
    color: #333;
  }
  .navUl{
    margin-left: 15%;
    float: left;
  }
  .navUl li{
    width: 120px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    float: left;
    border-bottom: solid 5px #38b48b;
  }
  .userNameIcon{
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    float: left;
    margin-top: 10px;
    margin-right: 5px;
    color: #38b48b;
    border-radius: 50%;
    background-color: #fff;
  }
  .el-main {
    background-color: #E9EEF3;
  }
</style>
