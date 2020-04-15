<template>
	<div class="users-page">
	<h1>Users page!</h1>
	<List :users="users"></List>
	</div>
</template>

<script>
import List from './users/List';
import gql from 'graphql-tag';

export default {
	components:{
		List,
	},
	apollo:{
		users:{
			query: gql`{
				users{
					user_id
					first_name
					last_name
					email
				}
			}`
		}
	}
}
</script>

<style>
</style>