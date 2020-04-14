<template>
	<div class="posts">
    <div class="menu-bar">
      <b-form inline class="search-wrap">
        <b-input id="search" placeholder="Search all posts" class="search"></b-input>
      </b-form>
			<a href="#" class="add-post" @click="$store.commit('navigate',{page:'MakePost'})"><i class="far fa-plus-square"></i></a>
    </div>
		<List @edit="openEdit()"></List>
	</div>
</template>

<script>
import List from './posts/List';
export default {
	components: {
		List
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
	.search-wrap
		display: inline
	.search
		width: 60%


</style>