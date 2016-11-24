import Vue from 'vue'
import startCmp from './startCmp'
require('../../assets/css/bootstrap.min.css')
require('../../assets/css/Common.css')

new Vue({   // eslint-disable-line no-new
  el: '#startdemo',
  template: '<startCmp />',
  components: {startCmp}
})

