/**
 * Created by zhoou on 2016/11/21.
 */
import Vue from 'vue'
import improveCpm from './improveCpm'

require('../../assets/css/bootstrap.min.css')
require('../../assets/css/Common.css')

new Vue({   // eslint-disable-line no-new
  el: '#improve',
  template: '<improveCpm />',
  components: {
    improveCpm
  }
})
