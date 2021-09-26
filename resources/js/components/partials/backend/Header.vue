<template>
	<div class="mm-top-navbar">
		<div class="mm-navbar-custom d-flex align-items-center justify-content-between">
			<div class="mm-navbar-logo d-flex align-items-center justify-content-between" @click="miniSidebar"><i class="ri-menu-line wrapper-menu"></i>
				<router-link :to="{name: 'app.dashboard'}" class="header-logo">
<!--					 <img :src="sidelogo" class="img-fluid rounded-normal light-logo" alt="logo">-->
				</router-link>
			</div>
			<div class="menu-horizontal">
				<nav class="mm-sidebar-menu">
					<div class="mm-sidebar-logo d-flex align-items-center justify-content-between">
						<router-link :to="{name: 'app.dashboard'}" class="header-logo">
							<!-- <img :src="sidelogo" class="img-fluid rounded-normal light-logo" alt="logo">  -->
						</router-link>
						<div class="side-menu-bt-sidebar" @click="miniSidebar"> <i class="las la-bars wrapper-menu mr-0"></i> </div>
					</div>
					<ul id="mm-sidebar-toggle feather feather-home" class="side-menu d-flex">
						<!-- Dashboard -->
						<li class="active">
							<router-link :to="{ name: 'app.dashboard'}" class="svg-icon">
								<i class="">
									<svg class="feather feather-home svg-icon" id="mm-dash" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
											<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
											<polyline points="9 22 9 14 15 14 15 22"></polyline>
									</svg>
								</i>
                <h4><span>Dashboard</span></h4>
							</router-link>
						</li>
						<!-- Settings -->
						<li class=" ">
							<a v-b-toggle.auth class="collapsed" data-toggle="collapse" aria-expanded="false">
								<svg class="svg-icon text-primary" id="mm-auth-1" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /> </svg> <h4><span class="ml-2">Settings</span></h4> <i class="ri-arrow-right-s-line mm-arrow-right"></i> </a>
							<b-collapse tag="ul" id="auth" class="mm-submenu sub-scrll" data-parent="#mm-sidebar-toggle" v-hover>
								<li class=" ">
									<router-link :to="{ name: 'app.admins'}" class="svg-icon">
										<i class="">
											<svg class="svg-icon" id="mm-user-1-2" xmlns="http://www.w3.org/2000/svg"
												fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
											</svg>
										</i>
										<span>Admins</span>
									</router-link>
								</li>
								<li class=" ">
									<router-link :to="{ name: 'app.riders'}" class="svg-icon">
										<i class="">
											<svg class="svg-icon" id="mm-user-1-2" xmlns="http://www.w3.org/2000/svg"
												fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
											</svg>
										</i>
										<span>Riders</span>
									</router-link>
								</li>
								<li class=" ">
									<router-link :to="{ name: 'app.clients'}" class="svg-icon">
										<i class="">
											<svg class="svg-icon" id="mm-user-1-2" xmlns="http://www.w3.org/2000/svg"
												fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
											</svg>
										</i>
										<span>Users</span>
									</router-link>
								</li>
								<!-- <li class=" ">
									<router-link :to="{ name: 'app.user-list'}" class="svg-icon">
										<i class="">
											<svg class="svg-icon" id="mm-user-1-3" xmlns="http://www.w3.org/2000/svg"
												fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
											</svg>
										</i>
										<span>List Users</span>
									</router-link>
								</li> -->
							</b-collapse>
						</li>
						<!-- Orders -->
						<li class=" ">
							<a v-b-toggle.orders class="collapsed" data-toggle="collapse" aria-expanded="false">
								<svg class="svg-icon text-primary" id="mm-app-1" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
								</svg> <h4><span class="ml-2">Orders</span></h4> <i class="ri-arrow-right-s-line mm-arrow-right"></i> </a>
							<b-collapse tag="ul" id="orders" class="mm-submenu sub-scrll" data-parent="#mm-sidebar-toggle" v-hover>
								<li class=" ">
									<router-link :to="{ name: 'app.order-list'}" class="svg-icon">
										<i class="">
											<svg class="svg-icon" id="mm-form-2" xmlns="http://www.w3.org/2000/svg" width="20"
												viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
												stroke-linecap="round" stroke-linejoin="round">
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<rect x="5" y="3" width="14" height="18" rx="2" />
												<line x1="9" y1="7" x2="15" y2="7" />
												<line x1="9" y1="11" x2="15" y2="11" />
												<line x1="9" y1="15" x2="13" y2="15" />
											</svg>
										</i>
										<span>All Orders</span>
									</router-link>
								</li>
								<!-- <li class=" ">
									<router-link :to="{ name: 'app.order-track'}" class="svg-icon">
										<i class="">
											<svg class="svg-icon" id="mm-user-1-3" xmlns="http://www.w3.org/2000/svg"
												fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
											</svg>
										</i>
										<span>Track Orders</span>
									</router-link>
								</li> -->
							</b-collapse>
						</li>
						<!-- Notifications -->
						<li class=" ">
							<a v-b-toggle.notifications class="collapsed" data-toggle="collapse" aria-expanded="false">
								<svg class="svg-icon text-primary" id="mm-app-1" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
										d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
								</svg> <h4><span class="ml-2">Notifications</span></h4> <i class="ri-arrow-right-s-line mm-arrow-right"></i> </a>
							<b-collapse tag="ul" id="notifications" class="mm-submenu sub-scrll" data-parent="#mm-sidebar-toggle" v-hover>
								<li class=" ">
									<router-link :to="{ name: 'app.notifications-unread'}" class="svg-icon">
										<i class="">
											<svg class="svg-icon" id="mm-form-2" xmlns="http://www.w3.org/2000/svg" width="20"
												viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"
												stroke-linecap="round" stroke-linejoin="round">
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<rect x="5" y="3" width="14" height="18" rx="2" />
												<line x1="9" y1="7" x2="15" y2="7" />
												<line x1="9" y1="11" x2="15" y2="11" />
												<line x1="9" y1="15" x2="13" y2="15" />
											</svg>
										</i>
										<span>Unread Notifications</span>
									</router-link>
								</li>
								<li class=" ">
									<router-link :to="{ name: 'app.notifications-read'}" class="svg-icon">
										<i class="">
											<svg class="svg-icon" id="mm-user-1-3" xmlns="http://www.w3.org/2000/svg"
												fill="none" viewBox="0 0 24 24" stroke="currentColor">
												<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
													d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
											</svg>
										</i>
										<span>Read Notifications</span>
									</router-link>
								</li>
							</b-collapse>
						</li>
					</ul>
				</nav>
			</div>
			<nav class="navbar navbar-expand-lg navbar-light p-0">
				<ModeSwitch />
				<b-navbar-toggle target="nav-collapse" class="mr-2 text-primary"> <i class="ri-menu-3-line"></i> </b-navbar-toggle>
				<b-collapse id="nav-collapse" is-nav>
					<ul class="navbar-nav ml-auto navbar-list align-items-center">
						<li class="nav-item nav-icon search-content" v-nav-toggle>
							<a href="#" class="search-toggle dropdown-toggle" id="dropdownSearch" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="ri-search-line"></i> </a>
							<div class="mm-search-bar mm-sub-dropdown dropdown-menu" aria-labelledby="dropdownSearch">
								<form action="#" class="searchbox p-2">
									<div class="form-group mb-0 position-relative">
										<input type="text" class="text search-input font-size-12" placeholder="type here to search..."> <a href="#" class="search-link"><i class="ri-search-line"></i></a> </div>
								</form>
							</div>
						</li>
						<Fullscreen class="nav-item d-none d-lg-block  full-screen" />
						<li class="nav-item nav-icon dropdown" v-nav-toggle>
							<!-- All Notifications -->
							<a href="#" class="search-toggle dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<svg class="svg-icon feather feather-bell text-primary" id="mm-bell-2" xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
									<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
									<path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
								</svg> 
								<span class="bg-primary dots"></span>
							</a>

							<div class="mm-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton">
							<div class="card shadow-none m-0 border-0">
								<div class="card-body p-0 ">
									<div class="cust-title p-3">
										<h5 class="mb-0">All Notifications</h5> </div>
										<!-- notifications -->
										<div class="p-3">
											<template v-if="notifications.length">
												<template
													v-for="(notification, index) in notifications"
												>
													<a href="#" class="mm-sub-card" :key="'notification' + index">
														<div class="media align-items-center">
															<div class="media-body ml-3">
																<h6 class="mb-0">
																	{{notification.data.message.substring(0, 25)}}
																	<small class="badge badge-success float-right">New</small>
																</h6>
																<p class="mb-0 small">
																	{{ notification.created_at | dateTime}}
																</p>
															</div>
														</div>
													</a>
												</template>
											</template>
											<template v-else>No New Notifications</template>
										</div>
										<!-- view all -->
										<a class="right-ic btn btn-primary btn-block position-relative p-2" href="#" role="button">
											<div class="dd-icon"><i class="las la-arrow-right mr-0"></i></div>
											<router-link :to="{name: 'app.notifications-unread'}">
												<span class="text-white">View All</span>
											</router-link>
										</a>
									</div>
								</div>
							</div>
						</li>
						<li class="nav-item nav-icon dropdown" v-nav-toggle>
							<a class="nav-item nav-icon dropdown-toggle pr-0 search-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
								<!-- <img src="../../../assets/images/user/1.jpg" class="img-fluid avatar-rounded" alt="user"> -->
								Welcome, <template v-if="user">{{ user.first_name }}</template>
							</a>
							<ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
								<li class="dropdown-item d-flex svg-icon">
									<svg class="svg-icon mr-0 text-primary" id="h-02-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /> </svg>
									<router-link :to="{name: 'app.user-password-update'}">Change Password</router-link>
								</li>
								<li class="dropdown-item  d-flex svg-icon border-top">
									<svg class="svg-icon mr-0 text-primary" id="h-05-p" width="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /> </svg>
									<a @click.prevent="logOut">Logout</a>
								</li>
							</ul>
						</li>
					</ul>
				</b-collapse>
			</nav>
		</div>
	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
import {core} from '../../../config/pluginInit'
import Fullscreen from '../../fullscreen/Fullscreen'

export default {
  name:"Header",
	components: {Fullscreen},
	mounted() {
		setTimeout(() => {
			this.getUnread()
		}, 3000)
	},
	computed : {
		...mapGetters({
			logo:'app/darklogo',
			sidelogo:'app/logo',
			user: 'auth/user',
			notifications: 'notifications/unread'
		})
	},
	filters: {
		dateTime(value) {
			if (!value) return ''
			return moment(value).format('DD-MM-YY hh:mm:ss')
		}
	},
	methods: {
		...mapActions({
			getNotifications: 'notifications/getNotifications'
		}),
		miniSidebar(){
			core.triggerSet()
		},
		async getUnread() {
			try {
				this.getNotifications('unread')
			} catch (error) {
				console.log(error)
				if(is401(error)) {
					this.$logOut()
				}
				if(is403(error)) {
					this.$toasted.error("Kindly verify your account before performing any actions!")
				}
			}
		},
		async logOut() {
			// await axios.post('/api/logout')
			await this.$store.dispatch('auth/logOut')
			await this.$router.push({name: 'auth.login'})
			this.$toasted.success('Successfully loggged out!')
		}
	}
}
</script>
