<template id="login">
  <form role="form" class="loginform" id="loginForm">
    <p>{{ title }}</p>
    <div class="content">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
            <input type="email" v-model="item.username" class="form-control" placeholder="Enter email" required pattern="^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$">
        </div>
        <div class="help-block with-errors"></div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></div>
          <input type="password" v-model="item.password" class="form-control" placeholder="Password" required>
        </div>
        <div class="help-block with-errors"></div>
      </div>
      <div class="operate">
        <button type="submit" class="btn btn-info" @click="btnSubmit"><span class="glyphicon glyphicon-off"></span> Submit</button>
      </div>
      <div></div>
    </div>
  </form>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'login',
    props: {
      loginApi: {
        type: String
      }
    },
    data () {
      return {
        title: 'Login',
        item: {}
      }
    },
    methods: {
      btnSubmit () {
        let self = this
        console.log('success! The Login Api : ' + self.loginApi)
        self.$http.post(self.loginApi, self.item).then((response) => {
          self.item = {}
          // success coding...
          let token = ''
          if (response && response.data) {
            let now = new Date()
            token = self.utilHelper.compile(self.item.username + now.toString())
          }
          self.$emit('backSubmit', {accesstoken: token})
        }, (response) => {
          self.$emit('backSubmit', {accesstoken: 'ERROR!'})
        }).catch(function (response) {
          console.log(response)
        })
      }
    },
    mounted () {
      $('#loginForm').validator()
    }
  }
</script>
<style>
  .loginform{
    width: 400px;
    margin: 0 auto;
    background-color:#eee;
  }
  .loginform p{
    background-color: #00CCFF;
    height: 60px;
    line-height: 60px;
    text-align:center;
    font-weight:bold;
    font-size:20px;
  }
  .loginform .content{
    padding:20px;
  }
  .loginform .operate{
    text-align: center;
  }
  .errors {
    color: red;
  }
  input.invalid { border-color: red; }
</style>
