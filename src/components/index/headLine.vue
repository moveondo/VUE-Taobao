<template lang="html">
  <div id="headLine">
    <div class="hlImg">
      <img :src="headLineImg" alt="" />
    </div>
    <div class="latest-icon">{{ latestTag }}</div>
    <div class="latest-text">
      <div>{{ latestText }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        headLineImg: "../../../static/images/tbtt.png",
        countLatestNews: 0,
        latestTextArr: [
          { text: "大衣+运动套装，还能这样穿？又涨知识了" ,tag: "搭配"},
          { text: "长款修身棉服外套令冬季温暖如春！" ,tag: "保暖"},
          { text: "健身的你，不能少了健身衣！" ,tag: "健身"},
          { text: "背心裙打造独属冬日的优雅女人味" ,tag: "穿衣"},
          { text: "不负营养，茁壮成长，这么吃就对了" ,tag: "美食"}
        ],
        latestText: "",
        latestTag: ""
      }
    },
    mounted () {
      var len = this.latestTextArr.length-1;
      this.latestText = this.latestTextArr[0].text;
      this.latestTag = this.latestTextArr[0].tag;
      setInterval(()=>{
        if(this.countLatestNews>=len) this.countLatestNews = 0;
        else this.countLatestNews++;
        this.latestText = this.latestTextArr[this.countLatestNews].text;
        this.latestTag = this.latestTextArr[this.countLatestNews].tag;
      },3000)
    }
  }
</script>

<style lang="scss">
  #headLine{
    height: 2.3rem;
    width: 100%;
    margin: .1rem 0 .05rem;
    display: flex;
    align-items: center;
    border-bottom: .06rem solid #eee;
    .hlImg{
      width: 1.8rem;
      padding-right: 3.06rem;
      text-align: center;
    }
    img,.hlImg{
      height: 1.21rem;
    }
    .latest-icon{
      line-height: 1.18rem;
      font-size: 1rem;
      color: rgb(216, 20, 33);
      border-radius: 4px;
      border: 1px solid rgb(216, 20, 33)
    }
    .latest-text{
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      padding: 0 .06rem;
      font-size: 0.5rem;
      color: #444;
      div{
        overflow: hidden;
      }
    }
  }
</style>
