::: demo 为了在数据变化之后等待 Vue 完成更新 DOM ，可以在数据变化之后立即使用 Vue.nextTick(callback) 。这样回调在 DOM 更新完成后就会调用。

``` html
<template>
  <div class="demo" v-cloak>
    <div>{{ message }}</div>
    <button class="btn btn-info" @click.stop='updateMessage'>Update</button>
    <v-modal :show='show' name='modalB' effect="feed" :width="400" @backUpState="receiveChildState">
      <div slot="modal-body" class="modal-body">
        {{ content }}
      </div>
    </v-modal>
  </div>
</template>

<script>
import vModal from 'components/Common/vModal'

export default {
  name: 'VNextTick',
  data () {
    return {
      message: 'not updated',
      show: false,
      content: ''
    }
  },
  components: {
    vModal
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
```
:::
