<template>
  <div>

<!--    顶部swiper轮播图-->
    <swiper class="swiper" indicator-dots="true" >
      <swiper-item><img class="swiperItem" src="/static/demo/1.jpg" alt=""></swiper-item>
      <swiper-item><img class="swiperItem" src="/static/demo/2.jpg" alt=""></swiper-item>
      <swiper-item><img class="swiperItem" src="/static/demo/3.jpg" alt=""></swiper-item>
      <swiper-item><img class="swiperItem" src="/static/demo/4.jpg" alt=""></swiper-item>
    </swiper>
<!--    价格-->
    <div class="priceText">
      <p class="price">￥368</p><span class="orprice">原价￥450.52</span>
    </div>

<!--    标题-->
    <h1 class="title">&nbsp;&nbsp;&nbsp;&nbsp;法式婚纱2019新款新娘森系超仙梦幻女小个子
      拖尾简单显瘦礼服</h1>

<!--    功能区-->
    <van-tag class="tag" round type="primary">可配送港澳</van-tag>
    <van-tag class="tag" round type="success">库存充足</van-tag>
    <van-tag class="tag" round type="danger">7天无理由退货</van-tag>
    <van-tag class="tag" round type="warning">精准达</van-tag>
    <div class="noticeBar">
      <van-notice-bar
        left-icon="https://img.yzcdn.cn/1.png"
        text="促销:购买一件可优惠换购热销商品,促销:购买一件可优惠换购热销商品,促销:购买一件可优惠换购热销商品重要的事情说三遍！！！"
      />
    </div>
    <van-cell title="请选择"  value="请选择商品类型和数量"
              v-bind:center="true" :clickable="false" arrow-direction="down" />
    <view class="select">
      <div class="selected">
        <p class="selText">已选</p> <p class="selectedInfo">480g*24整箱装</p>
      </div>

      <div class="product">
        <p class="selText chanpin">产品</p>
        <div class="proType">
          <p class="proTag">500g</p>
          <p class="proTag">50000g</p>
          <p class="proTag">48瓶每箱</p>

        </div>
      </div>

      <div class="mount">
        <p class="selText">数量</p>
        <van-stepper :value="1"  />
      </div>


    </view>


<!--    //商品参数弹出-->
    <van-cell title="商品参数" is-link @click="showPopup" />
    <van-popup
      :show="show"
      position="bottom"
      custom-style="height: 60%"
      @close="onClose"
    >
      <div class="chart">
        <div class="chartLine">
          <div class="proName">属性名</div>
          <div class="proValue">属性值</div>
        </div>
        <div class="chartLine">
          <div class="proName">大小</div>
          <div class="proValue">50码</div>
        </div>
        <div class="chartLine">
          <div class="proName">材质</div>
          <div class="proValue">牛津布</div>
        </div>
        <div class="chartLine">
          <div class="proName">适用性别</div>
          <div class="proValue">男女均可</div>
        </div>
        <div class="chartLine">
          <div class="proName">透气性能</div>
          <div class="proValue">良好</div>
        </div>
        <div class="chartLine">
          <div class="proName">属性名</div>
          <div class="proValue">属性值</div>
        </div>
        <div class="chartLine">
          <div class="proName">大小</div>
          <div class="proValue">50码</div>
        </div>
        <div class="chartLine">
          <div class="proName">材质</div>
          <div class="proValue">牛津布</div>
        </div>
        <div class="chartLine">
          <div class="proName">适用性别</div>
          <div class="proValue">男女均可</div>
        </div>
        <div class="chartLine">
          <div class="proName">透气性能</div>
          <div class="proValue">良好</div>
        </div>
      </div>
    </van-popup>

<!--    //商品详情小字-->
    <div class="detailText">
      <van-tag class="detailTag" round type="primary">商品详情</van-tag>
    </div>


<!--    详情图片box-->
    <div class="imgBox">
      <img class="detailImg" src="/static/demo/1.jpg" />
      <img class="detailImg" src="/static/demo/2.jpg" />
      <img class="detailImg" src="/static/demo/3.jpg" />
      <img class="detailImg" src="/static/demo/4.jpg" />
    </div>


