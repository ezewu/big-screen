<template>
  <div id="top-header">
    <dv-decoration-8 class="header-left-decoration" />
    <dv-decoration-5 class="header-center-decoration" />
    <dv-decoration-8 class="header-right-decoration" :reverse="true" />
    <div class="center-title">宜昌市智慧菜场综合数据</div>
  </div>
</template>

<script>
export default {
  name: 'TopHeader',
}
</script>

<style lang="stylus" scoped>
#top-header
  position relative
  display flex
  flex-shrink 0
  justify-content space-between
  overflow hidden
  width 100%
  height 100px
  .header-center-decoration
    margin-top 10px
    padding-top 30px
    width 40%
    height 60px
  .header-left-decoration, .header-right-decoration
    // padding-top 20px
    width 26%
    height 60px
  .center-title
    position absolute
    top 28px
    left 50%
    color rgb(248, 188, 56)
    text-shadow: 0 0 5px #FFFFFF
    letter-spacing 8px
    font-weight bold
    font-size 34px
    transform translateX(-50%)
</style>
