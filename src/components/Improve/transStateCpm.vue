<template id="transitionModal">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="demo" v-cloak>
            <input
              v-model="colorQuery"
              v-on:keyup.enter="updateColor"
              placeholder="Enter a color"
            >
            <button class="btn btn-info" v-on:click="updateColor">Update</button>
            <p>Preview:</p>
            <span
              v-bind:style="{ backgroundColor: tweenedCSSColor }"
              class="example-7-color-preview"
            ></span>
            <p>{{ tweenedCSSColor }}</p>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
            <pre><div class="line"><span class="tag">&lt;<span class="name">script</span> <span class="attr">src</span>=<span
              class="string">"https://unpkg.com/tween.js@16.3.4"</span>&gt;</span><span class="undefined"></span><span
              class="tag">&lt;/<span class="name">script</span>&gt;</span></div><div class="line"><span class="tag">&lt;<span
              class="name">script</span> <span class="attr">src</span>=<span class="string">"https://unpkg.com/color-js@1.0.3/color.js"</span>&gt;</span><span
              class="undefined"></span><span class="tag">&lt;/<span class="name">script</span>&gt;</span></div><div
              class="line"></div><div class="line"><span class="tag">&lt;<span class="name">div</span> <span
              class="attr">id</span>=<span class="string">"example-7"</span>&gt;</span></div><div class="line">  <span
              class="tag">&lt;<span class="name">input</span></span></div><div class="line">    <span class="attr">v-model</span>=<span
              class="string">"colorQuery"</span></div><div class="line">    <span
              class="attr">v-on:keyup.enter</span>=<span class="string">"updateColor"</span></div><div class="line">    <span
              class="attr">placeholder</span>=<span class="string">"Enter a color"</span></div><div
              class="line">  &gt;</div><div class="line">  <span class="tag">&lt;<span class="name">button</span> <span
              class="attr">v-on:click</span>=<span class="string">"updateColor"</span>&gt;</span>Update<span
              class="tag">&lt;/<span class="name">button</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span
              class="name">p</span>&gt;</span>Preview:<span class="tag">&lt;/<span
              class="name">p</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span
              class="name">span</span></span></div><div class="line">    <span class="attr">v-bind:style</span>=<span
              class="string">"{ backgroundColor: tweenedCSSColor }"</span></div><div class="line">    <span
              class="attr">class</span>=<span class="string">"example-7-color-preview"</span></div><div class="line">  &gt;<span
              class="tag">&lt;/<span class="name">span</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span
              class="name">p</span>&gt;</span>{{ tweenedCSSColor }}<span class="tag">&lt;/<span class="name">p</span>&gt;</span></div><div
              class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></div></pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="keyword">var</span> Color = net.brehaut.Color</div><div class="line"></div><div
          class="line"><span class="keyword">new</span> Vue({</div><div class="line">  <span
          class="attr">el</span>: <span class="string">'#example-7'</span>,</div><div class="line">  <span class="attr">data</span>: {</div><div
          class="line">    <span class="attr">colorQuery</span>: <span class="string">''</span>,</div><div class="line">    <span
          class="attr">color</span>: {</div><div class="line">      <span class="attr">red</span>: <span class="number">0</span>,</div><div
          class="line">      <span class="attr">green</span>: <span class="number">0</span>,</div><div class="line">      <span
          class="attr">blue</span>: <span class="number">0</span>,</div><div class="line">      <span
          class="attr">alpha</span>: <span class="number">1</span></div><div class="line">    },</div><div class="line">    <span
          class="attr">tweenedColor</span>: {}</div><div class="line">  },</div><div class="line">  <span class="attr">created</span>: <span
          class="function"><span class="keyword">function</span> (<span class="params"></span>) </span>{</div><div
          class="line">    <span class="keyword">this</span>.tweenedColor = <span class="built_in">Object</span>.assign({}, <span
          class="keyword">this</span>.color)</div><div class="line">  },</div><div class="line">  <span class="attr">watch</span>: {</div><div
          class="line">    <span class="attr">color</span>: <span class="function"><span class="keyword">function</span> (<span
          class="params"></span>) </span>{</div><div class="line">      <span class="function"><span class="keyword">function</span> <span
          class="title">animate</span> (<span class="params">time</span>) </span>{</div><div class="line">        requestAnimationFrame(animate)</div><div
          class="line">        TWEEN.update(time)</div><div class="line">      }</div><div class="line">      <span
          class="keyword">new</span> TWEEN.Tween(<span class="keyword">this</span>.tweenedColor)</div><div class="line">        .to(<span
          class="keyword">this</span>.color, <span class="number">750</span>)</div><div
          class="line">        .start()</div><div class="line">      animate()</div><div class="line">    }</div><div
          class="line">  },</div><div class="line">  <span class="attr">computed</span>: {</div><div
          class="line">    <span class="attr">tweenedCSSColor</span>: <span class="function"><span class="keyword">function</span> (<span
          class="params"></span>) </span>{</div><div class="line">      <span class="keyword">return</span> <span
          class="keyword">new</span> Color({</div><div class="line">        <span class="attr">red</span>: <span
          class="keyword">this</span>.tweenedColor.red,</div><div class="line">        <span class="attr">green</span>: <span
          class="keyword">this</span>.tweenedColor.green,</div><div class="line">        <span class="attr">blue</span>: <span
          class="keyword">this</span>.tweenedColor.blue,</div><div class="line">        <span class="attr">alpha</span>: <span
          class="keyword">this</span>.tweenedColor.alpha</div><div class="line">      }).toCSS()</div><div class="line">    }</div><div
          class="line">  },</div><div class="line">  <span class="attr">methods</span>: {</div><div
          class="line">    <span class="attr">updateColor</span>: <span class="function"><span
          class="keyword">function</span> (<span class="params"></span>) </span>{</div><div class="line">      <span
          class="keyword">this</span>.color = <span class="keyword">new</span> Color(<span class="keyword">this</span>.colorQuery).toRGB()</div><div
          class="line">      <span class="keyword">this</span>.colorQuery = <span class="string">''</span></div><div
          class="line">    }</div><div class="line">  }</div><div class="line">})</div></pre>
      </div>
    </div>
  </div>
</template>

<style>
  .example-7-color-preview {
    display: inline-block;
    width: 50px;
    height: 50px;
  }
</style>

<script>
  import TWEEN from '../../assets/js/libs/tween'
  import Color from '../../assets/js/libs/color'

  export default{
    name: 'transitionModal',
    data () {
      return {
        colorQuery: '',
        color: {
          red: 0,
          green: 0,
          blue: 0,
          alpha: 1
        },
        tweenedColor: {}
      }
    },
    created: function () {
      this.tweenedColor = Object.assign({}, this.color)
    },
    watch: {
      color: function () {
        function animate (time) {
          window.requestAnimationFrame(animate)
          TWEEN.update(time)
        }
        new TWEEN.Tween(this.tweenedColor)
          .to(this.color, 750)
          .start()
        animate()
      }
    },
    computed: {
      tweenedCSSColor: function () {
        return new Color({
          red: this.tweenedColor.red,
          green: this.tweenedColor.green,
          blue: this.tweenedColor.blue,
          alpha: this.tweenedColor.alpha
        }).toCSS()
      }
    },
    methods: {
      updateColor: function () {
        this.color = new Color(this.colorQuery).toRGB()
        this.colorQuery = ''
      }
    }
  }
</script>

