::: demo v-model 指令，它使得在表单输入和应用状态中做双向数据绑定

``` html
<template>
  <div class="demo" v-cloak>
    <p>{{ message }}</p>
    <input v-model="message">
  </div>
</template>

<script>
    export default {
      name: 'VStartDemo06',
      data () {
        return {
          message: 'Hello Vue!'
        }
      }
    }
</script>
```
:::