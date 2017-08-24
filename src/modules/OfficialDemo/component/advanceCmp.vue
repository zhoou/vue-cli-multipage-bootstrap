<template id="AdvanceDemo">
  <div class="panel panel-primary">
    <div class="panel-heading">四、Vue.js 进阶</div>
    <div class="panel-body">
      <div class="bs-example">
        <h4>Modal 组件</h4>
        <button class="btn btn-info" @click='openModal'>弹窗: 只有header和body</button>
      </div>
      <div class="pagelink">
        <a href="app.html#/startdemo" class="btn">&lt;&lt;基础篇: base</a>
        <a href="app.html#/improvedemo" class="btn">提高篇：improve&gt;&gt;</a>
      </div>
    </div>
    <vModal :show='isShow' @backUpState="changeShowState">
      <div slot="modal-body" class="modal-body">
        Hello, welcome to vue.js learn
      </div>
      <div slot="modal-footer"></div>
    </vModal>
  </div>
</template>
<script>
    import vModal from 'components/Common/vModal'
    export default{
      name: 'AdvanceDemo',
      data () {
        return {
          isShow: false
        }
      },
      components: {
        vModal
      },
      methods: {
        openModal () {
          this.isShow = true
        },
        changeShowState (state) {
          this.isShow = state.show
        }
      }
    }
</script>
