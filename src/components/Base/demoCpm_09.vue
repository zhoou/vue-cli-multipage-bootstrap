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
            <pre>
              <code class="html">
                &lt;div id="watch-example"&gt;
                  &lt;p&gt;
                    Ask a yes/no question:
                    &lt;input v-model="question"&gt;
                  &lt;/p&gt;
                  &lt;p&gt;{{ <label>answer</label> }}&lt;/p&gt;
                &lt;/div&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-6">
      <div class="zero-clipboard"><span class="btn-clipboard">Js</span></div>
      <div class="highlight">
        <pre>
          <code class="html">
            &lt;!-- Since there is already a rich ecosystem of ajax libraries    --&gt;
            &lt;!-- and collections of general-purpose utility methods, Vue core --&gt;
            &lt;!-- is able to remain small by not reinventing them. This also   --&gt;
            &lt;!-- gives you the freedom to just use what you're familiar with. --&gt;
            &lt;script src="https://unpkg.com/axios@0.12.0/dist/axios.min.js"&gt;&lt;/script&gt;
            &lt;script src="https://unpkg.com/lodash@4.13.1/lodash.min.js"&gt;&lt;/script&gt;
            &lt;script&gt;
              var watchExampleVM = new Vue({
                el: '#watch-example',
                data: {
                  question: '',
                  answer: 'I cannot give you an answer until you ask a question!'
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
                  getAnswer: _.debounce(
                    function () {
                      var vm = this
                      if (this.question.indexOf('?') === -1) {
                        vm.answer = 'Questions usually contain a question mark. ;-)'
                        return
                      }
                      vm.answer = 'Thinking...'
                      axios.get('https://yesno.wtf/api')
                        .then(function (response) {
                          vm.answer = _.capitalize(response.data.answer)
                        })
                        .catch(function (error) {
                          vm.answer = 'Error! Could not reach the API. ' + error
                        })
                    },
                    // 这是我们为用户停止输入等待的毫秒数
                    500
                  )
                }
              })
            &lt;/script&gt;
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'jspath/libs/axios.min.js'
  import lodash from 'jspath/libs/lodash.min.js'

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
