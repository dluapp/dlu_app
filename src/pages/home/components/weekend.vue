<template>
  <div>
    <div class="recommend-title">周末去哪</div>
    <ul>
      <li class="item" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name : 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id:'0001',
        imgUrl: '../../../../static/校园抽奖.svg',
        title:'这是第一个demo',
        desc:'11111111111'
      },{
        id:'0002',
        imgUrl: '../../../../static/校园演出.svg',
        title:'演出活动通知',
        desc:'2222222222222333333333'
      },{
        id:'0003',
        imgUrl: '../../../../static/校园兼职.svg',
        title:'校园商店',
        desc:'333333333333333333333333333333'
      },{
        id:'0004',
        imgUrl: '../../../../static/校园抽奖.svg',
        title:'抽连大锦鲤',
        desc:''
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .recommend-title
    line-height : .8rem
    background : #eeeeee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width : 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height .4rem
      color #cccccc
      ellipsis()
</style>
