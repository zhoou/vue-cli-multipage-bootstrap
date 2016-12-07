<template id="alertCpm">
  <div class="panel panel-primary">
    <div class="panel-heading">{{ title }}</div>
    <div class="panel-body">
      <button class="btn btn-danger btn-lg" @click="showAlert('top')">Click to toggle alert on top</button>
      <button class="btn btn-success btn-lg" @click="showAlert('right')">Click to toggle alert on right</button>
      <hr>
      <button class="btn btn-success" @click="showAlert('A')">alert-success</button>
      <button class="btn btn-info" @click="showAlert('B')">alert-info</button>
      <button class="btn btn-warning" @click="showAlert('C')">alert-warning</button>
      <button class="btn btn-danger" @click="showAlert('D')">alert-danger</button>
    </div>
    <valert :show='showTop' placement="top" :duration="3000" type="danger" width="500px" dismissable @changeState="changeShowState">
      <i class="iconfont">&#xe72a;</i>
      <strong>Heads up!</strong>
      This alert needs your attention.
    </valert>
    <valert :show='showRight' placement="top-right" :duration="3000" type="success" width="500px" dismissable @changeState="changeShowState">
      <i class="iconfont">&#xe72a;</i>
      <strong>Well Done!</strong>
      You successfully read this important alert message.
    </valert>
    <valert :show='showA' type="success" name="successAlert" @changeState="changeShowState">
      <i class="iconfont">&#xe72a;</i>
      <strong>Well Done!</strong>
      You successfully read this important alert message.
    </valert>
    <valert :show='showB' type="info" name="infoAlert" @changeState="changeShowState">
      <i class="iconfont">&#xe72a;</i>
      <strong>Heads up!</strong>
      This alert needs your attention, but it's not super important.
    </valert>
    <valert :show='showC' type="warning" name="warningAlert" dismissable @changeState="changeShowState">
      <i class="iconfont">&#xe72a;</i>
      <strong>Warning! </strong>
      Better check yourself, you're not looking too good.
    </valert>
    <valert :show='showD' type="danger" name="dangerAlert" dismissable @changeState="changeShowState">
      <i class="iconfont">&#xe72a;</i>
      <strong>Oh snap! </strong>
      Change a few things up and try submitting again.
    </valert>
  </div>
</template>
<script>
  import valert from 'components/Common/vAlert'
  export default {
    name: 'alertCpm',
    data () {
      return {
        title: 'Alert 弹框 -- Demo',
        title2: 'Alert 弹框 -- Coding',
        showTop: false,
        showRight: false,
        showA: false,
        showB: false,
        showC: false,
        showD: false
      }
    },
    components: {
      valert
    },
    methods: {
      changeShowState (state) {
        let isShow = state.state
        switch (state.name) {
          case 'successAlert': this.showA = isShow; break
          case 'infoAlert': this.showB = isShow; break
          case 'warningAlert': this.showC = isShow; break
          case 'dangerAlert': this.showD = isShow; break
          default:
            this.showTop = isShow
            this.showRight = isShow
            break
        }
      },
      showAlert (type) {
        switch (type) {
          case 'A': this.showA = true; break
          case 'B': this.showB = true; break
          case 'C': this.showC = true; break
          case 'D': this.showD = true; break
          case 'top': this.showTop = true; break
          case 'right': this.showRight = true; break
          default: break
        }
      }
    }
  }
</script>
