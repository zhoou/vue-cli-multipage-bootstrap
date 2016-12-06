<template id="basetable">
  <div class="panel panel-primary">
    <div class="panel-heading">{{ title }}</div>
    <div class="panel-body">
      <div class="bs-example">
        <h4>课程表</h4>
        <vTable :configs='settings'></vTable>
      </div>
    </div>
  </div>
</template>

<script>
  import vTable from 'components/Common/vTable'
  export default {
    name: 'basetable',
    data () {
      return {
        settings: {
          tbTitle: '班级课表',
          showTbTitle: true,
          tbheads: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
          tbData: {
            '第1节': ['C 语言', 'C# 语言', 'JavaScript 编程', 'Html5 实践', 'Android 开发', '', ''],
            '第2节': ['Html5 实践', 'JavaScript 编程', 'C 语言', 'C# 语言', 'Android 开发', '', ''],
            '第3节': ['C 语言', 'C# 语言', 'JavaScript 编程', 'Html5 实践', 'Android 开发', '', ''],
            '第4节': ['Html5 实践', 'JavaScript 编程', 'C 语言', 'C# 语言', 'Android 开发', '', ''],
            '第5节': ['C 语言', 'C# 语言', 'JavaScript 编程', 'Html5 实践', 'Android 开发', '', '']
          },
          isNote: true,
          notes: '好好学习Vue，天天向上！',
          showLogo: true,
          showTab: true,
          css: {
            tableClass: 'table table-bordered',
            topTitleClass: 'vtb_toptitle',
            titleClass: 'vtb_title',
            logoClass: 'vtb_logo',
            colColor: ['bg-success', 'bg-warning', 'bg-info', 'bg-danger ', 'bg-success'], // 表列样式
            pager: 'vtb_pager'
          }
        },
        title: 'Table 基础',
        isShow: false
      }
    },
    components: {
      vTable
    }
  }
</script>
