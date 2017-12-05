<template lang="html">
  <div id="refreshIndex" v-show="length>0" :style='{height: length+"px",top: "-"+length+"px"}'>
    <div class="spinner" :style='{ width: length*0.8+"px",height: length*0.8+"px"}'>
      <div class="double-bounce1"></div>
      <div class="double-bounce2"></div>
    </div>
    <p>松开我即可刷新页面商品信息哦！</p>
  </div>
</template>

<script>
  export default {
    props: ["length"]
  }
</script>

<style lang="scss">

  #refreshIndex{
    position: absolute;
    left: 0;
    top: 0px;
    width: 100%;
    padding-top: .05rem;
    overflow: hidden;

    .spinner {
      max-width: .7rem;
      max-height: .7rem;
      position: relative;
      margin: 0 auto;
    }

    p{
      margin-top: 10px;
      font-size: .16rem;
      color: #666;
      text-align: center;
    }
  }
  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #67CF22;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;

    -webkit-animation: bounce 2.0s infinite ease-in-out;
    animation: bounce 2.0s infinite ease-in-out;
  }

  .double-bounce2 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  @-webkit-keyframes bounce {
    0%, 100% { -webkit-transform: scale(0.0) }
    50% { -webkit-transform: scale(1.0) }
  }

  @keyframes bounce {
    0%, 100% {
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    } 50% {
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
</style>
