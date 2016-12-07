<template id="vma">
  <div class="vm-container">
    <div class="vm-viewport">
      <ul class="vmcarousel-centered vm-centered vmcarousel">
        <li data-slide="0" style="width: 228px;"><img src="images/1.jpg" alt="" width="200"></li>
        <li data-slide="1" style="width: 228px;"><img src="images/2.jpg" alt="" width="200"></li>
        <li data-slide="2" class="vmc_active" style="width: 228px;"><img src="images/3.jpg" alt="" width="200"></li>
        <li data-slide="3" style="width: 228px;"><img src="images/4.jpg" alt="" width="200"></li>
        <li data-slide="4" style="width: 228px;"><img src="images/5.jpg" alt="" width="200"></li>
        <li data-slide="5" style="width: 228px;"><img src="images/6.jpg" alt="" width="200"></li>
      </ul>
    </div>
    <a href="" class="vmc-arrow-left"></a>
    <a href="" class="vmc-arrow-right"></a>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    name: 'vma',
    data () {
      return {
        msg: 'hello vue'
      }
    },
    mounted () {
      $('.vmcarousel').css('width', '1560px')
    }
  }
</script>
<style>
.vm-container {
  overflow: hidden;
}
.vmcarousel > li {
   float: left;
   list-style-type: none;
}
.vmcarousel-centered {
  transition: transform 0.5s;
  transform: translate3d(0px, 0px, 0px);
}
</style>
