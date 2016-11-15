<template>
  <div id="demo04" class="row">
    <div class="col-xs-4">
      <div class="demo" v-cloak>
        <ol>
          <li v-for="todo in todos">
            {{ todo.text }}
          </li>
        </ol>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span
          class="string">"app-4"</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span
          class="name">ol</span>&gt;</span></div><div class="line">    <span class="tag">&lt;<span
          class="name">li</span> <span class="attr">v-for</span>=<span class="string">"todo in todos"</span>&gt;</span></div><div
          class="line">      {{ <label>todo.text</label> }}</div><div class="line">    <span class="tag">&lt;/<span
          class="name">li</span>&gt;</span></div><div class="line">  <span class="tag">&lt;/<span class="name">ol</span>&gt;</span></div><div
          class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></div></pre>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="keyword">var</span> app4 = <span class="keyword">new</span> Vue({</div><div
          class="line">  <span class="attr">el</span>: <span class="string">'#app-4'</span>,</div><div
          class="line">  <span class="attr">data</span>: {</div><div class="line">    <span class="attr">todos</span>: [</div><div
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
    export default{
      name: 'demo04',
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
