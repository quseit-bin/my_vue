<template>
	<div class="movie">
		<top></top>
		<box title="影院热播" more_url="https://m.douban.com/movie/nowintheater?loc_id=108288" desc_url="https://api.douban.com/v2/movie/in_theaters"></box>
 		<box title="即将上映" more_url="https://m.douban.com/movie/watchonline" desc_url="http://api.douban.com/v2/movie/coming_soon"></box>
	</div>
</template>

<script>
import Vue from "vue"
import Top from '@/components/Top'
import Box from '@/components/Box'

export default {
	components: {
		Top, Box
	},
	name: 'movie'
}
</script>

<style lang="stylus" scoped>
	
</style>
