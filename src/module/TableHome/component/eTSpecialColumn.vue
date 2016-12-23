<template>
  <div class="panel panel-primary">
    <div class="panel-heading">{{ title }}</div>
    <div class="panel-body" style="padding:0;">
      <v-easyTable
        :width="tables.width"
        :minWidth="tables.minWidth"
        :height="tables.height"
        :minHeight="tables.minHeight"
        :multipleSort="tables.multipleSort"
        :columns="tables.columns"
        :tableData="tables.tableData"
      ></v-easyTable>
    </div>
  </div>
</template>

<script>
  import vEasyTable from 'components/Common/vEasyTable'
  import mockData from '../manage/simpleData'
  export default {
    data () {
      return {
        title: 'Base Table',
        tables: {
          width: 1140,
          minWidth: 600,
          height: 600,
          minHeight: 300,
          tableData: [],
          columns: [
            {field: 'img', title: '头像', width: 50, align: 'center', type: 'image'},
            {field: 'name', title: '姓名', width: 80, align: 'center'},
            {field: 'gender', title: '性别', width: 50, align: 'center'},
            {field: 'nickname', title: '昵称', width: 80, align: 'center'},
            {field: 'birthday', title: '出生日期', width: 100, align: 'center'},
            {field: 'height', title: '身高', width: 80, align: 'center', isFrozen: false},
            {field: 'tel', title: '手机号码', width: 100, align: 'center', isFrozen: false},
            {field: 'email', title: '邮箱', width: 120, align: 'center', isFrozen: false},
            {field: 'hobby', title: '爱好', width: 200, align: 'center', isFrozen: false},
            {field: 'address', title: '家庭地址', width: 260, align: 'center', isFrozen: false},
            {field: 'job', title: '职业', width: 150, align: 'center', isFrozen: false}
          ]
        }
      }
    },
    methods: {
      // 模拟获取数据
      getTableData () {
        let self = this
        setTimeout(function () {
          self.tables.tableData = mockData
        }, 10)
      }
    },
    created () {
      this.getTableData()
    },
    components: {
      vEasyTable
    }
  }
</script>
