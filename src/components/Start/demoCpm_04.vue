<template>
  <div id="demo04" class="row">
    <div class="col-xs-4">
      <div class="demo" v-cloak>
        <ol>
          <li v-for="todo in todos">
            {{ todo.text }}
          </li>
        </ol>
      </div>
    </div>
    <div class="col-xs-4">
      <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
      <div class="highlight">
        <pre>
          <code class="html">
            &lt;div id="app-4"&gt;
              &lt;ol&gt;
                &lt;li v-for="todo in todos"&gt;
                  {{ <label>todo.text</label> }}
                &lt;/li&gt;
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
              var app4 = new Vue({
                el: '#app-4',
                data: {
                  todos: [
                    { text: 'Learn JavaScript' },
                    { text: 'Learn Vue' },
                    { text: 'Build something awesome' }
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
  export default{
    name: 'demo04',
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
