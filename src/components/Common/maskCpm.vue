<template id="confirm">
  <div class="modal-mask" v-show="show">
    <div class="modal-confirm">
      <h2 class="confirm-header">
        <i class="iconfont icon-questioncircle"></i> {{ title }}
      </h2>
      <div class="confirm-content">
        {{ content }}
      </div>
      <div class="confirm-btns">
        <button class="btn" @click="op(false)">取 消</button>
        <button class="btn btn-primary" @click="op(2)">确 定</button>
      </div>
    </div>
  </div>
</template>
<script>
    export default {
      name: 'confirm',
      props: ['title', 'content'],
      data () {
        return {
          show: false,
          onCancel: false,
          onOk: false
        }
      },
      methods: {
        op (type) {
          this.show = false
          if (type === false) {
            if (this.onCancel) this.onCancel()
          } else {
            if (this.onOk) this.onOk()
          }

          this.onCancel = false
          this.onOk = false

          document.body.style.overflow = ''
        },
        alert (setting) {
          this.title = setting.title || '标题'
          this.content = setting.content || '内容'
          this.onOk = setting.onOk || false
          this.onCancel = setting.onCancel || false
          this.show = true
          document.body.style.overflow = 'hidden'
        }
      }
    }
</script>
