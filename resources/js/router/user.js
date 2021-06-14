import UserPanel from '../container/UserPanel';

const Home = () => import('../views/Home');
const Accessory = () => import('../views/Accesory');
const Gadget = () => import('../views/Gadget');
const Product = () => import('../views/Product');
const Payment = () => import('../views/Payment/Payment');
const Cart = () => import('../views/Cart');
const Checkout = () => import('../views/Checkout');
const FinalReceipt = () => import('../views/FinalReceipt');
const ProductDetail = () => import('../views/ProductDetail');
const AboutUs = () => import('../views/AboutUs');
const TermCondiition = () => import('../views/TermsAndCondition');
const Faq = () => import('../views/Faq');
const Account = () => import('../views/UserPanel/Account.vue');
const OrderHistory = () => import('../views/UserPanel/OrderHistory.vue');
const Profile = () => import('../views/UserPanel/Profile.vue');
const Address = () => import('../views/UserPanel/Address.vue');
const Cards = () => import ('../views/UserPanel/Cards.vue');
const AffiliateDashboard = () => import ('../views/UserPanel/AffiliateProgram');
const EditProfile = () => import ('../views/UserPanel/EditProfile.vue');
const EditAddress = () => import ('../views/UserPanel/EditAddress.vue');
const EditProfileInfo = () => import ('../views/UserPanel/EditProfileInfo.vue');
//const BlogDetail = () => import('../views/Blogs/BlogDetails');
const ContactUs = () => import('../views/Contact');
const PrivacyPolicy = () => import('../views/PrivacyPolicy');
const SubscriptionPlan = () => import('../views/SubscriptionPlan');
const Register = () => import('../views/UserPanel/Auth/Register');
const ForgotPassword = () => import('../views/UserPanel/Auth/ForgotPassword');
const ThankYou = () => import('../views/UserPanel/Auth/ThankYou');
const SignIn = () => import('../views/UserPanel/Auth/SignIn');


export default {
	path: '/',
	component: UserPanel,
	redirect:'/',
    meta:{
        guest:true
    },
	children:[
		{
			path: '/',
			component: Home ,
			meta: {
				header: 1
			 }
		},
		{
			path: '/products/accessories',
			component: Accessory
		},
		{
			path: '/gadget',
			component: Gadget
		},
		{
			path: '/products/:title',
			component: Product,
			name: 'Products'
		},
		{
			path: '/products',
			component: Product,
			name: 'Shop'
		},
		 {
		 	path: '/checkout/payment',
		 	component: Payment
		 },
		{
			path: '/cart',
			component: Cart,
		},
		{
			path: '/checkout',
			component: Checkout
		},
		{
			path: '/product-detail/:id',
			component: ProductDetail,
			name:'productDetail'
		},
        {
            path: '/product-detail/:id/:user',
            component: ProductDetail,
            name:'productDetail'
        },
		{
			path: '/checkout/final-receipt',
			component: FinalReceipt,
			name:'FinalReceipt'
		},
		{
			path: '/about',
			component: AboutUs,
			name:'about'
		},
        {
            path: '/subscription-plan',
            component: SubscriptionPlan,
            name:'SubscriptionPlan',
            // beforeEnter: (to, from, next) => {
            //     let user = JSON.parse(localStorage.getItem('user'));
            //      if (user === null) {
            //          next();
            //      }else{
            //          if (user.role == 3){
            //              next('/account/profile');
            //          }
            //      }
            //     next();
            // }
        },
		{
			path: '/term-condition',
			component: TermCondiition,
			name:'term-condition'
		},
		{
			path: '/faq',
			component: Faq,
			name:'Faq'
		},
		{
			path: '/account',
			component: Account,
			name:'Account',
            meta: {
			    auth:true,
                user:true,
            },
			children: [
                {
					path: '/account/order-history',
                    name:'OrderHistory',
                    component: OrderHistory,
				},
                {
                    path: '/account/affiliate-dashboard',name:'affiliate-dashboard',component: AffiliateDashboard,
                },
				{
					path: '/account/profile',name:'Profile',component: Profile,
				},
				{
					path: '/account/address',name:'Address',component: Address,
				},
				{
					path: '/account/cards',name:'Cards',component: Cards,
				},
				{
					path: '/account/profile/edit',name:'EditProfile',component: EditProfile
				},
				{
					path: '/account/profile/edit',name:'EditAddress',component: EditAddress
				},
				{
					path: '/account/profile/edit',name:'EditProfileInfo',component: EditProfileInfo,
				},
                {
                    path: '/logout',
                    beforeEnter: (to, from, next) => {
                        axios.post('api/logout').then(response => {
                            sessionStorage.removeItem('token')
                            sessionStorage.removeItem('role')
                            sessionStorage.removeItem('user')
                            sessionStorage.removeItem('admin-user')
                        }).catch(error => {

                        });
                    },
                },
        ]
		},
		// {
		// 	path: '/blog-detail/:id',
		// 	component: BlogDetail,
		// 	name:'BlogDetail;'
		// },
		{
			path: '/contact',
			component: ContactUs,
			name:'ContactUs'
		},

		{
			path: '/privacy-policy',
			component: PrivacyPolicy,
			name:'PrivacyPolicy'
		},
		{
			path: '/session/register',
			component: Register,
			name:'Register'
		},
		{
			path: '/session/forgot-password',
			component: ForgotPassword,
			name:'ForgotPassword'
		},
		{
			path: '/session/thank-you',
			component: ThankYou,
			name:'ThankYou'
		},
		{
			path: '/session/signin',
			component: SignIn,
			name:'SignIn'
		}
	]
}
