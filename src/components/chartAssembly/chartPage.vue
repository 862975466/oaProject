<template>
  <div class="chart-page">
    <donut-chart
      id="donut"
      :data="donutData"
      colors='[ "#FF6384", "#36A2EB", "#FFCE56" ]'
      resize="true">
    </donut-chart>
  </div>
</template>

<script>
  import $ from 'jquery'
  import Raphael from 'raphael/raphael'
  global.Raphael = Raphael;
  import { DonutChart } from 'vue-morris'
  export default {
    name: "chart-page",
    data(){
      return{
        donutData: [
          { label: '公告', value: 80 },
          { label: '在办工作', value: 50 },
          { label: '待办工作', value: 5 }
        ],
      }
    },
    components:{
      DonutChart,
    }
  }
</script>

<style scoped>
.chart-page{
  width: 100%;
}
</style>
