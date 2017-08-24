<template id="carouselDemo">
  <div class="panel panel-primary">
    <div class="panel-heading">{{ title }}</div>
    <div class="panel-body">
      <div class="row">
        <div class="col-xs-12">
          <vcarousel :inner-lists='innerLists'></vcarousel>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import vcarousel from 'components/Common/vCarousel'
  export default {
    name: 'carouselDemo',
    data () {
      return {
        title: 'Bootstrap Carousel Demo',
        innerLists: [
          {
            imgSrc: 'http://v2.bootcss.com/assets/img/bootstrap-mdo-sfmoma-01.jpg',
            caption: 'vue.js img01'
          },
          {
            imgSrc: 'http://v2.bootcss.com/assets/img/bootstrap-mdo-sfmoma-02.jpg',
            caption: 'vue.js img02'
          },
          {
            imgSrc: 'http://v2.bootcss.com/assets/img/bootstrap-mdo-sfmoma-03.jpg',
            caption: 'vue.js img03'
          }
        ]
      }
    },
    components: {
      vcarousel
    }
  }
</script>
