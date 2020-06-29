<template>
  <div class='left-content-wrapper'>
    <ul class='tabs'>
      <li v-for='(item,index) in tabs' :key="index" @click='changeTab(index,item.tab)'
      :class="{'selected':selectId === index}">{{item.title}}</li>
    </ul>
    <div class="content">
      <ul>
        <li class='content-list'>
          <div class="no-topic" v-if='!listArray.length'>无话题</div>
          <div class='item-list' v-else v-for='(i,index2) in listArray' :key="index2"  @click='itemDetail(i.id)'>
            <div class="item-left" >
              <span class='icon-img'><img :src="i.author.avatar_url" alt=""></span>
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
              <!-- <span class='right-icon'></span> -->
              <p v-if='i.last_reply_at'>{{timeago(i.last_reply_at)}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="progration" v-if='listArray.length > 20'>
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
        {title: '全部', id: 1, tab: 'all'},
        {title: '精华', id: 2, tab: 'good'},
        {title: 'weex', id: 3, tab: 'weex'},
        {title: '分享', id: 4, tab: 'share'},
        {title: '问题', id: 5, tab: 'ask'},
        {title: '招聘', id: 6, tab: 'job'}
      ],
      selectId: 0,
      listArray:[]
    }
  },

  mounted () {
    this.getAllList('all')
  },

  methods: {
    // tab切换
    async changeTab (id, tab) {
      this.selectId = id
      this.getAllList(tab)
    },
    chosePage (page) {
      this.getList(page)
    },
    prev () {
    },

    // 获取主题数据
    async getAllList (tab) {
      try {
        let res = await this.$api.get('topics', {
          'page': 1,
          'limit': 20,
          'tab':tab,
          'mdrender': true
        })
        this.listArray = res.data.data
      } catch (e) {
        console.log(e)
      }
    },
    itemDetail (id) {
      this.$router.push({name: 'detail', params: {id: id}})
    },
  }
}
</script>
<style lang="less" scoped>
.left-content-wrapper{
  margin-top: 20px;
  .tabs{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #f6f6f6;
    li{
      padding: 10px;
      // padding-left: 30px;
      margin-left: 30px;
      color: #4f9639;
      cursor: pointer;
      font-size: 14px;
      text-align: center;
    }
    .selected{
      background-color: #369219;
      color: #fff;
      padding: 3px 4px;
      border-radius: 3px;
      text-align: center;
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
        padding-right: 10px;
        font-size: 11px;
        display: flex;
        width: 80px;
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
