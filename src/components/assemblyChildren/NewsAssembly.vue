<template>
   <div class="news-assembly">
     <div class="new-title-wrap">
       <span class="new-title">{{propsDataObj.title}}</span>
       <span class="new-mode" @click="newMode(propsDataObj.typeEmit)">更多</span>
     </div>
     <ul class="new-main-wrap">
       <li v-for="imet in propsDataObj.list" @click="newDetails(imet)" :key="imet.id">
         <span>{{imet.title}}</span>
         <span class="date-time">{{imet.ctime}}</span>
       </li>
     </ul>
   </div>
</template>

<script>
  export default {
    name: "news-assembly",
    props:{
      propsDataObj:{
        type:Object,
        default:{}
      },
    },
    methods:{
      newMode(res){
        const param = {
          typeEmit:res,
          isMode:true,
        };
        this.$emit("newsAssemblyChild",param);
      },
      newDetails(res){
        const param = {
          typeEmit:this.propsDataObj.typeEmit,
          id:res.id,
          isMode:false
        };
        this.$emit("newsAssemblyChild",param);
      }
    }
  }
</script>

<style scoped>
.news-assembly{
  width: 100%;
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
.new-main-wrap {
  width: 100%;
  height: 120px;
  margin-top: 10px;
  display: inline-block;
  padding: 5px 15px;
  padding-right: 110px;
  padding-left: 20px;
  box-sizing: border-box;
  position: relative;
}
li {
  width: 100%;
  height: 32px;
  line-height: 32px;
  color: #606F94;
  cursor: pointer;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.date-time {
  color: #999999;
  position: absolute;
  right: 10px;
}

</style>
