
export default {
  toggleMain ({commit}, tab) {
    commit('SELECT_TAB', tab)
  },
  selectSession ({commit}, index) {
    commit('SELECT_SESSION', index)
  },
  searchWord ({commit}, word) {
    commit('SEARCH_KEY', word)
  },
  addMessage ({commit}, message) {
    commit('UPDATE_MESSAGES', message)
  },
  changeAccount ({commit}, index) {
    commit('SELECT_ACCOUNT', index)
  },
  changeArticle ({commit}, index) {
    commit('SELECT_ARTICLE', index)
  },
  checkAccount ({commit}, index) {
    commit('SELECT_CONTACT', index)
  },
  addChat ({commit}, obj) {
    commit('ADD_NEWCHAT', obj)
  }
}
