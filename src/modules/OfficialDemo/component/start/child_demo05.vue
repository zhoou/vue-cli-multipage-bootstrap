<template id="demo05">
  <div class="row">
    <div class="col-xs-4">
      <div class="demo" v-cloak>
        <p>{{ message }}</p>
        <button v-on:click="reverseMessage" class="btn btn-info">Reverse Message</button>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
      <div class="highlight">
        <pre>
          <code class="html">
            &lt;div id="app-5"&gt;
              &lt;p&gt;{{ <label>message</label> }}&lt;/p&gt;
            &lt;button v-on:click="reverseMessage"&gt;Reverse Message&lt;/button&gt;
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
            var app5 = new Vue({
              el: '#app-5',
              data: {
                message: 'Hello Vue.js!'
              },
              methods: {
                reverseMessage: function () {
                  this.message = this.message.split('').reverse().join('')
                }
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
    name: 'demo05',
    data () {
      return {
        message: 'Hello Vue.js!'
      }
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  }
</script>
