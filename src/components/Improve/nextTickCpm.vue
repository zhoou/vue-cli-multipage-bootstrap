<template id="nextTick">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="demo" v-cloak>
            <div id="example">{{message}}</div>
            <button class="btn btn-info" @click='updateMessage'>Update</button>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
            <pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span
              class="attr">id</span>=<span class="string">"example"</span>&gt;</span>{{ <label>message</label> }}<span
              class="tag">&lt;/<span class="name">div</span>&gt;</span></div><div class="line"><span
              class="tag">&lt;<span class="name">button</span> <span
              class="attr">class</span>=<span class="string">"btn btn-info" </span><span
              class="attr">@click</span>=<span class="string">"updateMessage"</span>&gt;</span>Update<span
              class="tag">&lt;/<span class="name">button</span>&gt;</span></div></pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre><div class="line">Vue.component(<span class="string">'example'</span>, {</div><div class="line">  <span
          class="attr">template</span>: <span class="string">'&lt;span&gt;{{ message }}&lt;/span&gt;'</span>,</div><div
          class="line">  <span class="attr">data</span>: <span class="function"><span
          class="keyword">function</span> (<span class="params"></span>) </span>{</div><div class="line">    <span
          class="keyword">return</span> {</div><div class="line">      <span class="attr">message</span>: <span
          class="string">'not updated'</span></div><div class="line">    }</div><div class="line">  },</div><div
          class="line">  <span class="attr">methods</span>: {</div><div class="line">    <span class="attr">updateMessage</span>: <span
          class="function"><span class="keyword">function</span> (<span class="params"></span>) </span>{</div><div
          class="line">      <span class="keyword">this</span>.message = <span class="string">'updated'</span></div><div
          class="line">      <span class="built_in">console</span>.log(<span class="keyword">this</span>.$el.textContent) <span
          class="comment">// =&gt; 'not updated'</span></div><div class="line">      <span class="keyword">this</span>.$nextTick(<span
          class="function"><span class="keyword">function</span> (<span class="params"></span>) </span>{</div><div
          class="line">        <span class="built_in">console</span>.log(<span class="keyword">this</span>.$el.textContent) <span
          class="comment">// =&gt; 'updated'</span></div><div class="line">      })</div><div class="line">    }</div><div
          class="line">  }</div><div class="line">})</div></pre>
      </div>
    </div>
    <vmodal :show='show' @changeState="changeShowState" @okEvent="confirmOk" @cancelEvent="confirmCancle">
      <div slot="slotA">
        <p>{{content}}</p>
      </div>
    </vmodal>
  </div>
</template>

<script>
    import vmodal from 'components/Common/modalCpm'

    export default{
      name: 'nextTick',
      data () {
        return {
          message: 'not updated',
          show: false,
          content: ''
        }
      },
      components: {
        vmodal
      },
      methods: {
        updateMessage: function () {
          this.message = 'updated'
          this.$nextTick(function () {
            this.content = 'updated success !'
            this.show = true
          })
        },
        changeShowState (state) {
          this.show = state
        },
        confirmOk () {
          this.message = 'you are very Good !'
        },
        confirmCancle () {
          this.message = 'you click "取消" button !'
        }
      }
    }
</script>
