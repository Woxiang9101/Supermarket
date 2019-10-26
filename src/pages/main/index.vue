<template>
  <div>

<!--    顶部swiper轮播图-->
    <swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
      <swiper-item><img class="swiperItem" src="/static/demo/swiper1.jpg" alt=""></swiper-item>
      <swiper-item><img class="swiperItem" src="/static/demo/swiper2.jpg" alt=""></swiper-item>
      <swiper-item><img class="swiperItem" src="/static/demo/swiper1.jpg" alt=""></swiper-item>
      <swiper-item><img class="swiperItem" src="/static/demo/swiper2.jpg" alt=""></swiper-item>
    </swiper>

<!--    特惠好货字体样式-->
    <div class="thhhText">
      <div class="line"></div>
      <p class="thhh">特惠好货</p>
      <div class="line"></div>
    </div>

<!--    横向滑动条-->
    <scroll-view class="scrollX" scroll-x="true" bindscroll="scroll"
                  style="width: 100%">
      <div class="scrollXItem">
        <img class="ximg" src="/static/demo/scrox.jpg"/>
        <p class="title">花木星球洗衣液氨基ksdjfalkjsdfklajdkfjadfjkdjf;la酸小分子洁净 祖玛龙城。。。</p>

        <p class="price">￥64.9</p>
      </div>
      <div class="scrollXItem">222222222222</div>
      <div class="scrollXItem">333333333333</div>
      <div class="scrollXItem">222222222222</div>
      <div class="scrollXItem">333333333333</div>
      <div class="scrollXItem">222222222222</div>
      <div class="scrollXItem">333333333333</div>
    </scroll-view>



  </div>
</template>


<script>

  export default {

    data: function () {
      return {
        background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 2000,
        duration: 500
      }
    },


  }
</script>

<style>
  .swiper{
    width: 95%;
    height: 300rpx;
    background-color: burlywood;
    position: relative;
    margin-top: 20rpx;
    left: 2.5%;
    border-radius: 30rpx 10rpx 100rpx 10rpx;
    overflow: hidden;
  }
  .swiperItem{
    width: 100%;
    height: 100%;
  }
  .thhhText{
    width: 100%;
    height: 70rpx;
    background-color: aquamarine;
    padding-top: 30rpx;
    display: flex;
    justify-content: center;
  }
  .line{
    width: 50rpx;
    height: 20rpx;
    border-radius: 20rpx;
    display: inline-block;
    background-color: #FE785A;
    margin: 10rpx;
  }
  .thhh{
    display: inline-block;
    font-size: 40rpx;
    position: relative;
    top: -10rpx;
    margin-left: 10rpx;
    margin-right: 10rpx;
  }
  .scrollX{
    height: 500rpx;
    background-color: sandybrown;
    white-space:nowrap;
  }
  .scrollXItem{
    height: 500rpx;
    width: 200rpx;
    margin-left: 50rpx;
    background-color: lime;
    display: inline-block;
    overflow: hidden;
  }
  .ximg{
    width: 200rpx;
    height: 200rpx;
  }
  .title{
    /*display: block;*/
    width: 200rpx;
    height: 100rpx;
    text-overflow: ellipsis;
    /*overflow: hidden;*/
    /*overflow-wrap: break-word;*/
    white-space:pre-wrap;
  }
</style>
