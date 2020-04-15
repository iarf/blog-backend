<template>
	<div class="posts">
    <div class="menu-bar">
        <b-input id="search" placeholder="Search all posts" class="search" @change="postSearch"></b-input>
			<a href="#" class="add-post" @click="$store.commit('navigate',{page:'MakePost'})"><i class="far fa-plus-square"></i></a>
    </div>
		<List :posts="posts"></List>
	</div>
</template>

<script>
import List from './posts/List';
import gql from 'graphql-tag';
export default {
	components: {
		List
	},
	methods: {
		async postSearch(e){
			const response = await this.$apollo.query({
				query: gql`query($term: String){
					posts(filter: $term){
						title
						posted
						post_id
					}
				}`,
				variables: {
					term: e
				}
			});
			this.posts = response.data.posts;
		}

	},
	apollo: {
		posts: {
			query: gql`{
				posts {
					title
					posted
					post_id
				}
			}`
		}
	}
};
</script>

<style lang="sass" scoped>
.menu-bar
	background: #302536
	border-bottom: 1px solid #85778c
	width: calc(100% + 30px)
	position: relative
	right: 15px
	padding: 10px
	a
		color: #ada6ad
		&:hover
			color: white
	.add-post
		float: right
		font-size: 1.6em
	.search
		width: 60%
		display: inline


</style>