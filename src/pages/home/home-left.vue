<template>
    <div class='left-content-wrapper'>
        <ul class='tabs'>
            <li v-for='(item,index) in tabs' :key="index" @click='changeTab(index)'>{{item}}</li>
        </ul>
        <div class="content">
            <ul>
                <li v-for='(item,index) in content' :key="index">
                    <div v-if='index === showTabsContent' >
                        <div class='item-list' v-for='(i,index2) in item' :key="index2">
                            <span class='icon-img'></span>
                            <span class='num'>{{i.num}}</span>
                            <span class= 'desc'>{{i.desc}}</span>
                            <span class='title'> {{i.title}}</span>
                        </div>
                    </div>
                    </li>
            </ul>

        </div>

    </div>
</template>
<script>
export default {
  data () {
    return {
      showTabsContent: 0,
      tabs: [
        '标题一', '标题2', '标题3', '标题4', '标题5', '标题6'
      ],
      content: [
        [
          {
            icon: '',
            num: 111,
            desc: '置顶',
            title: 'github vue 高星项目111'
          },
          {
            icon: '',
            num: 222,
            desc: '分享',
            title: 'github vue 高星项目111'
          },
          {
            icon: '',
            num: 333,
            desc: '置顶',
            title: 'github vue 高星项目1111'
          }
        ],
        [
          {
            icon: '',
            num: 111,
            desc: '置顶222',
            title: 'github vue 高星项目222'
          },
          {
            icon: '',
            num: 222,
            desc: '分享2222',
            title: 'github vue 高星项目2222'
          },
          {
            icon: '',
            num: 333,
            desc: '置顶2222',
            title: 'github vue 高星项目222'
          }
        ],
        [
          {
            icon: '',
            num: 111,
            desc: '置顶333',
            title: 'github vue 高星项目333'
          },
          {
            icon: '',
            num: 222,
            desc: '分享333',
            title: 'github vue 高星项目3333'
          },
          {
            icon: '',
            num: 333,
            desc: '置顶333',
            title: 'github vue 高星项目3333'
          }
        ]

      ]

    }
  },
  created () {
    this.getTabList()
  },
  methods: {
    changeTab (index) {
      this.showTabsContent = index
    },
    getTabList () {
      this.$axios.get('').then(res => {

      })
    }
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
            justify-content: flex-start;
            align-items: center;
            padding-left: 5px;
            span{
                padding-left: 10px;
            }
            .icon-img{
                display: inline-block;
                width: 20px;
                height: 20px;
                background-color: palevioletred;
            }

        }
    }
}

</style>
