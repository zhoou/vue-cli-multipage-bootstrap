::: demo 绑定-HTML-Class

``` html
<template>
  <div class="demo" v-cloak>
    <span v-bind:class="classObject">{{ message }}</span><br/>
    <span v-bind:style="styleObject">{{ message2 }}</span>
  </div>
</template>

<script>
    export default {
      name: 'VBaseDemo03',
      data () {
        return {
          message: 'Hello!',
          message2: 'Vue 2.0',
          isActive: true,
          success: true,
          error: null,
          styleObject: {
            color: 'red',
            fontSize: '13px'
          }
        }
      },
      computed: {
        classObject: function () {
          return {
            active: this.isActive && !this.error,
            'bg-success': this.success && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
          }
        }
      }
    }
</script>
```
:::

