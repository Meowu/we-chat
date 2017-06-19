<template lang="html">
  <div id="profile">
    <header>
      <h5>详细信息</h5>
    </header>
    <div id="user-info">
      <div class="user-image">
        <img :src="friends[friendNum].image" :alt="friends[friendNum].name" width="100" height="100">
      </div>
      <h2>{{ friends[friendNum].name }}<i class="fa fa-mars" aria-hidden="true"></i><i class="fa fa-mars" v-show='false' aria-hidden="true"></i></h2>
      <p class="description"> {{ friends[friendNum].description }} </p>
      <p class="alias"><span>备注：</span>{{ friends[friendNum].alias }}</p>
      <p class="region"><span>地区：</span>{{ friends[friendNum].region }}</p>
      <button type="button" @click="sendMsg">发消息</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // friend: friends[0]
    }
  },
  computed: {
    ...mapState({
      friends: state => state.friends,
      friendNum: state => state.selectedContact,
      chats: state => state.current_chat
    })
  },
  methods: {
    sendMsg () {
      let currentId = this.friends[this.friendNum].id
      for (let i in this.chats) {
        if (this.chats[i].id === currentId) {
          this.$store.dispatch('toggleMain', 'session')
          this.$store.dispatch('selectSession', i)
          // router的编程式导航，跳到指定的页面
          // https://router.vuejs.org/zh-cn/essentials/navigation.html
          // 这里让它跳转到聊天当前聊天朋友列表
          this.$router.push('/')
          return
        }
      }
      let obj = this.friends[this.friendNum]
      obj.messages = []
      this.$store.dispatch('toggleMain', 'session')
      this.$store.dispatch('addChat', obj)
      this.$store.dispatch('selectSession', 0)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css" scoped>
#profile{
  background-color: #eeeeee;
  height: 100%;
  width: 100%;
  text-align: center;
}
header h5 {
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
}
#user-info{
  margin-top: 100px;
}
.user-image img{
  border-radius: 3px;
}
#user-info h2 {
  padding: 20px 0;
  font-size: 30px;
  font-weight: lighter;
}
#user-info h2 i {
  margin-left: 5px;
  font-size: 16px;
}
.description {
  font-size: 14px;
  color: #666;
  margin-bottom: 40px;
}
.alias, .region {
  font-size: 12px;
  color: #666;
}
.alias span, .region span {
  margin-right: 10px;
}
#user-info button {
  margin-top: 30px;
  width: 200px;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  color: #eee;
  font-weight: bold;
  cursor: pointer;
  background-color: rgb(66, 172, 62);
}
</style>
