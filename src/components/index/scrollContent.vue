<template lang="html">
  <div id="index-scroll-content" :style='{"transform": "translateY("+distance+"px)"}'>
      <refresh :length="distance"></refresh>
      <swiperIndex></swiperIndex>
      <activity></activity>
      <indexEntry></indexEntry>
      <headLine></headLine>
      <taoqianggou></taoqianggou>
  </div>
</template>


<script>
import refresh from './refresh'
import swiperIndex from './swiperIndex'
import activity from './activity'
import indexEntry from './indexEntry'
import headLine from './headLine'
import taoqianggou from './taoqianggou'

export default {
  components: {
    refresh,
    activity,
    swiperIndex,
    indexEntry,
    headLine,
    taoqianggou
  },
  mounted () {


  },
  data: () => {
    return {
      touchStart: 0,
      distance: 0
    }
  }
}
</script>

<style lang="scss">
  #index-scroll-content{
    flex: 1;
    position: relative;
    overflow: scroll;
    background: #fff;
  }
  #index-scroll-content.up{
    transition: all .2s ease-out;
  }
</style>
