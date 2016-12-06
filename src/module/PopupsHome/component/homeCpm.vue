<template id="home">
  <div class="hello">
    <img src="../../../assets/logo.png" />
    <h1>{{title}}</h1>
    <div class="link">
      <button class="btn btn-info" @click="goPage(jumpUrl)">前往教程学习</button>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'home',
    data () {
      return {
        title: 'Welcome to zhoou Vue.js 2.0 App',
        jumpUrl: '/officialdemo.html'
      }
    },
    methods: {
      goPage (url) {
        let hosts = this.utilHelper.getLocalUrl()
        window.open(hosts + url)
      }
    }
  }
</script>
