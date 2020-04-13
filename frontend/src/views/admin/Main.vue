<template>
  <div class="admin-panel">
		<SideBar></SideBar>
		<b-container class="page">
			<Posts></Posts>
		</b-container>
		
	</div>
</template>

<script>
import SideBar from '../../components/admin/SideBar'
import Posts from '../../components/admin/Posts'

export default {
	components: {
		SideBar,
		Posts
	}
};
</script>

<style lang="sass">
	.page
		width: calc(100% - 260px)
		margin-left: 260px
</style>