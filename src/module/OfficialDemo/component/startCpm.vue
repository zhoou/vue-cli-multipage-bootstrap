<template id="StartDemo">
  <div class="panel panel-primary">
      <div class="panel-heading">一、Vue.js 入门</div>
      <div class="panel-body">
        <div class="bs-example">
          <h4>采用简洁的模板语法来声明式的将数据渲染进 DOM 的系统</h4>
          <demoCmp01></demoCmp01>
        </div>
        <div class="bs-example">
          <h4>除了绑定插入的文本内容，我们还可以采用这样的方式绑定 DOM 元素属性</h4>
          <demoCmp02></demoCmp02>
        </div>
        <div class="bs-example">
          <h4>v-if 控制切换一个元素的显示</h4>
          <demoCmp03></demoCmp03>
        </div>
        <div class="bs-example">
          <h4>v-for 指令绑定数据到数据来渲染一个列表</h4>
          <demoCmp04></demoCmp04>
        </div>
        <div class="bs-example">
          <h4>v-on 指令绑定一个监听事件用于调用我们 Vue 实例中定义的方法</h4>
          <demoCmp05></demoCmp05>
        </div>
        <div class="bs-example">
          <h4>v-model 指令，它使得在表单输入和应用状态中做双向数据绑定</h4>
          <demoCmp06></demoCmp06>
        </div>
        <div class="bs-example">
          <h4>v-bind 指令将 todo 传到每一个重复的组件中</h4>
          <demoCmp07></demoCmp07>
        </div>
        <div class="pagelink">
          <a href="app.html#/" class="btn">&lt;&lt;返回主页</a>
          <a href="app.html#/basedemo" class="btn">基础篇: base&gt;&gt;</a>
        </div>
      </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import hljs from 'jspath/libs/highlight.pack.js'

    import demoCmp01 from 'components/Start/demoCpm_01'
    import demoCmp02 from 'components/Start/demoCpm_02'
    import demoCmp03 from 'components/Start/demoCpm_03'
    import demoCmp04 from 'components/Start/demoCpm_04'
    import demoCmp05 from 'components/Start/demoCpm_05'
    import demoCmp06 from 'components/Start/demoCpm_06'
    import demoCmp07 from 'components/Start/demoCpm_07'

    export default{
      name: 'StartDemo',
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
