<template>
  <div id="app">
    <HeadContent></HeadContent>
    <router-view/>
  </div>
</template>

<script>
import HeadContent from '@/components/head'
export default {
  name: 'App',
  components:{ HeadContent },
  mounted () {
    window.addEventListener('unload', this.saveState)
  },
  methods: {
    saveState () {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    }

  }
}
</script>

<style lang='less'>
@import './assets/less/reset.less';
@import './assets/less/common.less';
#app {
  width:100%;
  min-height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  background-color: @body-background
}
</style>
