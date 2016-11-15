<template>
  <div id="demo02" class="row">
    <div class="col-xs-4">
      <div class="demo" v-cloak>
        <span v-bind:title="message">
          Hover your mouse over me for a few seconds to see my dynamically bound title!
        </span>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span
          class="string">"app-2"</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span class="name">span</span> <span
          class="attr">v-bind:title</span>=<span class="string">"message"</span>&gt;</span></div><div class="line">    Hover your mouse over me for a few seconds to see my dynamically bound title!</div><div
          class="line">  <span class="tag">&lt;/<span class="name">span</span>&gt;</span></div><div class="line"><span
          class="tag">&lt;/<span class="name">div</span>&gt;</span></div></pre>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="keyword">var</span> app2 = <span class="keyword">new</span> Vue({</div><div
          class="line">  <span class="attr">el</span>: <span class="string">'#app-2'</span>,</div><div
          class="line">  <span class="attr">data</span>: {</div><div class="line">    <span class="attr">message</span>: <span
          class="string">'You loaded this page on '</span> + <span class="keyword">new</span> <span class="built_in">Date</span>()</div><div
          class="line">  }</div><div class="line">})</div></pre>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
      name: 'demo02',
      data () {
        return {
          message: 'You loaded this page on ' + new Date()
        }
      }
    }
</script>
