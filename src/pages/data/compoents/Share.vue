<template>
  <div>
    <div class="recommend-title">下载</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
          <img class="item-img" :src="item.imgUrl">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <a :href="item.imgUrl" :download="item.id"><button class="item-button">点击下载</button></a>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name : 'DataShare',
  props: {
    recommendList: Array
  },
  data () {
    return {
      recommendList: [{
        "id":"0001",
        "imgUrl": "../../../../static/校园抽奖.svg",
        "title":"抽连大锦鲤",
        "desc":"这些都是演示demo"
      },{
        "id":"0002",
        "imgUrl": "../../../../static/校园演出.svg",
        "title":"演出活动通知",
        "desc":"2222222222222333333333"
      }]
    }
  }

}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .recommend-title
    margin-top : .001rem
    line-height : .8rem
    background : #eeeeee
    text-indent: .2rem
  .item
    display : flex
    height : 1.9rem
    overflow hidden
    border:1px solid #cccccc
    .item-img
      width : 1.7rem
      height : 1.7rem
      padding : .1rem 
    .item-info
      flex: 1
      padding .1rem
      min-width :0
      .item-title
        line-height .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #cccccc
        ellipsis()
      .item-button
        line-height : .44rem
        margin-top .16rem
        background : #ff9300
        padding 0 .2rem
        border-radius: .06rem
</style>
