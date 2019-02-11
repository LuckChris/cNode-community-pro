<template>
    <div class='head-page'>
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
                        <span v-for='(item,index) in list' :key="index" @click='clickHandle(item.id)'> {{item.name}}</span>
                    </div>
                </div>
            </div>
            <div class="ercode-panel" v-if='showErCode' @click='hideCodePanel'>
                <div class="code-content">
                    <div class="wechatbox">
                        <div class="inner">
                            <img src="https://user-images.githubusercontent.com/9276376/30367105-de95534e-989f-11e7-8c43-039222352121.png" alt="">
                            <p>Vue中文社区 独家公众号，面向前端爱好者， 每日更新最有料的文章，最前沿的资讯,内容包含但不限于Vue,React,Angular,前端工程化...等各种"大保健"知识点,右上角点关注,老司机带你弯道超车,不定期更有各种福利赠送
                                <br>
                                <span>👈🏼 亲,微信扫一扫奴家</span>
                            </p>

                        </div>
                    </div>
                </div>
            </div>

    </div>
</template>
<script>
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

      ],
      showErCode: false

    }
  },
  methods: {
    clickHandle (id) {
      if (id === 1) {
        window.location.reload()
      } else if (id === 2) {
        this.showErCode = true
      } else if (id === 3) {
        window.location.href = 'http://doc.vue-js.com/'
      } else if (id === 4) {
        window.location.href = 'https://www.vue-js.com/getstart'
      } else if (id === 5) {
        window.location.href = 'https://www.vue-js.com/api/'
      } else if (id === 6) {
        this.$router.push({name: 'about'})
      } else if (id === 7) {
        this.$router.push({name: 'singup'})
      } else if (id === 8) {
        this.$router.push({name: 'singin'})
      }
    },
    hideCodePanel () {
      this.showErCode = false
    }
  }

}
</script>
<style lang="less">
 @primary-color: #1c6312;
.head-page{
    width: 100%;
    .ercode-panel{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        .code-content{
            position: relative;
            max-height: 400px;
            padding: 15px;
            overflow-y: auto;
            background-color: #fff;
            .wechatbox{
                width: 560px;
                position: fixed;
                top: 10%;
                left: 50%;
                margin-left: -280px;
                background-color: #fff;
                border: 1px solid rgba(0,0,0,.3);
                border-radius: 6px;
                box-shadow: 0 3px 7px rgba(0,0,0,.3);
                background-clip: padding-box;
                .inner{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 10px;
                    p{
                        line-height: 30px;
                        font-size: 14px;
                        span{
                            color: #1db702
                        }
                    }
                }
            }
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
                    cursor: pointer;
                }
            }
        }
    }
}

</style>
