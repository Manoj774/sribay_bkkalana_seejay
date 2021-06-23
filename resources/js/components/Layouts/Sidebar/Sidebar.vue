<template>
	<div class="sidebar-menu">
		<emb-perfect-scrollbar class="scroll-area" :settings="settings">
			<v-list>
				<div class="close-btn-sidebar layout justify-end mx-4 pt-2">
					<a href="javascript:void(0)" @click="toggleMobileSidebar">
						<v-icon>mdi-close</v-icon>
					</a>
				</div>
				<template v-for="menu in menus">
					<template v-if="menu.children !== null">
						<v-list-group
							light
							:key="menu.title"
							no-action
							v-model="menu.active"
						>
							<v-list-item class="px-0" slot="activator" :to="menu.path">
								<v-list-item-action class="mr-0">
<!--									<v-icon>{{menu.icon}}</v-icon>-->
								</v-list-item-action>
								<v-list-item-title>
									{{ $t(menu.name) }}
								</v-list-item-title>
							</v-list-item>

							<template v-if="menu.type === 'sub_menu'">
                        <template v-for="subItem in menu.children" >
                           <v-list-item
                              class="sub-menu-item"

                              :key="subItem.title"
                              v-if="subItem !== null"
                              :to="subItem.path"
                           >
                              <template v-if="subItem.children_menus == null">
                                 <v-list-item-action class="mr-0">
<!--                                    <v-icon>arrow_right_alt</v-icon>-->
                                 </v-list-item-action>
                                 <v-list-item-title class="sub-item">{{$t(subItem.name)}}</v-list-item-title>
                              </template>

                              <template v-else>
                                 <v-list-group
                                    class="submenu-child"
                                 no-action
                                 sub-group
                                 value="true"
                                 prepend-icon="mdi mdi-chevron-down"
                                 >
                                 <template v-slot:activator>
                                    <v-list-item-title>{{$t(subItem.name)}}</v-list-item-title>
                                 </template>

                                 <v-list-item
                                    v-for="(item, i) in subItem.children_menus"
                                    :key="i"
                                    link
                                    :to="item.path"
                                 >
                                    <v-list-item-title class="sub-item">{{$t(item.name)}}</v-list-item-title>
                                 </v-list-item>
                                 </v-list-group>
                              </template>

                           </v-list-item>
                        </template>
							</template>
							<template v-else>
                        <template v-for="(subItem,subItemKey) in menu.children" >
                           <v-list-group
                              class="submenukey"

                              :key="subItemKey"
                              v-if="subItem !== null"
                              :to="subItem.path"
                              no-action
                              sub-group
                              prepend-icon="mdi mdi-chevron-down"
                              v-model="subGroup[subItemKey]"
                           >
                              <v-list-item slot="activator">
                                 <v-list-item-title class="megamenu-key pl-1">{{ $t(subItemKey) }}</v-list-item-title>
                              </v-list-item>
                              <v-list-item
                                 v-for="(megaChild,megaChildKey) in subItem"
                                 :key="megaChildKey"
                                 :to="megaChild.path"
                                 class="mega-menu-item "
                              >
                                 <v-list-item-action class="mr-0 pl-1">
<!--                                    <v-icon>arrow_right_alt</v-icon>-->
                                 </v-list-item-action>
                                 <v-list-item-title :value="true">{{$t(megaChild.name)}}</v-list-item-title>
                              </v-list-item>
                           </v-list-group>
                        </template>
							</template>
						</v-list-group>
					</template>

					<template v-else>
						<v-list-item :key="menu.title" :to="menu.path">
							<v-list-item-action class="mr-0">
<!--								<v-icon>{{menu.icon}}</v-icon>-->
							</v-list-item-action>
							<v-list-item-content>
								<v-list-item-title>
									{{ $t(menu.name) }}
								</v-list-item-title>
							</v-list-item-content>
						</v-list-item>
					</template>
				</template>
			</v-list>
		</emb-perfect-scrollbar>
	</div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import { mapGetters } from 'vuex';
export default {
	components: {
		embPerfectScrollbar:VuePerfectScrollbar,
	},
	data() {
		return {
            megaMenuItems:[],
            menus: [
                {
                    path: '/',
                    name: "message.home",
                    icon: "mdi-home",
                    children: null
                },
                {
                    path:'/products',
                    name: "message.shop",
                    icon: "pages",
					children: null
                },
                // {
                //     path: '',
                //     name:" Categories",
                //     icon: 'party_mode',
				// 	children: null
                // },
                {
                    path: '/contact',
                    name:"message.contactUs",
                    icon: 'perm_contact_calendar',
                    children: null
                },
                {
                    path: '/subscription-plan',
                    name:"Affiliate Program",
                    icon: 'party_mode',
                    children: null
                },
                // {
                //     path: '/admin-panel/reports',
                //     name:"message.adminPanel",
                //     icon: 'perm_identity',
                //     children:null
                // },
            ],
			settings: {
				maxScrollbarLength: 360
			}
		}
	},
    beforeMount() {
        this.getParentCategories();
    },
	computed:{

	},
	methods: {

        getParentCategories() {
            axios.get('/api/category/tree-view').then(response => {
                const responseData = response.data.categories;
                for(const i in responseData) {
                    this.megaMenuItems.push(responseData[i]);
                }

                // console.log(this.megaMenuItems)
            }, error => {
                const errors = error.response.data.message;
                var html = '';
                for (const i in errors){
                    html += errors[i];
                }
                this.$toast.open({
                    message: html,
                    type: 'error',
                });
            });
        },

		toggleMobileSidebar() {
			this.$store.dispatch('toggleSidebar', false);
		},
		scrollHanle(evt) {
			console.log(evt)
		}
	}
}
</script>
