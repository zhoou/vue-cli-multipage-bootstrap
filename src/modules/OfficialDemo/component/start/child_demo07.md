::: demo v-bind 指令将 todo 传到每一个重复的组件中

``` html
<template>
  <div class="demo" v-cloak>
    <ol>
      <!-- Now we provide each todo-item with the todo object    -->
      <!-- it's representing, so that its content can be dynamic -->
      <item :key="index" v-for="(item,index) in groceryList" v-bind:todo="item"></item>
    </ol>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.component('item', {
  props: ['todo'],
  template: '<li>{{ todo.itemname }}</li>'
})

export default {
  name: 'VStartDemo07',
  data () {
    return {
      groceryList: [
        { itemname: 'Learn JavaScript' },
        { itemname: 'Learn Vue' },
        { itemname: 'Build something awesome' }
      ]
    }
  }
}
</script>
```
:::