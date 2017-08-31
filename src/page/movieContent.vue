<template>
	<div class="movie-content">
		<top></top>
		<div class="content">
			<h1>战狼2</h1>
			<section class="clearfix">
				<div class="info">
					<div class="rating">
		                <span class="stars">
		                    <span class="stars-item stars-full"></span>
		                    <span class="stars-item stars-full"></span>
		                    <span class="stars-item stars-full"></span>
		                    <span class="stars-item stars-full"></span>
		                    <span class="stars-item stars-gray"></span>
		                </span>
		                <span>7.4</span>
		                <span>358170评价</span>
		            </div>
		            <p>
		            	123分钟 / 动作 / 吴京(导演) / 吴京 / 弗兰克·格里罗 / 吴刚 / 张翰 / 卢靖姗 / 丁海峰 / 淳于珊珊 / 余男 / 于谦 / 石兆琪 / 海蒂·玛尼梅可 / 奥列格·亚历山大罗维奇 / 阿隆·汤尼 / 泰勒·哈里斯 / 勃小龙 / 2017-07-27(中国大陆) 上映
		            </p>
				</div>
				<div class="info-img">
					<img src="https://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2485983612.jpg">
				</div>
			</section>
			<section class="look">
			 	<a href="javascript:void(0)">想看</a>
			 	<a href="javascript:void(0)">看过</a>
			</section>
			<section class="desc">
				<h2>战狼2的剧情简介</h2>
				<octext></octext>
			</section>
		</div>
	</div>
</template>

<script>
import Top from '@/components/Top';
import octext from '@/components/OpenCloseText';

export default {
	components: {
		Top, octext
	},
	name: 'movie-content',
	data() {
		return {

		}
	}
}
</script>

<style lang="stylus" scoped>
fz = .75rem

.rating
    vertical-align middle
    font-size 15px
    font-size fz
    color #aaa
    >span
    	margin-right .2rem
    >span:nth-child(2)
    	margin-right .3rem
    	color #000

.stars-full
    background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==')

.stars-gray
    background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=')

.stars-item
    width 10px
    width .6rem
    height 10px
    height .6rem
    background-size 100%
    margin 0 -.05rem
    display inline-block
.content
	padding 1rem
	h1
		font-size 1.2rem
		font-weight 400
.info
	float left
	width 10rem
	p
		margin-top fz
		font-size .7rem
		line-height 1.1rem
.info-img
	float right
	width 5rem
	img 
		width 100%
section
	margin-bottom 1.5rem
    
.look
	display flex
	justify-content space-between
	a
		width 7.5rem
		height 1.5rem
		box-sizing border-box
		border 1px solid #ffb712
		display inline-block
		text-align center
		border-radius .15rem
		font-size fz
		color #ffb712
		line-height 1.5rem	
.desc
	line-height: 1.1rem
	word-wrap break-word
	font-size fz
	color #494949
	h2
		color #aaa
		font-size fz
		margin-bottom .5rem
h1,h2,h3
	font-weight normal
</style>

