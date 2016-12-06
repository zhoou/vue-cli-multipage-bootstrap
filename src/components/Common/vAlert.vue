<template>
  <transition name="fade">
    <div
      v-show="showDail"
      v-bind:class="{
        'alert':		true,
        'alert-success':(type == 'success'),
        'alert-warning':(type == 'warning'),
        'alert-info':	(type == 'info'),
        'alert-danger':	(type == 'danger'),
        'top': 			(placement === 'top'),
        'top-right': 	(placement === 'top-right')
      }"
      v-bind:style="{width:width}"
      role="alert"
    >
      <button v-show="dismissable" type="button" class="close" @click="close">
      <span>&times;</span>
    </button>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import {coerce} from 'jspath/common/utils.js'
export default {
  props: {
    name: {
      type: String,
      default: 'vAlert_' + Math.floor(Math.random() * 1000 + 1)
    },
    type: {
      type: String
    },
    dismissable: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    show: {
      type: Boolean,
      coerce: coerce.boolean,
      default: false
    },
    duration: {
      type: Number,
      coerce: coerce.number,
      default: 0
    },
    width: {
      type: String
    },
    placement: {
      type: String
    }
  },
  data () {
    return {
      showDail: this.show
    }
  },
  watch: {
    show (val) {
      this.showDail = val
      this.isShow(val)
    }
  },
  methods: {
    isShow (val) {
      if (this._timeout) clearTimeout(this._timeout)
      if (val && Boolean(this.duration)) {
        this._timeout = setTimeout(() => {
          this.$emit('changeState', {state: false, name: this.name})
          this.showDail = false
        }, this.duration)
      }
    },
    close () {
      this.$emit('changeState', {state: false, name: this.name})
      this.showDail = false
    }
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity .3s ease;
}
.fade-enter,
.fade-leave-active {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  opacity: 0;
}
.alert.top {
  position: fixed;
  top: 30px;
  margin: 0 auto;
  left: 0;
  right: 0;
  z-index: 1050;
}
.alert.top-right {
  position: fixed;
  top: 30px;
  right: 50px;
  z-index: 1050;
}
</style>
