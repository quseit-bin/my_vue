<template>
	<div class="box">
		<span>{{ show_content }}</span>
		<a href="javascript: void(0)" v-if="status" @click="textToggle">(展开)</a>
		<a href="javascript: void(0)" v-if="!status" @click="textToggle">(收起)</a>
	</div>	
</template>

<script>
export default {
	name: 'octext',
	props: ['line', 'line_num', 'number', 'content'],
	data() {
		return {
			show_content: '',
			status: true
		}
	},
	mounted: function () {
		this.true_line = this.line || 3;
		this.true_line_num = this.line_num || 21;
		this.true_number = this.number || 0;
		this.true_content = this.content || 'prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，但是不会反过来。这是为了防止子组件无意修改了父组件的状态——这会让应用的数据流难以理解。虽然废弃了props的双向绑定对于整个项目整体而言是有利且正确的，但是在某些时候我们确实需要从组件内部修改props的需求';
		this.closeShowContent();
	},
	methods: {
		lengthByEn(str) {
			return str.replace(/[\u0391-\uFFE5]/g,"11").length;
		},
		cutStrByEn(str, len) {
			if ( !len )
				return '';
			if (this.lengthByEn(str) < len )
				return str.toString();
			let _str = new String();
			let str_len = 0;
			for (let i = 0; i < str.length; i++) {
				let s = str.charAt(i);
				_str = _str.concat(s);
				str_len++;
				if (escape(s).length > 4 ){
					str_len ++;
				}
				if (str_len >= len) {
					return _str;
				}
			}
		},
		closeShowContent() {
			if (this.true_number) {
				this.show_content = this.lengthByEn(this.true_content) > this.true_number*2 ? this.cutStrByEn(this.true_content, this.true_number*2-10)+'...' : this.true_content ;
			}else{
				this.show_content = this.lengthByEn(this.true_content) > this.true_line*this.true_line_num*2 ? this.cutStrByEn(this.true_content, this.true_line*this.true_line_num*2-8) + '...': this.true_content;
			}
		},
		textToggle() {
			if (this.status){
				this.show_content = this.true_content;
				this.status = false;
			}
			else{
				this.closeShowContent();
				this.status = true;
			}
		}
	},
}
</script>

<style scoped>
a {
	float: right;
	color: #00b600;
}
</style>