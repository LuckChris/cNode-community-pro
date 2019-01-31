<template>
    <div class='left-content-wrapper'>
        <ul class='tabs'>
            <li v-for='(item,index) in tabs' :key="index" @click='changeTab(index)'>{{item}}</li>
        </ul>
        <div class="content">
            <ul>
                <li class='content-list'>
                    <div class='item-list' v-for='(i,index2) in list' :key="index2">
                            <div class="item-left">
                                <span class='icon-img'>
                                <img :src="i.author.avatar_url" alt="">
                                </span>
                                <span class='top-text' v-if='i.top'>置顶</span>
                                <span v-if="!i.top && i.tab =='share'" class='share-text'>分享</span>
                                <span v-if="i.tab =='ask'"  class='ask-text'>问答</span>
                                <span class='num'>{{i.reply_count}}/<i class='visite-num'>{{i.visit_count}}</i>
                                </span>
                                <span class= 'desc'>{{i.desc}}</span>
                                <span class='title'> {{i.title}}</span>
                            </div>
                        <div class="item-right">
                            <!-- <p>{{timeago(i.last_reply_at)}}</p> -->
                        </div>
                    </div>

                </li>
            </ul>
        </div>

    </div>
</template>
<script>

export default {
  props: ['list'],
  data () {
    return {
      showTabsContent: 0,
      tabs: [
        '全部', '精华', 'weex', '分享', '问题', '招聘'
      ],
      content: []

    }
  },

  created () {
    this.content = this.list
    this.formatTime()
  },
  computed: {
    // formatTime () {
    //   this.list.forEach(item => {
    //     console.log(this.timeago(item.last_reply_at), '22222')
    //   })
    // }

  },

  methods: {
    changeTab (index) {
      console.log(index)
      this.showTabsContent = index
    }
    // formatTime () {
    //   this.list.forEach(item => {
    //     console.log(this.timeago(item.last_reply_at), '22222')
    //   })
    // }
  }
}
</script>
<style lang="less">
.left-content-wrapper{
    .tabs{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: #f6f6f6;
        li{
            padding: 10px 0;
            padding-left: 30px;
            color: #4f9639;
        }
    }
    .content{
        background-color: #fff;
        li{
            border-bottom: 1px solid #f0f0f0;
        }
        .item-list{
            padding: 10px 0;
            border-bottom: 1px solid #f0f0f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 10px;
            span{
                // padding-left: 10px;
            }
            .item-left{
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }
            .item-right{
                // text-align: right;
                padding-right: 10px;
                font-size: 11px;
            }
            .icon-img{
              display: inline-block;
              width: 30px;
              height: 30px;
              margin-right: 10px;
              img{
                width: 30px;
                height: 30px;
                margin: 0 auto;
              }
            }
            .num{
              padding: 0 10px;
              color: #ab78c4;
              .visite-num{
                color: #b4b4bb;
                font-style: normal;
              }

            }
            .top-text{
              color: #fff;
              background-color: #4f9639;
              border-radius: 8px;
              text-align: center;
              padding:2px 5px;
              font-size: 11px;

            }
            .share-text,.ask-text{
              background-color: #e5e5e5;
              color: #999;
              border-radius: 8px;
              text-align: center;
              padding:2px 5px;
              font-size: 11px;

            }

        }
    }
}

</style>
