<template>
  <b-row class="post-list">
		<div class="cards">
			<Card v-for="post in posts" :key="post.post_id" :post_id="post.post_id" :title="post.title" :date="post.posted"></Card>
		</div>
  </b-row>
</template>

<script>
import gql from 'graphql-tag'

import Card from './Card'
export default {
	components: {
		Card
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
.post-list
.cards
	width: 100%

		
</style>