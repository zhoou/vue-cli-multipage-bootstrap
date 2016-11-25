import Vue from 'vue'
import startCpm from './startCpm'

require('assets/css/bootstrap.min.css')
require('assets/css/Common.css')

new Vue({   // eslint-disable-line no-new
  el: '#startdemo',
  template: '<startCpm />',
  components: {startCpm}
})

