<template>
  <div>

<!--    顶部swiper轮播图-->
    <swiper class="swiper" indicator-dots="true" autoplay="true" circular="true">
      <swiper-item @click="todetail"><img class="swiperItem" src="/static/demo/swiper1.jpg" alt=""></swiper-item>
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
        <p class="title">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
        <p class="price">￥64.9</p>
        <s class="orprice">￥77.50</s>
      </div>
      <div class="scrollXItem">
        <img class="ximg" src="/static/demo/scrox.jpg"/>
        <p class="title">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
        <p class="price">￥64.9</p>
        <s class="orprice">￥77.50</s>
      </div>
      <div class="scrollXItem">
        <img class="ximg" src="/static/demo/scrox.jpg"/>
        <p class="title">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
        <p class="price">￥64.9</p>
        <s class="orprice">￥77.50</s>
      </div>
      <div class="scrollXItem">
        <img class="ximg" src="/static/demo/scrox.jpg"/>
        <p class="title">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
        <p class="price">￥64.9</p>
        <s class="orprice">￥77.50</s>
      </div>
      <div class="scrollXItem">
        <img class="ximg" src="/static/demo/scrox.jpg"/>
        <p class="title">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
        <p class="price">￥64.9</p>
        <s class="orprice">￥77.50</s>
      </div>
      <div class="scrollXItem">
        <img class="ximg" src="/static/demo/scrox.jpg"/>
        <p class="title">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
        <p class="price">￥64.9</p>
        <s class="orprice">￥77.50</s>
      </div>
      <div class="scrollXItem">
        <img class="ximg" src="/static/demo/scrox.jpg"/>
        <p class="title">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
        <p class="price">￥64.9</p>
        <s class="orprice">￥77.50</s>
      </div>
      <div class="scrollXItem">
        <img class="ximg" src="/static/demo/scrox.jpg"/>
        <p class="title">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
        <p class="price">￥64.9</p>
        <s class="orprice">￥77.50</s>
      </div>
      <div class="scrollXItem">
        <img class="ximg" src="/static/demo/scrox.jpg"/>
        <p class="title">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
        <p class="price">￥64.9</p>
        <s class="orprice">￥77.50</s>
      </div>
      <div class="scrollXItem">
        <img class="ximg" src="/static/demo/scrox.jpg"/>
        <p class="title">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
        <p class="price">￥64.9</p>
        <s class="orprice">￥77.50</s>
      </div>
    </scroll-view>

<!--    Tab标签页-->
    <van-tabs sticky animated swipeable :border="false" >
      <van-tab class="tab" title="超市精选">
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
      </van-tab>
      <van-tab class="tab" title="宠物生活">
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
      </van-tab>
      <van-tab class="tab" title="家具日用">
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
      </van-tab>
      <van-tab class="tab" title="时令生鲜">
        <div class="scrollYItem">
        <img class="yimg" src="/static/demo/scrox.jpg"/>
        <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
        <p class="price">￥64.9</p>
        <s class="orprice">￥77.50</s>
      </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
      </van-tab>
      <van-tab class="tab" title="中外名酒">
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
        <div class="scrollYItem">
          <img class="yimg" src="/static/demo/scrox.jpg"/>
          <p class="ytitle">花木星球洗衣液氨基la酸小分子洁净 祖玛龙城。。。</p>
          <p class="price">￥64.9</p>
          <s class="orprice">￥77.50</s>
        </div>
      </van-tab>
    </van-tabs>


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
    methods:{
    todetail:() => {
      console.log('点击了一下下')
      console.log(wx)
      wx.navigateTo({
        url: '/pages/details/main',
      })
      }
    }


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
    /*background-color: aquamarine;*/
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
    height: 410rpx;
    /*background-color: #c7c7c7;*/
    white-space:nowrap;
  }
  .scrollXItem{
    height: 357rpx;
    width: 200rpx;
    margin-left: 20rpx;
    display: inline-block;
    overflow: hidden;
    padding: 20rpx;
    border-radius: 10rpx;
    background-color: white;
    box-shadow: 5rpx 5rpx 10rpx #abaaa2;

  }
  .scrollYItem{
    height: 470rpx;
    width: 300rpx;
    margin: 10rpx 10rpx 5rpx 10rpx;
    display: inline-block;
    overflow: hidden;
    padding: 20rpx;
    border-radius: 10rpx;
    background-color: white;
    box-shadow: 5rpx 5rpx 10rpx #abaaa2;
  }
  .yimg{
    width: 300rpx;
    height: 300rpx;
  }
  .ximg{
    width: 200rpx;
    height: 200rpx;
  }
  .title{
    width: 200rpx;
    height: 87rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal !important;
    line-height: 43.5rpx;
    margin-top: 20rpx;
  }
  .ytitle{
    width: 300rpx;
    height: 87rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal !important;
    line-height: 43.5rpx;
    margin-top: 20rpx;
    margin-bottom: 7rpx;
  }
  .price{
    font-size: 30rpx;
    display: inline-block;
    margin-right: 20rpx;
    margin-top: 10rpx;
    color: #ff702d;
  }
  .orprice{
    font-size: 20rpx;
    text-decoration: line-through;
    display: inline-block;
    color: #aaaaaa;
  }
  .tab{
    text-align: center;
  }
</style>
