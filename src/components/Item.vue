<template>
    <div class="item">
        <a href="">
            <img class="img" :src="img_url">
            <span class="item-title">{{ title }}</span>
            <div class="rating">
                <span class="stars" v-if="average !=0">
                    <span class="stars-item stars-full" v-for="v in stars.full" ></span>
                    <span class="stars-item stars-gray" v-for="v in stars.gray"></span>
                </span>
                <span v-if="average != 0">{{ average }}</span>
                <span v-if="average == 0">暂无评分</span>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'item',
    props: ['title', 'average','img_url'],
    data() {
        return {
            stars: ''
        }
    },
    mounted: function() {
        if(this.average<=2){
            this.stars = {full: 1, gray: 4};
        }
        else if(2<this.average && this.average<=4){
            this.stars = {full: 2, gray: 3};
        }
        else if(4<this.average && this.average<7.5){
            this.stars = {full: 3, gray: 2};
        }
        else if(7.5<=this.average && this.average<9.2){
            this.stars = {full: 4, gray: 1};
        }
        else{
            this.stars = {full: 5, gray: 0};
        }
    }
}
</script>

<style lang="stylus" scoped>
.item
    width 100px
    text-align center
    display inline-block
    vertical-align top

.item a
    color #111

.img
    display block
    width 100%

.item-title
    max-width 100%
    overflow hidden
    text-overflow ellipsis
    white-space nowrap
    word-wrap normal
    display block
    margin-top .6rem
    margin-bottom .2rem
    line-height .94rem
    font-size .9rem

.rating
    vertical-align middle
    line-height .9rem
    font-size 12px
    color #aaa

.stars-full
    background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAfhJREFUOBGlVD1LHFEUPXfWrzGJO2uhaIQ0iljESgKSpAjBwpXVKikEl6TzD6TwJ4gWaQMBS8WQgCRZ61QpglUgRbQUbMR1XfwodvbmvE1mdt/ssDPBC493733nnrkf7w2QQrSU29D9wY8poJAkkG6hD8O5E+IGgJsHkr8+7hTjdDpsnA0PLkHE4yK2r5iETyYUfdUkkRa96W3VOhLqXv8oFHNhgGCC/Xwc2jFKR0J0966w1IwVp/LasiNGOBTdxV24bhbqenCQRUY9qLzl2CasGEUVdbyA1M5R1wrq/gUqVxUp4tLghCX85D7VlonFksJQ9Un3w5S8c2sy8z3TGtGDRsla8op0vKe3O0UuMRBVDm9N8uX1Zg/3s8+hmU/sGS/wf8kN0UWZP/tgokJCY+jX3ENmWqJ3zNiJonoKXxalcPY9wFqExqmf3fvIuL+SM2WZNX9SCheHAZnZ2++h9FyxufdaQfG6CBznTvQshtDhSyA4jQieRmExhO2gaFBoi5OK8EkYECiqX9jdd1wauP7tbVgrw8a/TzETBpkp1nWZ96sg8+VV8j0j6VF4Dozo3sB4ix0ZypD3iO3r+QvQbfi1KVkobwcBkj//hmp5msSbXHxqlC67bCtDDr2fN/43wYvMaFkK1dOALNjlJa6Z8RuIP0vfAZfVhj/iqoy46fpKwgAAAABJRU5ErkJggg==')

.stars-gray
    background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAeRJREFUOBGtlDsvBFEUx3d2djfiMbTsQ0NEwTaiQSGiRKWREDofgMJHEAqdSPSE0BC9SiEqWQWSzT4SzSbrsR7Fzo7fEXfNg9klbjI5j/s/vzn3MRMI1DFyudxaPp8/qEMa0GqJ0ul0QzgcvtM0zbAsqzMWi+X9aoJ+kzIXiUSmgLXhinZOcn6jJpDieRvA7tvSX64vMJvNdiAdV3I67c5kMkMq/s76AgHMUqTbC0Oh0II9dvvVQ0mlUs2GYbRWKpU2ij4swA3pylX0ZJrmNPn7crn8oOv6Y7FYfEgmk8+i07gOl0z24js6cUHqCU1uwbksefcfYPJCHeDFx5LpUq7DNp2GZeYPw2KrVuLx+Gp1D4GOATwEZvwGSFdv6Oe48PtSVwVKwCfWB/SEJyZxHaMAcBLYmdI6gJIEGg0Gg1e4tTqVZfawzBsFE+u5h4heyLfYRT/4LERrcs95gNwr+RI8nbsLJWa5I+68B8hbPSJ3kYq/03qAvHVYFShL7phni9hSuU/r0TqA8u9DOGArKvCZzXCKEzyL7O8o4Fs1T4ftHGKXisU6gOzfIKLIp2CnVCr1JhKJHVXAiZ4C7Ae8Ts6UPDfCsUUhJRYLrJGCa+xSNBo9ss8pH+gr/jK/tj0a2ETv2IZ35FSkS7HbzakAAAAASUVORK5CYII=')

.stars-item
    width 10px
    height 10px
    background-size 100%
    margin-left -1px
    margin-right -1px
    display inline-block
</style>
