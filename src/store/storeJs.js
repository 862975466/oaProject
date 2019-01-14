import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
//保存数据
const state = {
  accesstoken: ''
};
//修改数据。是方法
const mutations = {
  delAccesstoken(){
    state.accesstoken = '';
  }
};
export default new Vuex.Store({
  state,
  mutations:mutations,
});
