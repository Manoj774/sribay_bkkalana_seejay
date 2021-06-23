<template>
	<div class="account-wrap">
		<div class="inner-container">
			<div class="bg-white final-receipt-page section-gap">
				<div class="account-info">
					<div class="container grid-list-xl">
						<div class="layout justify-start mt-0 mb-4 mx-0">
							<div class="login-user-img">
								<img src="/static/images/user-3.jpg" width="70" alt="Active User">
							</div>
							<div class="px-4">
								<h4>Hi, {{user.first_name +" "+ user.last_name}}</h4>
								<div class="text-muted text-xl">{{user.email}}</div>
							</div>
						</div>
						<v-layout row wrap fill-height profile-list>
							<v-flex xs12 sm12 md4 lg3 xl2 user-nav-list px-0>
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
</template>

<script>
export default {
	data(){
		return{
			settings:{
				orderHistory:[
					{
						title:"Order History",
						icon:"mdi-history ",
						path:"/account/order-history",
						id:"orderHistory"
					},
				],
				profile:[
					{
						title:"Profile",
						icon:"mdi-account-circle",
						path:"/account/profile",
						id:"profile"
					},
				],
				address:[
					{
						title:"Addresses",
						icon:"mdi-map-marker ",
						path:"/account/address",
						id:"addresses"
					}
				]
			},
			selectedTab: 0,
            user:{
                first_name: '',
                last_name: '',
                role: 2,
            },
		}

	},
    mounted() {

	    if (JSON.parse(sessionStorage.getItem('user')) != null){
	        this.user = JSON.parse(sessionStorage.getItem('user'));
        }else if (JSON.parse(sessionStorage.getItem('admin-user')) != null){
            this.user = JSON.parse(sessionStorage.getItem('admin-user'));
        }

        if (this.user != null){
            if (this.user.role === 3){
                this.settings = {
                    affiliate :[
                        {
                            title:"Affiliate Program",
                            icon:"mdi-align-horizontal-left",
                            path:"/account/affiliate-dashboard",
                            id:"affiliate-dashboard"
                        },
                    ],
                    orderHistory:[
                        {
                            title:"Order History",
                            icon:"mdi-history ",
                            path:"/account/order-history",
                            id:"orderHistory"
                        },
                    ],
                    profile:[
                        {
                            title:"Profile",
                            icon:"mdi-account-circle",
                            path:"/account/profile",
                            id:"profile"
                        },
                    ],
                    address:[
                        {
                            title:"Addresses",
                            icon:"mdi-map-marker ",
                            path:"/account/address",
                            id:"addresses"
                        }
                    ],
                    bankDetails:[
                        {
                            title:"Bank Details",
                            icon:"mdi-credit-card ",
                            path:"/account/bank-details",
                            id:"bankDetails"
                        },
                    ]
                };
            }
        }
    },
    methods:{
		onTabChange(key) {
			this.selectedTab = key;
		},
	}
}
</script>
