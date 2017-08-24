<template id="demo11">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="demo" v-cloak>
            <input v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo">
            <ul>
              <li is="liCpm" v-for="(todo, index) in todos" v-bind:title="todo"
                  v-on:remove="todos.splice(index, 1)"></li>
            </ul>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
            <pre>
              <code class="html">
                &lt;div id="todo-list-example"&gt;
                  &lt;input
                    v-model="newTodoText"
                    v-on:keyup.enter="addNewTodo"
                    placeholder="Add a todo"
                  &gt;
                  &lt;ul&gt;
                    &lt;li
                      is="todo-item"
                      v-for="(todo, index) in todos"
                      v-bind:title="todo"
                      v-on:remove="todos.splice(index, 1)"
                    >&lt;/li&gt;
                  &lt;/ul&gt;
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
            Vue.component('todo-item', {
              template: '\
                &lt;li&gt;\
                  {{ <label>title</label> }}\
                  &lt;button v-on:click="$emit(\'remove\')"&gt;X&lt;/button&gt;\
                &lt;/li&gt;\
              ',
              props: ['title']
            })
            new Vue({
              el: '#todo-list-example',
              data: {
                newTodoText: '',
                todos: [
                  'Do the dishes',
                  'Take out the trash',
                  'Mow the lawn'
                ]
              },
              methods: {
                addNewTodo: function () {
                  this.todos.push(this.newTodoText)
                  this.newTodoText = ''
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
    import liCpm from 'components/Common/liCpm_01'

    export default{
      name: 'demo11',
      data () {
        return {
          newTodoText: '',
          todos: [
            'Do the dishes',
            'Take out the trash',
            'Mow the lawn'
          ]
        }
      },
      methods: {
        addNewTodo: function () {
          this.todos.push(this.newTodoText)
          this.newTodoText = ''
        }
      },
      components: {
        liCpm
      }
    }
</script>
