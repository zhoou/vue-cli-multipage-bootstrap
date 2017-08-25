::: demo v-if 控制切换一个元素的显示

``` html
<template>
  <div class="demo" v-cloak>
    <p v-if="seen">Now you see me</p>
    <p v-if="notseen">Now you can't see me</p>
  </div>
</template>

<script>
  export default {
    name: 'VStartDemo03',
    data () {
      return {
        seen: true,
        notseen: false
      }
    }
  }
</script>
```
:::