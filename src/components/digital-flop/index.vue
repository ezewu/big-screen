<template>
  <div id="digital-flop">
    <div v-for="item of digitalFlopData" :key="item.title" class="digital-flop-item">
      <div class="dv-border-box-13">
        <div class="icon-wrapper">
          <svg-icon :icon-class="item.icon" :style="{'color':item.color}" />
        </div>

        <div class="font-wrapper">
          <div class="digital-flop-title">{{ item.title }}</div>
          <div class="digital-flop">
            <dv-digital-flop :config="item.number" />
            <div class="unit">{{ item.unit }}</div>
          </div>
        </div>
      </div>
    </div>
    <dv-decoration-10 />
  </div>
</template>

<script>
import { postRequest } from 'common/utils/request'
import { setInterval } from 'timers'
export default {
  name: 'DigitalFlop',
  data() {
    return {
      digitalFlopData: [],
    }
  },
  created() {
    this.postRequest()
    const { postRequest } = this
    setInterval(postRequest, 300000)
  },
  methods: {
    postRequest() {
      postRequest({ cmd: 'loadcountdaytotal' }).then(res => {
        this.createData(res.result[0])
      })
    },
    createData({ MARKETNUM, CUSNUM, JE, WT, CS }) {
      this.digitalFlopData = [
        {
          title: '菜场总数',
          number: {
            number: [MARKETNUM],
            content: '{nt}',
            textAlign: 'right',
            toFixed: 2,
            style: {
              fill: '#f8bc38',
              fontWeight: 'bold',
            },
          },
          unit: '家',
          icon: 'vegetable_market',
          color: '#e93e3c',
        },
        {
          title: '商户总数',
          number: {
            number: [CUSNUM],
            content: '{nt}',
            textAlign: 'right',
            toFixed: 2,
            style: {
              fill: '#f8bc38',
              fontWeight: 'bold',
            },
          },
          unit: '户',
          icon: 'merchant',
          color: '#f6902c',
        },
        {
          title: '日交易额',
          number: {
            number: [JE],
            content: '{nt}',
            textAlign: 'right',
            toFixed: 2,
            style: {
              fill: '#f8bc38',
              fontWeight: 'bold',
            },
          },
          unit: '元',
          icon: 'turnover',
          color: '#a7cc58',
        },
        {
          title: '日交易量',
          number: {
            number: [WT],
            content: '{nt}',
            textAlign: 'right',
            toFixed: 2,
            style: {
              fill: '#f8bc38',
              fontWeight: 'bold',
            },
          },
          unit: 'kg',
          icon: 'trading_volume',
          color: '#daa13e',
        },
        {
          title: '日交易次数',
          number: {
            number: [CS],
            content: '{nt}',
            textAlign: 'right',
            toFixed: 2,
            style: {
              fill: '#f8bc38',
              fontWeight: 'bold',
            },
          },
          unit: '次',
          icon: 'frequency',
          color: '#8868f1',
        },
      ]
    },
  },
}
</script>

<style lang="stylus" scoped>
#digital-flop
  position relative
  display flex
  justify-content space-between
  align-items center
  overflow hidden
  padding 0 10px
  height 125px
  .dv-decoration-10
    position absolute
    right 0
    bottom 0
    left 0
    box-sizing border-box
    padding 0 20px
    width 100%
    height 5px
    opacity 0.6
  .digital-flop-item
    width 19%
    // box-shadow: 0 0 5px rgb(150, 200, 255)
    background-color rgba(10, 39, 50, 0.8)
    // box-shadow 0 7px 8px -8px rgba(255, 255, 255, 0.6)
    .dv-border-box-13
      display flex
      box-sizing border-box
      padding 20px
      height 100px
      .icon-wrapper
        flex 0 0 60px
        width 60px
        height 60px
        border-radius 50%
        background-color #072549
        box-shadow 0 0 15px rgb(255, 255, 255)
        text-align center
        line-height 70px
        .svg-icon
          color #FFF
          font-size 38px
      .font-wrapper
        flex 1
        margin-left 40px
        padding-left 10px
        .digital-flop-title
          margin-top 6px
          color #eee
          font-size 18px
        .digital-flop
          display flex
          .dv-digital-flop
            height 50px
          .unit
            display flex
            align-items flex-end
            margin-left 10px
            padding-bottom 13px
            color #bbb
</style>
