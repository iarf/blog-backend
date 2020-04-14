<template>
<div class="wrap">
  <div class="admin-panel" v-if="authenticated">
    <SideBar @navigate="navigate"></SideBar>
    <b-container class="page">
      <transition name="fade">
        <component :is="$store.state.page.component" @open-edit="openEdit" class="component-wrap"></component>
      </transition>
    </b-container>
  </div>
	<div v-else>
		<h1>You don't seem to be signed in.</h1>
		<router-link to="/admin/login"><h2>(but we can fix that)</h2></router-link>
	</div>
</div>
</template>

<script>
import gql from "graphql-tag";

import SideBar from "../../components/admin/SideBar";
import Posts from "../../components/admin/Posts";
import Users from "../../components/admin/Users";
import MakePost from "../../components/admin/posts/MakePost";
import EditPost from "../../components/admin/posts/EditPost";

export default {
  components: {
    MakePost,
    SideBar,
    Posts,
    Users,
    EditPost
  },
  data() {
    return {
			user: "",
			authenticated: false
    };
  },
  async created() {
		const ver = await this.checkUser();
		if (ver){
			this.authenticated = true;
		}
  },
  methods: {
    async checkUser() {
      const response = await this.$apollo.mutate({
        mutation: gql`
          mutation {
            getUser {
              first_name
              last_name
            }
          }
        `
      });
      const user = response.data.getUser;
			this.$store.commit("setUser", user);
			return true;
    },
    navigate(page) {
      this.$store.commit("navigate", {
        page: page
      });
    },
    openEdit(post_id) {
      console.log(post_id);
      console.log("editor");
    }
  }
};
</script>

<style lang="sass">

.admin-panel
	*
		transition: all .1s ease-in-out

.fade-enter, .fade-leave-to
	opacity: 0
.fade-enter-to, .fade-leave
	opacity: 1
.fade-enter-active
	transition: all .5 ease-in
	transition-delay: .5s
	position: absolute
.fade-leave-active
	transition-duration: .2s
	transition: all .4s ease-out
	position: absolute
	width: 100%

.page
	width: calc(100% - 260px)
	margin-left: 260px
	position: relative
</style>