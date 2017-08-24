<template>
  <div id="form" class="container">
    <h1>{{title}}</h1>
    <ul id="navs" class="nav nav-pills" role="tablist">
      <li :key="index" v-for='(item, index) in urlItems' role="presentation"><router-link :to="item.linkTo">{{ item.name }}</router-link></li>
    </ul>
    <transition :name="transitionName">
      <router-view keep-alive></router-view>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'VForm',
  data () {
    return {
      transitionName: ''
    }
  },
  computed: {
    ...mapState(['title', 'urlItems'])
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
