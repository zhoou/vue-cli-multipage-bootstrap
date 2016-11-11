<template id="demo06">
  <div class="row">
    <div class="col-xs-4">
      <div class="demo" v-cloak>
        <p>{{ message }}</p>
        <input v-model="message">
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span
          class="string">"app-6"</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span
          class="name">p</span>&gt;</span>{{ <label>message</label> }}<span class="tag">&lt;/<span
          class="name">p</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span
          class="name">input</span> <span class="attr">v-model</span>=<span
          class="string">"message"</span>&gt;</span></div><div class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></div></pre>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="keyword">var</span> app6 = <span class="keyword">new</span> Vue({</div><div
          class="line">  <span class="attr">el</span>: <span class="string">'#app-6'</span>,</div><div
          class="line">  <span class="attr">data</span>: {</div><div class="line">    <span class="attr">message</span>: <span
          class="string">'Hello Vue!'</span></div><div class="line">  }</div><div class="line">})</div></pre>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
      name: 'demo06',
      data () {
        return {
          message: 'Hello Vue!'
        }
      }
    }
</script>
