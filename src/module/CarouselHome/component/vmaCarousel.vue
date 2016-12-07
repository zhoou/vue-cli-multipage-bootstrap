<template>
  <div class="panel panel-primary">
    <div class="panel-heading">{{ title }}</div>
    <div class="panel-body">
      <div class="row">
        <div class="col-xs-12">
          <vCarousel></vCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import vCarousel from 'components/Common/vCarousel_A'
  export default {
    data () {
      return {
        title: '轮播类型A',
        lists: []
      }
    },
    components: {
      vCarousel
    }
  }
</script>
