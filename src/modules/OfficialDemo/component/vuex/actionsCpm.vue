<template id="mutations">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="demo" v-cloak>
            <p>算术练习：</p>
            <span style="line-height: 60px;"> {{ num1 }} + {{ num2 }} = <input v-model="num" type="text" class="form-control" style="width:50px;display: inherit;">
              <button class="btn btn-info" @click='calculation'>确定</button>
            </span>
            <p>答题结果：<span style="font-size:12px;color:red;">{{ result }}</span></p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
             <pre>
               <code class="html">
                 &lt;p>算术练习：&lt;/p>
                 &lt;span>
                   {{ <label>num1</label> }} + {{ <label>num2</label> }} =
                   &lt;input v-model="num" type="text">
                   &lt;button @click='calculation'>确定&lt;/button>
                 &lt;/span>
                 &lt;p>答题结果：&lt;span>{{ <label>result</label> }}&lt;/span>&lt;/p>
               </code>
             </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre>
          <code class="javascript">
            import { mapState, mapGetters, mapActions } from 'vuex'

            const store = new Vuex.Store({
              state: {
                actionsData: {
                  numOne: 0,
                  numTwo: 0,
                  result: '请输入结果哦！'
                }
              },
              mutations: {
                mutaCalculationAsync (state, payload) {
                  state.actionsData.result = payload.answer === 'T' ? 'Good!' : 'Sorry!'
                },
                mutaClearResult (state) {
                  state.actionsData.result = ''
                }
              },
              getters: {
                getNumOne: state => {
                  return state.actionsData.numOne + Math.floor(Math.random() * 10 + 1)
                },
                getNumTwo: state => {
                  return state.actionsData.numTwo + Math.floor(Math.random() * 10 + 1)
                }
              },
              actions: {
                clearResult ({commit}) {
                  commit('mutaClearResult')
                },
                CalculationAsync ({ commit }, answer) {
                  return store.dispatch('clearResult').then(() => {
                    setTimeout(() => {
                      commit('mutaCalculationAsync', answer)
                    }, 500)
                  })
                }
              }
            })

            const app = new Vue({
              el: '#app',
              data () {
                return {
                  num: 0
                }
              },
              computed: {
                ...mapState({
                  result: state => state.actionsData.result
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
            })
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'mutations',
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
