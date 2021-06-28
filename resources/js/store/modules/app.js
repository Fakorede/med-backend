export const app = {
  namespaced: true,
  state: {
    appName: 'Magic Express Delivery',
    logo: '', //require('../../assets/images/logo.png'),
    darklogo: '', //require('../../assets/images/white-logo-2.png'),
    dark: false
  },
  mutations: {
    layoutModeCommit (state, payload) {
      state.dark = payload
      if (!payload) {
        state.logo = '' // require('../../assets/images/logo.png')
      } else {
        state.logo = '' //require('../../assets/images/white-logo.png')
      }
    }
  },
  actions: {
    layoutModeAction (context, payload) {
      context.commit('layoutModeCommit', payload.dark)
    }
  },
  getters: {
    appName: state => { return state.appName },
    logo: state => { return state.logo },
    darklogo: state => { return state.darklogo },
    dark: state => { return state.dark },
  },
}
