<template>
  <div class="home-main">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="mian-wrap">
         <news-assembly :propsDataObj="noticeList" @newsAssemblyChild="newsAssemblyChildFun"></news-assembly>
       </div>
      </el-col>
      <el-col :span="12"><div class="mian-wrap"></div></el-col>
      <el-col :span="6"><div class="mian-wrap"></div></el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="8">
        <div class="mian-wrap">
          <news-assembly :propsDataObj="nowWorklList" @newsAssemblyChild="newsAssemblyChildFun"></news-assembly>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="mian-wrap">
          <news-assembly :propsDataObj="stayWorkList" @newsAssemblyChild="newsAssemblyChildFun"></news-assembly>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="mian-wrap">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import NewsAssembly from '../assemblyChildren/NewsAssembly'
  import { getNoticelist } from '@/request/api';// 导入我们的api接口
  export default {
    name: "home-main",
    data(){
      return{
        //公告
        noticeList:{},
        //在办
        nowWorklList:{},
        //待办
        stayWorkList:{}
      }
    },
    mounted(){
      this.getNoticelistFun();
      this.getNowWorklistFun();
      this.getStayWorklistFun();
    },
    components:{
      NewsAssembly
    },
    methods:{
      //公告
      getNoticelistFun(){
        let param = {
          pagesize: 0,
          curpage: 0,
          typeEmit:1
        };
        getNoticelist(param).then((res)=>{
          this.noticeList = res;
          this.noticeList.title = '公告';
          this.noticeList.typeEmit = 1;
          console.log("res=="+JSON.stringify(this.noticeList));
        });
      },
      //在办
      getNowWorklistFun(){
        let param = {
          pagesize: 0,
          curpage: 0,
          typeEmit:2
        };
        getNoticelist(param).then((res)=>{
          this.nowWorklList = res;
          this.nowWorklList.title = '在办工作';
          this.nowWorklList.typeEmit = 2;
          console.log("res=="+JSON.stringify(this.nowWorklList));
        });
      },
      //待办
      getStayWorklistFun(){
        let param = {
          pagesize: 0,
          curpage: 0,
          typeEmit:3
        };
        getNoticelist(param).then((res)=>{
          this.stayWorkList = res;
          this.stayWorkList.title = '待办工作';
          this.stayWorkList.typeEmit = 3;
          console.log("res=="+JSON.stringify(this.stayWorkList));
        });
      },
      //返回
      newsAssemblyChildFun(param){
        if(param.isMode){
          if(param.typeEmit==1){
            alert('公告更多');
          }else if(param.typeEmit==2){
            alert('在办工作');
          }else if(param.typeEmit==3){
            alert('待办工作');
          }
        }else {
          if(param.typeEmit==1){
            alert('公告列表id:'+param.id);
          }else if(param.typeEmit==2){
            alert('在办列表id:'+param.id);
          }else if(param.typeEmit==3){
            alert('待办列表id:'+param.id);
          }
        }
        console.log("param=="+JSON.stringify(param));
      }
    }
  }
</script>

<style scoped>
  .mian-wrap{
    width: 100%;
    height: 300px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 8px 0 #ccc;
  }
</style>
