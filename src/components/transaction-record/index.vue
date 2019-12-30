<template>
  <div class="transaction-record-wrapper">
    <div class="title">日交易量实时数据</div>
    <dv-scroll-board :config="config" />
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
    const { postRequest } = this
    setInterval(postRequest, 300000)
  },
  methods: {
    postRequest() {
      postRequest({ cmd: 'loadsalesday' }).then(res => {
        const dataArr = []
        for (let i = 0; i < res.result.length; i++) {
          const item = res.result[i]
          dataArr.push(Object.values(item).splice(2))
        }
        this.config = {
          header: ['菜场名称', '区域', '联系人', '电话', '商户数量', '交易额', '交易量', '交易次数'],
          data: dataArr,
          rowNum: 8,
          index: true,
          headerBGC: '#002766',
          columnWidth: [70, 200, 100, 100, 180],
          align: ['center'],
          oddRowBGC: 'rgba(0, 59, 81, 0.4)',
          evenRowBGC: 'rgba(10, 39, 50,0.3)',
        }
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/common'
.transaction-record-wrapper
  overflow hidden
  box-sizing border-box
  padding-top 5px
  width 100%
  height 100%
  title()
  letter-spacing 4px
  .dv-scroll-board
    box-sizing border-box
    // margin-bottom 60px
    padding-top 5px
</style>
