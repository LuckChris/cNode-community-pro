<template>
    <div class='left-content-wrapper'>
        <ul class='tabs'>
            <li v-for='(item,index) in tabs' :key="index" @click='changeTab(item.id)'>{{item.title}}</li>
        </ul>
        <div class="content">
            <ul>
                <li class='content-list'>
                    <div class="no-topic" v-if='!listArray.length'>无话题</div>
                    <div class='item-list' v-else v-for='(i,index2) in listArray' :key="index2" :class="{'enterColor':showColor}" @click='itemDetail(i.id)'>
                            <div class="item-left" >
                                <span class='icon-img'>
                                <img :src="i.author.avatar_url" alt="">
                                </span>
                                <span class='top-text' v-if='i.top'>置顶</span>
                                <span v-if="!i.top && i.tab =='share' && !i.good" class='share-text'>分享</span>
                                <span v-if="i.tab =='ask'"  class='ask-text'>问答</span>
                                <span v-if="i.tab =='job'"  class='job-text'>招聘</span>
                                <span v-if='i.good'  class='good-text'>精华</span>
                                <span class='num'>{{i.reply_count}}/<i class='visite-num'>{{i.visit_count}}</i>
                                </span>
                                <span class= 'desc'>{{i.desc}}</span>
                                <span class='title'> {{i.title}}</span>
                            </div>
                        <div class="item-right">
                            <span class='right-icon'></span>
                            <p>{{timeago(i.last_reply_at)}}</p>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
        <div class="progration" v-if='listArray.length'>
            <span class='prev(10)' @click='prev'> « </span><span v-for = '(item,index) in 10' :key="index" @click='chosePage(item)'>{{item}}</span><span class='next'> » </span>
        </div>

    </div>
</template>
<script>

export default {
  data () {
    return {
      showTabsContent: 0,
      tabs: [
        {title: '全部', id: 1},
        {title: '精华', id: 2},
        {title: 'weex', id: 3},
        {title: '分享', id: 4},
        {title: '问题', id: 5},
        {title: '招聘', id: 6}
      ],
      showColor: false,
      allList: [],
      tabId: 1,
      shareList: [],
      askList: [],
      jobList: [],
      ary1: [],
      ary2: [],
      ary3: [],
      array: [],
      goodLists: []

    }
  },

  created () {
    this.getList(1)
  },
  computed: {
    listArray () {
      if (this.tabId === 1) {
        return this.allList
      } else if (this.tabId === 2) {
        return this.goodLists
      } else if (this.tabId === 3) {
        return []
      } else if (this.tabId === 4) {
        return this.shareList
      } else if (this.tabId === 5) {
        return this.askList
      } else {
        return this.jobList
      }
    }

  },

  methods: {
    async changeTab (id) {
      this.tabId = id
      if (id === 2) {
        await this.getGoodList(2)
        await this.getGoodList(5)
        await this.getGoodList(6)
        this.array = this.ary1.concat(this.ary2, this.ary3)
        this.goodLists = []
        this.array.forEach(item => {
          if (item.good) {
            this.goodLists.push(item)
          }
        })
      } else if (id === 4) {
        this.getAllList('share', 1)
      } else if (id === 5) {
        this.getAllList('ask', 1)
      } else if (id === 6) {
        this.getAllList('job', 1)
      }
    },
    chosePage (page) {
      this.getList(page)
    },
    prev () {
    },
    async getGoodList (page) {
      try {
        let res = await this.$api.get('topics', {
          'page': page,
          'limit': 20,
          'tab': 'share',
          'mdrender': true
        })
        if (page === 2) {
          this.ary1 = res.data.data
        } else if (page === 5) {
          this.ary2 = res.data.data
        } else if (page === 6) {
          this.ary3 = res.data.data
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getAllList (type, page) {
      try {
        let res = await this.$api.get('topics', {
          'page': page,
          'limit': 20,
          'tab': type,
          'mdrender': true
        })
        if (type === 'share') {
          this.shareList = res.data.data
        } else if (type === 'ask') {
          this.askList = res.data.data
        } else if (type === 'job') {
          this.jobList = []
          res.data.data.forEach(item => {
            if (item.author.loginname) {
              this.jobList.push(item)
            }
          })
        }
      } catch (e) {
        console.log(e)
      }
    },
    itemDetail (id) {
      this.$router.push({name: 'detail', params: {id: id}})
    },
    async getList (page) {
      let res = await this.$api.get('topics', {
        'page': page,
        'limit': 20,
        'mdrender': true
      })
      this.allList = res.data.data
    }

  }
}
</script>
<style lang="less">
.left-content-wrapper{
    // background-color: #fff;
    .tabs{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background-color: #f6f6f6;
        li{
            padding: 10px 0;
            padding-left: 30px;
            color: #4f9639;
            cursor: pointer;
        }
    }
    @media (max-width:980px) {
        .item-list{
           font-size: 14px;
        }

    }
    @media (min-width:980px) {
         .title{
            width: 600px;
            display: block;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
        }
    }
    .content{
        background-color: #fff;
        // li{
        //     border-bottom: 1px solid #f0f0f0;
        // }
        // li:last-child{
        //     border-bottom:none;
        // }
        .no-topic{
            padding: 10px;
            font-size: 14px;
        }
        .item-list:hover{
                background-color: #eee;
        }
        .item-list:hover .title {
            text-decoration:underline;

        }
        .item-list:last-child{
            border-bottom:none;
        }
        .item-list{
            padding: 10px 0;
            border-bottom: 1px solid #f0f0f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-left: 10px;
            cursor: pointer;
            .item-left{
                display: flex;
                justify-content: flex-start;
                align-items: center;
            }

            .item-right{
                // text-align: right;
                padding-right: 10px;
                font-size: 11px;
                display: flex;
                .right-icon{
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    background-color: #ab78c4;
                }
                p{
                    padding-left: 20px;
                }
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
            .top-text,.good-text{
                width: 40px;
                color: #fff;
                background-color: #4f9639;
                border-radius: 8px;
                text-align: center;
                padding:2px 5px;
                font-size: 11px;

            }
            .share-text,.ask-text,.job-text{
              background-color: #e5e5e5;
              color: #999;
              border-radius: 8px;
              text-align: center;
              padding:2px 5px;
              font-size: 11px;
               width: 40px;

            }

        }
    }
    .progration{
        padding-top: 20px;
        padding-bottom: 30px;
        padding-left: 80px;
        background-color: #fff;
        span{
            display: inline-block;
            text-align: center;
            line-height: 30px;
            width:30px;
            height: 30px;
            border: 1px solid #e5e5e5;
            border-right: none;
            cursor: pointer;
        }
        span:last-child{
            border-right: 1px solid #e5e5e5;
        }
        span:hover{
            background-color: #e5e5e5;
        }
    }
}

</style>
