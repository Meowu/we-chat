<template lang="html">
  <div id="article">
    <header id="account-name">
      <h5>{{ accounts[accountNum].name }}</h5>
    </header>
    <div id="article-main">
      <h1> {{ accounts[accountNum].articles[articleNum].title}} </h1>
      <h5>
        <span class="date">{{accounts[accountNum].pushTime}}</span>
        <span class="author">{{accounts[accountNum].articles[articleNum].author}}</span>
        <span class="account"><a href="#">{{accounts[accountNum].name}}</a></span>
      </h5>
      <div class="article-content">
        <div class="article-image">
          <img :src="accounts[accountNum].articles[articleNum].image" alt="">
        </div>
        {{ accounts[accountNum].articles[articleNum].content }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      accounts: state => state.official_accounts,
      articleNum: state => state.selectedArticle,
      accountNum: state => state.selectedAccount
    })
  }
}
</script>

<style lang="css" scoped>
 #article {
   height: 100%;
   width: 100%;
   background-color:#fff;
 }
 header h5 {
   text-align: center;
   border-bottom: 1px solid #ccc;
   padding: 20px 0;
   background-color: rgb(238, 238, 238);
 }
 h1 {
   line-height: 1.5;
 }
 #article-main{
   color: #333;
   padding: 20px;
   overflow: hidden;
 }
 #article-main h5 {
   margin: 10px;
 }
 #article-main span {
   font-size: 14px;
   font-weight: lighter;
   color: #aaa;
   margin-right: 10px;
 }

</style>
