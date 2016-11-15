<template id="demo05">
  <div class="row">
    <div class="col-xs-4">
      <div class="demo" v-cloak>
        <p>{{ message }}</p>
        <button v-on:click="reverseMessage" class="btn btn-info">Reverse Message</button>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span
          class="string">"app-5"</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span
          class="name">p</span>&gt;</span>{{ <label>message</label> }}<span class="tag">&lt;/<span
          class="name">p</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span
          class="name">button</span> <span class="attr">v-on:click</span>=<span class="string">"reverseMessage"</span>&gt;</span>Reverse Message<span
          class="tag">&lt;/<span class="name">button</span>&gt;</span></div><div class="line"><span
          class="tag">&lt;/<span class="name">div</span>&gt;</span></div></pre>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="keyword">var</span> app5 = <span class="keyword">new</span> Vue({</div><div
          class="line">  <span class="attr">el</span>: <span class="string">'#app-5'</span>,</div><div
          class="line">  <span class="attr">data</span>: {</div><div class="line">    <span class="attr">message</span>: <span
          class="string">'Hello Vue.js!'</span></div><div class="line">  },</div><div class="line">  <span class="attr">methods</span>: {</div><div
          class="line">    <span class="attr">reverseMessage</span>: <span class="function"><span class="keyword">function</span> (<span
          class="params"></span>) </span>{</div><div class="line">      <span
          class="keyword">this</span>.message = <span class="keyword">this</span>.message.split(<span
          class="string">''</span>).reverse().join(<span class="string">''</span>)</div><div class="line">    }</div><div
          class="line">  }</div><div class="line">})</div></pre>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
      name: 'demo05',
      data () {
        return {
          message: 'Hello Vue.js!'
        }
      },
      methods: {
        reverseMessage: function () {
          this.message = this.message.split('').reverse().join('')
        }
      }
    }
</script>
