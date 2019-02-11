<template>
    <div class='about-page'>
        <head-content></head-content>
        <div class="content">
            <div class="left-content">
                <div class="top-title">
                    <p>
                        <router-link to ='/' class='home'>主页</router-link>
                        / <span>关于</span>
                    </p>
                </div>
                <div class="about-content">
                    <h3 class="title">关于</h3>
                    <p>Vue 中文社区是全球最大的 Vueframework 中文开源技术社区，致力于 Vue 在中国的学习、推广、研究工作。</p>
                    <p>Vue 中文社区正在努力建设中，如果你有什么想法，欢迎
                        <a href="https://www.vue-js.com/?tab=bb">吐槽</a>
                    </p>
                    <img src="http://pub.idqqimg.com/wpa/images/group.png" alt="">
                    <p>群二维码</p>
                    <p>尽管建了QQ群，但是还是希望大家尽量有问题在社区讨论，这样才可以有一些沉淀和积累，不至于每天都有人在问同样的问题，通过对问题的总结和用文字表达的过程，自己也可以对知识进行一个梳理。</p>

                    <h3>移动客户端</h3>
                    <p>客户端目前正在加急开发中…静请期待</p>
                </div>
            </div>
            <content-right></content-right>
        </div>

    </div>
</template>
<script>
import HeadContent from '@/components/head'
import ContentRight from '../home/home-right'
export default {
  data () {
    return {

    }
  },
  components: {HeadContent, ContentRight}

}
</script>
<style lang="less" scoped>
.about-page{
    width: 100%;
    .content{
        width: 80%;
        margin: 0 auto;
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
        // align-items: center;
        .left-content{
            background-color: #fff;
            height: 420px;
            .top-title{
                padding: 10px;
                background-color: #f6f6f6;
                border-radius: 3px 3px 0 0;
                font-size: 14px;
                color: #999;
                .home{
                    text-decoration: none;
                    color: #369219;
                }
            }
            .about-content{
                padding: 20px;
                .title,h3{
                    padding-bottom: 5px;
                    border-bottom: 1px solid #eee;
                }
                p{
                    font-size: 15px;
                    line-height: 40px;
                    overflow: auto;
                }
            }
        }
    }
}

</style>
