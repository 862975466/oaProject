import Vue from 'vue'
import Router from 'vue-router'
import homeMain from '../components/oaHome/homeMain'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'homeMain',
      component: homeMain
    }
  ]
})
