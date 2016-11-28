<template id="demo12">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="demo" v-cloak>
            <button v-on:click="counter += 1">增加 1</button>
            <p>这个按钮被点击了 {{ counter }} 次。</p>
            <button v-on:click="greet" :modalshow="modalshow">Greet</button>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
            <pre>
              <code class="html">
                &lt;div id="example-1"&gt;
                  &lt;button v-on:click="counter += 1"&gt;增加 1&lt;/button&gt;
                  &lt;p>这个按钮被点击了 {{ <label>counter</label> }} 次。&lt;/p&gt;
                  &lt;button v-on:click="greet" :modalshow="modalshow"&gt;Greet&lt;/button&gt;
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
            var example1 = new Vue({
              el: '#example-1',
              data: {
                counter: 0,
                show: false
              },
              methods: {
                greet: function (event) {
                  // `this` 在方法里指当前 Vue 实例
                  // 'alerts('Hello ' + this.name + '!'+' event.target.tagName:'+event.target.tagName)'
                  this.show = true
                },
                changeShowState (state) {
                  this.show = state
                }
              }
            })
          </code>
        </pre>
      </div>
    </div>
    <vmodal :show='show' v-on:changeState="changeShowState">
      <div slot="slotA">
        <p>请选择跟进方式: </p>
        <p>
          <label><input type="radio" name="followType" v-model="followType" value="1"> 电话跟进</label><br>
          <label><input type="radio" name="followType" v-model="followType" value="2"> 上门跟进</label>
        </p>
      </div>
      <div slot="slotB">
        <p>
          <input type="checkbox" v-model="abandonReasons" value="1">信息不真实
          <input type="checkbox" v-model="abandonReasons" value="2">没有实体店
          <input type="checkbox" v-model="abandonReasons" value="3">恶意注册
        </p>
      </div>
      <div slot="slotC">
        <p>告诉我们为啥要删除它: </p>
        <p>
          姓名: <input type="text" v-model="name"> <br>
          原因: <input type="text" v-model="reason">
        </p>
      </div>
    </vmodal>
  </div>
</template>

<script>
  import vmodal from 'components/Common/modalCpm'

  export default{
    name: 'demo12',
    data () {
      return {
        counter: 0,
        show: false
      }
    },
    components: {
      vmodal
    },
    // 在 `methods` 对象中定义方法
    methods: {
      greet: function (event) {
        // `this` 在方法里指当前 Vue 实例
        // 'alerts('Hello ' + this.name + '!'+' event.target.tagName:'+event.target.tagName)'
        this.show = true
      },
      changeShowState (state) {
        this.show = state
      }
    }
  }
</script>
