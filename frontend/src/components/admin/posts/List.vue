<template>
  <b-row class="post-list">
    <div class="menu-bar">
      <b-form inline>
        <b-input id="search" placeholder="Search all posts" class="search"></b-input>
      </b-form>
    </div>
		<div class="cards">
			<Card v-for="post in posts" :key="post" :title="post.title" :date="post.posted"></Card>
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
.menu-bar
	background: #ababab
	width: 100%
	padding: 10px
	.search
		width: 60%
		margin: auto

		
</style>