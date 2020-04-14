<template>
<div class="edit-wrapper">
	<p v-if="isLoading">Loading...</p>
  <div class="make-post" v-else>
    <h1>Edit post</h1>
		<hr>
    <b-form @submit.prevent="updatePost">
      <b-row>
        <b-col col md="9">
          <b-form-input placeholder="Post title" :value="post.title" class="title" name="title"></b-form-input>
        </b-col>
        <b-col col md="3">
          <b-form-datepicker class="date" name="date" :value="post.date"></b-form-datepicker>
        </b-col>
      </b-row>
      <br />
      <b-form-textarea placeholder="Post content..." rows="14" class="content" name="content" :value="post.content"></b-form-textarea>
			<div class="buttons">
				<b-button variant="danger" type="button" @click="$store.commit('navigate',{page:'Posts'})">Cancel</b-button>
				<b-button variant="success" type="submit">Update</b-button>
			</div>
    </b-form>
  </div>
</div>
</template>

<script>
import gql from 'graphql-tag';

export default {
	data(){
		return {
			post: null,
			isLoading: true
		}
	},
	props: [
		'title',
		'content',
		'date',
		'post_id'
	],
	async created(){
		try{
			this.isLoading = true;
		await this.getPost();
		}finally{
			this.isLoading = false;
		}

	},
	methods: {
		async getPost(){
			const response = await this.$apollo.query({
				query: gql`query($post_id:ID!){
					post(post_id: $post_id){
						title
						content
						posted
					}
				}`,
				variables: {
					post_id: this.$store.state.page.post_id
				}
			})
			this.post = response.data.post
			console.log(this.post)
		},
		async updatePost(e){
			const post_id = this.$store.state.page.post_id;
			const title = e.target.elements.title.value;
			const content = e.target.elements.content.value;
			const posted = e.target.elements.date.value;
			console.log(post_id + title + content + posted)
			const result = await this.$apollo.mutate({
				mutation:gql`mutation($post_id: ID!, $title: String!, $content: String!, $posted: String){
					updatePost(post_id: $post_id, title: $title, content: $content, posted: $posted)					
				}`,
				variables: {
					post_id: post_id,
					title: title,
					content: content,
					posted: posted
				}
			});
			alert(result.data.updatePost)
			this.$store.commit('navigate',{
				page: 'Posts'
			});
		}
	}
};
</script>

<style lang="sass" scoped>
h1
	text-align: left
.buttons
	text-align: right
	button
		margin: 6px	
</style>