<template>
  <div class="login">
    <div class="login-mian">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="user">
          <el-input v-model="ruleForm.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input v-model="ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')" style="float: right">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import { userLogin } from '@/request/api'; // 导入我们的api接口
  export default {
    name: "login",
    data(){
      return{
        ruleForm:{
          user:'',
          pass:'',
        },
        rules:{
          user: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
          ],
          pass:[
            {required: true, message: '请输入活动名称', trigger: 'blur'},
          ]
        },
        radio:'1'
      }
    },
    methods:{
      submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            userLogin(this.ruleForm).then(res => {
              alert("返回"+JSON.stringify(res));
            })
          } else {
            console.log('error submit!!');
            return false;
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
    background: url("../assets/img/login.jpg");
  }
  .login-mian{
    width: 350px;
    height: 200px;
    padding:20px 15px;
    padding-right: 25px;
    padding-top: 35px;
    box-sizing: content-box;
    border-radius: 5px;
    box-shadow: 0px 0px 8px 0px #eeeeee;
    background-color: #5dafab;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -175px;
    margin-top: -165px;
  }
</style>
