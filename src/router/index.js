import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import indexMain from '@/components/indexMain'
import homeMain from '@/components/oaHome/homeMain'
import dataCorePage from '@/components/oaDataCore/dataCorePage'
import workAreaPage from '@/components/oaWorkArea/workAreaPage'
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    // {
    //   path:'/',
    //   redirect:'indexMain'
    // },
    {
      path: '/login',
      name: 'login',
      component:login
    },
    {
      path: '/',
      name: 'indexMain',
      component: indexMain,
      children:[
        {
          path: '/',
          name: 'homeMain',
          component:homeMain
        },
        {
          path: 'dataCorePage',
          name: 'dataCorePage',
          component:dataCorePage
        },
        {
          path: 'workAreaPage',
          name: 'workAreaPage',
          component:workAreaPage
        }
      ]
    },
  ]
})
