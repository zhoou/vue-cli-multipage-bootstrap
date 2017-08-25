::: demo Vuex mapState

``` html
<template id="count">
  <div class="demo" v-cloak>
    <p>{{ count }}</p>
    <p>
      <button class="btn btn-info" @click="increment">+</button>
      <button class="btn btn-info" @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'Vount',
    computed: mapState({
      count: state => state.stateDemo.count
    }),
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