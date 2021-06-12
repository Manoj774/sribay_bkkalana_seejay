<template>
	<div class="account-wrap">
		<div class="inner-container">
			<div class="final-receipt-page section-gap">
				<div class="account-info">
					<div class="px-sm-4 px-md-12">
						<div class="layout justify-start mt-0 mb-sm-11 mb-8  mx-0">
							<div class="login-user-img">
								<img src="/static/images/user-3.jpg" width="70" alt="Active User">
							</div>
							<div class="px-4">
								<h4>{{this.user.first_name +" " + this.user.last_name}}</h4>
								<div class="text-muted text-xl">{{this.user.email}}</div>
							</div>
						</div>
						<div class="px-3">
							<v-layout row wrap fill-height profile-list>
								<v-flex xs12 sm12 md4 lg3 xl2 user-nav-list pr-md-4 mb-md-0 mb-6>
									<div class="emb-card account-block fill-height py-4">
									<template v-for="(option,key,index) in settings" >
										<v-list
											v-for="cateogary in settings[key]"
											:key="cateogary.name" class="py-0 text-center">
											<v-list-item @click="onTabChange(index)" :to="cateogary.path">
												<v-list-item-action class="ma-0">
													<v-icon>{{cateogary.icon}}</v-icon>
												</v-list-item-action>
												<v-list-item-content class="py-0 text-left">
													<v-list-item-title>
														<span>{{cateogary.title}}</span>
													</v-list-item-title>
												</v-list-item-content>
											</v-list-item>
										</v-list>
									</template>
									</div>
								</v-flex>
								<v-flex xs12 sm12 md8 lg9 xl9 user-content-wrapper>
									<div v-for="(option,key,index) in settings" :key="key" >
											<router-view v-if="index == selectedTab"></router-view>
									</div>
								</v-flex>
							</v-layout>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			settings:{
				profile:[
					{
						title:"Profile",
						icon:"mdi-account-circle",
						path:"/account/profile",
						id:"profile"
					},
				],
				// accountSetting:[
				// 	{
				// 		title:"Account Settings",
				// 		icon:"credit_card",
				// 		path:"/sriBay-admin/account/settings",
				// 		id:"accountSetting"
				// 	},
				// ]
			},
			selectedTab: 0,
			user:null,
		}
	},
	beforeMount() {
		this.user = JSON.parse(sessionStorage.getItem('admin-user'));
	},
	methods:{

		onTabChange(key) {
			this.selectedTab = key;
		},
	}
}
</script>
