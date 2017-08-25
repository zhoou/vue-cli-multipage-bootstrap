::: demo v-on 指令绑定一个监听事件用于调用我们 Vue 实例中定义的方法

``` html
<template>
  <div class="demo" v-cloak>
    <p>{{ message }}</p>
    <button v-on:click="reverseMessage" class="btn btn-info">Reverse Message</button>
  </div>
</template>

<script>
  export default {
    name: 'VStartDemo05',
    data () {
      return {
        message: 'Hello Vue.js!'
      }
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  }
</script>
```
:::
