import { loggedIn, logIn, logOut } from '../../config/utils'

export const auth = {
  namespaced: true,
  state: {
    user: null,
    authenticated: loggedIn() || false
  },
  mutations: {
    setUser: (state, payload) => state.user = payload,
    setAuthenticated: (state, payload) => state.authenticated = payload,
  },
  actions: {
    async logIn({dispatch}, payload) {
      logIn()
      dispatch('loadUser', payload)
    },
    async retreiveUser({dispatch}) {
      if(loggedIn()) {
        try {
          const response = await axios.get('/api/user')
          dispatch('loadUser', response.data)
        } catch (error) {
          console.log(error)
        }
      }
    },
    async loadUser({commit}, payload) {
      commit('setAuthenticated', true)
      commit('setUser', payload)
    },
    async logOut({commit}) {
      logOut()

      commit('setUser', null)
      commit('setAuthenticated', false)
      commit('notifications/setAll', [], { root: true })
      commit('notifications/setRead', [], { root: true })
      commit('notifications/setUnread', [], { root: true })
      
    }
  },
  getters: {
    user: state => state.user,
    authenticated: state => state.authenticated,
  }
}