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
            <pre>
              <code class="html">
                &lt;script src="https://unpkg.com/tween.js@16.3.4"&gt;&lt;/script&gt;
                &lt;script src="https://unpkg.com/color-js@1.0.3/color.js"&gt;&lt;/script&gt;
                &lt;div id="example-7"&gt;
                  &lt;input
                    v-model="colorQuery"
                    v-on:keyup.enter="updateColor"
                    placeholder="Enter a color"
                  &gt;
                  &lt;button v-on:click="updateColor"&gt;Update&lt;/button&gt;
                &lt;p>Preview:&lt;/p&gt;
                &lt;span
                    v-bind:style="{ backgroundColor: tweenedCSSColor }"
                    class="example-7-color-preview"
                  &gt;&lt;/span&gt;
                  &lt;p&gt;{{ <label>tweenedCSSColor</label> }}&lt;/p&gt;
                &lt;/div&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre>
          <code class="javascript">
            var Color = net.brehaut.Color
            new Vue({
              el: '#example-7',
              data: {
                colorQuery: '',
                color: {
                  red: 0,
                  green: 0,
                  blue: 0,
                  alpha: 1
                },
                tweenedColor: {}
              },
              created: function () {
                this.tweenedColor = Object.assign({}, this.color)
              },
              watch: {
                color: function () {
                  function animate (time) {
                    requestAnimationFrame(animate)
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
            })
          </code>
        </pre>
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
  import TWEEN from 'jspath/libs/tween'
  import Color from 'jspath/libs/color'

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

