<template id="demo08">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="demo" v-cloak>
            <p>Original message: "{{ message }}"</p>
            <p>Computed reversed message: "{{ reversedMessage }}"</p>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
            <pre>
              <code class="html">
                &lt;div id="example"&gt;
                  &lt;p&gt;Original message: "{{ <label>message</label> }}"&lt;/p&gt;
                  &lt;p&gt;Computed reversed message: "{{ <label>reversedMessage</label> }}"&lt;/p&gt;
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
          <code class="javascript">
            var vm = new Vue({
              el: '#example',
              data: {
                message: 'Hello'
              },
              computed: {
                // a computed getter
                reversedMessage: function () {
                  // `this` points to the vm instance
                  return this.message.split('').reverse().join('')
                }
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
      name: 'demo08',
      data () {
        return {
          message: 'Hello!'
        }
      },
      computed: {
        // a computed getter
        reversedMessage: function () {
          // `this` points to the vm instance
          return this.message.split('').reverse().join('')
        }
      }
    }

</script>
