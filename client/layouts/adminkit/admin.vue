<template>
	<div class="wrapper">
		<nav class="sidebar">
			<div class="sidebar-content js-sidebar scrollbar-thin-dark" style="max-height:100vh; overflow:auto;">
				<a class="sidebar-brand" href="index.html">
					<span class="align-middle">
						{{ APP_NAME }}
					</span>
				</a>

				<div class="text-center py-3 border-top border-bottom border-secondary">
					<img :src="$store.state.auth.user.photo" alt="" style="width:80px; height:80px; object-fit:cover; border-radius:50%; border:solid 3px #eee;">
					<div class="text-white fw-bold mt-2">Olá {{ $store.state.auth.user.name }}</div>
				</div>

				<ui-nav :items="$store.state.admin.menu" mode="vertical" text-color="#fff"></ui-nav>
			</div>
		</nav>

		<div class="main">
			<nav class="navbar navbar-expand navbar-light navbar-bg">
				<a class="sidebar-toggle js-sidebar-toggle" href="javascript:;" @click="toggleClass('.js-sidebar', 'collapsed')">
					<i class="align-self-center fas fa-bars"></i>
				</a>

				<div class="navbar-collapse collapse">
					<ul class="navbar-nav navbar-align">

						<!-- <li class="nav-item dropdown">
							<ui-dropdown v-bind="{right:true}">
								<a class="nav-icon dropdown-toggle" href="javascript:;">
									<div class="position-relative">
										<i class="far fa-comment-alt"></i>
										<span class="indicator">4</span>
									</div>
								</a>
	
								<template #dropdown>
									<div class="dropdown-menu dropdown-menu-lg show">
										<div class="dropdown-menu-header">
											<div class="position-relative">
												4 New Messages
											</div>
										</div>
										<div class="list-group">
											<a href="#" class="list-group-item">
												<div class="row g-0 align-items-center">
													<div class="col-2">
														<img src="img/avatars/avatar-5.jpg" class="avatar img-fluid rounded-circle" alt="Vanessa Tucker">
													</div>
													<div class="col-10 ps-2">
														<div class="text-dark">Vanessa Tucker</div>
														<div class="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
														<div class="text-muted small mt-1">15m ago</div>
													</div>
												</div>
											</a>
										</div>
										<div class="dropdown-menu-footer">
											<a href="#" class="text-muted">Show all messages</a>
										</div>
									</div>
								</template>
							</ui-dropdown>
						</li> -->

						<li class="nav-item dropdown">
							<ui-dropdown v-bind="{right:true}">
								<a class="nav-link dropdown-toggle d-none d-sm-inline-block" href="javascript:;" data-bs-toggle="dropdown">
									<!-- <img src="img/avatars/avatar.jpg" class="avatar img-fluid rounded me-1" :alt="$auth.user.name" /> -->
									<span class="text-dark me-2">{{ $auth.user.name }}</span>
								</a>

								<template #dropdown>
									<div class="dropdown-menu dropdown-menu-end show">
										<nuxt-link :to="o.to" class="dropdown-item" :key="i" v-for="(o, i) in $store.state.admin.userOptions">
											<i :class="o.icon" class="me-2"></i> {{ o.label }}
										</nuxt-link>
										<div class="dropdown-divider"></div>
										<a class="dropdown-item" href="javascript:;" @click="$auth.logout()">Log out</a>
									</div>
								</template>
							</ui-dropdown>
						</li>
					</ul>
				</div>
			</nav>

			<main class="content">
				<div class="container-fluid p-0">

					<!-- <h1 class="h3 mb-3"><strong>Analytics</strong> Dashboard</h1> -->
                    <nuxt></nuxt>

				</div>
			</main>

			<footer class="footer">
				<div class="container-fluid">
					<div class="row text-muted">
						<div class="col-6 text-start">
							<p class="mb-0">
								<a class="text-muted" href="https://adminkit.io/" target="_blank">
									<strong>{{ APP_NAME }}</strong>
								</a> &copy;
							</p>
						</div>
						<div class="col-6 text-end">
							<ul class="list-inline">
								<li class="list-inline-item">
									<nuxt-link class="text-muted" to="/dev">Dev</nuxt-link>
								</li>
								<li class="list-inline-item">
									<nuxt-link class="text-muted" to="/swagger">Swagger</nuxt-link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
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
@import './adminkit.scss';
</style>