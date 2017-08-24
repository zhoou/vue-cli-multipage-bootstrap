<template>
  <div id="demo02" class="row">
    <div class="col-xs-4">
      <div class="demo" v-cloak>
        <span v-bind:title="message">
          Hover your mouse over me for a few seconds to see my dynamically bound title!
        </span>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
      <div class="highlight">
        <pre>
          <code class="html">
            &lt;div id="app-2"&gt;
              &lt;span v-bind:title="message"&gt;
                Hover your mouse over me for a few seconds to see my dynamically bound title!
              &lt;/span&gt;
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
            var app2 = new Vue({
              el: '#app-2',
              data: {
                message: 'You loaded this page on ' + new Date()
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
    name: 'demo02',
    data () {
      return {
        message: 'You loaded this page on ' + new Date()
      }
    }
  }
</script>
