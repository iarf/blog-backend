<template>
	<div class="sidebar">
		<div>
			<h1>My project</h1>
			<hr>
		</div>
		<ul class="controls">
			<a v-for="tab in tabs" :key="tab"><li v-on:click="$store.commit('navigate',{page:tab})">{{tab}}</li></a>
		</ul>
		<div class="user">
			<p>Ian Flom <a href="#"><i class="fas fa-door-open"></i></a></p>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return {
			tabs: ['Posts', 'Users']
		}
	},
	methods: {
		navEmit(tab){
			this.$emit('navigate',tab);
		}
	}
};
</script>

<style lang="sass" scoped>
	.sidebar
		width: 260px
		height: 100vh
		position: fixed
		background: #302536
		color: #c9c9c9
		text-align: left
		padding: 20px
		border-right: 1px solid #85778c
		.user
			position: absolute
			bottom: 0
			left: 0
			border-top: 1px solid #665b66
			padding: 12px
			padding-bottom: 0
			width: 100%
			a
				color: #ada6ad
				&:hover
					color: white
			i
				position: absolute
				right: 12px
		h1
			font-size: 1.6em
		hr
			border-color: #665b66
		.controls //ul
			list-style-type: none
			padding: 0
			margin: 0

			li
				border-radius: 4px
				padding: 2px
				padding-left: 6px
				margin: 1px
				&:hover
					background: #3b3342
					cursor: pointer
			a
				color: #ada6ad
				&:hover
					color: white
</style>