<template>
  <div class="data-core-page">
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import checkDataFun from '../../api/checkData'
  export default {
    name: "data-core-page",
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        const rules = {
          phone:{
            required: '请输入手机号码',
            tel: '请输入正确的手机号码',
          },
          emailGG:{
            required: '请输入邮箱',
            email:'请输入正确的邮箱',
          },
          shenfwenz:{
            cPCheck:'请输入正确的身份证',
          },
          calCp:{
            required: '车牌号不能为空',
            cPattern:'请输入正确的车牌号',
          },
        };
        const data = {
          phone:'13696998238',
          emailGG:'854222@qq.com',
          shenfwenz:'350622189505043510',
          calCp:'粤B39006',
          testDAta:''
        };
        const checkData = checkDataFun(rules,data);
        console.log('submit!',checkData);
        //console.log('submit!',checkData.methods.email(data.emailGG));
        // if(checkData.state){
        //   this.$message.success(checkData.message);
        // }else {
        //   this.$message.error(checkData.message);
        // }
      }
    }
  }
</script>

<style scoped>

</style>
