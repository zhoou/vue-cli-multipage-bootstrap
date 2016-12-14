<template>
  <div class="panel panel-primary">
    <div class="panel-heading">{{ title }}</div>
    <div class="panel-body">
        <v-login></v-login>
    </div>
  </div>
</template>
<script>
  import vLogin from 'components/Common/vLogin'
  export default {
    data () {
      return {
        title: 'Login'
      }
    },
    components: {
      vLogin
    }
  }
</script>
