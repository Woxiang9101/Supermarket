<template>
  <div>



    <div class="card">

      <div class="checkBox">
        <van-checkbox class='checkBoxContent' :value="allCheck" @change="onChange"></van-checkbox>
      </div>

      <div class="product">
        <van-card
          tag="New"
          price="10.00"
          origin-price="20.00"
          title="枝胡原木抽纸3层24包正向之母"
          desc="枝胡原木抽纸3层24包正向"
          :thumb="imageURL"
        >
          <view slot="bottom">
            <div class="number">
              <van-stepper :value="1"/>
            </div>
          </view>
        </van-card>
      </div>

    </div>
    <div class="card">

      <div class="checkBox">
        <van-checkbox class='checkBoxContent' :value="allCheck" @change="onChange"></van-checkbox>
      </div>

      <div class="product">
        <van-card
          tag="New"
          price="10.00"
          origin-price="20.00"
          title="枝胡原木抽纸3层24包正向之母"
          desc="枝胡原木抽纸3层24包正向"
          :thumb="imageURL"
        >
          <view slot="bottom">
            <div class="number">
              <van-stepper :value="1"/>
            </div>
          </view>
        </van-card>
      </div>

    </div>
    <div class="card">

      <div class="checkBox">
        <van-checkbox class='checkBoxContent' :value="allCheck" @change="onChange"></van-checkbox>
      </div>

      <div class="product">
        <van-card
          tag="New"
          price="10.00"
          origin-price="20.00"
          title="枝胡原木抽纸3层24包正向之母"
          desc="枝胡原木抽纸3层24包正向"
          :thumb="imageURL"
        >
          <view slot="bottom">
            <div class="number">
              <van-stepper :value="1"/>
            </div>
          </view>
        </van-card>
      </div>

    </div>
    <div class="card">

      <div class="checkBox">
        <van-checkbox class='checkBoxContent' :value="allCheck" @change="onChange"></van-checkbox>
      </div>

      <div class="product">
        <van-card
          tag="New"
          price="10.00"
          origin-price="20.00"
          title="枝胡原木抽纸3层24包正向之母"
          desc="枝胡原木抽纸3层24包正向"
          :thumb="imageURL"
        >
          <view slot="bottom">
            <div class="number">
              <van-stepper :value="1"/>
            </div>
          </view>
        </van-card>
      </div>

    </div>
    <div class="card">

      <div class="checkBox">
        <van-checkbox class='checkBoxContent' :value="allCheck" @change="onChange"></van-checkbox>
      </div>

      <div class="product">
        <van-card
          tag="New"
          price="10.00"
          origin-price="20.00"
          title="枝胡原木抽纸3层24包正向之母"
          desc="枝胡原木抽纸3层24包正向"
          :thumb="imageURL"
        >
          <view slot="bottom">
            <div class="number">
              <van-stepper :value="1"/>
            </div>
          </view>
        </van-card>
      </div>

    </div>
    <div class="card">

      <div class="checkBox">
        <van-checkbox class='checkBoxContent' :value="allCheck" @change="onChange"></van-checkbox>
      </div>

      <div class="product">
        <van-card
          tag="New"
          price="10.00"
          origin-price="20.00"
          title="枝胡原木抽纸3层24包正向之母"
          desc="枝胡原木抽纸3层24包正向"
          :thumb="imageURL"
        >
          <view slot="bottom">
            <div class="number">
              <van-stepper :value="1"/>
            </div>
          </view>
        </van-card>
      </div>

    </div>
    <div class="card">

      <div class="checkBox">
        <van-checkbox class='checkBoxContent' :value="allCheck" @change="onChange"></van-checkbox>
      </div>

      <div class="product">
        <van-card
          tag="New"
          price="10.00"
          origin-price="20.00"
          title="枝胡原木抽纸3层24包正向之母"
          desc="枝胡原木抽纸3层24包正向"
          :thumb="imageURL"
        >
          <view slot="bottom">
            <div class="number">
              <van-stepper :value="1"/>
            </div>
          </view>
        </van-card>
      </div>

    </div>


    <div>
      <van-submit-bar
        :price="3050"
        button-text="提交订单"
        bind:submit="onClickButton"
        :tip="true"
        @submit="toPay"
      >
        <div class="allcheckBox">
          <van-checkbox :value="allCheck" @change="onChange">全选</van-checkbox>
        </div>
      </van-submit-bar>
    </div>

    <div class="footSpace">亲，到底了油！^-^ </div>


  </div>
</template>


<script>

  export default {

    data () {
      return {
        allCheck: true,
        imageURL: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
      }
    },
    methods: {
      onChange: function(event){
        console.log(this.allCheck)
        this.allCheck = !this.allCheck;
      },
      toPay:() => {
    console.log('点击了一下下')
    console.log(wx)
    wx.navigateTo({
      url: '/pages/pay/main',
    })
  }
    },

  }
</script>

<style>
  .card {
    width: 95%;
    margin: 20rpx auto;
    border-radius: 10rpx;
    box-shadow: 5rpx 5rpx 20rpx #c7c6be;
    overflow: hidden;
    background-color: #fafafa;

  }
  .checkBox{
    width: 50rpx;
    background-color: #fafafa;
    float: left;
  }
  .checkBoxContent{
    width: 50rpx;
    height: 50rpx;
    display: block;
    position: relative;
    top: 60rpx;
    left: 10rpx;
  }
  .product{
    width: 90%;
    /*height: 200rpx;*/
    background-color: purple;
    float: left
  }
  .number {
    float: right;
  }
  .allcheckBox{
    margin-left: 20rpx;
  }
  .footSpace{
    width: 100%;
    height: 90rpx;
    text-align: center;

  }
</style>
