::: demo v-on 指令监听 DOM 事件来触发一些 JavaScript 代码

``` html
<template>
  <div class="demo" v-cloak>
    <button v-on:click="counter += 1">增加 1</button>
    <p>这个按钮被点击了 {{ counter }} 次。</p>
    <button v-on:click="greet" :modalshow="modalshow">Greet</button>
    <vmodal :show='show' name='modalB' effect="zoom" :width="400" @backUpState="receiveChildState">
      <div slot="modal-body" class="modal-body">
        Hello, welcome to vue.js learn
      </div>
    </vmodal>
  </div>
</template>

<script>
import vmodal from 'components/Common/vModal'

export default {
  name: 'VBaseDemo05',
  data () {
    return {
      counter: 0,
      show: false,
      modalshow: 'modalshow'
    }
  },
  components: {
    vmodal
  },
  methods: {
    greet (e) {
      this.show = true
    },
    receiveChildState (state) {
      let isShow = state.show
      this.show = isShow
    }
  }
}
</script>
```
:::