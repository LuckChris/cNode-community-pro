<template>
    <div class='detail-page'>
        <head-content></head-content>
        <div class="allContent">
            <div class="left">
                <div class="left-top">
                    <div class="header-content">
                        <span class='top-text' v-if='content.top'>置顶</span>
                        <p>{{content.title}}</p>
                        <ul>
                            <li>发布于{{createTime}}</li>
                            <li>作者  {{content.author.loginname}}</li>
                            <li>{{content.visit_count}}次浏览</li>
                            <li>来自{{originText}}</li>
                        </ul>

                    </div>
                    <div class="left-detail" >
                        <div class="fans-welfare">
                            <p>粉丝福利：关注VUE中文社区公众号，回复视频领取粉丝福利</p>
                        </div>
                        <div class="inner" v-html='content.content'>
                        </div>
                    </div>
                </div>
                <div class="replies">
                    <p class='reply-title'>{{content.replies.length}}回复</p>
                    <ul>
                        <li v-for='(item,index) in content.replies' :key="index">
                            <img :src="item.author.avatar_url" alt="">
                            <span>{{item.author.loginname}}</span>
                            <span class='blue-color step'>{{index+1}}楼</span>
                            <span class='blue-color'>{{timeago(item.create_at)}}</span>
                            <p v-html='item.content'></p>
                        </li>
                    </ul>
                    <div class="reply-box">
                        <p class='reply-title'>添加回复</p>
                        <quill-editor
                        v-model="replyContent"
                        ref="myQuillEditor"
                        :options="editorOption"
                        @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
                        @change="onEditorChange($event)">
                        </quill-editor>
                        <span class='reply-btn'>回复</span>
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="author">
                    <p class="head-title">作者</p>
                    <div class="author-info">
                        <div class="name-wrapper">
                                <img :src="content.author.avatar_url" alt="">
                                <span class='name'>{{content.author.loginname}}</span>
                        </div>
                        <p class='number'>积分：{{authorInfo.score}}</p>
                        <p class='sign'>“ 这家伙很懒，什么个性签名都没有留下。”</p>
                    </div>
                </div>
                <div class="share-class">
                        <img onclick="_hmt.push(['_trackEvent','zhufeng', 'advs', 'click']);window.location.href='http://www.zhufengpeixun.cn/main/course/index.html?ref=zb'" src="http://static.vue-js.com/FgEKlBDltzGKmDGkAq5zxSxt8kga" alt="">
                </div>
                <div class="banner-img">
                        <img src="https://user-images.githubusercontent.com/9276376/27581837-70cf9944-5b61-11e7-8d76-72cfc3856dad.png" alt="">
                        <img src="https://cloud.githubusercontent.com/assets/9276376/18077980/92747c60-6ebb-11e6-9a6c-e65bfe42d45e.png" alt="">
                        <img src="https://user-images.githubusercontent.com/9276376/30099651-eb36c06a-9318-11e7-8987-2da1bb2b3e13.png" alt="">
                        <img src="https://user-images.githubusercontent.com/9276376/30099311-fd5c02f6-9317-11e7-8103-abb77c02fb40.png" alt="">
                </div>
                <div class="other-topics">
                    <p class="head-title">作者其他话题</p>
                    <ul>
                        <li v-for='(item,index) in authorInfo.recent_topics' :key="index">{{item.title}}</li>
                    </ul>
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
            </div>
        </div>
    </div>
