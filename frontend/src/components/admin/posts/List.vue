<template>
  <b-row class="post-list">
		<div class="cards">
			<Card v-for="post in posts" :key="post.post_id" :post_id="post.post_id" :title="post.title" :date="post.posted"></Card>
		</div>
  </b-row>
</template>

<script>

import Card from './Card'
export default {
	components: {
		Card
	},
	props: [
		'posts'
	]
};
</script>

<style lang="sass" scoped>
.post-list
.cards
	width: 100%

		
</style>