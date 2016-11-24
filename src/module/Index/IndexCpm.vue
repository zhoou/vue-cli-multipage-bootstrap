<template>
  <div id="app" class="container">
    <h1>Vue.js 从入门到精通效果展示</h1>
    <ul class="nav nav-pills" role="tablist">
      <li role="presentation" class="active"><router-link to="/index">Home</router-link></li>
      <li role="presentation"><router-link to="/startdemo">入门篇: start</router-link></li>
      <li role="presentation"><router-link to="/basedemo">基础篇: base</router-link></li>
      <li role="presentation"><router-link to="/improvedemo">提高篇：improve</router-link></li>
      <li role="presentation"><router-link to="/advancedemo">进阶篇：advance</router-link></li>
      <li role="presentation"><a href="#">vue-router</a></li>
      <li role="presentation"><a href="#">Vuex</a></li>
    </ul>
    <router-view keep-alive></router-view>
    <div>
      <img src="../../assets/logo.png" />
      <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
          <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
          <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
          <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
          <br>
          <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
          <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
          <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
          <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to zhoou Vue.js 2.0 App'
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
