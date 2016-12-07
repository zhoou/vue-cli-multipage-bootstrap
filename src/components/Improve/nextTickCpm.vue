<template id="nextTick">
  <div class="row">
    <div class="col-xs-6">
      <div class="row">
        <div class="col-xs-12">
          <div class="demo" v-cloak>
            <div>{{message}}</div>
            <button class="btn btn-info" @click='updateMessage'>Update</button>
          </div>
        </div>
        <div class="col-xs-12">
          <div class="zero-clipboard"><span class="btn-clipboard">Html</span></div>
          <div class="highlight">
            <pre>
              <code class="html">
                &lt;div id="example"&gt;{{ <label>message</label> }}&lt;/div&gt;
                &lt;button class="btn btn-info" @click='updateMessage'&gt;Update&lt;/button&gt;
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
            Vue.component('example', {
              template: '&lt;span&gt;{{ <label>message</label> }}&lt;/span&gt;',
              data: function () {
                return {
                  message: 'not updated'
                }
              },
              methods: {
                updateMessage: function () {
                  this.message = 'updated'
                  console.log(this.$el.textContent) // => 'not updated'
                  this.$nextTick(function () {
                    console.log(this.$el.textContent) // => 'updated'
                  })
                }
              }
            })
          </code>
        </pre>
      </div>
    </div>
    <vmodal :show='show' name='modalB' effect="feed" :width="400" @backUpState="receiveChildState">
      <div slot="modal-body" class="modal-body">
        {{ content }}
      </div>
    </vmodal>
  </div>
</template>

<script>
    import vmodal from 'components/Common/vModal'

    export default{
      name: 'nextTick',
      data () {
        return {
          message: 'not updated',
          show: false,
          content: ''
        }
      },
      components: {
        vmodal
      },
      methods: {
        updateMessage: function () {
          this.message = 'updated'
          this.$nextTick(function () {
            this.content = 'updated success !'
            this.show = true
          })
        },
        receiveChildState (state) {
          let isShow = state.show
          this.show = isShow
          if (state.theResult) {
            this.message = 'you are very Good !'
          }
        }
      }
    }
</script>
