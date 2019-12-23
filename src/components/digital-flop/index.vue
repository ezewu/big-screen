<template>
  <div id="digital-flop">
    <div v-for="item of digitalFlopData" :key="item.title" class="digital-flop-item">
      <dv-border-box-13>
        <div class="icon-wrapper">
          <svg-icon :icon-class="item.icon" :style="{'color':item.color}" />
        </div>

        <div class="font-wrapper">
          <div class="digital-flop-title">{{ item.title }}</div>
          <div class="digital-flop">
            <dv-digital-flop :config="item.number" style="width:100px;height:50px;" />
            <div class="unit">{{ item.unit }}</div>
          </div>
        </div>
      </dv-border-box-13>
    </div>
    <dv-decoration-10 />
  </div>
</template>

<script>
export default {
  name: 'DigitalFlop',
  data() {
    return {
      digitalFlopData: [],
    }
  },
  mounted() {
    const { createData } = this

    createData()

    setInterval(createData, 30000)
  },
  methods: {
    createData() {
      const { randomExtend } = this

      this.digitalFlopData = [
        {
          title: '菜场总数',
          number: {
            number: [randomExtend(20000, 30000)],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#4d99fc',
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
            number: [randomExtend(20, 30)],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#f46827',
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
            number: [randomExtend(20, 30)],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#40faee',
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
            number: [randomExtend(10, 20)],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#4d99fc',
              fontWeight: 'bold',
            },
          },
          unit: '笔',
          icon: 'trading_volume',
          color: '#daa13e',
        },
        {
          title: '日交易次数',
          number: {
            number: [randomExtend(5, 10)],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#f46827',
              fontWeight: 'bold',
            },
          },
          unit: '次',
          icon: 'frequency',
          color: '#8868f1',
        },
      ]
    },
    randomExtend(minNum, maxNum) {
      if (arguments.length === 1) {
        return parseInt(Math.random() * minNum + 1, 10)
      } else {
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
#digital-flop
  position relative
  display flex
  flex-shrink 0
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
    opacity 0.5
  .digital-flop-item
    width 19%
    // box-shadow: 0 0 5px rgb(150, 200, 255)
    background-color rgba(6, 30, 93, 0.4)
    .dv-border-box-13
      box-sizing border-box
      padding 25px
      height 100px
    >>>.border-box-content
      display flex
      padding 0 10px
      .icon-wrapper
        flex 0 0 60px
        width 60px
        height 60px
        border-radius 50%
        background-color #072549
        text-align center
        line-height 70px
        box-shadow: 0 0 15px rgb(255, 255, 255)
        .svg-icon
          color #FFF
          font-size 38px
      .font-wrapper
        flex 1
        margin-left 40px
        .digital-flop-title
          margin-top 6px
          color #eee
          font-size 18px
        .digital-flop
          display flex
        .unit
          display flex
          align-items flex-end
          margin-left 10px
          padding-bottom 13px
          color #bbb
</style>