<!--    底部购物功能区-->
    <van-goods-action >
      <van-goods-action-icon icon="chat-o" text="客服" dot />
      <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
      <van-goods-action-button text="加入购物车" type="warning" />
      <van-goods-action-button text="立即购买" />
    </van-goods-action>

    <div class="lastTip">亲！到底了油！^-^</div>

  </div>
</template>


<script>

  export default {
    data() {
      return {
        show: false,
      }
    },
    methods:{
      showPopup: function(){
        this.show = true;
      },
      onClose() {
        this.show = false;
      }
    }
   ,

  }
</script>

<style>
  page{
    margin: 0;
    padding: 0;
  }
  .swiper{
    width: 100%;
    height: 740rpx;
    background-color: burlywood;
    position: relative;
  }
  .swiperItem{
    width: 100%;
    height: 100%;
  }
  .priceText{
    width: 100%;
    height: 70rpx;
    margin-top: 10rpx;
    /*background-color: lime;*/
    padding-left: 20rpx;
  }
  .price{
    font-size: 50rpx;
    display: inline-block;
    margin-right: 20rpx;
    color: #ff702d;
  }
  .orprice{
    font-size: 30rpx;
    text-decoration: line-through;
    color: #aaaaaa;
  }
  .title{
    padding: 0 40rpx 0 40rpx;
    margin-bottom: 10rpx;
  }
  .tag{
    margin: 10rpx;
  }
  .select{
    margin: 0 auto;
    padding-left: 40rpx;
    width: 99%;
    /*height: 320rpx;*/
    /*background-color: #d9ff77;*/
    border-top: 2rpx solid rgba(154, 154, 154, 0.2);
    border-bottom: 2rpx solid rgba(154, 154, 154, 0.2);
    overflow: hidden;
  }
  .selText{
    display: inline-block;
    font-size: 25rpx;
    color: #424242;
    width: 100rpx;
    float: left;
    margin-top: 10rpx;
    /*background-color: peachpuff;*/
  }
  .selected{
    /*background-color: peachpuff;*/
  }
  .selectedInfo{
    display: inline-block;
    font-size: 20rpx;
    margin-left: 20rpx;
  }
  .product{
    width: 100%;
    /*height: 200rpx;*/
    margin-top: 20rpx;
    /*background-color: darkorchid;*/
    display: block;
  }
  .chanpin{
    /*height: 200 rpx;*/
  }
  .proType{
    float: left;
    width: 500rpx;
    /*height: 200rpx;*/
    /*background-color: darkblue;*/
  }
  .proTag{
    padding: 5rpx;
    display: inline-block;
    border-radius: 5rpx;
    /*background-color: #c7c7c7;*/
    border: 1px solid rgba(154, 154, 154, 0.71);
    margin: 10rpx;
    font-size: 25rpx;
  }
  .mount{
    height: 70rpx;
    display: block;
    float: left;
    margin-top: 20rpx;
    width: 100%;
    /*background-color: khaki;*/
  }
  .detailText{
    margin-top: 10rpx;
    margin-bottom: 10rpx;
    text-align: center;
  }
  .imgBox{
    width: 100%;
  }
  .detailImg{
    width: 100%;
    height: 740rpx;
    margin: 0;
    padding: 0;
    display: block;
  }
  .lastTip{
    width: 100%;
    height: 96rpx;
    background-color: #aaaaaa;
    text-align: center;
  }
  .chart{
    /*background-color: coral;*/
    margin: 15%;
    width: 70%;
    /*height: 70%;*/
    border-radius: 50rpx;
    border: 1px solid #abaaa2;
    overflow: hidden;
  }
  .chartLine{
    width: 100%;
    height: 80rpx;
    border: 1px solid rgba(154, 154, 154, 0.45);
    border-right: none;
    border-left: none;
    border-top: none;
  }
  .proName{
    width: 30%;
    height: 80rpx;
    line-height: 80rpx;
    display: inline-block;
    text-align: right;
    padding-right: 20rpx;
    border: 1px solid #9a9a9a;
    border-bottom: none;
    border-left: none;
    border-top: none;
  }
  .proValue{
    width: 60%;
    height: 80rpx;
    line-height: 80rpx;
    display: inline-block;
    text-align: left;
    padding-left: 20rpx;
    /*background-color: darkslategray;*/
  }
  .noticeBar{
    margin-top: 10rpx;
  }
</style>
