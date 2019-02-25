
<template>
<div>
  <home-header :city="city"></home-header>
  <home-swiper :list="swiperList"></home-swiper>
  <home-icons :list="iconList"></home-icons>
  <home-recommend :recommendList="recommendList"></home-recommend>
  <home-weekend></home-weekend>
</div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '分类',
      swiperList: [],
      iconList: [],
      recommendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/static/mock/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style></style>
