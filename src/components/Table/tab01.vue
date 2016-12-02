<template id="tab">
  <div >
    <h1>{{name}}</h1>
    <table class="table table-bordered">
      <thead>
      <tr>
        <th>id</th>
        <th>threadID</th>
        <th>threadName</th>
        <th>authorName</th>
        <th>text</th>
        <th>timestamp</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>m_1</td>
        <td>t_1</td>
        <td>Jing and Bill</td>
        <td>Bill</td>
        <td>Hey Jing, want to give a Flux talk at ForwardJS?</td>
        <td>2016-06-12</td>
      </tr>
      <tr>
        <td>m_1</td>
        <td>t_1</td>
        <td>Jing and Bill</td>
        <td>Bill</td>
        <td>Hey Jing, want to give a Flux talk at ForwardJS?</td>
        <td>2016-06-12</td>
      </tr>
      <tr>
        <td>m_1</td>
        <td>t_1</td>
        <td>Jing and Bill</td>
        <td>Bill</td>
        <td>Hey Jing, want to give a Flux talk at ForwardJS?</td>
        <td>2016-06-12</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'tab',
    data () {
      return {
        name: 'hello vue'
      }
    }
  }
</script>
