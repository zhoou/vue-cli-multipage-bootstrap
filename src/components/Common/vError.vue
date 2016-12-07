<template>
    <div id="error" class="container">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
    export default{
      name: 'error',
      data () {
        return {
          msg: '404 !!'
        }
      }
    }
</script>
