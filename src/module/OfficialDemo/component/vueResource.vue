<template>
  <div class="panel panel-primary">
    <div class="panel-heading">{{ headtitle }}</div>
    <div class="panel-body">
      <div class="bs-example">
        <demo-resource></demo-resource>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  import hljs from 'jspath/libs/highlight.pack.js'

  import demoResource from 'components/VueResource/demoResource'
  export default {
    data () {
      return {
        headtitle: 'vue-resource Demo'
      }
    },
    components: {
      demoResource
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
