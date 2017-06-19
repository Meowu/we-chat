import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const getters = {
  currentSession: state => {
    return state.current_chat[state.chatSelected]
  },
  // 根据输入的关键词过滤列表
  filterChats: state => { // includes是字符串和数组方法，contains是Node方法。
    return state.current_chat.filter(chat => chat.name.includes(state.searchKey))
  },
  filterContacts: state => {
    return state.friends.filter(friend => friend.name.includes(state.searchKey))
  }
}
export default new Vuex.Store({
  getters: getters,
  state,
  mutations,
  actions
})
