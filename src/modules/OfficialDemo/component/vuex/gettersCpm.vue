<template id="getters">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="demo" v-cloak>
            <table class="table">
              <thead>
              <tr>
                <th>Id</th>
                <th>Text</th>
                <th>State</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in doneTodos">
                <td>{{ item.id }}</td>
                <td>{{ item.text }}</td>
                <td>{{ item.done }}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
       <pre>
         <code class="html">
           &lt;table&gt;
             &lt;tr&gt;
               &lt;th&gt;Id&lt;/th&gt;
               &lt;th&gt;Text&lt;/th&gt;
               &lt;th&gt;State&lt;/th&gt;
             &lt;/tr&gt;
             &lt;tr v-for="item in doneTodos"&gt;
               &lt;td&gt;{{ <label>item.id</label> }}&lt;/td&gt;
               &lt;td&gt;{{ <label>item.Text</label> }}&lt;/td&gt;
               &lt;td&gt;{{ <label>item.State</label> }}&lt;/td&gt;
             &lt;/tr&gt;
           &lt;/table&gt;
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
            import { mapGetters } from 'vuex'

            const store = new Vuex.Store({
              state: {
                todos: [
                  { id: 1, text: 'vue', done: true },
                  { id: 2, text: 'vue-router', done: false },
                  { id: 3, text: 'vuex', done: true }
                ]
              },
              getters: {
                doneTodos: state => {
                  return state.todos.filter(todo => todo.done)
                }
              }
            })

            const app = new Vue({
              el: '#app',
              computed: mapGetters({
                doneTodos: 'doneTodos'
              })
            })
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'getters',
    computed: mapGetters({
      doneTodos: 'doneTodosCount'
    })
  }
</script>
