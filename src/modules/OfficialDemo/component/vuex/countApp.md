::: demo 最基本的 Vuex 记数应用示例

``` html
<template>
  <div class="demo" v-cloak>
    <p>{{ count }}</p>
    <p>
      <button class="btn btn-info" @click="increment">+</button>
      <button class="btn btn-info" @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'VCount',
    computed: {
      count () {
        return this.$store.state.stateDemo.count
      }
    },
    methods: {
      increment () {
        this.$store.commit('increment')
      },
      decrement () {
        this.$store.commit('decrement')
      }
    }
  }
</script>
```
:::