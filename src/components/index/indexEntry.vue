<template lang="html">
  <div id="entry-box">
    <div v-for="entryImageUrl in entryImageUrls" class="entry-item">
      <div @click = "ClickUrl(entryImageUrl.Url)">
        <img :src="entryImageUrl.url" alt="" />
      </div>
      <p>
        {{ entryImageUrl.text }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => {
      return {
        entryImageUrls: [
          { url: "../../../static/images/entry-1.png",text: "天猫",Url:"https://mobiccdai.ppdai.com/super/market.html"},
          { url: "../../../static/images/entry-2.png",text: "聚划算",Url:"https://www.baidu.com/"},
          { url: "../../../static/images/entry-3.png",text: "天猫国际",Url:"https://mobiccdai.ppdai.com/super/market.html"},
          { url: "../../../static/images/entry-4.png",text: "外卖",Url:"https://mobiccdai.ppdai.com/super/market.html"},
          { url: "../../../static/images/entry-5.png",text: "天猫超市",Url:"https://mobiccdai.ppdai.com/super/market.html"},
          { url: "../../../static/images/entry-6.png",text: "充值中心",Url:"https://mobiccdai.ppdai.com/super/market.html"},
          { url: "../../../static/images/entry-7.png",text: "阿里旅行",Url:"https://mobiccdai.ppdai.com/super/market.html"},
          { url: "../../../static/images/entry-8.png",text: "领金币",Url:"https://mobiccdai.ppdai.com/super/market.html"},
          { url: "../../../static/images/entry-9.png",text: "到家",Url:"https://mobiccdai.ppdai.com/super/market.html"},
          { url: "../../../static/images/entry-10.png",text: "分类",Url:"https://mobiccdai.ppdai.com/super/market.html"}
        ]
      }
    },
    methods: {
        ClickUrl :(UrL) => {
             window.location.href=UrL;
        }
    }
  }
</script>

<style lang="scss">
  #entry-box{
    margin: 0 .1875rem;
    font-size: 0;

    .entry-item{
      overflow: hidden;
      width: 20%;
      margin: .1rem 0 0;
      display: inline-block;
      text-align: center;
      div{
        height: 2.45rem;
      }
      img{
        max-width: 100%;
        max-height: 100%;

      }
      p{
        font-size: .12rem;
        line-height: 2;
        color: #666;
      }
    }
  }
</style>
