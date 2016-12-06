<template>
  <div class="panel panel-primary">
    <div class="panel-heading">{{ title }}</div>
    <div class="panel-body">
      <p>返回状态：<span style="color:red;">{{ backText }}</span></p>
      <hr>
      <button class="btn btn-default" @click="showModal('A')">show Modal</button>
      <button class="btn btn-success" @click="showModal('B')">Fade Modal</button>
      <button class="btn btn-primary" @click="showModal('C')">Zoom Modal</button>
      <hr>
      <button class="btn btn-default" @click="showModal('D')">Show custom modal</button>
      <button class="btn btn-warning" @click="showModal('E')">Larger Modal</button>
      <button class="btn btn-danger" @click="showModal('F')">Small Modal</button>
    </div>
    <vmodal :show='showModalA' name='modalA' @backUpState="receiveChildState">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title">Modal <b>Title</b></h4>
      </div>
      <div slot="modal-body" class="modal-body">
        Hello, welcome to vue.js learn
      </div>
    </vmodal>
    <vmodal :show='showModalB' name='modalB' @backUpState="receiveChildState">
      <div slot="modal-body" class="modal-body">
        Hello, welcome to vue.js learn
      </div>
    </vmodal>
  </div>
</template>
<script>
  import vmodal from 'components/Common/vModal'
  export default {
    data () {
      return {
        title: 'Modal 弹窗',
        showModalA: false,
        showModalB: false,
        backText: '...',
        theResult: false
      }
    },
    components: {
      vmodal
    },
    methods: {
      showModal (type) {
        switch (type) {
          case 'A': this.showModalA = true; break
          case 'B': this.showModalB = true; break
          default: break
        }
        this.backText = '...'
      },
      receiveChildState (state) {
        this.showModalA = state.show
        if (state.theResult) {
          this.backText = ' you click the save button !'
        }
      }
    }
  }
</script>
