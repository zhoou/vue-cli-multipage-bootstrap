::: demo 除了绑定插入的文本内容，我们还可以采用这样的方式绑定 DOM 元素属性

``` html
<template>
  <div class="demo" v-cloak>
    <span v-bind:title="message">
      Hover your mouse over me for a few seconds to see my dynamically bound title!
    </span>
  </div>
</template>

<script>
  export default {
    name: 'VStartDemo02',
    data () {
      return {
        message: 'You loaded this page on ' + new Date()
      }
    }
  }
</script>
```
:::