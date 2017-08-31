<template>
	<div class="box">
		<span>{{ true_content }}</span>
		<a href="javascript: void(0)" v-if="status" @click="textToggle">(展开)</a>
		<a href="javascript: void(0)" v-if="!status" @click="textToggle">(收起)</a>
	</div>	
</template>

<script>
export default {
	name: 'octext',
	props: ['line', 'line_num', 'number', 'conent'],
	data() {
		return {
			true_content: '111',
			status: true
		}
	},
	mounted: function () {
		this.line = this.line || '';
		this.line_num = this.line_num || '';
		this.number = this.number || '';
		this.conent = this.conent || '';
	},
	methods: {
		lengthByEn(str) {
			return str.replace(/[\u0391-\uFFE5]/g,"11").length;
		},
		cutStrByEn(str, len) {
			if ( !len )
				return '';
			if (str.lengthByEn() < len )
				return str.toString();
			_str = new String();
			str_len = 0;
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
		textToggle() {
			if (this.status) {

			}
		}
	}
}
</script>

<style scoped>
a {
	float: right;
	color: #00b600;
}
</style>