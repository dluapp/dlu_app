<template>
  <div>
    <data-header></data-header>
    <data-share :recommendList="recommendList"></data-share>
  </div>
</template>

<script>
import DataHeader from './compoents/Header'
import DataShare from './compoents/Share'
import axios from 'axios'
export default {
  name: 'Data',
  components: {
    DataHeader,
    DataShare
  },
  data () {
    return {
      recommendList: [],
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
        this.recommendList=data.recommendList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>

</style>
