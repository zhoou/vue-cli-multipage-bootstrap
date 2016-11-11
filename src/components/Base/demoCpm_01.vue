<template id="demo01">
  <div class="row">
    <div class="col-xs-4">
      <div class="demo" v-cloak>
        {{message}}
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span>id</span>=<span class="string">"app"</span>&gt;</span></div><div
          class="line"><span class="attr">  {{ <label>message</label> }}</span></div><div class="line"><span
          class="tag">&lt;/<span class="name">div</span>&gt;</span></div></pre>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="keyword">var</span> app = <span class="keyword">new</span> Vue({</div><div
          class="line">  <span class="attr">el</span>: <span class="string">'#app'</span>,</div><div
          class="line">  <span class="attr">data</span>: {</div><div class="line">    <span class="attr">message</span>: <span
          class="string">'Hello Vue!'</span></div><div class="line">  }</div><div class="line">})</div></pre>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
      name: 'demo01',
      data () {
        return {
          message: 'Hello Vue!'
        }
      }
    }

</script>
