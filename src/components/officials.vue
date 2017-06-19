<template lang="html">
  <div id="account-list">
    <!-- 在v-for中直接就可以获得文章和账号的索引 -->
    <div class="accounts" v-for="(account, index) in official_accounts" @click="selectAccount(index)">
      <div class="account-info">
        <img :src="account.image" :alt="account.name" :style='accountImage' class="account-image">
        <span class="account-name">{{ account.name }}</span>
        <span class="push-time">{{ account.pushTime }}</span>
      </div>
      <ul class="article-list">
        <li v-for="(article, index) in account.articles" @click="selectArticle(index)">
          <p class="article-title"> {{ article.title }}</p>
          <p class="article-image"><img :src="article.image" alt="" :style='articleImage'></p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      accountImage: {
        width: '20px',
        height: '20px',
        'border-radius': '50%'
      },
      articleImage: {
        width: '40px',
        height: '40px',
        'border-radius': '3px'
      }
    }
  },
  computed: {
    ...mapState({
      official_accounts: state => state.official_accounts
    })
  },
  methods: {
    selectAccount (index) {
      this.$store.dispatch('changeAccount', index)
    },
    selectArticle (index) {
      this.$store.dispatch('changeArticle', index)
    }
  }
}
</script>

<style lang="css" scoped>
  #account-list{
    overflow: auto;
    height: 500px;
    /*overflow: hidden;*/
    background-color: rgb(38, 41, 46);
  }
  .account-info {
    padding: 10px 15px 5px 15px;
  }
  .account-name, .account-image {
    /* 两个行内元素同时设置，可以垂直居中 */
    vertical-align: middle;
  }
  .accounts {
    margin-bottom: 10px;
    background-color: rgb(47, 50, 57);
  }
  .accounts:last-of-type {
    margin: 0;
  }
  .account-info span {
    margin-left: 10px;
    color: #999;
    font-size: 12px;
    vertical-align: middle;
  }
  .article-list{
    padding: 10px 15px 5px 15px;
  }
  .article-list li {
    cursor: pointer;
    list-style-type: none;
    border-bottom: 1px solid rgb(41, 44, 51);
    padding: 10px 0;
  }
  .push-time {float: right;}
  .article-list li:last-of-type {border: none;}
  .article-list .article-title{
    width: 195px;
    font-size: 12px;
    color: #ebe5e5;
    font-weight: bold;
  }
  .article-title, .article-image {
    display: inline-block;
    vertical-align: top;
    line-height: 1.5;
  }
</style>
