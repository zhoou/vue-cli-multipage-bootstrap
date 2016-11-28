<template id="demo07">
  <div class="row">
    <div class="col-xs-4">
      <div class="demo" v-cloak>
        <ol>
          <!-- Now we provide each todo-item with the todo object    -->
          <!-- it's representing, so that its content can be dynamic -->
          <item v-for="item in groceryList" v-bind:todo="item"></item>
        </ol>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
      <div class="highlight">
        <pre>
           <code class="html">
              &lt;div id="app-7"&gt;
                &lt;ol&gt;
                  &lt;!-- Now we provide each todo-item with the todo object    --&gt;
                  &lt;!-- it's representing, so that its content can be dynamic --&gt;
                  &lt;todo-item v-for="item in groceryList" v-bind:todo="item"&gt;&lt;/todo-item&gt;
                &lt;/ol&gt;
              &lt;/div&gt;
           </code>
        </pre>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre>
          <code class="javascript">
            Vue.component('todo-item', {
              props: ['todo'],
              template: '&lt;li&gt;{{ <label>todo.text</label> }}&lt;/li&gt;'
            })
            var app7 = new Vue({
              el: '#app-7',
              data: {
                groceryList: [
                  { text: 'Vegetables' },
                  { text: 'Cheese' },
                  { text: 'Whatever else humans are supposed to eat' }
                ]
              }
            })
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
    import Vue from 'vue'

    Vue.component('item', {
      props: ['todo'],
      template: '<li>{{ todo.itemname }}</li>'
    })

    export default{
      name: 'demo07',
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
