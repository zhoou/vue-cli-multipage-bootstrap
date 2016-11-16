<template id="demo10">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="demo" v-cloak>
            <span v-bind:class="classObject">{{message}}</span>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
            <pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span
              class="attr">v-bind:class</span>=<span class="string">"classObject"</span>&gt;</span><span class="tag">&lt;/<span
              class="name">div</span>&gt;</span></div></pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre><div class="line">data: {</div><div class="line">  <span class="attr">isActive</span>: <span
          class="literal">true</span>,</div><div class="line">  <span class="attr">success</span>: <span
          class="literal">true</span>,</div><div class="line">  <span class="attr">error</span>: <span class="literal">null</span></div><div
          class="line">},</div><div class="line"><span class="attr">computed</span>: {</div><div class="line">  <span
          class="attr">classObject</span>: <span class="function"><span class="keyword">function</span> (<span
          class="params"></span>) </span>{</div><div class="line">    <span class="keyword">return</span> {</div><div
          class="line">      <span class="attr">active</span>: <span
          class="keyword">this</span>.isActive &amp;&amp; !<span class="keyword">this</span>.error,</div><div
          class="line">      <span class="string">'bg-success'</span>: <span
          class="keyword">this</span>.success &amp;&amp; !<span class="keyword">this</span>.error,</div><div
          class="line">      <span class="string">'text-danger'</span>: <span class="keyword">this</span>.error &amp;&amp; <span
          class="keyword">this</span>.error.type === <span class="string">'fatal'</span></div><div
          class="line">    }</div><div class="line">  }</div><div class="line">}</div></pre>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
      name: 'demo10',
      data () {
        return {
          message: 'Hello!',
          isActive: true,
          success: true,
          error: null
        }
      },
      computed: {
        classObject: function () {
          return {
            active: this.isActive && !this.error,
            'bg-success': this.success && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
          }
        }
      }
    }
</script>
