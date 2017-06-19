
export default {
  SELECT_TAB (state, name) {
    state.selectTab = name
  },
  SELECT_SESSION (state, index) {
    state.chatSelected = index
  },
  SEARCH_KEY (state, word) {
    state.searchKey = word
  },
  UPDATE_MESSAGES (state, message) {
    state.current_chat[state.chatSelected].messages.push(message)
  },
  SELECT_ACCOUNT (state, index) {
    state.selectedAccount = index
  },
  SELECT_ARTICLE (state, index) {
    state.selectedArticle = index
  },
  SELECT_CONTACT (state, index) {
    state.selectedContact = index
  },
  ADD_NEWCHAT (state, obj) {
    state.current_chat.unshift(obj)
  }
}
