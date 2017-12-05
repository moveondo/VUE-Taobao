<template lang="html">
  <div id="taoqg">
    <div class="count-down">
      <img src="../../../static/images/tqg.jpg" alt="" />
      <div class="count-down-num">
        <div class="countTime-h">{{countTimeH | number2}}</div> : <div class="countTime-m">{{countTimeM | number2}}</div> : <div class="countTime-s">{{countTimeS | number2}}</div>
      </div>
    </div>
    <div class="other">
      <img v-for="img in imgs" :src="img" alt="" />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.filter("number2",function(val){
  if(val<10) return "0"+val;
  else return val;
})

export default {
  data () {
    return {
      countTimeH: 1,
      countTimeM: 1,
      countTimeS: 3,
      imgs: [
        "../../../static/images/youhapohuo.jpg",
        "../../../static/images/kawi11.png",
        "../../../static/images/agjie.jpg",
        "../../../static/images/kawi22.png",
      ]
    }
  },
  mounted () {
    var $kawi = setInterval( () => {
      if( this.countTimeS===0 ){
        if( this.countTimeM===0 ){
          if( this.countTimeH===0 ) clearInterval($kawi);
          else{
            this.countTimeH--;
            this.countTimeM = 59;
            this.countTimeS = 59;
          }
        }else {
          this.countTimeM--;
          this.countTimeS = 59;
        }
      }else this.countTimeS--;
    },1000)
  }
}
</script>

<style lang="scss">
  #taoqg{
    font-size: 0;
    margin-bottom: 2rem;

    > div{
      display: inline-block;
      height: 12.87rem;
    }
    .other{
      width: 62%;

      img{
        width: 50%;
        height: 12.87rem/2;
      }
    }
    .count-down{
      position: relative;
      width: 38%;

      img{
        max-width: 100%;
        max-height: 100%;
      }

      .count-down-num{
        position: absolute;
        top: 3.0rem;
        left: 1.1rem;
        font-size: .12rem;
        color: #666;

        div{
          display: inline-block;
          width: 1.18rem;
          height: 1.18rem;
          line-height: 1.18rem;
          text-align: center;
          background: #333;
          color: #fff;
          font-size: .12rem;
        }
      }
    }
  }
</style>
