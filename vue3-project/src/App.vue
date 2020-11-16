<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="一个 Vue3.0 项目"/>
  <h3 class="title">欢迎，{{username}}</h3>
</template>

<script>
import {
  ref,
  onMounted,
  defineComponent,
} from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const receiveMessage = (updateUsername) => {

  const receiveMsgHandler = ({ data }) => {
    if (data?.source !== 'main') {
      return
    }
    console.log('Vue3 received: ', data)
    updateUsername(data?.username)
  }

  onMounted(() => {
    console.log('Vue3: Listening message from main...')
    window.addEventListener('message', receiveMsgHandler)
  })
}

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const username = ref('')
    console.log('username', username)

    const updateUsername = (val) => {
      username.value = val
    }

    receiveMessage(updateUsername)

    window.localStorage.setItem('item', 'test')

    return {
      username,
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title {
  color: red;
}
</style>
