<template lang="html">
  <div class="top-fixed" v-bind:style='"background-image:url("+iconImage+");"'>
    <div class="top-search-box">
      <router-link to="/search">
        <div>
          <span class="iconfont icon-search"></span>
          {{ searchText }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  import taobaoIcon from '../../assets/taobao.png'
  export default {
    data: () => {
      return {
        searchText: "寻找宝贝店铺",
        iconImage: taobaoIcon
      }
    },
    methods: {
      routerSearch: () => {
        appRouter.router.push({ path: "/search"})
      }
    }
  }

</script>
<style lang="scss">
$len1:0.6rem;
 .top-fixed{
   width: 100%;
   background: #FE5400 0.55rem center no-repeat;
   background-size: 1.28rem auto;
 }
 .top-search-box{
   padding: $len1 $len1 $len1 .4rem;
   text-align: center;
   width: 80%;
   margin: 0 10%;
 }
 .top-search-box div{
   line-height: 1.6;
   border-radius: 1rem;
   background: #b52600;
   font-size: 1rem;
 }
 .top-search-box a{
   color: #fff;
   text-decoration: none;
 }

</style>
