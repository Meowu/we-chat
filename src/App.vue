<template>
  <div id="app">
    <div id="side-bar">
      <card></card>
      <nav>
        <ul>
          <li @click="changeMain('session')"><router-link to="/"><i  :class="selectTab=='session'?'fa fa-comment current':'fa fa-comment-o'" aria-hidden="true"></i></router-link></li>
          <li @click="changeMain('official')"><router-link to="/official"><i  :class="selectTab=='official'?'fa fa-file-text current':'fa fa-file-text-o'" aria-hidden="true"></i></router-link></li>
          <li @click="changeMain('contact')"><router-link to="/contact"><i  :class="selectTab=='contact'?'fa fa-user current':'fa fa-user-o' " aria-hidden="true"></i></router-link></li>
        </ul>
      </nav>
      <router-view></router-view>
    </div>
    <div id="main">
      <!-- 根据值来决定渲染哪个页面 只需监听函数把名字作为参数commit即可 -->
      <chat v-if="selectTab === 'session'"></chat>
      <article-detail v-else-if="selectTab === 'official'"></article-detail>
      <profile v-else></profile>
    </div>
  </div>
</template>

<script>
import Card from './components/card'
import Chat from './components/chat'
import Article from './components/article'
// import chat from './components/chat'
// import official from './components/official'
// import contact from './components/contact'
import Profile from './components/profile'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    'card': Card,
    'chat': Chat,
    'article-detail': Article,
    'profile': Profile
  },
  // mapState函数返回的是一个对象
  computed: mapState([
    'selectTab',
    'chatSelected'
  ]),
  methods: {
    changeMain (tab) {
      this.$store.dispatch('toggleMain', tab)
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 980px;
  /*min-width: 800px;*/
  padding-top: 5px;
  height: 640px;
  overflow: hidden;
  /*height: 100%;*/
  margin: 0 auto;
}
  /* 伪类设置滚动条样式*/
  /*::-webkit-scrollbar 滚动条整体部分，可以设置宽度啥的
  ::-webkit-scrollbar-button 滚动条两端的按钮
  ::-webkit-scrollbar-track 外层轨道
  ::-webkit-scrollbar-track-piece 内层轨道，滚动条中间部分（除去）
  ::-webkit-scrollbar-thumb 拖动条，滑块
  ::-webkit-scrollbar-corner 边角
  ::-webkit-resizer 定义右下角拖动块的样式*/
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    -webkit-border-radius: 3px;
    background-color: #ccc;
    height: 10px;
  }
#side-bar {
  border-top-left-radius: 5px;
  width: 280px;
  height: 100%;
  background-color: rgb(46, 50, 56);
  /*border: 1px solid #ccc;*/
  float: left;
}
#main {
  min-width: 600px;
  height: 100%;
}
nav ul {
  height: 40px;
  /*border: 1px solid #ccc;*/
  padding: 2px 0;
  list-style-type: none;
  border-bottom: 1px solid rgb(36, 39, 44);
}
nav ul li {
  line-height: 30px;
  height: 30px;
  width: 90px;
  display: inline-block;
  text-align: center;
  border-left: 1px solid rgb(36, 39, 44);
}
i.current{
  color: #3caf36;
}
nav ul li a{
  display: inline-block;
  width: 100%;
  color: #fff;
  font-size: 25px;
  font-weight: 100;
}
</style>
