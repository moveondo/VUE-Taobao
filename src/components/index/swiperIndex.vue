<template lang="html">
  <div class="swiper-kawi">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="swiper in swipers" class="swiper-slide">
          <img class="imgload" :src="swiper.url" alt="">
        </div>
      </div>
      <!-- 分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from '../../../static/swiper/swiper-3.4.1.min.js'
require('../../../static/swiper/swiper-3.4.1.min.css')

import swiper1 from '../../../static/images/swiper-1.jpg'
import swiper2 from '../../../static/images/swiper-2.jpg'
import swiper3 from '../../../static/images/swiper-3.jpg'
import swiper4 from '../../../static/images/swiper-4.jpg'

export default {
  data() {
    return {
      swipers: [
        { url: swiper1},
        { url: swiper2},
        { url: swiper3},
        { url: swiper4}
      ],
    }
  },
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      pagination: '.swiper-pagination',
      autoplay: 3000
    })
  }
}
</script>

<style lang="scss">
  .swiper-container{
    height: 100%;
  }
  .swiper-kawi,.swiper-wrapper{
    height: 8rem;
  }
  .swiper-slide img{
    width: 100%;
    height: 100%;
  }
</style>
