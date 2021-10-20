export default {
  namespaced: true,
  state: {
    name: 'Vuex实例',
    age: 26,
    title: '剧毒'
  },
  mutations: {
    setSetting (state, payload) {
      state.title = payload
    }
  }
}