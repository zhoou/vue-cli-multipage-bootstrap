::: demo 列表渲染：todo list 完整的例子

``` html
<template>
  <div class="demo" v-cloak>
    <input v-model="newTodoText" v-on:keyup.enter="addNewTodo" placeholder="Add a todo">
    <ul>
      <li is="liCpm" v-for="(todo, index) in todos" v-bind:title="todo" v-on:remove="todos.splice(index, 1)"></li>
    </ul>
  </div>
</template>

<script>
import liCpm from 'components/Common/liCpm_01'

export default {
  name: 'VBaseDemo04',
  data () {
    return {
      newTodoText: '',
      todos: [
        'Do the dishes',
        'Take out the trash',
        'Mow the lawn'
      ]
    }
  },
  methods: {
    addNewTodo: function () {
      this.todos.push(this.newTodoText)
      this.newTodoText = ''
    }
  },
  components: {
    liCpm
  }
}
</script>
```
:::