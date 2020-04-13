<template>
  <div class="admin-panel">
		<SideBar @navigate="navigate"></SideBar>
		<b-container class="page">
			<transition name="fade">
				<component :is="selected" @addPost="navigate('MakePost')"></component>
			</transition>
		</b-container>		
	</div>
</template>

<script>
import SideBar from '../../components/admin/SideBar'
import Posts from '../../components/admin/Posts'
import Users from '../../components/admin/Users'
import MakePost from '../../components/admin/posts/MakePost'

export default {
	components: {
		MakePost,
		SideBar,
		Posts,
		Users
	},
	data(){
		return{
			selected: Posts
		}
	},
	methods: {
		navigate(page){
			this.selected = page;
		}
	}
};
</script>

<style lang="sass">
	.fade-enter-active, .fade-leave-active 
		transition: opacity .5s

	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ 
		opacity: 0

	.page
		width: calc(100% - 260px)
		margin-left: 260px
</style>