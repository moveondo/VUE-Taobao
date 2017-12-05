<template lang="html">
  <div id="bottom-tool">
    <router-link v-for="tool in tools" class="tool-item" :to="tool.link" :key="tool.text">
      <div class="iconfont" :class="tool.className"></div>
      <div class="text">{{ tool.text }}</div>
    </router-link>
  </div>
</template>
<script>
export default {
  data: function(){
    return {
      tools: [
        { text: "首页", className: "icon-home", link: "/"},
        { text: "物流", className: "icon-deliver", link: "/deliver"},
        { text: "购物车", className: "icon-cart", link: "/cart"},
        { text: "我的淘宝", className: "icon-my", link: "/myaccount"},
        { text: "更多", className: "icon-more", link: "/more"}
      ]
    }
  }
}
</script>
<style lang="scss">
  $color: #666;

  #bottom-tool{
    position: fixed;
    z-index: 9;
    padding: .05rem;
    background: #fff;
    display: flex;
    bottom: 0.2rem;
    width: 100%;
    height: 2.5rem;
    line-height: 1.2rem;

    a{
      text-decoration: none;
    }
  }
  .tool-item{
    width: 20%;

  }
  .tool-item .iconfont{
    font-size: 1.1rem;
    color: $color;
  }
  .tool-item .text{
    -webkit-text-size-adjust: none;
    color: $color;
    line-height: 2rem;
    font-size: 1rem;
  }
</style>
