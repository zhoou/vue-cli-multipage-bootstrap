<template id="demo07">
  <div class="row">
    <div class="col-xs-4">
      <div class="demo" v-cloak>
        <ol>
          <!--
          Now we provide each todo-item with the todo object
          it's representing, so that its content can be dynamic
          -->
          <todo-item v-for="todo in todos" v-bind:todo="todo"></todo-item>
        </ol>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span
          class="string">"app-7"</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span
          class="name">ol</span>&gt;</span></div><div class="line">    <span class="comment">&lt;!--</span></div><div
          class="line">    Now we provide each todo-item with the todo object</div><div class="line">    it's representing, so that its content can be dynamic</div><div
          class="line">    --&gt;</div><div class="line">    <span class="tag">&lt;<span
          class="name">todo-item</span> <span class="attr">v-for</span>=<span
          class="string">"todo in todos"</span> <span class="attr">v-bind:todo</span>=<span class="string">"todo"</span>&gt;</span><span
          class="tag">&lt;/<span class="name">todo-item</span>&gt;</span></div><div class="line">  <span class="tag">&lt;/<span
          class="name">ol</span>&gt;</span></div><div class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></div></pre>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre><div class="line">Vue.component(<span class="string">'todo-item'</span>, {</div><div class="line">  <span
          class="attr">props</span>: [<span class="string">'todo'</span>],</div><div class="line">  <span class="attr">template</span>: <span
          class="string">'&lt;li&gt;{{ <label>todo.text</label> }}&lt;/li&gt;'</span></div><div class="line">})</div><div class="line"><span
          class="keyword">var</span> app7 = <span class="keyword">new</span> Vue({</div><div class="line">  <span
          class="attr">el</span>: <span class="string">'#app-7'</span>,</div><div class="line">  <span
          class="attr">data</span>: {</div><div class="line">    <span class="attr">todos</span>: [</div><div
          class="line">      { <span class="attr">text</span>: <span class="string">'Learn JavaScript'</span> },</div><div
          class="line">      { <span class="attr">text</span>: <span class="string">'Learn Vue'</span> },</div><div
          class="line">      { <span class="attr">text</span>: <span
          class="string">'Build something awesome'</span> }</div><div class="line">    ]</div><div
          class="line">  }</div><div class="line">})</div></pre>
      </div>
    </div>
  </div>
</template>

<script>
    import Vue from 'vue'

    Vue.component('todo-item', {
      props: ['todo'],
      template: '<li>{{ todo.text }}</li>'
    })

    export default{
      name: 'demo07',
      data () {
        return {
          todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
          ]
        }
      }
    }
</script>
