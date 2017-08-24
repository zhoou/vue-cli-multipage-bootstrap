<template>
  <div class="panel panel-primary">
      <div class="panel-heading">二、Vue.js 基础</div>
      <div class="panel-body">
        <div class="bs-example">
          <h4>在模板中绑定表达式是非常便利的，但是它们实际上只用于简单的操作。任何复杂逻辑应当使用计算属性。</h4>
          <demoCpm08></demoCpm08>
        </div>
        <div class="bs-example">
          <h4>通过 watch 选项，来响应数据的变化。</h4>
          <demoCpm09></demoCpm09>
        </div>
        <div class="bs-example">
          <h4>绑定-HTML-Class</h4>
          <demoCpm10></demoCpm10>
        </div>
        <div class="bs-example">
          <h4>列表渲染：todo list 完整的例子</h4>
          <demoCpm11></demoCpm11>
        </div>
        <div class="bs-example">
          <h4>v-on 指令监听 DOM 事件来触发一些 JavaScript 代码</h4>
          <demoCpm12></demoCpm12>
        </div>
        <div class="pagelink">
          <a href="app.html#/startdemo" class="btn">&lt;&lt;基础篇: base</a>
          <a href="app.html#/improvedemo" class="btn">提高篇：improve&gt;&gt;</a>
        </div>
      </div>
    </div>
</template>

<script>
import $ from 'jquery'
import hljs from 'highlight.js'

import demoCpm08 from './child_demo01'
import demoCpm09 from './child_demo02'
import demoCpm10 from './child_demo03'
import demoCpm11 from './child_demo04'
import demoCpm12 from './child_demo05'

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
