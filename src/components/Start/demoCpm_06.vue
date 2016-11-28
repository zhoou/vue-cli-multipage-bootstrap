<template id="demo06">
  <div class="row">
    <div class="col-xs-4">
      <div class="demo" v-cloak>
        <p>{{ message }}</p>
        <input v-model="message">
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
      <div class="highlight">
        <pre>
          <code class="html">
            &lt;div id="app-6"&gt;
              &lt;p&gt;{{ <label>message</label> }}&lt;/p&gt;
              &lt;input v-model="message"&gt;
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
            var app6 = new Vue({
              el: '#app-6',
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
      name: 'demo06',
      data () {
        return {
          message: 'Hello Vue!'
        }
      }
    }
</script>
