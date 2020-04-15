<template>
	<b-row class="user-card">
		<b-col>
		<a href="#" class="delete" v-on:click="deleteUser"><i class="fas fa-trash fa-lg"></i></a>
		<a href="#" v-on:click="openEdit"><span class="title">{{user.first_name}} {{user.last_name}}</span></a>
		</b-col>
		<b-col class="date-col">
		<span class="date text-muted">{{user.email}}</span>
		</b-col>
	</b-row>
</template>

<script>
export default {
    props: [
        'user'
    ]
}
</script>

<style>

</style>