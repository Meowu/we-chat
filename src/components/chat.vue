<template lang="html">
  <div id="chat-box">
    <h3>{{ current.name }}</h3>
    <div id="timeline">
      <ul>
        <li v-for="message in current.messages" :class="message.self?'sent':'recieved'">
          <p class="send-time">{{ message.date }}</p>
          <div class="user-pic">
            <img :src="message.self?loginUser.image:current.image" :alt="current.name" width="40" height="40">
          </div>
          <div class="content">
            <span class="user-name" v-if='!message.self'>{{ current.name }}</span>
            <p>{{ message.content }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="tool">
      <i class="fa fa-smile-o" aria-hidden="true"></i>
      <i class="fa fa-scissors" aria-hidden="true"></i>
      <i class="fa fa-folder-o" aria-hidden="true"></i>
    </div>
    <div class="input-box">
      <!-- 组合键盘发生按钮 -->
      <textarea @keyup.ctrl.13='sendMessage' value='' v-model='readyMessage'></textarea>
      <p><span>按下Ctrl+Enter发送消息</span><button type="button" @click.prevent='sendMessage'>发送</button></p>
    </div>
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex'
export default {
  data () {
    return {
      readyMessage: ''
    }
  },
  computed: {
    current () {
      return this.$store.getters.currentSession
    },
    loginUser () {
      return this.$store.state.user
    },
    currentIndex () {
      return this.store.state.chatSelected
    },
    sessions () {
      return this.store.state.current_chat
    }
    // current_chat
  },
  methods: {
    sendMessage () {
      if (!this.readyMessage) return // 输入为空则什么也不干
      const addMsg = {}
      addMsg.content = this.readyMessage
      let now = new Date()
      let sendTime = `${now.getHours()}: ${now.getMinutes()}`
      addMsg.date = sendTime
      addMsg.self = true
      // 把新消息添加到store，消息面板会自动更新，这样体现了Vue响应式的好处。
      this.$store.dispatch('addMessage', addMsg)
      this.readyMessage = ''
      // 发送消息后滚动到底部
      const list = document.querySelector('#timeline')
      // this.$nextTick()方法接收一个回调作为参数，更新DOM后执行。
      this.$nextTick(function () {
        list.scrollTop = list.scrollHeight - list.clientHeight
      })
    }
  }
}
</script>

<style lang="css" scoped>
#chat-box{
  height: 640px;
  background-color: rgb(238, 238, 238);
  padding: 15px;
  overflow: auto;
}
h3{
  height: 30px;
  width: 100%;
  text-align: center;
  font-weight: lighter;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
}
#timeline{
  height: 420px;
  overflow: auto;
  padding-bottom: 30px;
}
#timeline ul li {
  list-style-type: none;
  width: 100%;
  overflow: hidden;
}
p.send-time{
  text-align: center;
  font-size: 12px;
  padding: 10px 0;
  color: #b5b5b5;
}
.recieved .user-pic, .recieved .content{
  display: inline-block;
  vertical-align: top;
  padding-right: 10px;
}
.recieved .content{
  width: 500px;
}
.recieved .user-pic img {
  border-radius: 3px;
}
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb {
  -webkit-border-radius: 3px;
  background-color: #ccc;
  height: 10px;
}
.recieved .content .user-name{
  display: block;
  font-size: 12px;
  color: #b5b5b5;
  /*display: inline;*/
}
.recieved .content p{
  position: relative;
  background-color: #fff;
  padding: 10px;
  border-radius: 3px;
  font-size: 14px;
  word-wrap: break-word;
  color: #444;
  display: inline-block;
}
.recieved .content p:before{
  content: ' ';
  position: absolute;
  border: 5px solid transparent;
  border-right-color: #fff;
  top: 15px;
  right: 100%;
}
div.tool{
  height: 40px;
  padding: 10px 0;
  border-top: 1px solid #ccc;
}
div.tool i{
  cursor: pointer;
  font-size: 25px;
  font-weight: 100;
  color: #777;
  margin-left: 20px;
}
div.tool i:nth-of-type(2){
  transform: rotate(270deg);
}
div textarea{
  /*禁止拖拽*/
  resize: none;
  height: 70px;
  width: 100%;
  background-color: rgb(238, 238, 238);
  border: none;
  outline: none;
  padding: 5px 0 0 20px;
  font-size: 18px;
}
.input-box{
  text-align: right;
  padding: 0 10px 10px 0;
}
.input-box p span {
  font-size: 12px;
  color: #aaa;
  font-weight: bold;
}
.input-box p button{
  font-size: 14px;
  padding: 5px 35px;
  margin-left:10px;
  background: #fff;
  color: #666;
  border: 1px solid #aaa;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
}
.sent .user-pic, .sent .content{
  float: right;
  vertical-align: top;
  padding-right: 10px;
}
.sent .content{
  max-width: 500px;
}
.sent .user-pic img {
  border-radius: 3px;
}
.sent .content .user-name{
  display: block;
  font-size: 12px;
  color: #b5b5b5;
  /*display: inline;*/
}
.sent .content p{
  position: relative;
  background-color: rgb(178, 226, 129);
  padding: 10px;
  border-radius: 3px;
  font-size: 14px;
  word-wrap: break-word;
  color: #000;
  display: inline-block;
}
.sent .content p:after{
  content: ' ';
  position: absolute;
  border: 5px solid transparent;
  border-left-color: rgb(178, 226, 129);
  top: 15px;
  left: 100%;
}
.input-box p button:hover{background: #eee;}
</style>
