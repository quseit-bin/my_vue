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

.clearfix { 
  *zoom: 1; 
} 
.clearfix:before, 
.clearfix:after { 
  display: table; 
  line-height: 0; 
  content: ""; 
}
.clearfix:after { 
  clear: both; 
}

#app
    max-width 690px
    margin 0 auto
	  color #111
    font-family "Helvetica Neue" Helvetica Roboto Arial sans-serif
</style>
