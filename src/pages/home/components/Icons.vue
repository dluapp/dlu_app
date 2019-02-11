<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <dir class="icon-img">
            <img class="icon-imgcontent" :src="item.imgUrl"> 
          </dir>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        loop: true,
      },
      iconList: [{
        id: '0001',
        imgUrl: '../../../../static/校园签到.png',
        desc: '签到'
      },{
        id: '0002',
        imgUrl: '../../../../static/校园公告.svg',
        desc: '公告'
      },{
        id: '0003',
        imgUrl: '../../../../static/校园兼职.svg',
        desc: '校园商店'
      },{
        id: '0004',
        imgUrl: '../../../../static/校园答题.svg',
        desc: '答题互助'
      },{
        id: '0005',
        imgUrl: '../../../../static/校园荣誉.svg',
        desc: '资料墙'
      },{
        id: '0006',
        imgUrl: '../../../../static/校园演出.svg',
        desc: '演出活动'
      },{
        id: '0007',
        imgUrl: '../../../../static/校园新闻、通知公告.svg',
        desc: '学校通知'
      },{
        id: '0008',
        imgUrl: '../../../../static/校园投票.svg',
        desc: '投票'
      },{
        id: '0009',
        imgUrl: '../../../../static/校园抽奖.svg',
        desc: '抽奖'
      }]
    }
  },
  computed : {
    pages () {
        const pages = []
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index/8)
          if(!pages[page]){
            pages[page] = []
          }
          pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .icons >>> .swiper-container
    height : 0
    padding-bottom : 50%
  .icons
    margin-top : .1rem
    .icon
      position: relative
      overflow: hidden
      width : 25%
      float: left
      height : 0
      padding-bottom : 25%
      .icon-img
        position absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        padding : .1rem
        box-sizing : border-box
        .icon-imgcontent
          display : block
          margin: 0 auto
          height : 100%
      .icon-desc
        position absolute
        left: 0
        right: 0
        bottom: 0
        line-height : .44rem
        height : .44rem
        text-align : center
        color $darkTextColor
</style>
