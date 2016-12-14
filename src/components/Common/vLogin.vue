<template id="login">
  <form role="form" class="loginform" data-toggle="validator">
    <p>Login</p>
    <div class="content">
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
            <input type="email" class="form-control" id="username" placeholder="Enter email" required pattern="^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$">
        </div>
        <div class="help-block with-errors"></div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></div>
          <input type="password" class="form-control" id="password1" placeholder="Password" >
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
  import 'bootstrap-validator'
  export default {
    name: 'login',
    data () {
      return {
        // coding...
      }
    },
    methods: {
      btnSubmit () {
        console.log('success!')
      }
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
