
<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <input type="text"/>
      输入
    </div>
    <div class="header-right">{{this.city}}
      <span class="iconfont arow-icon">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header 
    display : flex
    line-height : .86rem
    background : $bgColor
    color : #ffffff
    .header-left
      width: .64rem
      float left
      .back-icon
        text-align : center
        font-size: .4rem
    .header-input
      flex: 1
      height : .64rem
      line-height : .64rem
      margin-top : .12rem
      margin-left : .2rem
      padding-left : .2rem
      background : #ffffff
      border-radius : .1rem
      color : #cccccc
    .header-right
      width: 1.24rem
      float right
      text-align : center
      color : #ffffff
      .arow-icon
        margin-left : -0.04rem
        font-size: .24rem
      
</style>

