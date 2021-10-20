export default {
  namespaced: true,
  state: {
    token: '123456',
    age: 35,
  },
  getters:{
    token: state => state.token,
  },
  mutations: {
    setUser (state, payload) {
      state.age = payload
    }
  }
}