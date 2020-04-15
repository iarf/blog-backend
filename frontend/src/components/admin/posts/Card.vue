<template>
	<b-row class="post-card">
		<b-col>
		<a href="#" class="delete" v-on:click="deletePost"><i class="fas fa-trash fa-lg"></i></a>
		<a href="#" v-on:click="openEdit"><span class="title">{{title}}</span></a>
		</b-col>
		<b-col class="date-col">
		<span class="date text-muted">{{date}}</span>
		</b-col>
	</b-row>
</template>

<script>
import gql from 'graphql-tag'

export default {
	props: [
		'title',
		'date',
		'post_id'
	],
	methods: {
		openEdit(){
			this.$store.commit('navigate',{
				page: 'EditPost',
				post_id: this.post_id
			});
		},
		async deletePost(){
			console.log(this.post_id)
			const response = await this.$apollo.mutate({
				mutation: gql`mutation($post_id: ID!){
					deletePost(post_id: $post_id)
				}`,
				variables: {
					post_id: this.post_id
				}
			});
			alert(response.data.deletePost);
		}
	}
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