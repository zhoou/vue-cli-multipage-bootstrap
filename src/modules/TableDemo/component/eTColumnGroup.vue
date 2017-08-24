<template>
  <div class="panel panel-primary">
    <div class="panel-heading">{{ title }}</div>
    <div class="panel-body" style="padding:0;">
      <v-easyTable :width="tables.width"
                 :minWidth="tables.minWidth"
                 :height="tables.height"
                 :minHeight="tables.minHeight"
                 :multipleSort="tables.multipleSort"
                 :titleRows="tables.titleRows"
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
        title: 'Column Group',
        tables: {
          width: 1140,
          minWidth: 600,
          height: 600,
          minHeight: 300,
          tableData: [],
          titleRows: [
            [
              {fields: ['name', 'gender', 'birthday', 'height'], title: '个人资料', width: 660, align: 'center', isFrozen: false, colspan: 6},
              {fields: ['hobby', 'job'], title: '其他', width: 450, align: 'center', isFrozen: false, colspan: 2},
              {fields: ['address'], title: '家庭地址', width: 300, align: 'center', isFrozen: false}
            ], // 第一行表头
            [
              {fields: ['name', 'gender', 'birthday', 'height'], title: '基本资料', width: 360, align: 'center', isFrozen: false, colspan: 4},
              {fields: ['email', 'tel'], title: '通讯录', width: 300, align: 'center', isFrozen: false, colspan: 2},
              {fields: ['hobby'], title: '爱好', width: 300, align: 'center', isFrozen: false},
              {fields: ['job'], title: '职业', width: 150, align: 'center', isFrozen: false}
            ], // 第二行表头
            [
              {fields: ['name'], title: '姓名', width: 80, align: 'center', isFrozen: false},
              {fields: ['gender'], title: '性别', width: 80, align: 'center', isFrozen: false},
              {fields: ['birthday'], title: '出生日期', width: 100, align: 'center', isFrozen: false},
              {fields: ['height'], title: '身高', width: 100, align: 'center', isFrozen: false},
              {fields: ['email'], title: '邮箱', width: 150, align: 'center', isFrozen: false},
              {fields: ['tel'], title: '手机号码', width: 150, align: 'center', isFrozen: false}
            ] // 第三行表头
          ],
          columns: [
            {field: 'name', title: '姓名', width: 80, align: 'center', isFrozen: false},
            {field: 'gender', title: '性别', width: 80, align: 'center', isFrozen: false},
            {field: 'birthday', title: '出生日期', width: 100, align: 'center', isFrozen: false},
            {field: 'height', title: '身高', width: 100, align: 'center', isFrozen: false},
            {field: 'tel', title: '手机号码', width: 150, align: 'center', isFrozen: false},
            {field: 'email', title: '邮箱', width: 150, align: 'center', isFrozen: false},
            {field: 'hobby', title: '爱好', width: 300, align: 'center', isFrozen: false},
            {field: 'job', title: '职业', width: 150, align: 'center', isFrozen: false},
            {field: 'address', title: '家庭地址', width: 300, align: 'center', isFrozen: false}
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
