<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
*
    margin 0
    padding 0

a
    text-decoration none

#app
    max-width 768px
    margin 0 auto
</style>
