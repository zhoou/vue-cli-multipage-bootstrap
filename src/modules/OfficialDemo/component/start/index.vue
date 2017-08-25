<template>
  <div class="panel panel-primary">
      <div class="panel-heading">一、Vue.js 入门</div>
      <div class="panel-body">       
        <div class="bs-example">
          <demo-cmp01></demo-cmp01>
        </div>
        <div class="bs-example">
          <demo-cmp02></demo-cmp02>
        </div>
        <div class="bs-example">
          <demo-cmp03></demo-cmp03>
        </div>
        <div class="bs-example">
          <demo-cmp04></demo-cmp04>
        </div>
        <div class="bs-example">
          <demo-cmp05></demo-cmp05>
        </div>
        <div class="bs-example">
          <demo-cmp06></demo-cmp06>
        </div>
        <div class="bs-example">
          <demo-cmp07></demo-cmp07>
        </div>
        <div class="pagelink">
          <a href="#" class="btn">&lt;&lt;返回主页</a>
          <a href="#basedemo" class="btn">基础篇: base&gt;&gt;</a>
        </div>
      </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import hljs from 'highlight.js'

    import demoCmp01 from './child_demo01.md'
    import demoCmp02 from './child_demo02.md'
    import demoCmp03 from './child_demo03.md'
    import demoCmp04 from './child_demo04.md'
    import demoCmp05 from './child_demo05.md'
    import demoCmp06 from './child_demo06.md'
    import demoCmp07 from './child_demo07.md'

    export default {
      name: 'VStartDemo',
      components: {
        demoCmp01,
        demoCmp02,
        demoCmp03,
        demoCmp04,
        demoCmp05,
        demoCmp06,
        demoCmp07
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
