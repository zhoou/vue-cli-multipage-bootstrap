import Vue from 'vue'
import baseCmp from './baseCmp'
require('../../assets/css/bootstrap.min.css')
require('../../assets/css/Common.css')

new Vue({   // eslint-disable-line no-new
  el: '#basedemo',
  template: '<baseCmp />',
  components: {baseCmp}
})

