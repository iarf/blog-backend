import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		page: {
			component: 'EditPost',
			post_id: 2
		}
	},
	mutations: {
		navigate(state,payload){
			if (payload.post_id){
				state.page.post_id = payload.post_id;
				console.log(payload.post_id)
			}
			state.page.component = payload.page;			
		}
	}
});

