<template>
  <div class="region-wrapper">
    <div class="chart-name">
      菜场区域占比
      <dv-decoration-3 style="width:200px;height:20px;" />
    </div>

    <dv-active-ring-chart :config="config" style="width:380px;height:380px" />
    <dv-decoration-6 />
  </div>
</template>

<script>
import { postRequest } from 'common/utils/request'
export default {
  data() {
    return {
      config: {},
    }
  },
  created() {
    this.postRequest()
  },
  methods: {
    postRequest() {
      postRequest({ cmd: 'loadareaday' }).then(res => {
        const dataArr = []
        for (let i = 0; i < res.result.length; i++) {
          const item = res.result[i]
          dataArr.push({ name: item.NAME, value: Number(item.COUNT) })
        }
        this.config = {
          data: dataArr,
          color: ['#333399', '#CCFFCC', '#663300', '#009999', '#CCCC33'],
        }
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.region-wrapper
  position relative
  width 100%
  height 100%
  text-align center
  // background #aeaeae
  .dv-active-ring-chart
    margin auto
  .chart-name
    position absolute
    top 20px
    right 70px
    margin-bottom 30px
    color rgb(248, 188, 56)
    text-align right
    letter-spacing 4px
    font-size 20px
  .dv-decoration-6
    position absolute
    right 0
    bottom 40px
    left 0
    margin 0 auto
    width 300px
    height 30px
</style>
