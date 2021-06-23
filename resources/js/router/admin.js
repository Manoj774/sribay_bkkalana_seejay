import Admin from '../container/Adminpanel.vue';

//Admin account
const AdminAccount = () => import('../views/AdminPanel/AdminAccount/Account.vue');
const AccountSetting = () => import('../views/AdminPanel/AdminAccount/AccountSetting.vue');
const AdminProfile = () => import('../views/AdminPanel/AdminAccount/Profile.vue');
const AdminEditProfileInfo = () => import('../views/AdminPanel/AdminAccount/EditProfileInfo.vue');
const Collaboration = () => import('../views/AdminPanel/AdminAccount/Collaboration.vue');

//Category
const Category = () => import('../views/AdminPanel/Category/Categories.vue');

//Product
const AdminProducts = () => import('../views/AdminPanel/Product/Products.vue');
const AdminProductsAdd = () => import('../views/AdminPanel/Product/ProductsAdd.vue');
const ProductsEdit = () => import('../views/AdminPanel/Product/ProductsEdit.vue');
const PrivacyPolicy = () => import('../views/AdminPanel/Product/ProductsEdit.vue');

//Membership plan
const MembershipPlans = () => import('../views/AdminPanel/MembershipPlan/MembershipPlans');
const MembershipPlanAdd = () => import('../views/AdminPanel/MembershipPlan/CreateMembershipPlan');
const MembershipPlanEdit = () => import('../views/AdminPanel/MembershipPlan/EditMembershipPlan.vue');

//Members
const Members = () => import('../views/AdminPanel/Members/Members');

//Customers
const Customers = () => import('../views/AdminPanel/Customers/Customers.vue');

//Orders
const Orders = () => import('../views/AdminPanel/Orders/Orders.vue');

//Reports
const Reports = () => import('../views/AdminPanel/Reports/Reports.vue');

//Users
const Users = () => import('../views/AdminPanel/Users/Users.vue');
const AddUser = () => import('../views/AdminPanel/Users/AddUser.vue');

//Dashboard
const Dashboard = () => import('../views/AdminPanel/DashBoard/DashBoard.vue');


export default {
	path: '/sriBay-admin/',
	component: Admin,
	redirect:'sriBay-admin/dashboard',
	meta: {
        auth: true,
        admin:true,
	},
    beforeEnter: (to, from, next) => {
        let user = JSON.parse(sessionStorage.getItem('user'));
        if (user === null) {
            next('/login');
        }else{
            if (user.role == 1){
                next();
            }else{
                next('/login');
            }
        }
        next();
    },
	children:[
        {
            path: '/sriBay-admin/dashboard',
            component: Dashboard,
            name:'DashBoard'
        },
		{
			path: '/sriBay-admin/reports',
			component: Reports,
			name:'Reports'
		},
		{
			path: '/sriBay-admin/orders',
			component: Orders,
			name:'Orders'
		},
		{
			path: '/sriBay-admin/products',
			component: AdminProducts,
			name:'AdminProducts'
		},
		{
			path: '/sriBay-admin/product-add',
			component: AdminProductsAdd,
			name:'AdminProductsAdd'
		},
		{
			path: '/sriBay-admin/product-edit/:id',
			component: ProductsEdit,
			name:'ProductsEdit',
		},
		{
			path: '/sriBay-admin/category',
			component: Category,
			name:'Category',
		},
        {
            path: '/sriBay-admin/membership-plans',
            component: MembershipPlans,
            name:'MembershipPlans',
        },
        {
            path: '/sriBay-admin/members',
            component: Members,
            name:'Members',
        },
        {
            path: '/sriBay-admin/add-membership-plan',
            component: MembershipPlanAdd,
            name:'AddMembershipPlan',
        },
        {
            path: '/sriBay-admin/edit-membership-plan/:id',
            component: MembershipPlanEdit,
            name:'EditMembershipPlan',
        },
        {
            path: '/sriBay-admin/customers',
            component: Customers,
            name:'Customers',
        },
        {
            path: '/sriBay-admin/users',
            component: Users,
            name:'Users'
        },
        {
            path: '/sriBay-admin/users/add-user',
            component: AddUser,
            name:'AddUser'
        },
		{
			path: '/sriBay-admin/account/profile',
			component: AdminAccount,
			name:'Profile1',
			children: [
				{
					path: '/sriBay-admin/account/profile',name:'AdminProfile',component: AdminProfile,
				},
				{
					path: '/sriBay-admin/account/profile/:title',name:'AdminEditProfileInfo',component: AdminEditProfileInfo,
				},
         ],
		},

		{
			path: 'privacy-policy',
			component: PrivacyPolicy,
			name:'PrivacyPolicy1'
		}
	]

}


