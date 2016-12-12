<template>
  <div class="panel panel-primary">
    <div class="panel-heading">{{ headtitle }}</div>
    <div class="panel-body">
      <div class="bs-example">
        <h4>Http Get 实例</h4>
        <get-resource></get-resource>
      </div>
      <div class="bs-example">
        <h4>Http jsonp 实例</h4>
        <jsonp-resource></jsonp-resource>
      </div>
      <div class="bs-example">
        <h4>Http Post 实例</h4>
        <post-resource></post-resource>
      </div>
      <div class="bs-example">
        <h4>Http Put 实例</h4>
        <put-resource></put-resource>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  import hljs from 'jspath/libs/highlight.pack.js'

  import getResource from 'components/VueResource/GetResource'
  import jsonpResource from 'components/VueResource/jsonpResource'
  import postResource from 'components/VueResource/postResource'
  import putResource from 'components/VueResource/putResource'
  export default {
    data () {
      return {
        headtitle: 'vue-resource Demo'
      }
    },
    components: {
      getResource,
      jsonpResource,
      postResource,
      putResource
    },
    mounted () {
      hljs.initHighlightingOnLoad()
      $(function () {
        $('pre code').each(function (i, block) {
          hljs.highlightBlock(block)
        })
      })
    }
  }
</script>
