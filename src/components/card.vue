<template lang="html">
  <div id="user-card">
    <!-- 把图片放到static可以解决url绑定问题 -->
    <div class='user-picture'>
      <img :src="user.image" :alt="user.name" width='40' height='40' >
      <p>{{ user.name }}</p>
    </div>
    <div id='search'>
      <i class="fa fa-search" aria-hidden="true"></i><input @keyup='search' type="text" placeholder='搜索'>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'card',
  computed: {
    ...mapState({
      user: state => state.user
    })
  },
  methods: {
    search (e) {
      this.$store.dispatch('searchWord', e.target.value)
    }
  }
}
</script>

<style lang="css" scoped>
 #user-card{
   position: relative;
   height: 110px;
   padding: 15px;
   color: #fff;
 }
 .user-picture img {
   display: inline-block;
   border-radius: 3px;
 }
 .user-picture {
   display: inline-block;
 }
 #user-card p {
   display: inline-block;
   position: relative;
   font-size: 18px;
   bottom: 12px;
   left: 5px;
   height: 30px;
 }
 #search {
   padding: 5px;
   position: relative;
 }
 #search input {
   width: 100%;
   height: 30px;
   border-radius: 3px;
   outline: none;
   color: #fff;
   font-weight: bold;
   font-size: 12px;
   padding-left: 25px;
   background-color: rgb(38, 41, 46);
   border: 0;
 }
 #search i {
   position: absolute;
   color: #ccc;
   top: 10px;
   left: 10px;
 }
</style>
