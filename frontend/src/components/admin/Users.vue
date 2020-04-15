<template>
  <div class="users-page">
    <div class="menu-bar">
      <b-input id="search" placeholder="Search all users" class="search" @change="userSearch"></b-input>
      <a href="#" class="add-user" @click="$store.commit('navigate',{page:'MakeUser'})">
        <i class="far fa-plus-square"></i>
      </a>
    </div>
    <List :users="users"></List>
  </div>
</template>

<script>
import List from "./users/List";
import gql from "graphql-tag";

export default {
	methods:{
		async userSearch(e){
			const response = await this.$apollo.query({
				query:gql`query($term: String){
					users(filter:$term){
						email
						first_name
						last_name
						user_id
					}
				}`,
				variables:{
					term: e
				}
			});
			this.users = response.data.users;
		}
	},
  components: {
    List
  },
  apollo: {
    users: {
      query: gql`
        {
          users {
            user_id
            first_name
            last_name
            email
          }
        }
      `
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
	.add-user
		float: right
		font-size: 1.6em
	.search
		width: 60%
		display: inline
</style>