::: demo Vuex Modules

``` html
<template>
  <div class="demo" v-cloak>
    <p>{{ count }}</p>
    <p>
      <button class="btn btn-info" @click="increment">+</button>
      <button class="btn btn-info" @click="decrement">-</button>
    </p>
    <p>极简计算器：</p>
    <span>1+
      <input v-model="num" type="text" class="form-control" style="width:50px;display: inherit;">
      <button class="btn btn-info" @click='calculation'> = </button>
      {{ result }}
    </span>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'VCount',
    data () {
      return {
      }
    },
    computed: mapState({
      count: state => state.stateDemo.count,
      num: state => state.stateDemo.count,
      result: state => state.mutationDemo.result
    }),
    methods: {
      ...mapMutations(['increment']),
      ...mapMutations(['decrement']),
      calculation () {
        let number = parseInt(this.num)
        this.Calculation({num: number})
      },
      ...mapMutations(['Calculation'])
    }
  }
</script>
```
:::
