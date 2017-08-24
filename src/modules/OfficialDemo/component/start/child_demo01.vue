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
        <pre>
          <code class="html">
            &lt;div id="app"&gt;
              {{ <label>message</label> }}
            &lt;/div&gt;
          </code>
        </pre>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre>
          <code class="javascript">
            var app = new Vue({
              el: '#app',
              data: {
                message: 'Hello Vue!'
              }
            })
          </code>
        </pre>
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
