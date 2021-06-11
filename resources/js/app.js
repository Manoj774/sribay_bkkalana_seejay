/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

import 'babel-polyfill'
import Vue from 'vue'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps'
import Nprogress from 'nprogress'
import VueI18n from 'vue-i18n'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import InstantSearch from 'vue-instantsearch'
import VueMoment from 'vue-moment'
import App from './App.vue'
import { store } from './store/store'
import AppConfig from './constants/AppConfig'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import VueQuillEditor from 'vue-quill-editor'


import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme


//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// localisation messages
import messages from './lang'

// global components
import GlobalComponents from './globalComponents'

//router
import router from './router'

// all css files included
import './lib/EmbryoCss'


// Alliging Position for the toaster
const options = {
    toast: {
        position: SnotifyPosition.rightTop
    }
}

//plugins

Vue.use(VueRouter);
Vue.use(VueResource)
Vue.use(VueMoment)
Vue.use(InstantSearch)
Vue.use(VueToast)
Vue.use(VueQuillEditor)
Vue.use(VueI18n)
Vue.use(Snotify, options)


Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyDC6tKEbtRlB6B0HgrFEN9P6ztTSJ89xt8",
        libraries: "places"
    }
});
Vue.use(GlobalComponents)
// router navigation guards
router.beforeEach((to, from, next) => {
    Nprogress.start();
    next();
})

router.afterEach(() => {
    Nprogress.done();
    setTimeout(() => {
        const contentWrapper = document.querySelector("html");
        if (contentWrapper !== null) {
            contentWrapper.scrollTop = 0;
        }
    }, 200);
})

// creating a instance of vue localisation module
const i18n = new VueI18n({
    locale: store.getters.selectedLocale.locale,
    messages,
})


Vue.config.productionTip = false


function loggedIn(){
    return localStorage.getItem('token')
}


router.beforeEach((to, from, next) => {


    if (to.matched.some(record => record.meta.auth)) {
        if (to.matched.some(record => record.meta.admin)){
                 if (!loggedIn()) {
                     next({
                        path: '/login',
                        name: 'admin-login',
                        params: { nextUrl: to.fullPath }
                     })
                 } else {
                     next()
                 }
        }else if(to.matched.some(record => record.meta.user)){
            if (!loggedIn()) {
                next({
                    path: '/signIn',
                    name: 'signIn',
                    params: { nextUrl: to.fullPath }
                })
            } else {
                next()
            }
        } else if(to.matched.some(record => record.meta.guest)) {
             if (loggedIn()) {
                 next({
                     path: '/',
                     query: { redirect: to.fullPath }
                 })
             } else {
                 next()
             }
         }
    }else{
        next()
    }
})


// router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//         if (localStorage.getItem('bigStore.jwt') == null) {
//             next({
//                 path: '/login',
//                 params: { nextUrl: to.fullPath }
//             })
//         } else {
//             let user = JSON.parse(localStorage.getItem('bigStore.user'))
//             if (to.matched.some(record => record.meta.is_admin)) {
//                 if (user.is_admin == 1) {
//                     next()
//                 }
//                 else {
//                     //next({ name: 'userboard' })
//                 }
//             }
//             // else if (to.matched.some(record => record.meta.is_user)) {
//             // 	if (user.is_admin == 0) {
//             // 		next()
//             // 	}
//             // 	else {
//             // 		next({ name: 'admin' })
//             // 	}
//             // }
//             next()
//         }
//     } else {
//         next()
//     }
// })
Vue.prototype.$serverUrl = 'http://127.0.0.1:8000/'
const app = new Vue({
    el: '#app',
    store,
    router,
    i18n,
    vuetify,
    render: h => h(App)
});
