::: demo 在模板中绑定表达式是非常便利的，但是它们实际上只用于简单的操作。任何复杂逻辑应当使用计算属性。

``` html
<template>
  <div class="demo" v-cloak>
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
  </div>
</template>

<script>
export default {
  name: 'VBaseDemo01',
  data () {
    return {
      message: 'Hello!'
    }
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    }
  }
}
</script>
```
:::
