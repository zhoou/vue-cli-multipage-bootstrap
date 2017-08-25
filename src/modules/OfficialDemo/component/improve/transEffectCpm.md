::: demo CSS 过渡和动画 ：transition 封装组件

``` html
<template>
  <div class="demo" v-cloak>
    <button class="btn btn-info" @click.stop="show = !show">
      Toggle render
    </button>
    <transition name="slide-fade">
      <p v-if="show">hello</p>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'VTransitionModal',
    data () {
      return {
        show: true
      }
    }
  }
</script>

<style scoped>
  /* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
</style>

```
:::
