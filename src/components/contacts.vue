<template lang="html">
  <div id="friends">
    <ul>
      <li v-for='(friend, index) in friends' @click='checkProfile(index)'>
        <div class="user-pic">
          <img :src="friend.image" :alt="friend.name" width="40" height="40">
        </div>
        <p class="user-name">{{ friend.name }}</p>
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
      friends: 'filterContacts'
    })
  },
  methods: {
    checkProfile (index) {
      this.$store.dispatch('checkAccount', index)
    }
  }
}
</script>

<style lang="css" scoped>
#friends {
  overflow: auto;
}
 #friends ul li {
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
