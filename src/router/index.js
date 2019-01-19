import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import indexMain from '@/components/indexMain'
import dataCorePage from '@/components/oaDataCore/dataCorePage'
import oaWorkArea from '@/components/oaWorkArea/workAreaPage'
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/indexMain',
      name: 'indexMain',
      component: indexMain
    },
    {
      path: '/dataCorePage',
      name: 'dataCorePage',
      component: dataCorePage
    },
    {
      path: '/oaWorkArea',
      name: 'oaWorkArea',
      component: oaWorkArea
    }
  ]
})
