import Vue from 'vue'
import Router from 'vue-router'


import adminRoutes from './admin';
import userRoutes from './user';

const NotFound = () => import('../views/NotFound.vue');

//Admin Login
const AdminLogin = () => import('../views/AdminPanel/Auth/Login.vue');

//User Login
const UserLogin = () => import('../views/UserPanel/Auth/SignIn');

Vue.use(Router)

export default new Router({
	mode: 'history',
    base: process.env.BASE_URL,
	routes: [
		adminRoutes,
        userRoutes,
		{
			path: '*',
			component: NotFound,
			name:'NotFound'
		},
		 {
		 	path: '/login',
		 	name: 'admin-login',
		 	component: AdminLogin,

		 },
        {
            path: '/signIn',
            name: 'signIn',
            component: UserLogin,

        },

	]
})

