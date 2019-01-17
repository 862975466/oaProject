import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
//保存数据
const state = {
  loginUserData:'',//保存用户登录成功后的数据
};
//修改数据。是方法
const mutations = {
  delAccesstoken(state,msg){
    state.loginUserData = msg;
    localStorage.setItem('loginUserData',JSON.stringify(msg));
  }
};
export default new Vuex.Store({
  state,
  mutations:mutations,
});
