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

ul
  list-style none

#app
    max-width 768px
    margin 0 auto
	 color #111
    font-size 12px
    font-family "Helvetica Neue" Helvetica Roboto Arial sans-serif
</style>
