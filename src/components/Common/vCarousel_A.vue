<template id="vma">
  <div class="vm-container">
    <div class="vm-viewport">
      <ul class="vmcarousel-centered vm-centered vmcarousel">
        <li v-for="(item, index) in lists" :data-slide="index"><img :src="item" alt="" :width="imgWidth"></li>
      </ul>
    </div>
    <a @click='btn_left' class="vm-arrow-left"><i class="iconfont">&#xe779;</i></a>
    <a @click='btn_right' class="vm-arrow-right"><i class="iconfont">&#xe775;</i></a>
  </div>
</template>

<script>
  import $ from 'jquery'
  import Modernizr from 'modernizr'
  export default {
    name: 'vma',
    props: {
      imgLists: {
        type: Object,
        required: true,
        default: function () {
          return {
            imgWidth: 200,
            itemWidth: 268,
            lists: null
          }
        }
      }
    },
    data () {
      return {
        imgWidth: this.imgLists.imgWidth,
        itemWidth: this.imgLists.itemWidth,
        itemsCount: this.imgLists.lists.length,
        lists: this.imgLists.lists,
        currentPosition: 0,
        itemsToSlide: 1
      }
    },
    methods: {
      btn_left (e) {
        e.preventDefault()
        this.slide_relative(-1)
      },
      btn_right (e) {
        e.preventDefault()
        this.slide_relative(1)
      },
      slide_relative (offset) {
        let viewportWidth = $('.vm-viewport').width()
        let newPosition = this.currentPosition + (offset * this.itemsToSlide)
        if (newPosition < 0) {
          newPosition = this.itemsCount - 1
          // Scroll to beggining
        } else if (newPosition >= this.itemsCount) {
          newPosition = 0
        }
        let marginLeft = viewportWidth / 2 - (this.itemWidth * (newPosition + 1))
        // Animate slide
        this.animate_slide(marginLeft)
        let newActiveSlide = $('.vmcarousel').find('li').eq(newPosition).attr('data-slide')
        this.change_slide(newPosition, newActiveSlide)
      },
      animate_slide (marginLeft, complete, type) {
        if (type === undefined) type = 'css3'
        if (complete === undefined) complete = $.noop()
        if (Modernizr.csstransitions && type === 'css3') {
          $('.vmcarousel').css('transform', 'translate3d(' + marginLeft + 'px,0px,0px)')
          $('.vmcarousel').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', complete)
        } else {
          $('.vmcarousel').stop(true).animate({'margin-left': marginLeft + 'px'}, 500, 'swing', complete)
        }
      },
      change_slide (newPosition, newActiveSlide) {
        // Update current position
        this.currentPosition = newPosition
        // Add active class
        $('.vmcarousel').find('li').removeClass('vmc_active').eq(this.currentPosition).addClass('vmc_active')
        // Call callback
        if (typeof $.noop() === 'function') {
          $.noop().call(this, newActiveSlide)
        }
      }
    }
  }
</script>
<style>
.vm-container {
  position: relative;
}
.vm-viewport{
  overflow: hidden;
  padding: 0 35px;
}
.vmcarousel{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.vmcarousel:after {
  content: '';
  display: table;
  clear: both;
}
.vmcarousel > li {
   float: left;
   width: 268px;
}
.vmcarousel > li img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    transition: all 0.3s ease;
}
.vm-centered .vmc_active img {
  transform: scale(1.2);
}
.vm-centered {
    padding: 10px 0;
}
.vmcarousel-centered {
  width: 1608px;
  transition: transform 0.5s;
  transform: translate3d(0px, 0px, 0px);
}
.vm-container a:hover{
  text-decoration: none;
}
.vm-container a>i {
  font-size:30px;
}
.vm-container.hide-controls .vm-arrow-left, .vm-container.hide-controls .vm-arrow-right{display: none;}

.vm-arrow-left, .vm-arrow-right{
    position: absolute; top: 50%;
    left: 0; width: 50px; height: 50px; margin-top: -25px; overflow: hidden;
    opacity: 0; border-radius: 50%; transition: opacity 0.3s ease;
    text-align: center;
}
.vm-arrow-right{left: auto; right: 0;}
.vm-container:hover .vm-arrow-left, .vm-container:hover .vm-arrow-right{opacity: 1;}

.vm-arrow-left:after, .vm-arrow-right:after{
    content: ''; display: inline-block;
    font-family: 'Glyphicons Halflings'; font-style: normal; line-height: 1; -webkit-font-smoothing: antialiased;
	 font-size: 50px; line-height: 50px; color: white;
    -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;
    text-shadow: 2px 2px #000;
}

</style>
