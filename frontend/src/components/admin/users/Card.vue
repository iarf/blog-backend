<template>
	<b-row class="user-card">
		<b-col>
		<a href="#" class="delete" @click="deleteUser"><i class="fas fa-trash fa-lg"></i></a>
		<a href="#"><span class="title">{{user.first_name}} {{user.last_name}}</span></a>
		</b-col>
		<b-col class="date-col">
		<span class="date text-muted">{{user.email}}</span>
		</b-col>
	</b-row>
</template>

<script>
import gql from 'graphql-tag';
export default {
    props: [
        'user'
    ],
    methods: {
        async deleteUser(){
            const response = await this.$apollo.mutate({
                mutation: gql`mutation($id: String){
                    deleteUser(user_id:$id)
                }`,
                variables: {
                    id: this.user.user_id
                }
            });
            alert(response.data.deleteUser);
        }
    }
}
</script>

<style lang="sass" scoped>
.user-card
    width: calc(100% - 8px)
    background: white
    margin: 4px
    text-align: left
    padding: 6px
    border: 1px solid #cfcfcf

    .title
        margin-left: 20px
    .date-col
        text-align: right
    .delete
        color: #858585
        &:hover
            color: #bf6b6b	

</style>