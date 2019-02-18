<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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
