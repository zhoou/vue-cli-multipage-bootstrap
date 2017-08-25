<template>
  <div class="panel panel-primary">
      <div class="panel-heading">二、Vue.js 基础</div>
      <div class="panel-body">
        <div class="bs-example">
          <demoCpm08></demoCpm08>
        </div>
        <div class="bs-example">
          <demoCpm09></demoCpm09>
        </div>
        <div class="bs-example">
          <demoCpm10></demoCpm10>
        </div>
        <div class="bs-example">
          <demoCpm11></demoCpm11>
        </div>
        <div class="bs-example">
          <demoCpm12></demoCpm12>
        </div>
        <div class="pagelink">
          <a href="#startdemo" class="btn">&lt;&lt;基础篇: base</a>
          <a href="#improvedemo" class="btn">提高篇：improve&gt;&gt;</a>
        </div>
      </div>
    </div>
</template>

<script>
import $ from 'jquery'
import hljs from 'highlight.js'

import demoCpm08 from './child_demo01.md'
import demoCpm09 from './child_demo02.md'
import demoCpm10 from './child_demo03.md'
import demoCpm11 from './child_demo04.md'
import demoCpm12 from './child_demo05.md'

export default {
  name: 'VBaseDemo',
  components: {
    demoCpm08,
    demoCpm09,
    demoCpm10,
    demoCpm11,
    demoCpm12
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
