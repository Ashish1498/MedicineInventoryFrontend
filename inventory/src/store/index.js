import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwtToken: '',
    username: '',
    password: '',
    cpassword: ''
  },
  getters: {
    getJwtToken (state) {
      return state.jwtToken
    },
    getUsername (state) {
      return state.username
    },
    getPassword (state) {
      return state.password
    },
    getCPassword (state) {
      return state.cpassword
    }
  },
  mutations: {
    setToken (state, value) {
      state.jwtToken = value
    },
    setUsername (state, value) {
      state.username = value
    },
    setPassword (state, value) {
      state.password = value
    },
    setCPassword (state, value) {
      state.cpassword = value
    }
  },
  actions: {
    setJwtTokenAction ({ commit }, obj) {
      commit('setJwtToken', obj.jwtToken)
      const axiosConfig = {
        url: '/login',
        method: 'Post',
        BASE_URL: 'http://10.177.68.30:8080/',
        data: {
          username: this.state.username,
          password: this.state.password
        }
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e)
        })
        .catch((e) => console.log(e))
    },
    login ({ commit }, obj) {
      const axiosConfig = {
        url: '/login',
        method: 'Post',
        baseURL: 'http://10.177.68.30:8080/',
        data: {
          username: obj.username,
          password: obj.password
        }
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e)
          const jwt = e.data.jwt
          commit('setJwtToken', obj.jwtToken)
          localStorage.setItem('JWT_TOKEN', jwt)
        })
        .catch((e) => console.log('No accesss'))
    }
  }
})
