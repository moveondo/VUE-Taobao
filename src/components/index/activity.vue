<template lang="html">
  <div class="activity-block"  >
    <img :src="activityIMg" />
  </div>
</template>
<script>
import activityIMg from './../../../static/images/activity.png'
  export default {
    data: function(){
      return {
          activityIMg: activityIMg
      }
    }
  }
</script>

<style lang="scss">
  .activity-block{
    padding: 0 0 0.2rem 0;
    img{
      max-width: 100%;
      text-align: center;
    }
  }
</style>
