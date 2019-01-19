<template>
  <div class="login">
    <div class="login-mian">
      <div style="text-align: center;margin-bottom: 15px">
        <img src="../../assets/img/logo.png" style="width: 86px"/>
      </div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" placeholder="请输入用户名" autocomplete="on"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" placeholder="请输入密码" autocomplete="on" type="password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
        </el-form-item>
        <p style="cursor: pointer;text-align: right;margin-bottom: 15px">忘记密码</p>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="float: right">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'
  import { userLogin } from '@/request/api'; // 导入我们的api接口
  export default {
    name: "login",
    data(){
      return{
        ruleForm:{
          username:'',
          password:'',
        },
        rules:{
          username: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
          ],
          password:[
            {required: true, message: '请输入活动名称', trigger: 'blur'},
          ]
        },
        radio:'1'
      }
    },
    methods:{
      submitForm(formName){
        var param = {
          username:this.ruleForm.username,
          password:this.ruleForm.password
        };
        param.accesstoken = "AdminTest"+Date.parse(new Date());
        console.log("param=="+JSON.stringify(param));
        Axios.get('api/login',param).then((response)=> {
          console.log("response=="+JSON.stringify(response));
          if(response.data.code == 200){
            this.$store.commit('delAccesstoken',response.data);
            this.$router.push({name: 'indexMain'});
          }
        });
      }
    }
  }
</script>

<style scoped>
  .login{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background: url("../../assets/img/login.jpg");
  }
  .login-mian{
    width: 300px;
    height: 350px;
    background:rgba(255,255,255,0.5);
    padding:15px 10px;
    padding-right: 25px;
    padding-top: 35px;
    box-sizing: content-box;
    border-radius: 5px;
    box-shadow: 0px 0px 8px 0px #eeeeee;
    border: solid 2px #5dafab;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -175px;
    margin-top: -250px;
  }
</style>
