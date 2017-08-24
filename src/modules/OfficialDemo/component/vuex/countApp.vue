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
            const store = new Vuex.Store({
              state: {
                count: 0
              },
              mutations: {
                increment: state => state.count++,
                decrement: state => state.count--
              }
            })

            const app = new Vue({
              el: '#app',
              computed: {
                count () {
                  return store.state.count
                }
              },
              methods: {
                increment () {
                  store.commit('increment')
                },
                decrement () {
                  store.commit('decrement')
                }
              }
            })
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'count',
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
