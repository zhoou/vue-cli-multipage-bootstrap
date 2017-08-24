<template>
  <div id="demo03" class="row">
    <div class="col-xs-4">
      <div class="demo" v-cloak>
        <p v-if="seen">Now you see me</p>
        <p v-if="notseen">Now you can't see me</p>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
      <div class="highlight">
        <pre>
          <code class="html">
            &lt;div id="app-3"&gt;
              &lt;p v-if="seen"&gt;Now you see me&lt;/p&gt;
              &lt;p v-if="notseen"&gt;Now you can't see me&lt;/p&gt;
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
            var app3 = new Vue({
              el: '#app-3',
              data: {
                seen: true,
                notseen: false
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
    name: 'demo03',
    data () {
      return {
        seen: true,
        notseen: false
      }
    }
  }
</script>
