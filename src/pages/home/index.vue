<template>
    <div class='home-page-wrapper'>
            <head-content></head-content>
            <div class="home-page">
                <content-left class="left" :list = 'leftContentList'></content-left>
                <content-right class='right'></content-right>
            </div>
            <div class="foot-content">
                <p>RSS|源码地址</p>
                <P>服务器搭建在ucloud，存储友情赞助商七牛云存储</P>
                <p>声明：内容均来自于网络，如有侵权行为请发送邮件至vueclub@126.com，我们将在第一时间删除</p>
            </div>
    </div>
</template>
<script>
import ContentLeft from './home-left'
import ContentRight from './home-right'
import HeadContent from '@/components/head'
import {api} from '@/utils/api'
export default {
  data () {
    return {
      leftContentList: []

    }
  },
  components: {ContentLeft, ContentRight, HeadContent},
  created () {
    this.getList()
  },
  methods: {
    async getList () {
      let res = await api.get('topics')
      this.leftContentList = res.data.data
    }

  }
}
</script>
<style lang="less" scoped>
 @primary-color: #1c6312;
 @media (max-width:1200px) {
     .right{
        display: none
     }
 }
.home-page-wrapper{
    width: 100%;
    height: 100%;
    .home-page{
        width: 80%;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        .left{
            flex: 3;
        }
        .right{
            flex: 1;
        }
    }
    .foot-content{
        background-color: #fff;
        height: 160px;
        padding-left: 170px;
        padding-top: 20px;
        margin-top: 20px;
        p{
            line-height: 40px;
            color: #999;
            font-size: 14px;
        }

    }
}

</style>
