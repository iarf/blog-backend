<template>
  <div class="make-user">
		<h1>Create a new user account</h1>
		<hr>
		<b-form @submit.prevent="makeUser">
			<b-form-group label="Email" label-for="email">
				<b-form-input name="email" type="email" required placeholder="Enter email"></b-form-input>
			</b-form-group>
			<b-form-group label="First name" label-for="firstname">
				<b-form-input name="firstname" type="text" placeholder="Enter first name"></b-form-input>
			</b-form-group>
			<b-form-group label="Last name" label-for="lastname">
				<b-form-input name="lastname" type="text" placeholder="Enter last name"></b-form-input>
			</b-form-group>
			<b-form-group label="Password" label-for="password">
				<b-form-input name="password" type="password" placeholder="Enter password"></b-form-input>
			</b-form-group>
			<div class="buttons">
				<b-button variant="danger" type="button" @click="$store.commit('navigate',{page:'Users'})">Cancel</b-button>
				<b-button variant="success" type="submit">Post</b-button>
			</div>
		</b-form>
	</div>
</template>

<script>
export default {
	methods: {
		async makeUser(){
			const email = e.target.elements.email.value;
			const first_name = e.target.elements.firstname.value;
			const last_name = e.target.elements.lastname.value;
			const password = e.target.elements.password.value;
			response = await this.$apollo.mutate({
				mutation:gql`mutation($email: String, $first_name: String, $last_name: String, $password: String){
					signup(email: $email, first_name: $first_name, last_name: $last_name, password: $password)
				}`,
				variables:{
					email: 
				}
			})
		}
	}
}
</script>

<style>

</style>