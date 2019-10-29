<template>
  <div>

    <van-cell title="订单编号" value="201901546231346522"/>
    <van-cell title="创建日期" value="2018-10-19 14:58:26"/>


    <van-cell-group>
      <van-field
        :value="username"
        label="收货人姓名"
        placeholder="请输入姓名"
      />
      <van-field
        :value="phone"
        label="手机号"
        placeholder="请输入手机号"
        error-message="手机号格式错误"
      />
      <van-cell title="选择收货地址" is-link @click="showPopup" />
      <van-popup
        :show="show"
        closeable
        position="bottom"
        custom-style="height: 40%"
        @close="onClose"
      >
        <van-area :area-list="areaList"/>
      </van-popup>
      <van-field
        :value="message"
        label="详细地址"
        type="textarea"
        placeholder="请输入详细地址"
        autosize
      />
      <van-field
        :value="message"
        label="留言"
        type="textarea"
        placeholder="给店主留言"
        autosize
      />

    </van-cell-group>


    <van-collapse :value="activeNames" @change="onChangeColl"
                  :clickable="true" :border="false">
      <van-collapse-item title="详情" name="cardList">

        <div class="card">
          <div class="product">
            <van-card
              tag="新年新气象"
              price="10.00"
              origin-price="20.00"
              title="枝胡原木抽纸3层24包正向之母"
              desc="枝胡原木抽纸3层24包正向"
              :thumb="imageURL"
            >
              <view slot="bottom">
                <div class="number">
                  x 1
                </div>
              </view>
            </van-card>
          </div>
        </div>

        <div class="card">
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
                  x 1
                </div>
              </view>
            </van-card>
          </div>
        </div>
        <div class="card">
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
                  x 1
                </div>
              </view>
            </van-card>
          </div>
        </div>
        <div class="card">
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
                  x 1
                </div>
              </view>
            </van-card>
          </div>
        </div>
        <div class="card">
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
                  x 1
                </div>
              </view>
            </van-card>
          </div>
        </div>
        <div class="card">
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
                  x 1
                </div>
              </view>
            </van-card>
          </div>
        </div>
        <div class="card">
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
                  x 1
                </div>
              </view>
            </van-card>
          </div>
        </div>
        <div class="card">
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
                  x 1
                </div>
              </view>
            </van-card>
          </div>
        </div>
        <div class="card">
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
                  x 1
                </div>
              </view>
            </van-card>
          </div>
        </div>
        <div class="card">
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
                  x 1
                </div>
              </view>
            </van-card>
          </div>
        </div>


        <div class="footSpace"></div>

      </van-collapse-item>
    </van-collapse>


    <div>
      <van-submit-bar
        :price="3050"
        button-text="微信支付"
        bind:submit="onClickButton"
        :tip="true"
      >

      </van-submit-bar>
    </div>


  </div>
</template>


<script>
  import areaList from './area'

  export default {

    data () {
      return {
        activeNames: ['cardList'],
        username: 'woxiang',
        phone: '13037586574',
        message: '啦啦啦',
        areaList,
        show: false,
        allCheck: true,
        imageURL: 'https://img.yzcdn.cn/vant/t-thirt.jpg'
      }
    },
    methods: {
      onChange: function (event) {
        console.log(this.allCheck)
        this.allCheck = !this.allCheck
      },
      showPopup: function () {
        this.show = true
      },
      onClose: function () {
        this.show = false
      },
      onChangeColl: function (event) {
        console.log(this.activeNames[0])
        if (this.activeNames[0] === 'cardList') {
          this.activeNames = ['0']
        } else {
          this.activeNames = ['cardList']
        }
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

  .checkBox {
    width: 50rpx;
    background-color: #fafafa;
    float: left;
  }

  .checkBoxContent {
    width: 50rpx;
    height: 50rpx;
    display: block;
    position: relative;
    top: 60rpx;
    left: 10rpx;
  }

  .product {
    width: 100%;
    /*height: 200rpx;*/
    background-color: purple;
    float: left
  }

  .number {
    float: right;
  }

  .allcheckBox {
    margin-left: 20rpx;
  }

  .footSpace {
    width: 100%;
    height: 100rpx;
    text-align: center;

  }
</style>
