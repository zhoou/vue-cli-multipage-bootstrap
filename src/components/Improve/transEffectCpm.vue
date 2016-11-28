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
            <pre>
              <code class="css">
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
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
            <pre>
              <code class="html">
                &lt;div id="example-1"&gt;
                  &lt;button @click="show = !show"&gt;
                    Toggle render
                  &lt;/button&gt;
                  &lt;transition name="slide-fade"&gt;
                    &lt;p v-if="show"&gt;hello&lt;/p&gt;
                &lt;/transition&gt;
                &lt;/div&gt;
              </code>
            </pre>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
          <div class="highlight">
            <pre>
              <code class="javascript">
                new Vue({
                  el: '#example-1',
                  data: {
                    show: true
                  }
                })
              </code>
            </pre>
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

