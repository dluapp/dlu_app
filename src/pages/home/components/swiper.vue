<template>
<div class="wrapper">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"/>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        loop: true,
        pagination: '.swiper-pagination',
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://www.pptok.com/wp-content/uploads/2012/08/xunguang-4.jpg',
      },{
        id: '0002',
        imgUrl: 'http://www.pptbz.com/pptpic/UploadFiles_6909/201203/2012031220134655.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #ffffff
  .wrapper
    overflow: hidden
    width: 100%
    height :0
    padding-bottom: 31.25%
    .swiper-img
      width : 100%
</style>
