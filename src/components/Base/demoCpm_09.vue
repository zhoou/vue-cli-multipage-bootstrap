<template id="demo09">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="demo" v-cloak>
            <p>
              Ask a yes/no question:
              <input v-model="question">
            </p>
            <p>{{ answer }}</p>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
            <pre><div class="line"><span class="tag">&lt;<span class="name">div</span> <span class="attr">id</span>=<span
              class="string">"watch-example"</span>&gt;</span></div><div class="line">  <span class="tag">&lt;<span
              class="name">p</span>&gt;</span></div><div class="line">    Ask a yes/no question:</div><div class="line">    <span
              class="tag">&lt;<span class="name">input</span> <span class="attr">v-model</span>=<span class="string">"question"</span>&gt;</span></div><div
              class="line">  <span class="tag">&lt;/<span class="name">p</span>&gt;</span></div><div class="line">  <span
              class="tag">&lt;<span class="name">p</span>&gt;</span>{{ <label>answer</label> }}<span class="tag">&lt;/<span
              class="name">p</span>&gt;</span></div><div class="line"><span class="tag">&lt;/<span class="name">div</span>&gt;</span></div></pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre><div class="line"><span class="comment">&lt;!-- Since there is already a rich ecosystem of ajax libraries    --&gt;</span></div><div
          class="line"><span
          class="comment">&lt;!-- and collections of general-purpose utility methods, Vue core --&gt;</span></div><div
          class="line"><span
          class="comment">&lt;!-- is able to remain small by not reinventing them. This also   --&gt;</span></div><div
          class="line"><span
          class="comment">&lt;!-- gives you the freedom to just use what you're familiar with. --&gt;</span></div><div
          class="line"><span class="tag">&lt;<span class="name">script</span> <span class="attr">src</span>=<span
          class="string">"https://unpkg.com/axios@0.12.0/dist/axios.min.js"</span>&gt;</span><span
          class="undefined"></span><span class="tag">&lt;/<span class="name">script</span>&gt;</span></div><div
          class="line"><span class="tag">&lt;<span class="name">script</span> <span class="attr">src</span>=<span
          class="string">"https://unpkg.com/lodash@4.13.1/lodash.min.js"</span>&gt;</span><span
          class="undefined"></span><span class="tag">&lt;/<span class="name">script</span>&gt;</span></div><div
          class="line"><span class="tag">&lt;<span class="name">script</span>&gt;</span><span class="javascript"></span></div><div
          class="line"><span class="keyword">var</span> watchExampleVM = <span class="keyword">new</span> Vue({</div><div
          class="line">  <span class="attr">el</span>: <span class="string">'#watch-example'</span>,</div><div
          class="line">  <span class="attr">data</span>: {</div><div class="line">    <span class="attr">question</span>: <span
          class="string">''</span>,</div><div class="line">    <span class="attr">answer</span>: <span class="string">'I cannot give you an answer until you ask a question!'</span></div><div
          class="line">  },</div><div class="line">  <span class="attr">watch</span>: {</div><div class="line"> &nbsp;  <span
          class="comment">// 如果 question 发生改变，这个函数就会运行</span></div><div class="line">    question: <span
          class="function"><span class="keyword">function</span> (<span
          class="params">newQuestion</span>) </span>{</div><div class="line">      <span class="keyword">this</span>.answer = <span
          class="string">'Waiting for you to stop typing...'</span></div><div class="line">      <span class="keyword">this</span>.getAnswer()</div><div
          class="line">    }</div><div class="line">  },</div><div class="line">  <span
          class="attr">methods</span>: {</div><div class="line"> &nbsp;  <span class="comment">// _.debounce 是一个通过 lodash 限制操作频率的函数。</span></div><div
          class="line"> &nbsp;  <span class="comment">// 在这个例子中，我们希望限制访问yesno.wtf/api的频率</span></div><div class="line"> &nbsp;  <span
          class="comment">// ajax请求直到用户输入完毕才会发出</span></div><div class="line"> &nbsp;  <span class="comment">// 学习更多关于 _.debounce function (and its cousin</span></div><div
          class="line">    <span class="comment">// _.throttle), 参考: https://lodash.com/docs#debounce</span></div><div
          class="line">    getAnswer: _.debounce(</div><div class="line">      <span class="function"><span
          class="keyword">function</span> (<span class="params"></span>) </span>{</div><div class="line">        <span
          class="keyword">var</span> vm = <span class="keyword">this</span></div><div class="line">        <span
          class="keyword">if</span> (<span class="keyword">this</span>.question.indexOf(<span class="string">'?'</span>) === <span
          class="number">-1</span>) {</div><div class="line">          vm.answer = <span class="string">'Questions usually contain a question mark. ;-)'</span></div><div
          class="line">          <span class="keyword">return</span></div><div class="line">        }</div><div
          class="line">        vm.answer = <span class="string">'Thinking...'</span></div><div class="line">        axios.get(<span
          class="string">'https://yesno.wtf/api'</span>)</div><div class="line">          .then(<span
          class="function"><span class="keyword">function</span> (<span class="params">response</span>) </span>{</div><div
          class="line">            vm.answer = _.capitalize(response.data.answer)</div><div
          class="line">          })</div><div class="line">          .catch(<span class="function"><span
          class="keyword">function</span> (<span class="params">error</span>) </span>{</div><div class="line">            vm.answer = <span
          class="string">'Error! Could not reach the API. '</span> + error</div><div class="line">          })</div><div
          class="line">      },</div><div class="line">      <span class="comment">// 这是我们为用户停止输入等待的毫秒数</span></div><div
          class="line">      <span class="number">500</span></div><div class="line">    )</div><div
          class="line">  }</div><div class="line">})</div><div class="line"><span class="tag">&lt;/<span class="name">script</span>&gt;</span></div></pre>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '../../assets/js/libs/axios.min.js'
  import lodash from '../../assets/js/libs/lodash.min.js'

  export default{
    name: 'demo09',
    data () {
      return {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!'
      }
    },
    watch: {
      // 如果 question 发生改变，这个函数就会运行
      question: function (newQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.getAnswer()
      }
    },
    methods: {
    // _.debounce 是一个通过 lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
    // ajax请求直到用户输入完毕才会发出
    // 学习更多关于 _.debounce function (and its cousin
    // _.throttle), 参考: https://lodash.com/docs#debounce
      getAnswer: lodash.debounce(
        function () {
          var vm = this
          if (this.question.indexOf('?') === -1) {
            vm.answer = 'Questions usually contain a question mark. ;-)'
            return
          }
          vm.answer = 'Thinking...'
          axios.get('https://yesno.wtf/api')
            .then(function (response) {
              vm.answer = lodash.capitalize(response.data.answer)
            })
            .catch(function (error) {
              vm.answer = 'Error! Could not reach the API. ' + error
            })
        },
        // 这是我们为用户停止输入等待的毫秒数
        1000
      )
    }
  }
</script>
