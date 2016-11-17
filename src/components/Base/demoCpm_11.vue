<template id="demo11">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="demo" v-cloak>
            <div id="todo-list-example">
              <input v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo">
              <ul>
                <li is="liCpm" v-for="(todo, index) in todos" v-bind:title="todo"
                    v-on:remove="todos.splice(index, 1)"></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
            <pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span
              class="attr">id</span>=<span class="string">"todo-list-example"</span>&gt;</span></div><div class="line">  <span
              class="tag">&lt;<span class="name">input</span></span></div><div class="line">    <span class="attr">v-model</span>=<span
              class="string">"newTodoText"</span></div><div class="line">    <span class="attr">v-on:keyup.enter</span>=<span
              class="string">"addNewTodo"</span></div><div class="line">    <span class="attr">placeholder</span>=<span
              class="string">"Add a todo"</span></div><div class="line">  &gt;</div><div class="line">  <span
              class="tag">&lt;<span class="name">ul</span>&gt;</span></div><div class="line">    <span
              class="tag">&lt;<span class="name">li</span></span></div><div class="line">      <span
              class="attr">is</span>=<span class="string">"todo-item"</span></div><div class="line">      <span
              class="attr">v-for</span>=<span class="string">"(todo, index) in todos"</span></div><div class="line">      <span
              class="attr">v-bind:title</span>=<span class="string">"todo"</span></div><div class="line">      <span
              class="attr">v-on:remove</span>=<span class="string">"todos.splice(index, 1)"</span></div><div
              class="line">    &gt;<span class="tag">&lt;/<span class="name">li</span>&gt;</span></div><div
              class="line">  <span class="tag">&lt;/<span class="name">ul</span>&gt;</span></div><div class="line"><span
              class="tag">&lt;/<span class="name">div</span>&gt;</span></div></pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre><div class="line">Vue.component(<span class="string">'todo-item'</span>, {</div><div class="line">  <span
          class="attr">template</span>: <span class="string">'\</span></div><div class="line">    &lt;li&gt;\</div><div
          class="line">      {{ <label>title</label> }}\</div><div class="line">      &lt;button v-on:click="$emit(\'remove\')"&gt;X&lt;/button&gt;\</div><div
          class="line">    &lt;/li&gt;\</div><div class="line">  ',</div><div class="line">  <span
          class="attr">props</span>: [<span class="string">'title'</span>]</div><div class="line">})</div><div
          class="line"></div><div class="line"><span class="keyword">new</span> Vue({</div><div class="line">  <span
          class="attr">el</span>: <span class="string">'#todo-list-example'</span>,</div><div class="line">  <span
          class="attr">data</span>: {</div><div class="line">    <span class="attr">newTodoText</span>: <span
          class="string">''</span>,</div><div class="line">    <span class="attr">todos</span>: [</div><div
          class="line">      <span class="string">'Do the dishes'</span>,</div><div class="line">      <span
          class="string">'Take out the trash'</span>,</div><div class="line">      <span
          class="string">'Mow the lawn'</span></div><div class="line">    ]</div><div class="line">  },</div><div
          class="line">  <span class="attr">methods</span>: {</div><div class="line">    <span
          class="attr">addNewTodo</span>: <span class="function"><span class="keyword">function</span> (<span
          class="params"></span>) </span>{</div><div class="line">      <span
          class="keyword">this</span>.todos.push(<span class="keyword">this</span>.newTodoText)</div><div class="line">      <span
          class="keyword">this</span>.newTodoText = <span class="string">''</span></div><div class="line">    }</div><div
          class="line">  }</div><div class="line">})</div></pre>
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
