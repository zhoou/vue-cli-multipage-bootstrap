<template>
  <div id="app" class="container">
    <h1>{{title}}</h1>
    <ul class="nav nav-pills" role="tablist">
      <li role="presentation" class="active"><router-link to="/home">Home</router-link></li>
      <li role="presentation"><router-link to="/startdemo">入门篇: start</router-link></li>
      <li role="presentation"><router-link to="/basedemo">基础篇: base</router-link></li>
      <li role="presentation"><router-link to="/improvedemo">提高篇：improve</router-link></li>
      <li role="presentation"><router-link to="/advancedemo">进阶篇：advance</router-link></li>
      <li role="presentation"><a href="#">vue-router</a></li>
      <li role="presentation"><a href="#">Vuex</a></li>
    </ul>
    <router-view keep-alive></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Vue.js 从入门到精通效果展示'
    }
  }
}
</script>
