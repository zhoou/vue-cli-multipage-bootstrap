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
    <vmodal :show='showModalB' name='modalB' effect="fade" :width="800" @backUpState="receiveChildState">
      <div slot="modal-body" class="modal-body">
        Hello, welcome to vue.js learn
      </div>
    </vmodal>
    <vmodal :show='showModalC' name='modalC' effect="zoom" width="400" @backUpState="receiveChildState">
      <div slot="modal-body" class="modal-body">
        Hello, welcome to vue.js learn
      </div>
    </vmodal>
    <vmodal :show='showModalD' name='modalD' effect="fade" width="50%" @backUpState="receiveChildState">
      <div slot="modal-header" class="modal-header">
        <h4 class="modal-title"><i>Custom</i> <code>Modal</code> <b>Title</b></h4>
      </div>
      <div slot="modal-body" class="modal-body">
        Hello, welcome to vue.js learn
      </div>
    </vmodal>
    <vmodal :show='showModalE' name='modalE' @backUpState="receiveChildState" title="Large Modal" large>
      <div slot="modal-body" class="modal-body">
        Hello, welcome to vue.js learn
      </div>
    </vmodal>
    <vmodal :show='showModalF' name='modalF' @backUpState="receiveChildState" title="Small Modal" small>
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
        showModalC: false,
        showModalD: false,
        showModalE: false,
        showModalF: false,
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
          case 'C': this.showModalC = true; break
          case 'D': this.showModalD = true; break
          case 'E': this.showModalE = true; break
          case 'F': this.showModalF = true; break
          default: break
        }
        this.backText = '...'
      },
      receiveChildState (state) {
        if (state) {
          let name = state.name
          let isShow = state.show
          switch (name) {
            case 'modalA': this.showModalA = isShow; break
            case 'modalB': this.showModalB = isShow; break
            case 'modalC': this.showModalC = isShow; break
            case 'modalD': this.showModalD = isShow; break
            case 'modalE': this.showModalE = isShow; break
            case 'modalF': this.showModalF = isShow; break
            default: break
          }
          if (state.theResult) {
            this.backText = ' you click the save button !'
          }
        }
      }
    }
  }
</script>
