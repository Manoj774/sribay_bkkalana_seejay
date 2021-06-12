(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_UserPanel_Account_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Account.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Account.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      settings: {
        orderHistory: [{
          title: "Order History",
          icon: "mdi-history ",
          path: "/account/order-history",
          id: "orderHistory"
        }],
        profile: [{
          title: "Profile",
          icon: "mdi-account-circle",
          path: "/account/profile",
          id: "profile"
        }],
        address: [{
          title: "Addresses",
          icon: "mdi-map-marker ",
          path: "/account/address",
          id: "addresses"
        }],
        cards: [{
          title: "Saved Cards",
          icon: "mdi-credit-card ",
          path: "/account/cards",
          id: "cards"
        }]
      },
      selectedTab: 0,
      user: {
        first_name: '',
        last_name: '',
        role: 2
      }
    };
  },
  mounted: function mounted() {
    if (JSON.parse(sessionStorage.getItem('user')) != null) {
      this.user = JSON.parse(sessionStorage.getItem('user'));
    } else if (JSON.parse(sessionStorage.getItem('admin-user')) != null) {
      this.user = JSON.parse(sessionStorage.getItem('admin-user'));
    }

    if (this.user != null) {
      if (this.user.role === 3 || this.user.role === 1) {
        this.settings = {
          affiliate: [{
            title: "Affiliate Program",
            icon: "mdi-align-horizontal-left",
            path: "/account/affiliate-dashboard",
            id: "affiliate-dashboard"
          }],
          orderHistory: [{
            title: "Order History",
            icon: "mdi-history ",
            path: "/account/order-history",
            id: "orderHistory"
          }],
          profile: [{
            title: "Profile",
            icon: "mdi-account-circle",
            path: "/account/profile",
            id: "profile"
          }],
          address: [{
            title: "Addresses",
            icon: "mdi-map-marker ",
            path: "/account/address",
            id: "addresses"
          }],
          cards: [{
            title: "Saved Cards",
            icon: "mdi-credit-card ",
            path: "/account/cards",
            id: "cards"
          }]
        };
      }
    }
  },
  methods: {
    onTabChange: function onTabChange(key) {
      this.selectedTab = key;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/UserPanel/Account.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/UserPanel/Account.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Account_vue_vue_type_template_id_7571ff30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Account.vue?vue&type=template&id=7571ff30& */ "./resources/js/views/UserPanel/Account.vue?vue&type=template&id=7571ff30&");
/* harmony import */ var _Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Account.vue?vue&type=script&lang=js& */ "./resources/js/views/UserPanel/Account.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Account_vue_vue_type_template_id_7571ff30___WEBPACK_IMPORTED_MODULE_0__.render,
  _Account_vue_vue_type_template_id_7571ff30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UserPanel/Account.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/UserPanel/Account.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/UserPanel/Account.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Account.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Account.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/UserPanel/Account.vue?vue&type=template&id=7571ff30&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/UserPanel/Account.vue?vue&type=template&id=7571ff30& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_7571ff30___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_7571ff30___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Account_vue_vue_type_template_id_7571ff30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Account.vue?vue&type=template&id=7571ff30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Account.vue?vue&type=template&id=7571ff30&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Account.vue?vue&type=template&id=7571ff30&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Account.vue?vue&type=template&id=7571ff30& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "account-wrap" }, [
    _c("div", { staticClass: "inner-container" }, [
      _c("div", { staticClass: "bg-white final-receipt-page section-gap" }, [
        _c("div", { staticClass: "account-info" }, [
          _c(
            "div",
            { staticClass: "container grid-list-xl" },
            [
              _c(
                "div",
                { staticClass: "layout justify-start mt-0 mb-4 mx-0" },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "px-4" }, [
                    _c("h4", [
                      _vm._v(
                        "Hi, " +
                          _vm._s(_vm.user.first_name + " " + _vm.user.last_name)
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-muted text-xl" }, [
                      _vm._v(_vm._s(_vm.user.email))
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "v-layout",
                {
                  attrs: {
                    row: "",
                    wrap: "",
                    "fill-height": "",
                    "profile-list": ""
                  }
                },
                [
                  _c(
                    "v-flex",
                    {
                      attrs: {
                        xs12: "",
                        sm12: "",
                        md4: "",
                        lg3: "",
                        xl2: "",
                        "user-nav-list": "",
                        "px-0": ""
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "emb-card account-block fill-height py-4"
                        },
                        [
                          _vm._l(_vm.settings, function(option, key, index) {
                            return _vm._l(_vm.settings[key], function(
                              cateogary
                            ) {
                              return _c(
                                "v-list",
                                {
                                  key: cateogary.name,
                                  staticClass: "py-0 text-center"
                                },
                                [
                                  _c(
                                    "v-list-item",
                                    {
                                      attrs: { to: cateogary.path },
                                      on: {
                                        click: function($event) {
                                          return _vm.onTabChange(index)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-list-item-action",
                                        { staticClass: "ma-0" },
                                        [
                                          _c("v-icon", [
                                            _vm._v(_vm._s(cateogary.icon))
                                          ])
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-list-item-content",
                                        { staticClass: "py-0 text-left" },
                                        [
                                          _c("v-list-item-title", [
                                            _c("span", [
                                              _vm._v(_vm._s(cateogary.title))
                                            ])
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            })
                          })
                        ],
                        2
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-flex",
                    {
                      attrs: {
                        xs12: "",
                        sm12: "",
                        md8: "",
                        lg9: "",
                        xl9: "",
                        "user-content-wrapper": ""
                      }
                    },
                    _vm._l(_vm.settings, function(option, key, index) {
                      return _c(
                        "div",
                        { key: key },
                        [
                          index == _vm.selectedTab
                            ? _c("router-view")
                            : _vm._e()
                        ],
                        1
                      )
                    }),
                    0
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "login-user-img" }, [
      _c("img", {
        attrs: {
          src: "/static/images/user-3.jpg",
          width: "70",
          alt: "Active User"
        }
      })
    ])
  }
]
render._withStripped = true



/***/ })

}]);