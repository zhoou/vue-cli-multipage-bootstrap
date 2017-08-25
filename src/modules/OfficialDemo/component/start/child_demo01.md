::: demo 采用简洁的模板语法来声明式的将数据渲染进 DOM 的系统

``` html
<template>
  <div class="demo" v-cloak>
    {{ message }}
  </div>
</template>
<script>
export default {
  name: 'VStartDemo01',
  data () {
    return {
      message: 'Hello Vue!'
    }
  }
}
</script>
```
:::



