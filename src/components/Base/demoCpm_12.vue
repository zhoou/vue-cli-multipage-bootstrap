<template id="demo12">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="demo" v-cloak>
            <button v-on:click="counter += 1">增加 1</button>
            <p>这个按钮被点击了 {{ counter }} 次。</p>
            <button v-on:click="greet" :modalshow="modalshow">Greet</button>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
            <pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span
              class="attr">id</span>=<span class="string">"todo-list-example"</span>&gt;</span></div><div class="line">  <span
              class="tag">&lt;<span class="name">input</span></span></div><div class="line">    <span class="attr">v-model</span>=<span
              class="string">"newTodoText"</span></div><div class="line">    <span class="attr">v-on:keyup.enter</span>=<span
              class="string">"addNewTodo"</span></div><div class="line">    <span class="attr">placeholder</span>=<span
              class="string">"Add a todo"</span></div><div class="line">  &gt;</div><div class="line">  <span
              class="tag">&lt;<span class="name">ul</span>&gt;</span></div><div class="line">    <span
              class="tag">&lt;<span class="name">li</span></span></div><div class="line">      <span
              class="attr">is</span>=<span class="string">"todo-item"</span></div><div class="line">      <span
              class="attr">v-for</span>=<span class="string">"(todo, index) in todos"</span></div><div class="line">      <span
              class="attr">v-bind:title</span>=<span class="string">"todo"</span></div><div class="line">      <span
              class="attr">v-on:remove</span>=<span class="string">"todos.splice(index, 1)"</span></div><div
              class="line">    &gt;<span class="tag">&lt;/<span class="name">li</span>&gt;</span></div><div
              class="line">  <span class="tag">&lt;/<span class="name">ul</span>&gt;</span></div><div class="line"><span
              class="tag">&lt;/<span class="name">div</span>&gt;</span></div></pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre><div class="line">Vue.component(<span class="string">'todo-item'</span>, {</div><div class="line">  <span
          class="attr">template</span>: <span class="string">'\</span></div><div class="line">    &lt;li&gt;\</div><div
          class="line">      {{ <label>title</label> }}\</div><div class="line">      &lt;button v-on:click="$emit(\'remove\')"&gt;X&lt;/button&gt;\</div><div
          class="line">    &lt;/li&gt;\</div><div class="line">  ',</div><div class="line">  <span
          class="attr">props</span>: [<span class="string">'title'</span>]</div><div class="line">})</div><div
          class="line"></div><div class="line"><span class="keyword">new</span> Vue({</div><div class="line">  <span
          class="attr">el</span>: <span class="string">'#todo-list-example'</span>,</div><div class="line">  <span
          class="attr">data</span>: {</div><div class="line">    <span class="attr">newTodoText</span>: <span
          class="string">''</span>,</div><div class="line">    <span class="attr">todos</span>: [</div><div
          class="line">      <span class="string">'Do the dishes'</span>,</div><div class="line">      <span
          class="string">'Take out the trash'</span>,</div><div class="line">      <span
          class="string">'Mow the lawn'</span></div><div class="line">    ]</div><div class="line">  },</div><div
          class="line">  <span class="attr">methods</span>: {</div><div class="line">    <span
          class="attr">addNewTodo</span>: <span class="function"><span class="keyword">function</span> (<span
          class="params"></span>) </span>{</div><div class="line">      <span
          class="keyword">this</span>.todos.push(<span class="keyword">this</span>.newTodoText)</div><div class="line">      <span
          class="keyword">this</span>.newTodoText = <span class="string">''</span></div><div class="line">    }</div><div
          class="line">  }</div><div class="line">})</div></pre>
      </div>
    </div>
    <vmodal :show='show' v-on:changeState="changeShowState">
      <div slot="slotA">
        <p>请选择跟进方式: </p>
        <p>
          <label><input type="radio" name="followType" v-model="followType" value="1"> 电话跟进</label><br>
          <label><input type="radio" name="followType" v-model="followType" value="2"> 上门跟进</label>
        </p>
      </div>
      <div slot="slotB">
        <p>
          <input type="checkbox" v-model="abandonReasons" value="1">信息不真实
          <input type="checkbox" v-model="abandonReasons" value="2">没有实体店
          <input type="checkbox" v-model="abandonReasons" value="3">恶意注册
        </p>
      </div>
      <div slot="slotC">
        <p>告诉我们为啥要删除它: </p>
        <p>
          姓名: <input type="text" v-model="name"> <br>
          原因: <input type="text" v-model="reason">
        </p>
      </div>
    </vmodal>
  </div>
</template>

<script>
  import vmodal from 'components/Common/modalCpm'

  export default{
    name: 'demo12',
    data () {
      return {
        counter: 0,
        show: false
      }
    },
    components: {
      vmodal
    },
    // 在 `methods` 对象中定义方法
    methods: {
      greet: function (event) {
        // `this` 在方法里指当前 Vue 实例
        // 'alerts('Hello ' + this.name + '!'+' event.target.tagName:'+event.target.tagName)'
        this.show = true
      },
      changeShowState (state) {
        this.show = state
      }
    }
  }
</script>
