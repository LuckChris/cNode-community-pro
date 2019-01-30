<template>
    <div class='right-content-wrapper'>
       <div class="login">
           <div class="title">vue：vue.js专业中文社区</div>
           <div login-tips>您可以
               <span>登录</span>
               <span>或</span>
               <span>注册</span>,
               <span>也可以</span>
               <button>通过github登录</button>
           </div>
       </div>
       <div class="ad">
           <p>广告部分的内容</p>
       </div>

    </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style lang="less">
.right-content-wrapper{
    background-color: palegoldenrod;
    margin-left: 10px;
    box-sizing: border-box;
    .login{
        width: 290px;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        margin :10px auto;
        // margin-bottom: 10px;

    }
    .ad{
        width: 290px;
        height: 125px;
        background-color: #fff;
        border-radius: 8px;
        margin :0 auto;

    }
}

</style>
