<template>
  <div class="panel panel-primary">
      <div class="panel-heading">三、Vue.js 提高</div>
      <div class="panel-body">
        <div class="bs-example">
          <next-tick-cpm></next-tick-cpm>
        </div>
        <div class="bs-example">
          <trans-effect-cpm></trans-effect-cpm>
        </div>
        <div class="bs-example">          
          <trans-state-cpm></trans-state-cpm>
        </div>
        <div class="pagelink">
          <a href="#startdemo" class="btn">&lt;&lt;基础篇: base</a>
          <a href="#advancedemo" class="btn">进阶篇：advance&gt;&gt;</a>
        </div>
      </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import hljs from 'highlight.js'

    import nextTickCpm from './nextTickCpm.md'
    import transEffectCpm from './transEffectCpm.md'
    import transStateCpm from './transStateCpm.md'

    export default {
      name: 'VImproveDemo',
      components: {
        nextTickCpm,
        transEffectCpm,
        transStateCpm
      },
      mounted () {
        this.$nextTick(() => {
          hljs.initHighlightingOnLoad()
          $(function () {
            $('pre code').each(function (i, block) {
              hljs.highlightBlock(block)
            })
          })
        })
      }
    }
</script>
