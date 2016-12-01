<template id="vuex">
  <div class="panel panel-primary">
    <div class="panel-heading">{{ headtitle }}</div>
    <div class="panel-body">
      <div class="bs-example">
        <h4>最基本的 Vuex 记数应用示例</h4>
        <countCpm></countCpm>
      </div>
      <div class="bs-example">
        <h4>Vuex mapState</h4>
        <mapStateCpm></mapStateCpm>
      </div>
      <div class="bs-example">
        <h4>Vuex Getters</h4>
        <gettersCpm></gettersCpm>
      </div>
      <div class="bs-example">
        <h4>Vuex Mutations</h4>
        <mutationsCpm></mutationsCpm>
      </div>
      <div class="bs-example">
        <h4>Vuex Actions</h4>
        <actionsCpm></actionsCpm>
      </div>
      <div class="bs-example">
        <h4>Vuex Modules</h4>
        <modulesCpm></modulesCpm>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import hljs from 'jspath/libs/highlight.pack.js'

  import countCpm from 'components/Vuex/countApp'
  import mapStateCpm from 'components/Vuex/mapStateCpm'
  import gettersCpm from 'components/Vuex/gettersCpm'
  import mutationsCpm from 'components/Vuex/mutationsCpm'
  import actionsCpm from 'components/Vuex/actionsCpm'
  import modulesCpm from 'components/Vuex/modulesCpm'

  export default{
    name: 'vuex',
    data () {
      return {
        headtitle: 'Vuex Learn Demo'
      }
    },
    components: {
      countCpm,
      mapStateCpm,
      gettersCpm,
      mutationsCpm,
      actionsCpm,
      modulesCpm
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
