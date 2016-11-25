import Vue from 'vue'
import indexCpm from './IndexCpm'

require('assets/css/bootstrap.min.css')
require('assets/css/Common.css')

new Vue({ // eslint-disable-line no-new
  template: '<indexCpm />',
  components: {indexCpm}
}).$mount('#home')
