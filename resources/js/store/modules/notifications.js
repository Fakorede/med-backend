export const notifications = {
  namespaced: true,
  state: {
    all: [],
    read: [],
    unread: [],
  },

  mutations: {
    setAll: (state, payload) => state.all = payload,
    setRead: (state, payload) => state.read = payload,
    setUnread: (state, payload) => state.unread = payload,
    removeMarked: (state, payload) => state.unread = state.unread.filter(u => u.id !== payload)
  },

  actions: {
    async getNotifications({commit}, payload) {
      try {
        const response = await axios.get(`/api/notifications/${payload}`, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('sserpxe_cigam')}` }
        })

        if (payload == 'read') {
          commit('setRead', response.data)
        } else if (payload == 'unread') {
          commit('setUnread', response.data)
        } else {
          commit('setAll', response.data)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async markAsRead({commit}, payload) {
      try {
        const response = await axios.put(`/api/notifications/${payload}`, {}, {
          headers: { 'Authorization': `Bearer ${localStorage.getItem('sserpxe_cigam')}` }
        })
        if (response.status === 200) {
          commit('removeMarked', payload)
          return response.data.message
        }
      } catch (error) {
        console.log(error)
      }
    }
  },

  getters: {
    all: state => state.all,
    read: state => state.read,
    unread: state => state.unread,
  },
}