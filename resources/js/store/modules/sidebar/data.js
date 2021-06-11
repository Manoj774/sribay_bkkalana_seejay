export const menus = [
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
        name:"message.categories",
        icon: 'party_mode',
        type: 'mega_menu',
        children: {
            'message.men': [
                {
                    path: 'T-shirt',
                    children_menus:null,
                    name: 'message.tShirt'
                },
                {
                    path: 'Shirt',
                    children_menus:null,
                    name: 'message.shirt'
                },
                {
                    path: 'Jeans',
                    children_menus:null,
                    name: 'message.jean'
                },
                {
                    path: 'Jackets',
                    children_menus:null,
                    name: 'message.jackets'
                },
            ],
            'message.women': [
                {
                    path: 'Dresses',
                    children_menus:null,
                    name: 'message.dresses'
                },
                {
                    path: 'Jean',
                    children_menus:null,
                    name: 'message.jean'
                },
                {
                    path: 'Shirt',
                    children_menus:null,
                    name: 'message.shirt'
                },
                {
                    path: 'Jackets',
                    children_menus:null,
                    name: 'message.jackets'
                },
            ],
            'message.gadgets': [
                {
                    path: 'Headphone',
                    children_menus:null,
                    name: 'message.headphone'
                },
                {
                    path: 'Smartphone',
                    children_menus:null,
                    name: 'message.smartphone'
                },
                {
                    path: 'Watch',
                    children_menus:null,
                    name: 'message.watch'
                },
                {
                    path: 'Speaker',
                    children_menus:null,
                    name: 'message.speaker'
                },
            ],
            'message.accessories': [
                {
                    path: 'Laptop',
                    children_menus:null,
                    name: 'message.laptopAccessories'
                },
                {
                    path: 'Belts',
                    children_menus:null,
                    name: 'message.belts'
                },
                {
                    path: 'Jewellery',
                    children_menus:null,
                    name: 'message.jewellery'
                },
                {
                    path: 'Purse',
                    children_menus:null,
                    name: 'message.purse'
                }
            ]
        }
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
]

export const adminPanelMenus = [

   {
      path: '',
      name:"message.products",
      icon: 'mdi-cart',
		active: false,
      children: [
			{
				name: "products",
				path: "/sribay-admin/products"
			},
			{
				name: "productAdd",
				path: "/sribay-admin/product-add"
            },
            {
				name: "Category",
				path: "/sribay-admin/category"
            },
      ]
   },
    {
        path: '',
        name: 'Membership',
        icon: 'mdi-account-cash ',
        active: false,
        children: [
            {
                name: "Membership Plans",
                path: "/sribay-admin/membership-plans"
            },
            {
                name: "Members",
                path: "/sribay-admin/members"
            },
        ]
    },
    {
        path: '/sribay-admin/customers',
        name:"Customers",
        icon: 'mdi-account-group',
        active: false,
        children: null

    },
    {
        path: '/sribay-admin/orders',
        name: 'Orders',
        icon: 'mdi-truck',
        active: false,
        children: null

    },
    {
        path: '/sribay-admin/reports',
        name:"message.reports",
        icon: 'mdi-poll',
        children:null,
        active: true
    },
    {
        path: '/sribay-admin/users',
        name: 'Users',
        icon: 'mdi-account',
        active: false,
        children_menus:null,
    },
    {
      path: '/sribay-admin/account/profile',
      name:"message.profile",
      icon: 'mdi-account-circle ',
      active: false,
      children: null
    },
    {
      path: '/home',
      name:"message.goToSite",
      icon: 'mdi-home-import-outline ',
		active: false,
      children: null
    },
]
