<template>
  <div>
    <div class="background"></div>

    <div class="top">
      <img :src="userInfo.avatarUrl" alt="欢迎您"/>

      <button class="login" v-if="canIUse&&userInfo.nickName===null" open-type="getUserInfo"
                    @getuserinfo="getUserInfo">微信登录</button>
      <view v-if="!canIUse">请升级微信版本</view>
      <view class="loginText" v-if="userInfo.nickName">{{userInfo.nickName}}</view>
    </div>

    <div class="cells">
      <van-cell title="我的订单" is-link />
      <van-cell title="我的地址" is-link />
    </div>


    <!--    <img v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" alt="欢迎您"/>-->
<!--    <p v-else>欢迎进入世界聊天室</p>-->
<!--    <p v-if="userInfo.nickName">欢迎您 {{userInfo.nickName}}</p>-->

<!--    &lt;!&ndash; 需要使用 button 来授权登录 &ndash;&gt;-->
<!--    <button v-if="canIUse&&userInfo.nickName===null" open-type="getUserInfo"-->
<!--            @getuserinfo="getUserInfo">授权登录</button>-->
<!--    <view v-if="!canIUse">请升级微信版本</view>-->

<!--    <button v-if="userInfo.nickName" type="primary" @click="gotoMain">进入世界聊天室</button>-->
<!--    <mp-toptips v-once msg="授权成功！" type="success" :show="userInfo.nickName"></mp-toptips>-->
  </div>
</template>


<script>

  export default {
    data(){
      return {
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        userInfo: {
          nickName:null,
          avatarUrl:'/static/tabbars/my.png'
        },
      }
      // canIUse: wx.canIUse('button.open-type.getUserInfo'),
      // userInfo: {
      //   nickName:null,
      //   avatarUrl:'/static/tabbars/my.png'
      // },
    },
    onLoad: function () {
      // 查看是否授权
      wx.getSetting({
        success: (res) => {
          if (res.authSetting['scope.userInfo']) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称
            this.getUserInfo();
          }
        }
      })
    },
    methods: {
      getUserInfo: function () {
        wx.getUserInfo({
          success: (res) => {
            this.userInfo = res.userInfo;
            console.log('获取用户信息，授权成功！');
          },
          fail: () => {
            console.log('获取用户信息，授权失败！');
          }
        })
      },
      gotoMain:()=>{
        wx.redirectTo({
          url: '/pages/main/main'
        })
      }
    },

  }
</script>

<style>

  .background{
    width: 150%;
    height: 600rpx;
    border-radius: 50%;
    background-color: #FE785A;
    margin-left: -25%;
    margin-top: -25%;
    z-index: -1;
    position: absolute;
  }
  .top{
    width: 500rpx;
    height: 100rpx;
    /*background-color: burlywood;*/
    position: absolute;
    top: 100rpx;
    left: 100rpx;
  }

  ._img {
    width: 150rpx;
    height: 150rpx;
    display: inline-block;
    border-radius: 50%;

  }
  .capsule{
    width: 150rpx;
    height: 60rpx;
    background-color: rgba(0, 0, 0, 0.2);
    display: inline-block;
    top: -10rpx;
    position: relative;
    margin-left: 30rpx;
    border-radius: 87.5rpx;
    text-align: center;

  }

  ._p {
    font-size: 30rpx;
    line-height: 60rpx;
    color: white;
  }
  .login {
    height: 60rpx;
    background-color: rgba(0, 0, 0, 0.2);
    display: inline-block;
    top: -30rpx;
    position: relative;
    margin-left: 30rpx;
    border-radius: 87.5rpx;
    text-align: center;
    font-size: 30rpx;
    line-height: 60rpx;
    color: white;
  }
  .loginText {
    height: 60rpx;
    display: inline-block;
    top: -30rpx;
    position: relative;
    margin-left: 30rpx;
    text-align: center;
    font-size: 40rpx;
    line-height: 60rpx;
    color: white;
  }

  .cells{
    width: 80%;
    position: absolute;
    top: 300rpx;
    left: 10%;
    overflow: hidden;
    border-radius: 15rpx;
    opacity: 0.96;
    box-shadow: 5rpx 5rpx 30rpx #d6d6d6;
  }

</style>
