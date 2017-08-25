<template>
  <div class="panel panel-primary">
    <div class="panel-heading">{{ headtitle }}</div>
    <div class="panel-body">
      <div class="bs-example">
        <countCpm></countCpm>
      </div>
      <div class="bs-example">
        <mapStateCpm></mapStateCpm>
      </div>
      <div class="bs-example">
        <gettersCpm></gettersCpm>
      </div>
      <div class="bs-example">
        <mutationsCpm></mutationsCpm>
      </div>
      <div class="bs-example">
        <actionsCpm></actionsCpm>
      </div>
      <div class="bs-example">
        <modulesCpm></modulesCpm>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import hljs from 'highlight.js'

import countCpm from './countApp.md'
import mapStateCpm from './mapStateCpm.md'
import gettersCpm from './gettersCpm.md'
import mutationsCpm from './mutationsCpm.md'
import actionsCpm from './actionsCpm.md'
import modulesCpm from './modulesCpm.md'

export default {
  name: 'Vvuex',
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
