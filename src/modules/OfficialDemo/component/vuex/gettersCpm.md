::: demo Vuex Getters

``` html
<template>
  <div class="demo" v-cloak>
    <table class="table">
      <thead>
      <tr>
        <th>Id</th>
        <th>Text</th>
        <th>State</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in doneTodos">
        <td>{{ item.id }}</td>
        <td>{{ item.text }}</td>
        <td>{{ item.done }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'getters',
    computed: mapGetters({
      doneTodos: 'doneTodosCount'
    })
  }
</script>
```
:::
