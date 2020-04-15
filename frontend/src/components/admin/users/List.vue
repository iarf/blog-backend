<template>
  <b-row class="user-list">
		<div class="cards">
			<Card v-for="user in users" :key="user.user_id" :user="user"></Card>
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
		'users'
	]
};
</script>

<style lang="sass" scoped>
.post-list
.cards
	width: 100%

		
</style>