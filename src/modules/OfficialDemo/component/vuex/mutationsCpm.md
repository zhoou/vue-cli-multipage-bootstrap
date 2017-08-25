::: demo Vuex Mutations

``` html
<template>
  <div class="demo" v-cloak>
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
    name: 'VMutations',
    data () {
      return {
        num: 0
      }
    },
    computed: {
      ...mapState({
        result: state => state.mutationDemo.result
      })
    },
    methods: {
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