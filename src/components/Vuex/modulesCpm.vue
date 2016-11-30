<template id="count">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
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
              {{result}}
            </span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
       <pre>
         <code class="html">
           &lt;div id="app"&gt;
            &lt;p&gt;{{ <label>count</label> }}&lt;/p&gt;
            &lt;p&gt;
              &lt;button @click="increment"&gt; + &lt;/button&gt;
              &lt;button @click="decrement"&gt; - &lt;/button&gt;
            &lt;/p&gt;
            &lt;p>极简计算器：&lt;/p&gt;
            &lt;span&gt; 1+
               &lt;input v-model="num" type="text"&gt;
               &lt;button @click='calculation'> = &lt;/button&gt;
               {{ <label>result</label> }}
            &lt;/span&gt;
           &lt;/div&gt;
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
            import { mapState, mapMutations } from 'vuex'

            const StatesModule = {
              state: {
                count: 0
              },
              mutations: {
                increment (state) {
                  state.count++
                },
                decrement (state) {
                  state.count--
                }
              }
            }
            const MutationsModule = {
              state: {
                result: 1
              },
              mutations: {
                Calculation (state, payload) {
                  state.result = 1 + payload.num
                }
              }
            }
            const store = new Vuex.Store({
              modules: {
                stateDemo: StatesModule,
                mutationDemo: MutationsModule
              }
            })

            const app = new Vue({
              el: '#app',
              computed: mapState({
                count: state => state.stateDemo.count,
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
            })
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'count',
    data () {
      return {
        num: 0,
        count: 0
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
