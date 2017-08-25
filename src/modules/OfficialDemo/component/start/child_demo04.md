::: demo v-for 指令绑定数据到数据来渲染一个列表

``` html
<template>
  <div class="demo" v-cloak>
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'VStartDemo04',
    data () {
      return {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
      }
    }
  }
</script>
```
:::
