<template>
    <div class="top">
        <div class="t title">
            <a href="">{{ msg }}</a>
        </div>
        <ul class="t menu">
            <li><a href="">电影</a></li>
            <li><a href="">图书</a></li>
            <li><a href="">广播</a></li>
            <li><a href="">小组</a></li>
            <li class="menu-more"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'top',
    data() {
        return {
            msg: '豆瓣'
        }
    }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/top.styl"
</style>
