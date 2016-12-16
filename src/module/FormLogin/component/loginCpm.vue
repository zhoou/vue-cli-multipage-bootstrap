<template>
  <div class="panel panel-primary">
    <div class="panel-heading">{{ title }}</div>
    <div class="panel-body">
        <v-login :login-api='loginApi' @backSubmit='submitResult'></v-login>
    </div>
  </div>
</template>
<script>
  import 'bootstrap-validator'
  import vLogin from 'components/Common/vLogin'
  export default {
    data () {
      return {
        title: 'Login',
        loginApi: 'http://api.zhoou.com/login/'
      }
    },
    components: {
      vLogin
    },
    methods: {
      submitResult (data) {
        console.log(data)
      }
    }
  }
</script>
