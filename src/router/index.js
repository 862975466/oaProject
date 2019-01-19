import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import indexMain from '@/components/indexMain'
import homeMain from '@/components/oaHome/homeMain'
import dataCorePage from '@/components/oaDataCore/dataCorePage'
import oaWorkArea from '@/components/oaWorkArea/workAreaPage'
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
    },
    {
      path: '/indexMain',
      name: 'indexMain',
      component: indexMain
    },
    {
      path: '/homeMain',
      name: 'homeMain',
      component:homeMain
    },
    {
      path: '/dataCorePage',
      name: 'dataCorePage',
      component:dataCorePage
    },
    {
      path: '/oaWorkArea',
      name: 'oaWorkArea',
      component:oaWorkArea
    }
  ]
})
