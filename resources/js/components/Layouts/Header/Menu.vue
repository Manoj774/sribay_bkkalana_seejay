<template>
   <div class="navbar">
      <ul class="app-nav-list pl-0">
         <li class="app-nav-item" v-for="(menuItem , key) in menus" :key="key">
				<router-link  :to="menuItem.path">{{$t(menuItem.name)}}</router-link>
				<template v-if="menuItem.type === 'sub_menu'">
					<ul  class="sub-menu" v-if="menuItem.children && menuItem.children.length > 0">
						<li v-for="(subMenuItem , subMenuKey) in menuItem.children" :key="subMenuKey">
							<router-link :to="subMenuItem.path" :class="[ subMenuItem.type === 'sub_menu' ? 'menu-item-has-children':'']">{{$t(subMenuItem.name)}}</router-link>
							<ul class="sub-menu" v-if="subMenuItem.children_menus">
								<li  v-for="(childrenItem , childrenKey) in subMenuItem.children_menus" :key="childrenKey">
									<router-link :to="childrenItem.path" >{{$t(childrenItem.name)}}</router-link>
								</li>
							</ul>
						</li>
					</ul>
				</template>
				<template v-if="menuItem.type === 'mega_menu'">
					<ul class="sub-menu mega" v-if="menuItem.name == 'categories'">
						<li v-for="(megaitem,key) in megaMenuItems" :key="key">
                            <a>{{$t(megaitem.name)}}</a>
							<ul class="sub-menu">
								<li v-for="(submega,submegakey) in megaitem.children" :key="submegakey">
									<router-link :to="{name: 'Products', params: {title:$t(submega.name)}, query: {category: submega.id}}">{{$t(submega.name)}}</router-link>
								</li>
							</ul>
						</li>
					</ul>
				</template>
         </li>
      </ul>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppConfig from "../../../constants/AppConfig";
export default {
    data (){
        return{
            megaMenuItems:[],
            menus: [
                {
                    path: '/',
                    name: "message.home",
                    icon: "mdi-home",
                    type: "sub_menu",
                    children: null
                },
                {
                    path:'/products',
                    name: "message.shop",
                    icon: "pages",
                    type: "sub_menu",
                },
                {
                    path: '',
                    name:"categories",
                    icon: 'party_mode',
                    type: 'mega_menu',
                    // children: {
                    //     'message.men': [
                    //         {
                    //             path: 'T-shirt',
                    //             children_menus:null,
                    //             name: 'message.tShirt'
                    //         },
                    //         {
                    //             path: 'Shirt',
                    //             children_menus:null,
                    //             name: 'message.shirt'
                    //         },
                    //         {
                    //             path: 'Jeans',
                    //             children_menus:null,
                    //             name: 'message.jean'
                    //         },
                    //         {
                    //             path: 'Jackets',
                    //             children_menus:null,
                    //             name: 'message.jackets'
                    //         },
                    //     ],
                    //     'message.women': [
                    //         {
                    //             path: 'Dresses',
                    //             children_menus:null,
                    //             name: 'message.dresses'
                    //         },
                    //         {
                    //             path: 'Jean',
                    //             children_menus:null,
                    //             name: 'message.jean'
                    //         },
                    //         {
                    //             path: 'Shirt',
                    //             children_menus:null,
                    //             name: 'message.shirt'
                    //         },
                    //         {
                    //             path: 'Jackets',
                    //             children_menus:null,
                    //             name: 'message.jackets'
                    //         },
                    //     ],
                    //     'message.gadgets': [
                    //         {
                    //             path: 'Headphone',
                    //             children_menus:null,
                    //             name: 'message.headphone'
                    //         },
                    //         {
                    //             path: 'Smartphone',
                    //             children_menus:null,
                    //             name: 'message.smartphone'
                    //         },
                    //         {
                    //             path: 'Watch',
                    //             children_menus:null,
                    //             name: 'message.watch'
                    //         },
                    //         {
                    //             path: 'Speaker',
                    //             children_menus:null,
                    //             name: 'message.speaker'
                    //         },
                    //     ],
                    //     'message.accessories': [
                    //         {
                    //             path: 'Laptop',
                    //             children_menus:null,
                    //             name: 'message.laptopAccessories'
                    //         },
                    //         {
                    //             path: 'Belts',
                    //             children_menus:null,
                    //             name: 'message.belts'
                    //         },
                    //         {
                    //             path: 'Jewellery',
                    //             children_menus:null,
                    //             name: 'message.jewellery'
                    //         },
                    //         {
                    //             path: 'Purse',
                    //             children_menus:null,
                    //             name: 'message.purse'
                    //         }
                    //     ]
                    // }
                },
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

        }
    },
    beforeMount() {
        this.getParentCategories();
    },
    created() {

    },
    methods:{
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
    }

   // computed:{
	// 	...mapGetters(["menus"]),
	// },
}
</script>

