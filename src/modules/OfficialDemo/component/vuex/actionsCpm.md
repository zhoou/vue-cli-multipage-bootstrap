::: demo Vuex Actions

``` html
<template>
  <div class="demo" v-cloak>
    <p>算术练习：</p>
    <span style="line-height: 60px;"> {{ num1 }} + {{ num2 }} = 
      <input v-model="num" type="text" class="form-control" style="width:50px;display: inherit;">
      <button class="btn btn-info" @click='calculation'>确定</button>
    </span>
    <p>答题结果：<span style="font-size:12px;color:red;">{{ result }}</span></p>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'VMutations',
    data () {
      return {
        num: 0
      }
    },
    computed: {
      ...mapState({
        result: state => state.actionDemo.result
      }),
      ...mapGetters({
        num1: 'getNumOne',
        num2: 'getNumTwo'
      })
    },
    methods: {
      calculation () {
        let result = 'F'
        if (parseInt(this.num) === this.num1 + this.num2) {
          result = 'T'
        }
        this.CalculationAsync({answer: result})
      },
      ...mapActions(['CalculationAsync'])
    }
  }

</script>
```
:::
