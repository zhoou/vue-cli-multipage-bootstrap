<template id="demo10">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="demo" v-cloak>
            <span v-bind:class="classObject">{{message}}</span><br/>
            <span v-bind:style="styleObject">{{message2}}</span>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
            <pre>
              <code class="html">
                &lt;div v-bind:class="classObject"&gt;{{ <label>message</label> }}&lt;/div&gt;
                &lt;div v-bind:style="styleObject"&gt;{{ <label>message2</label> }}&lt;/div&gt;
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
            data () {
              return {
                message: 'Hello!',
                message2: 'Vue 2.0',
                isActive: true,
                success: true,
                error: null,
                styleObject: {
                  color: 'red',
                  fontSize: '13px'
                }
              }
            },
            computed: {
              classObject: function () {
                return {
                  active: this.isActive && !this.error,
                  'bg-success': this.success && !this.error,
                  'text-danger': this.error && this.error.type === 'fatal'
                }
              }
            }
          </code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
    export default{
      name: 'demo10',
      data () {
        return {
          message: 'Hello!',
          message2: 'Vue 2.0',
          isActive: true,
          success: true,
          error: null,
          styleObject: {
            color: 'red',
            fontSize: '13px'
          }
        }
      },
      computed: {
        classObject: function () {
          return {
            active: this.isActive && !this.error,
            'bg-success': this.success && !this.error,
            'text-danger': this.error && this.error.type === 'fatal'
          }
        }
      }
    }
</script>
