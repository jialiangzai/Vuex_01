import Vuex from 'vuex'
import Vue from 'vue'
import user from '../user/user'
import setting from '../setting/setting'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    msg: '你好',
    list: [],
    nameL: '小红'

  },
  actions: {
    getData (context) {
      setTimeout(() => {
        context.commit('setList', [1, 2, 3, 4, 56, 7, 8, 9])
      }, 3000)
    }
  },
  mutations: {
    setCount (state, payload) {
      state.count = state.count + payload
    },
    setList (state, list) {
      state.list = list
    },
    setadds (state, nameL) {
      state.nameL = nameL
    }
  },
  getters: {
    addName (state) {
      return state.nameL = "小刚"
    },
    // 根
    // token: state => state.user.token,
    // setting: state => state.setting.name
  },
  modules: {
    // user模块
    user,
    // setting模块
    setting
  }
})
export default store