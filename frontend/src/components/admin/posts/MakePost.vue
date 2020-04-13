<template>
  <div class="make-post">
    <h1>Create a new post</h1>
		<hr>
    <b-form @submit.prevent="makePost">
      <b-row>
        <b-col col md="9">
          <b-form-input placeholder="Post title" class="title" name="title"></b-form-input>
        </b-col>
        <b-col col md="3">
          <b-form-datepicker class="date" name="date"></b-form-datepicker>
        </b-col>
      </b-row>
      <br />
      <b-form-textarea placeholder="Post content..." rows="14" class="content" name="content"></b-form-textarea>
			<div class="buttons">
				<b-button variant="danger" type="cancel">Cancel</b-button>
				<b-button variant="success" type="submit">Post</b-button>
			</div>
    </b-form>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
	methods: {
		async makePost(e){
			const title = e.target.elements.title.value;
			const date = e.target.elements.date.value;
			const content = e.target.elements.content.value;

			const result = await this.$apollo.mutate({
				mutation: gql`mutation($title: String!, $posted: String, $content: String!){
					post(title: $title, content: $content, posted: $posted)
				}`,
				variables: {
					title: title,
					posted: date,
					content: content
				}
			});
			alert(result.data.post);

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