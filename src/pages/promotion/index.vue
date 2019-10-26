<template>
  <div>
    <h1>这是promotion活动页面</h1>
  </div>
</template>


<script>

  export default {
    data: {

    },
    methods: {
      tabChange (e) {
        console.log(e.target.item.pagePath)
        wx.switchTab({
          url: e.target.item.pagePath
        })
      },
      components: {

      }

    }
  }
</script>

<style>

  page {
    height: 100%;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
    box-sizing: border-box;
    background-color: #3366ff;
  }

  ._img {
    width: 100px;
    height: 100px;
    margin-bottom: 25px;
    border-radius: 50%;
  }

  ._p {
    font-size: 20px;
    margin-bottom: 25px;
  }

  button {
    margin-top: 100px;
    margin-bottom: 50px;
  }
</style>
