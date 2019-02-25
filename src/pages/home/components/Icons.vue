<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <router-link to="/data">
            <dir class="icon-img">
              <img class="icon-imgcontent" :src="item.imgUrl"> 
            </dir>
              <p class="icon-desc">{{item.desc}}</p>
          </router-link>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
      //循环
      loop:true,
      }
    }
  },
  computed : {
    pages () {
        const pages = []
        this.list.forEach((item, index) => {
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
