<template id="vuex">
  <div class="panel panel-primary">
    <div class="panel-heading">{{ headtitle }}</div>
    <div class="panel-body">
      <div class="bs-example">
        <h4>最基本的 Vuex 记数应用示例</h4>
        <countCpm></countCpm>
      </div>
    </div>
  </div>
</template>

<script>
  import countCpm from 'components/Vuex/countApp'

  export default{
    name: 'vuex',
    data () {
      return {
        headtitle: 'Vuex Learn Demo'
      }
    },
    components: {
      countCpm
    }
  }
</script>
