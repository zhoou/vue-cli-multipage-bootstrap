<template id="transitionModal">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="demo" v-cloak>
            <button class="btn btn-info" @click="show = !show">
              Toggle render
            </button>
            <transition name="slide-fade">
              <p v-if="show">hello</p>
            </transition>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Css</span></div>
          <div class="highlight">
            <pre><div class="line"><span class="comment">/* 可以设置不同的进入和离开动画 */</span></div><div class="line"><span
              class="comment">/* 设置持续时间和动画函数 */</span></div><div class="line"><span class="selector-class">.slide-fade-enter-active</span> {</div><div
              class="line">  <span class="attribute">transition</span>: all .<span class="number">3s</span> ease;</div><div
              class="line">}</div><div class="line"><span class="selector-class">.slide-fade-leave-active</span> {</div><div
              class="line">  <span class="attribute">transition</span>: all .<span class="number">8s</span> <span
              class="built_in">cubic-bezier</span>(1.0, 0.5, 0.8, 1.0);</div><div class="line">}</div><div class="line"><span
              class="selector-class">.slide-fade-enter</span>, <span
              class="selector-class">.slide-fade-leave-active</span> {</div><div class="line">  <span class="attribute">padding-left</span>: <span
              class="number">10px</span>;</div><div class="line">  <span class="attribute">opacity</span>: <span
              class="number">0</span>;</div><div class="line">}</div></pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
            <pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span
              class="attr">id</span>=<span class="string">"example-1"</span>&gt;</span></div><div class="line">  <span
              class="tag">&lt;<span class="name">button</span> @<span class="attr">click</span>=<span class="string">"show = !show"</span>&gt;</span></div><div
              class="line">    Toggle render</div><div class="line">  <span class="tag">&lt;/<span
              class="name">button</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span class="name">transition</span> <span
              class="attr">name</span>=<span class="string">"slide-fade"</span>&gt;</span></div><div
              class="line">    <span class="tag">&lt;<span class="name">p</span> <span class="attr">v-if</span>=<span
              class="string">"show"</span>&gt;</span>hello<span class="tag">&lt;/<span class="name">p</span>&gt;</span></div><div
              class="line">  <span class="tag">&lt;/<span class="name">transition</span>&gt;</span></div><div
              class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></div></pre>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
          <div class="highlight">
            <pre><div class="line"><span class="keyword">new</span> Vue({</div><div class="line">  <span
              class="attr">el</span>: <span class="string">'#example-1'</span>,</div><div class="line">  <span
              class="attr">data</span>: {</div><div class="line">    <span class="attr">show</span>: <span
              class="literal">true</span></div><div class="line">  }</div><div class="line">})</div></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  /* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  padding-left: 10px;
  opacity: 0;
}
</style>

<script>
    export default{
      name: 'transitionModal',
      data () {
        return {
          show: true
        }
      }
    }
</script>

