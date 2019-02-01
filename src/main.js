// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import './assets/font_icon/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store/storeJs'
// 接口封装
import httpJs from './request/http'
// 随机数据生产
import mockJs from '@/mock/mock'
Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  //保存用户登录信息
  created(){
    if(localStorage.getItem('loginUserData')==null){
      localStorage.setItem('loginUserData','');
    }
    let loginUserData = localStorage.getItem('loginUserData');
    loginUserData = JSON.parse(loginUserData);
    this.$store.commit('delAccesstoken',loginUserData);
  },
  template: '<App/>'
})
