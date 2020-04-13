<template>
	<b-row class="post-card">
		<b-col>
		<a href="#" class="delete"><i class="fas fa-trash fa-lg"></i></a>
		<span class="title">{{title}}</span>
		</b-col>
		<b-col class="date-col">
		<span class="date text-muted">{{date}}</span>
		</b-col>
	</b-row>
</template>

<script>
export default {
	props: [
		'title',
		'date'
	]
};
</script>

<style lang="sass" scoped>
	.post-card
		width: calc(100% - 8px)
		background: white
		margin: 4px
		text-align: left
		padding: 6px
		border: 1px solid #cfcfcf

		.title
			margin-left: 20px
		.date-col
			text-align: right
		.delete
			color: #858585
			&:hover
				color: #bf6b6b	

</style>