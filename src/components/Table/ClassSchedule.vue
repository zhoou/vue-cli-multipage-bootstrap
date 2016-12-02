<template id="classSchedule">
  <div>
    <header class="mui-bar mui-bar-nav" id="head">
      <a @click="back" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" id="back"></a>
    </header>
    <div class="mui-content">
      <table class="table table-bordered">
        <thead>
        <tr v-if="showTbTitle">
          <td colspan="8"><h1 class="mui-title">班级课表</h1></td>
        </tr>
        <tr>
          <th width="18px">#</th>
          <th v-for="item in headers"> 星期{{ item }}</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="item1 in lessonEachDay">
            <th>第
              <br> {{ item1 }}
              <br>节
              <br>
            </th>
            <td v-for="item2 in classData" :class="setColor[item2.id - 1]"> {{ item2.class }} </td>
          </tr>
          <tr v-if="special">
            <th>备<br>注</th>
            <td colspan="7" class="bg-ss">{{ text }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'classSchedule',
    data () {
      return {
        headers: ['一', '二', '三', '四', '五', '六', '日'],
        setColor: ['bg-success', 'bg-warning', 'bg-info', 'bg-danger ', 'bg-success'],
        showTbTitle: true,
        lessonEachDay: 6,
        classData: [
        {id: 1, 'class': 'C 语言', 'teacher': 'zhou'},
        {id: 2, 'class': 'C1 语言', 'teacher': 'zhou'},
        {id: 3, 'class': 'C2 语言', 'teacher': 'zhou'},
        {id: 4, 'class': 'C3 语言', 'teacher': 'zhou'},
        {id: 5, 'class': 'C4 语言', 'teacher': 'zhou'},
        {id: 6, 'class': '', 'teacher': ''},
        {id: 7, 'class': '', 'teacher': ''}
        ],
        special: true,
        text: 'please attention '
      }
    },
    methods: {
      back () {
        // coding...
      }
    },
    computed: {
      // coding。。
    }
  }
</script>
<style>
  .mui-title{
    text-align: center;
    font-weight: bold;
    color: #333;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
  }
  .mui-content table>thead>tr th {
    text-align: center;
  }
</style>
