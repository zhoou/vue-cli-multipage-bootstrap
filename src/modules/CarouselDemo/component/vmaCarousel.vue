<template id="vmaCarousel">
  <div class="panel panel-primary">
    <div class="panel-heading">{{ title }}</div>
    <div class="panel-body">
      <div class="row">
        <vaCarousel :img-lists='imgLists'></vaCarousel>
      </div>
    </div>
  </div>
</template>

<script>
  import vaCarousel from 'components/Common/vCarousel_A'
  export default {
    name: 'vmaCarousel',
    data () {
      return {
        title: '轮播类型A',
        imgLists: {
          imgWidth: 200,
          itemWidth: 268,
          lists: [
            'http://demo.sc.chinaz.com//Files/DownLoad/webjs1/201610/jiaoben4616/images/1.jpg',
            'http://demo.sc.chinaz.com//Files/DownLoad/webjs1/201610/jiaoben4616/images/2.jpg',
            'http://demo.sc.chinaz.com//Files/DownLoad/webjs1/201610/jiaoben4616/images/3.jpg',
            'http://demo.sc.chinaz.com//Files/DownLoad/webjs1/201610/jiaoben4616/images/4.jpg',
            'http://demo.sc.chinaz.com//Files/DownLoad/webjs1/201610/jiaoben4616/images/5.jpg',
            'http://demo.sc.chinaz.com//Files/DownLoad/webjs1/201610/jiaoben4616/images/6.jpg'
          ]
        }
      }
    },
    components: {
      vaCarousel
    }
  }
</script>
