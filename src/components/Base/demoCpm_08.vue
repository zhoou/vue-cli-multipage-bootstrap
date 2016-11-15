<template id="demo01">
  <div class="row">
    <div class="col-xs-4">
      <div class="demo" v-cloak>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span
          class="string">"example"</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span
          class="name">p</span>&gt;</span>Original message: "{{ <label>message</label> }}"<span class="tag">&lt;/<span
          class="name">p</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span class="name">p</span>&gt;</span>Computed reversed message: "{{ <label>reversedMessage</label> }}"<span
          class="tag">&lt;/<span class="name">p</span>&gt;</span></div><div class="line"><span class="tag">&lt;/<span
          class="name">div</span>&gt;</span></div></pre>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="keyword">var</span> vm = <span class="keyword">new</span> Vue({</div><div
          class="line">  <span class="attr">el</span>: <span class="string">'#example'</span>,</div><div class="line">  <span
          class="attr">data</span>: {</div><div class="line">    <span class="attr">message</span>: <span
          class="string">'Hello'</span></div><div class="line">  },</div><div class="line">  <span
          class="attr">computed</span>: {</div><div class="line">    <span
          class="comment">// a computed getter</span></div><div class="line">    reversedMessage: <span
          class="function"><span class="keyword">function</span> (<span class="params"></span>) </span>{</div><div
          class="line">      <span class="comment">// `this` points to the vm instance</span></div><div class="line">      <span
          class="keyword">return</span> <span class="keyword">this</span>.message.split(<span class="string">''</span>).reverse().join(<span
          class="string">''</span>)</div><div class="line">    }</div><div class="line">  }</div><div
          class="line">})</div></pre>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
      name: 'demo01',
      data () {
        return {
          message: 'Hello!'
        }
      },
      computed: {
        // a computed getter
        reversedMessage: function () {
          // `this` points to the vm instance
          return this.message.split('').reverse().join('')
        }
      }
    }
</script>
