/**
* VueShop Store
*/

import Vue from 'vue'
import Vuex from 'vuex'

// modules
import ecommerce from './modules/ecommerce';
import sidebar from './modules/sidebar';
import settings from './modules/settings';



Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        ecommerce,
        sidebar,
        settings
    }
})
