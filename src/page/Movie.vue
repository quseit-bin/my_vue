<template>
	<div class="movie">
		<top></top>
		<box :dataConfig="hot_movie_config"></box>
 		<box :dataConfig="soon_movie_config"></box>
	</div>
</template>

<script>
import Top from '@/components/Top'
import Box from '@/components/Box'

export default {
	components: {
		Top, Box
	},
	name: 'movie',
	data() {
		return {
			hot_movie_config : {
				title: "影院热播", 
				more_url: "#/movienowin",
				desc_url: "https://api.douban.com/v2/movie/in_theaters"
			},
			soon_movie_config : {
				title: "即将上映", 
				more_url: "#/moviesoon",
				desc_url: "http://api.douban.com/v2/movie/coming_soon"
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	
</style>
