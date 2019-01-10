import Vue from 'vue'
import Router from 'vue-router'
import homeMain from '../components/oaHome/homeMain'
import login from '../login/login'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/homeMain',
      name: 'homeMain',
      component: homeMain
    }
  ]
})
