<template>
  <div class="home-main1">
    <el-button @click="loginFun">登陆</el-button>
  </div>
</template>

<script>
  import mockJs from '../../mock/mock'
  import { apiAddress } from '@/request/api';// 导入我们的api接口
  export default {
    name: "home-main",
    methods:{
      loginFun(){
        apiAddress({
          useName: 0,
          passWord: 1
        }).then(res => {
          alert("返回"+JSON.stringify(res));
        })
      }
    }

  }
</script>

<style scoped>

</style>
