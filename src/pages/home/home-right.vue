<template>
    <div class='right-content-wrapper'>
       <div class="login">
           <div class="title">vue：vue.js专业中文社区</div>
           <div class='login-tips'>您可以
               <router-link to='singin'>登录</router-link>
               <span>或</span>
               <router-link to ='singup'>注册</router-link>,
               <span>也可以</span>
               <span class='login-btn'>通过github登录</span>
           </div>
       </div>
       <div class="ad">
           <img onclick="_hmt.push(['_trackEvent','zhufeng', 'advs', 'click']);window.location.href='http://www.zhufengpeixun.cn/main/course/index.html?ref=zb'" src="http://static.vue-js.com/FgEKlBDltzGKmDGkAq5zxSxt8kga" alt="">
       </div>
       <div class='banner-img'>
           <img src="https://user-images.githubusercontent.com/9276376/27581837-70cf9944-5b61-11e7-8d76-72cfc3856dad.png" alt="">
           <img src="https://cloud.githubusercontent.com/assets/9276376/18077980/92747c60-6ebb-11e6-9a6c-e65bfe42d45e.png" alt="">
           <img src="https://user-images.githubusercontent.com/9276376/30099651-eb36c06a-9318-11e7-8987-2da1bb2b3e13.png" alt="">
           <img src="https://user-images.githubusercontent.com/9276376/30099311-fd5c02f6-9317-11e7-8103-abb77c02fb40.png" alt="">
       </div>
       <div class="no-reply-topic">
           <p class='head-title'>无人回复的话题</p>
           <div class="inner">
               <ul>
                   <li  v-for='(item,index) in noReplyData' :key="index"> {{item.title}}</li>
               </ul>
           </div>
       </div>
       <div class="integral">
           <p><span class='head-title'>积分榜</span> TOP 100 >></p>
       </div>
       <div class='club-communication'>
           <p class='head-title'>社区交流群</p>
           <div class="erCode-content">
                <div class="weChat">
                    <img src="https://user-images.githubusercontent.com/9276376/30367105-de95534e-989f-11e7-8c43-039222352121.png" width="130" alt="">
                    <span>扫码关注</span>
                </div>
                <div class="QQ">
                    <img src="https://cloud.githubusercontent.com/assets/9276376/20613626/b317ca38-b300-11e6-940d-33df210cb7ba.png" width="130" alt="">
                    <span>QQ扫码快速入群</span>
                </div>
           </div>
       </div>
       <div class='friendly-club'>
        <p class='head-title'>友情社区</p>
        <ul>
            <li v-for='(item,index) in friendlyClubData' :key="index">
                <a :href="item.link">
                    {{item.title}}
                </a>
            </li>
        </ul>
       </div>

    </div>
</template>
<script>
import {api} from '@/utils/api'
export default {
  data () {
    return {
      noReplyData: [],
      friendlyClubData: [
        {title: ' 微信小程序学习社群', link: 'https://www.getweapp.com/'},
        {title: '  CTOLib码库', link: 'https://www.ctolib.com/'},
        {title: '  汇智网', link: 'https://www.hubwiz.com/'},
        {title: '  w3c社区-前端专业综合性技术交流平台', link: 'https://w3cfe.org/'},
        {title: '  掘金-帮助开发者成长的社区', link: 'https://juejin.im/'}
      ]

    }
  },
  created () {
    this.getNoReplyTopics()
  },
  methods: {
    async getNoReplyTopics () {
      let res = await api.get('topics')
      res.data.data.forEach(item => {
        if (item.reply_count === 0) {
          this.noReplyData.push(item)
        }
      })
    }
  }
}
</script>
<style lang="less">
.right-content-wrapper{
    margin-left: 10px;
    box-sizing: border-box;
    .login{
        width: 290px;
        padding: 20px;
        background-color: #fff;
        border-radius: 8px;
        margin :10px auto;
        // margin-bottom: 10px;
        .title{
            font-size: 14px;
            padding-bottom: 10px;
        }

    }
    .ad,.no-reply-topic,.integral,.club-communication,.friendly-club{
        width: 290px;
        background-color: #fff;
        margin :15px auto;

    }
    .ad{
        img{
            height: auto;
            max-width: 100%;
            vertical-align: middle;
            border: 0;
        }
    }
    .banner-img{
        width: 290px;
        background-color: #fff;
        margin :15px auto;
        padding: 10px;
        img{
            width: 100%;
            height: 45px;
        }
    }
    .no-reply-topic{
        .inner{
            line-height: 2em;
            padding: 10px;
            background-color: #fff;
            border-radius: 0 0 3px 3px;
            ul{
                li{
                    max-width: 270px;
                    font-size: 14px;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                    display: inline-block;
                    vertical-align: bottom;
                    line-height: 30px;
                    color: #778087;
                    cursor: pointer;
                }
            }

        }
    }
    .head-title{
        background-color: #f6f6f6;
        padding: 10px;
        font-size: 13px;
        color: #1c6132;

    }
    .integral{
        padding: 10px;
        font-size: 13px;
        color: #666;
        background-color: #f6f6f6;

    }
    .club-communication{

        .erCode-content{
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            padding-bottom: 10px;
            span{
                color: #778087;
                font-size: 13px;
            }
            .weChat{
                width: 50%;
                flex: 1;
            }
            .QQ{
                width: 50%;
                flex: 1;
            }
        }

    }
    .friendly-club{
        font-size: 13px;
        color: #778087;
        ul{
            padding: 10px;
        }
        li{
            line-height: 2em;
            cursor: pointer;
            a{
                text-decoration: none;
            }
        }
        li:hover a{
            text-decoration: underline;
        }
    }
    .login-tips{
        font-size: 13px;
        .login-btn{
            display: inline-block;
            float: none;
            padding: 3px 10px;
            border: 0;
            margin: 0;
            font-size: 14px;
            transition: all .2s ease-in-out;
            cursor: pointer;
            letter-spacing: 2px;
            box-shadow: none;
            border-radius: 3px;
            line-height: 2em;
            vertical-align: middle;
            color: #fff;
            background-color: #7597d4;
            margin-top: 15px;
        }
        a{
            color: #778087;
            font-size: 13px;
        }
    }
}

</style>
