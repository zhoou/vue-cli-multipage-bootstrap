<template id="mutations">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="demo" v-cloak>
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
                 &lt;p>极简计算器：&lt;/p&gt;
                 &lt;span&gt; 1+
                   &lt;input v-model="num" type="text"&gt;
                   &lt;button @click='calculation'> = &lt;/button&gt;
                   {{ <label>result</label> }}
                 &lt;/span&gt;
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

            const store = new Vuex.Store({
              state: {
                result: 1
              },
              mutations: {
                Calculation (state, payload) {
                  state.result = 1 + payload.num
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
                  result: 'result'
                })
              },
              methods: {
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
    name: 'mutations',
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
