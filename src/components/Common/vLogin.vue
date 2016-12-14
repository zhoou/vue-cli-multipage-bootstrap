<template id="login">
  <form role="form" class="loginform">
    <p>Login</p>
    <div class="content">
      <validity-group field="validation" v-model="validation" :validators="{
            required: { message: requiredErrorMsg },
            minlength: { rule: 1, message: minlengthErrorMsg },
            maxlength: { rule: 2, message: maxlengthErrorMsg }
          }">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon"><span class="glyphicon glyphicon-user"></span></div>
              <input type="email" class="form-control" id="username" placeholder="Enter email" @focusout="handleValidate">
          </div>
        </div>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></div>
            <input type="password" class="form-control" id="password1" placeholder="Password" @focusout="handleValidate">
          </div>
        </div>
      </validity-group>
      <div class="operate">
        <button type="submit" class="btn btn-info"><span class="glyphicon glyphicon-off"></span> Submit</button>
      </div>
      <ul class="errors">
        <li v-for="error in validation.result.errors">
          <p>{{error.message}}</p>
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
    export default {
      name: 'login',
      data () {
        return {
          validation: {
            result: {}
          }
        }
      },
      computed: {
        requiredErrorMsg: function () {
          return 'Required fruit !!'
        },
        minlengthErrorMsg: function () {
          return 'Please chose at least 1 fruit !!'
        },
        maxlengthErrorMsg: function () {
          return 'Please chose at most 2 fruits !!'
        }
      },
      methods: {
        handleValidate: function (e) {
          let $validity = e.target.$validity
          $validity.VueValidate()
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
