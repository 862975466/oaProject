<template>
  <div class="home-main">
    <el-row :gutter="20">
      <el-col :span="6"><div class="mian-wrap"></div></el-col>
      <el-col :span="12"><div class="mian-wrap"></div></el-col>
      <el-col :span="6"><div class="mian-wrap"></div></el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="8"><div class="mian-wrap"></div></el-col>
      <el-col :span="8"><div class="mian-wrap"></div></el-col>
      <el-col :span="8"><div class="mian-wrap"></div></el-col>
    </el-row>
  </div>
</template>

<script>
  import mockJs from '../../mock/mock'
  import { getNoticelist } from '@/request/api';// 导入我们的api接口
  export default {
    name: "home-main",
    data(){
      return{
      }
    },
    mounted(){
      this.getNoticelistFun();
    },
    methods:{
      //公告
      getNoticelistFun(){
        let param = {
          pagesize: 0,
          curpage: 0
        };
        getNoticelist(param).then((res)=>{
          console.log("res=="+JSON.stringify(res));
        });
      },
    }
  }
</script>

<style scoped>
  .mian-wrap{
    width: 100%;
    height: 300px;
    background-color: #ffffff;
    border-radius: 10px;
  }
</style>
