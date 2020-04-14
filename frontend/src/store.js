import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		page: {
			component: 'Posts'
		},
		user: {}
	},
	mutations: {
		navigate(state,payload){
			if (payload.post_id){
				state.page.post_id = payload.post_id;
				console.log(payload.post_id)
			}
			state.page.component = payload.page;			
		},
		setUser(state,user){
			console.log(user)
			state.user = user;
		}
	}
});

