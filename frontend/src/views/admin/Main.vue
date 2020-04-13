<template>
  <div class="admin-panel">
		<SideBar @navigate="navigate"></SideBar>
		<b-container class="page">
			<transition name="fade">
				<component :is="$store.state.page.component" @open-edit="openEdit"></component>
			</transition>
		</b-container>		
	</div>
</template>

<script>
import SideBar from '../../components/admin/SideBar'
import Posts from '../../components/admin/Posts'
import Users from '../../components/admin/Users'
import MakePost from '../../components/admin/posts/MakePost'
import EditPost from '../../components/admin/posts/EditPost'

export default {
	components: {
		MakePost,
		SideBar,
		Posts,
		Users,
		EditPost
	},
	methods: {
		navigate(page){
			this.$store.commit('navigate',{
				page:page
			})
		},
		openEdit(post_id){
			console.log(post_id)
			console.log('editor')
		}
	},
	events: {
		openEdit: function(){
			console.log('success')
		}
	}
};
</script>

<style lang="sass">
	.fade-enter, .fade-leave-to
		opacity: 0
	.fade-enter-to, .fade-leave
		opacity: 1
	.fade-enter-active
		transition-duration: .5s
		transition-delay: .5s
	.fade-leave-active
		transition-duration: .2s

	.page
		width: calc(100% - 260px)
		margin-left: 260px
</style>