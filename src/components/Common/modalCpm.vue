<template id="vmodal">
  <div class="modal-mask" v-if="show">
    <div class="modal-confirm">
      <h2 class="confirm-header">
        <i class="iconfont icon-questioncircle"></i> {{ title }}
      </h2>
      <div class="confirm-content">
        <slot name="slotA"></slot>
        <slot name="slotB"></slot>
        <slot name="slotC"></slot>
        <template v-if="!slot">{{content}}</template>
      </div>
      <div class="confirm-btns">
        <button class="btn" @click="op(1)">取 消</button>
        <button class="btn btn-primary" @click="op(2)">确 定</button>
      </div>
    </div>
  </div>
</template>

<style>
   /*弹框 begin*/

.modal-mask{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(55,55,55,.6);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-confirm{
  width: 400px;
  box-sizing: border-box;
  padding: 10px 40px;
  background-color: #fff;
  border-radius: 6px;
}
@media only screen and (max-width: 640px) {
  .modal-confirm{
    width: 100%;
    margin: 0 20px;
    padding: 10px 20px;
  }
}
.confirm-header{
  font-size:18px;
}
.confirm-content {
    padding-left: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
}
.modal-confirm .confirm-btns {
    text-align: right;
    padding-bottom:20px;
}
.modal-enter, .modal-leave {
  opacity: 0;
}
.modal-transition{
  transition: all .3s ease;
}

.modal-enter .modal-confirm,.modal-leave .modal-confirm {
  transform: scale(1.1);
}
.modal-transition{
  transition: all .3s ease;
}
.modal-confirm i {
    color: #fa0;
    font-size: 24px;
    position: relative;
    top: 2px;
}

.icon-questioncircle:after {
    content: "\e647";
}

@font-face {
 font-family: iconfont;
 src:url(../../assets/fonts/iconfont.woff) format("woff")
}

.iconfont {
    font-family: iconfont!important;
    font-size: 14px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: .2px;
    -moz-osx-font-smoothing: grayscale;
}

/*弹框 end*/

</style>

<script>
  export default{
    name: 'vmodal',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      title: {
        default: ' 温馨提示！'
      },
      content: ''
    },
    data () {
      return {
        onCancel: false,
        onOk: false
      }
    },
    methods: {
      op (type) {
        this.$emit('changeState', false)
        if (type === '1') {
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
        this.$emit('changeState', true)
        document.body.style.overflow = 'hidden'
      }
    }
  }
</script>
