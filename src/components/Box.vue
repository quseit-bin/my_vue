<template>
    <div class="box">
        <header>
            <h2>{{ title }}</h2>
            <a :href="more_url">更多</a>
        </header>
        <div class="content-box">
            <ul class="content">
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
                <li>1</li>
            </ul>  
        </div>
    </div>
</template>

<script>
export default {
    name: 'box',
    data() {
    	return {
    		'title': '影院热播',
    		'more_url': 'https://m.douban.com/movie/nowintheater?loc_id=108288'
    	}
    }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/box.styl"
</style>
