<template id="table">
  <table :class="css.tableClass">
    <thead>
      <tr v-if="showTbTitle" :class="css.topTitleClass">
        <td :colspan="colspanNum+1"><h1>{{ tbTitle }}</h1></td>
      </tr>
      <tr :class="css.titleClass">
        <th v-if="showLogo" :class="css.logoClass">#</th>
        <th v-for="item in tbheads"> {{ item }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(ritem, index) in tbdata">
        <th v-if="showLogo" :class="css.titleClass">{{ index }}</th>
        <td v-for="(item, index2) in ritem" :class="css.colColor[index2]"> {{ item }}</td>
      </tr>
      <tr v-if="showNoData">
        <td :colspan="colspanNum+1" style="text-align:center;background-color:#eee">
          <small>No data</small>
        </td>
      </tr>
      <tr v-if="isNote">
        <th v-if="showLogo" :class="css.titleClass">备<br>注</th>
        <td :colspan="colspanNum" class="bg-ss">{{ notes }}</td>
      </tr>
      <tr v-if="showTab">
        <td :colspan="colspanNum+1">
          <nav>
            <ul :class="css.pager">
              <li><a href="javascript:void(0)">Previous</a></li>
              <li><a href="javascript:void(0)">Next</a></li>
            </ul>
          </nav>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
  export default {
    name: 'table',
    props: {
      configs: {
        type: Object,
        required: true,
        default: function () {
          return {
            showTbTitle: true,
            tbTitle: 'welcome to zhoou\'s table space'
          }
        }
      }
    },
    data () {
      return {
        tbTitle: this.configs.tbTitle,  // 表名
        showTbTitle: this.configs.showTbTitle,  // 是否显示表头
        tbheads: this.configs.tbheads,    // 表头列表
        tbdata: this.configs.tbData,  // 数据
        isNote: this.configs.isNote,  // 是否显示备注
        notes: this.configs.notes,   // 备注信息
        css: this.configs.css,       // 加载样式
        showLogo: this.configs.showLogo,  // 是否显示含logo的列
        showTab: this.configs.showTab,   // 显示分页
        showNoData: false  // 无数据时显示的内容
      }
    },
    computed: {
      colspanNum () {
        return this.tbheads ? this.tbheads.length : 0
      }
    },
    mounted () {
      this.$nextTick(function () { // 保证 this.$el 已经插入文档
        if (this.tbdata === null || this.tbdata === undefined) {
          this.showNoData = true
        }
      })
    }
  }
</script>
<style>

</style>
