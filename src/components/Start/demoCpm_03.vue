<template>
  <div id="demo03" class="row">
    <div class="col-xs-4">
      <div class="demo" v-cloak>
        <p v-if="seen">Now you see me</p>
        <p v-if="notseen">Now you can't see me</p>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span class="string">"app-3"</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span class="name">p</span> <span class="attr">v-if</span>=<span class="string">"seen"</span>&gt;</span>Now you see me<span class="tag">&lt;/<span class="name">p</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span class="name">p</span> <span class="attr">v-if</span>=<span class="string">"notseen"</span>&gt;</span>you can't see me<span class="tag">&lt;/<span class="name">p</span>&gt;</span></div><div class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></div></pre>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="keyword">var</span> app3 = <span class="keyword">new</span> Vue({</div><div class="line">  <span class="attr">el</span>: <span class="string">'#app-3'</span>,</div><div class="line">  <span class="attr">data</span>: {</div><div class="line">    <span class="attr">seen</span>: <span class="literal">true,</span></div><div class="line">    <span class="attr">notseen</span>: <span class="literal">false</span></div><div class="line">  }</div><div class="line">})</div></pre>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
      name: 'demo03',
      data () {
        return {
          seen: true,
          notseen: false
        }
      }
    }
</script>
