<template lang="html">
  <div id="session">
    <ul>
      <li v-for='chat in chats'>
        <div class="user-pic">
          <img :src="chat.image" :alt="chat.name" width="40" height="40">
        </div>
        <p class="user-name">{{ chat.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'session',
  computed: {
    ...mapGetters({
      chats: 'filterChats'
    })
  },
  mounted () {
    const list = document.querySelectorAll('#session li')
    for (let i = 0; i < list.length; i++) {
      list[i].onclick = () => {  // 用箭头函数才能获取到this
        this.$store.dispatch('selectSession', i)
      }
    }
  }
}
</script>

<style lang="css" scoped>
 #session {
   overflow: auto;
 }
 #session ul li {
   padding: 10px 20px;
   list-style-type: none;
   border-bottom: 1px solid rgb(41, 44, 51);
   overflow: hidden;
   cursor: pointer;
 }
 .user-pic{
   float: left;
   margin-right: 10px;
 }
 .user-pic img {
   border-radius: 3px;
 }
 p.user-name {
   color: #fff;
   font-size: 14px;
   font-weight: bold;
 }
</style>
