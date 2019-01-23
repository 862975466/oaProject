<template>
  <div class="chart-page">
    <donut-chart
      id="donut"
      :data="chartPageObjBoChild.donutData"
      :colors="chartPageObjBoChild.colors"
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
    props:{
      chartPageObjBoChild:{
        type:Object,
        default:{}
      }
    },
    data(){
      return{
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
