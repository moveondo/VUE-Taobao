<template lang="html">
  <div id="index">
    <topSearch></topSearch>
    <scrollContent></scrollContent>
    <bottomTool></bottomTool>
  </div>
</template>
<script>
import topSearch from "./index/topSearch"
import scrollContent from "./index/scrollContent"
import bottomTool from "./index/bottomTool"

export default {
  name: "Index",
  components: {
    topSearch,
    scrollContent,
    bottomTool
  }
}
</script>

<style lang="scss">
  #index{
    height: 100%;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
  }
</style>