</template>
<script>
import HeadContent from '@/components/head'
export default {
  data () {
    return {
      itemId: '',
      content: '',
      authorInfo: '',
      replyContent: null,
      editorOption: {
        modules: {
          toolbar: [
            ['bold', {'color': []}, 'italic', 'blockquote', 'underline', {'list': 'ordered'}, { 'list': 'bullet' }, 'link', 'image', 'code-block'] // toggled buttons
          ]
        }
      }
    }
  },
  components: {HeadContent},
  async created () {
    try {
      this.itemId = await this.$route.params.id
      let res = await this.$api.get(`topic/${this.itemId}`)
      this.content = res.data.data
      let authorName = this.content.author.loginname
      let resData = await this.$api.get(`user/${authorName}`)
      this.authorInfo = resData.data.data
    } catch (error) {

    }
  },
  methods: {
    onEditorBlur () { // 失去焦点事件
    },
    onEditorFocus () { // 获得焦点事件
    },
    onEditorChange () { // 内容改变事件
    }

  },
  computed: {
    originText () {
      if (this.content.tab === 'share') {
        return '分享'
      } else if (this.content.tab === 'ask') {
        return '问答'
      } else if (this.content.tab === 'job') {
        return '招聘'
      }
    },
    createTime () {
      return this.timeago(this.content.create_at)
    }

  }
}
</script>
<style lang="less">
.detail-page{
    width:100%;
    .allContent{
        width: 80%;
        margin: 0 auto;
        box-sizing: border-box;
        margin-top: 15px;
        display: flex;
        justify-content: space-between;

        .left{
            // background-color: #fff;
            padding: 20px;
            .left-top{
                padding: 20px;
                background-color: #fff;
            }
            .replies{
                margin-top: 20px;
                // background-color: #fff;
                .reply-title{
                    background-color: #f6f6f6;
                    font-size: 13px;
                    color: #1c6132;
                    padding: 10px;
                }
                ul{
                    background-color: #fff;
                }
                ul li{
                    padding: 10px;
                    border-bottom: 1px solid #e5e5e5;
                    img{
                        width: 30px;
                        height: 30px;
                        vertical-align: middle;
                    }
                    span{
                        padding-left: 5px;
                    }
                    p{
                        color: #333;
                        font-size: 15px;
                        padding-top: 10px;
                        padding-left: 20px;
                    }
                    .blue-color{
                        color: #08c;
                        font-size: 11px;

                    }
                     .step{
                        position: relative;

                     }
                    .step:after{
                        content: '';
                        width: 6px;
                        height: 6px;
                        background-color: #08c;
                        border-radius: 50%;
                        position: absolute;
                        left: 110%;
                        top: 50%;
                        transform: translateY(-50%)

                    }
                }
                .reply-box{
                    background-color: #fff;
                    margin-top: 20px;
                    .ql-container{
                        height: 230px;
                        border: none;
                    }
                    .reply-btn{
                        display: inline-block;
                        color: #fff;
                        background-color: #3374de;
                        padding: 5px 10px;
                        border-radius: 3px;
                        letter-spacing: 2px;
                        font-size: 14px;
                        margin-left: 10px;
                        margin-bottom: 15px;
                        box-sizing: border-box;
                        cursor: pointer;
                    }
                    .ql-editor.ql-blank::before{
                        content:''
                    }
                }
            }
        }
        .right{
            margin-left: 10px;
            box-sizing: border-box;
            .head-title{
                background-color: #f6f6f6;
                padding: 10px;
                font-size: 13px;
                color: #1c6132;

            }
            .author,.share-class,.banner-img,.other-topics,.club-communication{
                width: 290px;
                background-color: #fff;
                margin :15px auto;
            }
            .author{
                .author-info{
                    padding: 10px;
                    .name-wrapper{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        img{
                            width: 48px;
                        }
                        .name{
                            padding-left: 10px;
                            color: #778087;
                            cursor: pointer;
                        }
                    }
                    .number{
                        margin-top: 10px;
                        font-size: 13px;
                        line-height: 30px;
                    }
                    .sign{
                        font-size: 13px;
                        color: #333;
                        font-style: italic;

                    }

                }
            }
            .share-class{
                img{
                    width: 270px;
                    padding-left: 20px;
                    box-sizing: border-box;
                    cursor: pointer;
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
            .other-topics{
                ul{
                    padding: 10px;
                    li{
                        color: #778087;
                        font-size: 14px;
                        line-height: 25px;
                    }
                }
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
        }
        .header-content{
            .top-text{
                color: #fff;
                font-size: 12px;
                background: #369219;
                padding: 2px 4px;
                border-radius: 3px;

            }
            p{
                display: inline;
                font-size: 22px;
                font-weight: 700;
                line-height: 130%;
            }
            ul{
                padding-top: 10px;
                overflow: hidden;
                li{
                    float: left;
                    margin-left: 15px;
                    position: relative;
                    font-size: 12px;
                    color: #838383;
                }
                li:before{
                    content: '';
                    width:6px;
                    height: 6px;
                    background-color: #999;
                    border-radius: 50%;
                    position: absolute;
                    left:-12px;
                    top: 50%;
                    transform: translateY(-50%)

                }
            }

        }
        .left-detail{
            border-top: 1px solid #e5e5e5;
            .fans-welfare{
                padding: 15px;
                border-left: 4px solid #099436;
                background: #f6f6f6;
                margin: 15px 0;
                font-size: 14px;
            }
            .inner{
                p{
                    font-size: 15px;
                    line-height: 1.7em;
                    overflow: auto;
                    margin: 1em 0;
                }
                h1{
                    font-size: 32.5px;
                    margin: 30px 0 15px;
                    border-bottom: 1px solid #eee;
                }
                h2{
                    font-size: 26px;
                    margin: 30px 0 15px;
                    border-bottom: 1px solid #eee;
                }
                h4{
                    font-size: 17.5px;
                    line-height: 20px;
                    margin-bottom: 15px;
                    border-bottom: 1px solid #eee;
                    padding-top: 15px;
                    padding-bottom: 5px;
                }
                ul{
                    padding: 0;
                    margin: 0 0 10px 25px;
                    li{
                        line-height: 2em;
                        font-size: 14px;
                        color: #333;
                        list-style: disc;
                        a{
                            color: #778087;
                            text-decoration: none;
                        }
                        a:hover{
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
}

</style>
