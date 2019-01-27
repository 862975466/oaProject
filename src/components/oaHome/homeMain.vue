<template>
  <div class="home-main">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="mian-wrap">
         <news-assembly :propsDataObj="noticeList" @newsAssemblyChild="newsAssemblyChildFun"></news-assembly>
       </div>
      </el-col>
      <el-col :span="12">
        <div class="mian-wrap">
          <el-row class="user-quick">
            <el-col :span="8" v-for="imet in userQuickData" @click.native="$router.push({path:imet.path})">
              <p class="icon-class"><i class="iconfont" :class="imet.icon"></i></p>
              <div class="text">
                <p>{{imet.title}}</p>
                <p>{{imet.titleEg}}</p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="mian-wrap">
          <calendar-affair></calendar-affair>
        </div>
      </el-col>
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
        <div class="mian-wrap" style="overflow: hidden">
          <div class="new-title-wrap">
            <span class="new-title">事务统计</span>
            <span class="new-mode">更多</span>
          </div>
          <div style="width:250px;margin-top:-45px;margin-left:65px;overflow:hidden;float: left;">
            <chart-page :chartPageObjBoChild="chartPageObjBo"></chart-page>
          </div>
          <div class="chart-text">
            <p v-for="imet in chartPageObjBo.donutData">{{imet.label}}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import NewsAssembly from '../assemblyChildren/NewsAssembly'
  import CalendarAffair from '../assemblyChildren/CalendarAffair'
  import chartPage from '../chartAssembly/chartPage'
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
        stayWorkList:{},
        //图表数据
        chartPageObjBo:{
          donutData: [
            { label: '公告', value: 80 },
            { label: '在办工作', value: 50 },
            { label: '待办工作', value: 5 }
          ],
          colors:["#FF6384", "#36A2EB", "#FFCE56" ],
        },
        userQuickData:[
          {
            path:'/dataCorePage',
            icon:'icon-gonggao',
            title:'发起公告',
            titleEg:'INITIATION NOTICE'
          },
          {
            path:'/dataCorePage',
            icon:'icon-shengpi',
            title:'发起审批',
            titleEg:'INITIATION PROCESS'
          },
          {
            path:'/dataCorePage',
            icon:'icon-gerenzhongxin',
            title:'个人中心',
            titleEg:'PERSONAL CENTER'
          }
        ]
      }
    },
    mounted(){
      this.getNoticelistFun();
      this.getNowWorklistFun();
      this.getStayWorklistFun();
    },
    components:{
      NewsAssembly,
      chartPage,
      CalendarAffair
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
  .user-quick{
    padding-top: 5%;
    cursor: pointer;
    text-align: center;
  }
  .user-quick .icon-class{
    width: 155px;
    height: 155px;
    line-height: 155px;
    display:inline-block;
    text-align: center;
    border-radius: 50%;
    background-color: #e9eef3;
  }
  .user-quick .icon-class i{
    font-size: 60px;
    color: #38b48b;
  }
  .user-quick .text{
    margin-top: 5px;
  }
  .user-quick .text p:first-child{
    color: #474747;
    font-size: 27px;
  }
  .user-quick .text p:last-child{
    color: #979797;
    font-size: 14px;
  }
  .new-title-wrap {
    width: 100%;
    height: 45px;
    line-height: 45px;
    padding: 0px 15px;
    cursor: pointer;
    border-bottom: 1px solid #EEEEEE;
    position: relative;
  }
  .new-title {
    color: #606F94;
    font-size: 16px;
    font-weight: bold;
  }
  .new-mode {
    width: 50px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
    color: #38b48b;
    border-radius: 17px;
    border: 1px solid #38b48b;
    position: absolute;
    top: 10px;
    right: 15px;
  }
  .chart-text{
    margin-top: 55px;
    float: left;
  }
  .chart-text p {
    margin-left: 15px;
    font-size: 16px;
    line-height: 30px;
  }
  .chart-text p:nth-child(1){
    color: #FF6384;
  }
  .chart-text p:nth-child(2){
    color: #36A2EB;
  }
  .chart-text p:nth-child(3){
    color: #FFCE56;
  }
  .chart-text p:before{
    content: '';
    width: 8px;
    height: 8px;
    margin-top: 12px;
    margin-right: 10px;
    float: left;
    color: currentColor;
    background-color: currentColor;
  }
</style>
