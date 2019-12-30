<template>
  <div id="app">
    <vue-particle-line>
      <top-header />
      <div class="center-wrapper">
        <digital-flop />
      </div>

      <div class="content-wrapper">
        <div class="top-wrapper">
          <dv-border-box-1>
            <sales-volume-one />
          </dv-border-box-1>
          <dv-border-box-3>
            <annual-transactions />

            <capsule />

            <day-trading />

          </dv-border-box-3></div>
        <div class="bottom-wrapper">
          <dv-border-box-1>
            <sales-volume-two />
          </dv-border-box-1>
          <dv-border-box-8 :dur="30">
            <transaction-record />
          </dv-border-box-8>
          <dv-border-box-3>
            <region />
          </dv-border-box-3>
        </div>
      </div>
    </vue-particle-line>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    TopHeader: () => import('@@/top-header'),
    DigitalFlop: () => import('@@/digital-flop'),
    SalesVolumeOne: () => import('@@/sales-volume-one'),
    SalesVolumeTwo: () => import('@@/sales-volume-two'),
    AnnualTransactions: () => import('@@/annual-transactions'),
    Capsule: () => import('@@/capsule'),
    DayTrading: () => import('@@/day-trading'),
    Region: () => import('@@/region'),
    TransactionRecord: () => import('@@/transaction-record'),
  },
  data() {
    return {
      da: {
        data: [
          {
            name: '菜声总数',
            value: 55,
          },
          {
            name: '商户总数',
            value: 120,
          },
          {
            name: '日交易额',
            value: 71,
          },
          {
            name: '日交易量',
            value: 66,
          },
          {
            name: '日交易次数',
            value: 80,
          },
        ],
        showValue: true,
      },
      conn: {
        // radius: 300,
        data: [
          {
            name: '周口',
            value: 55,
          },
          {
            name: '南阳',
            value: 120,
          },
          {
            name: '西峡',
            value: 78,
          },
          {
            name: '驻马店',
            value: 66,
          },
          {
            name: '新乡',
            value: 80,
          },
        ],
      },
    }
  },
}

</script>

<style lang="stylus" scoped>
#app
  .center-wrapper
    display flex
    flex 1
    flex-direction column
    box-sizing border-box
  .content-wrapper
    box-sizing border-box
    padding 10px
    .top-wrapper
      display flex
      align-self flex-end
      align-items flex-end
      height 420px
      .dv-border-box-1
        width 18%
        height 100%
      .dv-border-box-3
        box-sizing border-box
        padding 10px 15px
        width 82%
        height 100%
    .bottom-wrapper
      display flex
      height 420px
      .dv-border-box-1
        display inline-block
        box-sizing border-box
        width 18%
        height 100%
      .dv-border-box-8
        display inline-block
        box-sizing border-box
        padding 10px
        width 60%
        height 100%
        // box-shadow: 0 0 10px rgb(150, 200, 255)
      .dv-border-box-3
        display inline-block
        box-sizing border-box
        padding 10px
        width 22%
        height 100%
</style>
