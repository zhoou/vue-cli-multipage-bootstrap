<template>
  <span>
    <transition :name="transition">
      <div
        id="popover"
        class="el-popover"
        v-show="show"
        :style="{ width: width + 'px' }">
        <slot>{{ content }}</slot>
        <!--<div class="arrow-left" id='arrow'></div>-->
      </div>
    </transition>
  </span>
</template>

<script>
  export default {
    name: 'el-popover',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      content: {
        type: String
      },
      setObj: {
        type: Object
      }
    },
    watch: {
      show (val) {
        let node = document.getElementById('popover')
        node.style.top = this.setObj.top
        node.style.left = this.setObj.left
      }
    }
  }
</script>
<style>
  .el-popover{
    position: absolute;
    background: #FFFFCC;
    min-width: 150px;
    border-radius: 2px;
    border: 1px solid #d3dce6;
    padding: 10px;
    z-index: 2000;
    font-size: 12px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
  }
  .arrow-left {
    position:absolute;
    display: block;
    z-index: -1;
    width:0px;
    height:0;
    border-top:10px solid transparent;
    border-bottom:10px solid transparent;
    border-right:10px solid yellow;
  }
</style>
