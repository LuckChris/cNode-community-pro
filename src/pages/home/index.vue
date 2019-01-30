<template>
    <div class='home-page-wrapper'>
            <div class="top-content">
                <div class="content">
                    <div class="left-content">
                        <div class="logo">
                            <img src="../../../static/image/vue.png" alt="">
                            <span>Vue.js</span>
                        </div>
                        <div class="search">
                            <input type="text">
                        </div>
                    </div>
                    <div class="right-content">
                        <span v-for='(item,index) in list' :key="index"> {{item.name}}</span>
                    </div>
                </div>
            </div>
            <div class="home-page">
                <content-left class="left"></content-left>
                <content-right class='right'></content-right>
            </div>
    </div>
</template>
<script>
import ContentLeft from './home-left'
import ContentRight from './home-right'
export default {
  data () {
    return {
      list: [
        {name: '首页', id: 1},
        {name: '微信公众号', id: 2},
        {name: 'VUE2.0', id: 3},
        {name: '参考资料', id: 4},
        {name: 'API', id: 5},
        {name: '关于', id: 6},
        {name: '注册', id: 7},
        {name: '登录', id: 8}

      ]

    }
  },
  components: {ContentLeft, ContentRight}
}
</script>
<style lang="less">
 @primary-color: #1c6312;
.home-page-wrapper{
    width: 100%;
    height: 100%;
    .home-page{
        width: 75%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        // align-items: center;
        .left{
            flex: 3;
        }
        .right{
            flex: 1;
        }
    }
    .top-content{
        width: 100%;
        padding: 5px 0;
        background-color: @primary-color;
        color: #fff;
        .content{
            width: 75%;
            height: 100%;
            line-height: 54px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            .left-content{
                display: flex;
                align-items: center;
                .logo{
                    height: 100%;
                    padding-right: 20px;
                    img{
                        width: 45px;
                        height: 45px;
                        vertical-align: middle;
                    }
                    span{
                        font-weight: bold;
                        font-size: 22px;
                    }
                }
                .search{
                    input{
                        outline: none;
                        height: 26px;
                        width: 236px;
                        border: none;
                        border-radius: 16px;
                        background-color: #4f9639;
                    }
                }
            }
            .right-content{
                span{
                    padding-left: 25px;
                    font-size: 14px;
                    color: #eee;
                }
            }
        }
    }
}

</style>
