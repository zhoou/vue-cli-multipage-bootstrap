<template>
  <div id="carousels" class="carousel slide" data-ride="carousel">
    <!-- Indicators -->
    <ol class="carousel-indicators">
      <li v-for="item in indicators" data-target="#carousels" :data-slide-to="item-1"></li>
    </ol>
    <!-- Wrapper for slides -->
    <div class="carousel-inner" role="listbox">
      <div class="item" v-for="item in innerLists">
        <img :src="item.imgSrc" alt="carousel image">
        <div class="carousel-caption">
          {{ item.caption }}
        </div>
      </div>
    </div>
    <!-- Controls -->
    <a class="left carousel-control" href="#carousels" role="button" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#carousels" role="button" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>
<style>
  #carousels img {
    margin: 0 auto;
    width: 100%;
  }
</style>
<script>
    // 注：根目录需要引入bootstrap.js
    import $ from 'jquery'
    export default {
      name: 'carousels',
      props: {
        innerLists: {
          type: Array,
          default: null
        }
      },
      data () {
        return {
          indicators: this.innerLists ? this.innerLists.length : 0
        }
      },
      mounted () {
        $('#carousels ol li').eq(0).addClass('active')
        $('#carousels .carousel-inner .item').eq(0).addClass('active')
      }
    }
</script>
