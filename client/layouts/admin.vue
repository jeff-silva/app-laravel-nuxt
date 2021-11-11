<template>
	<div class="wrapper">

		<div class="d-flex">
			<div style="max-width:300px;">
				<ui-sidebar ref="sidebar" storeid="admin-nav" style="min-width:250px; max-width:250px;">
					<div class="bg-dark" style="height:100vh; overflow:auto;">
						<nuxt-link to="/admin" class="d-block p-3 text-white" style="text-decoration:none;">
							{{ APP_NAME }}
						</nuxt-link>

						<div class="text-center py-3" style="border-top: solid 1px #ffffff22; border-bottom: solid 1px #ffffff22;">
							<img :src="$store.state.auth.user.photo" alt="" style="width:80px; height:80px; object-fit:cover; border-radius:50%; border:solid 3px #eee;">
							<div class="text-white fw-bold mt-3">Olá {{ $store.state.auth.user.name }}</div>
						</div>

						<ui-nav :items="$store.state.admin.menu" mode="vertical" text-color="#fff"></ui-nav>
					</div>
				</ui-sidebar>
			</div>

			<div class="flex-grow-1">
				<div class="bg-dark p-3 text-white">
					<a href="javascript:;" class="text-white" @click="$refs.sidebar.toggleDesktop(); $refs.sidebar.toggleMobile();">
						<i class="align-self-center fas fa-bars"></i>
					</a>
				</div>

				<div class="p-3">
					<nuxt></nuxt>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			APP_NAME: process.env.APP_NAME,
		};
	},

	methods: {
		toggleClass(selector, className) {
			if (typeof selector=='string') {
				selector = document.querySelector(selector);
			}

			selector.classList.toggle(className);
		},
	},
}
</script>

<style scoped lang="scss">
/* @import './adminkit.scss'; */
</style>