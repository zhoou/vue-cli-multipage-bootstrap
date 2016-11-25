<template>
  <div id="app" class="container">
    <h1>{{title}}</h1>
    <ul id="navs" class="nav nav-pills" role="tablist">
      <li v-for='item in urlItems' role="presentation" :class="{active: item.isActive}"><router-link :to="item.linkTo">{{ item.name }}</router-link></li>
    </ul>
    <transition :name="transitionName">
      <router-view keep-alive></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Vue.js 从入门到精通效果展示',
      urlItems: [
        {
          isActive: false,
          linkTo: '/home',
          name: 'Home'
        },
        {
          isActive: false,
          linkTo: '/startdemo',
          name: '入门篇: start'
        },
        {
          isActive: false,
          linkTo: '/basedemo',
          name: '基础篇: base'
        },
        {
          isActive: false,
          linkTo: '/improvedemo',
          name: '提高篇：improve'
        },
        {
          isActive: false,
          linkTo: '/advancedemo',
          name: '进阶篇：advance'
        },
        {
          isActive: false,
          linkTo: '/vuerouter',
          name: 'vue-router'
        },
        {
          isActive: false,
          linkTo: '/Vuex',
          name: 'Vuex'
        }
      ]
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style scoped>
 .slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
  transition: all .2s ease;
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
  transition: all .2s ease;
}
</style>
