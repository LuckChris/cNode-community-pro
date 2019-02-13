<template>
    <div class='singin-page'>
        <head-content></head-content>
        <div class="login-content">
            <div class="left-user">
                <p class="title"><span class='primary-color'>主页</span> / 登录</p>
                <div class="user-info">
                    <div class="user box">
                        <span>assess token</span>
                        <input type="text" class='input-box' v-model="userName">
                    </div>
                    <!-- <div class="password box">
                        <span>密码</span>
                        <input type="text" class='input-box' v-model="pwdValue">
                    </div> -->
                    <div class="bottom-btn">
                        <span class='register' @click.stop='goLogin'>登录</span>
                        <span class='github'>通过GitHub登录</span>
                        <span class='no-pwd'>忘记密码了？</span>
                    </div>

                </div>
            </div>
            <div class="right-about">
                <p class='primary-color title'>关于</p>
            </div>
        </div>

    </div>
</template>
<script>
import HeadContent from '@/components/head'
export default {
  data () {
    return {
      userName: '',
      pwdValue: ''

    }
  },
  components: {HeadContent},
  methods: {
    async  goLogin () {
      if (!this.userName) {
        window.alert('用户名不能为空')
      } else {
        try {
          await this.$api.post('accesstoken', {
            accesstoken: this.userName
          })
          this.$router.push({name: 'home'})
        } catch (error) {
          alert('assess token 输入错误')
          this.userName = ''
        }
      }
    }
  }

}
</script>
<style lang="less">
.singin-page{
    width: 100%;
    .login-content{
        width: 80%;
        margin: 0 auto;
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        .title{
            padding: 10px;
            background-color: #f6f6f6;
            border-radius: 3px 3px 0 0;
            color: #999;
            font-size: 14px;
        }
        .primary-color{
            color: #1c6132;
        }
        .left-user{
            flex: 3;
            background-color: #fff;
            .user-info{
                text-align: center;
                padding-top: 40px;
                .box{
                    padding: 10px 0;
                    span{
                        font-size: 14px;
                        font-weight: 400;
                        line-height: 20px;
                        color: #333;
                    }
                    .input-box{
                        width:284px;
                        height: 30px;
                        outline: none;
                        border: 1px solid #ccc;
                        box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
                        transition: border linear .2s,box-shadow linear .2s;
                        border-radius: 4px;
                        padding-left: 5px;
                    }
                    .input-box:focus{
                        border-color: rgba(82,168,236,.8);
                        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(82,168,236,.6);
                    }
                }
                .bottom-btn{
                    padding-top: 20px;
                    padding-bottom: 20px;
                    span{
                        cursor: pointer;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                    }
                    .register{
                        padding: 8px 10px;
                        font-size: 14px;
                        transition: all .2s ease-in-out;
                        letter-spacing: 2px;
                        border-radius: 3px;
                        line-height: 20px;
                        color: #fff;
                        background-color: #3374de;
                    }
                    .register:hover{
                        background-color: #05c;
                    }
                    .github{
                        padding: 8px 10px;
                        font-size: 14px;
                        transition: all .2s ease-in-out;
                        letter-spacing: 2px;
                        border-radius: 3px;
                        line-height: 20px;
                        color: #fff;
                        background-color: #7597d4;

                    }
                    .github:hover{
                        background-color: #3374de;
                    }
                    .no-pwd{
                        color: #778087;
                        font-size: 14px;
                        padding-left: 10px;
                        box-sizing: border-box;
                        text-decoration: underline;
                    }
                }
            }

        }
        .right-about{
            flex: 1;
            margin-left: 10px;
            background-color: palegoldenrod;
        }
    }

}

</style>
