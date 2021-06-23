(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_AdminPanel_DashBoard_DashBoard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/DashBoard/DashBoard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/DashBoard/DashBoard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  name: "DashBoard",
  data: function data() {
    return {
      dashBoardData: {
        totalOrderIncome: 0,
        totalOrders: 0,
        totalMembershipIncome: 0,
        currentMonthOrderIncome: 0,
        currentMonthOrders: 0,
        currentMonthMembershipIncome: 0,
        totalMembers: 0,
        totalCustomers: 0,
        totalUniqueVisitors: 0
      }
    };
  },
  created: function created() {
    this.getDashBoardData();
  },
  methods: {
    getDashBoardData: function getDashBoardData() {
      var _this = this;

      axios.get('/api/dash-board').then(function (response) {
        _this.dashBoardData = response.data.dashboardData;
      }, function (error) {
        var errors = error.response.data.message;
        var html = '';

        for (var i in errors) {
          html += errors[i];
        }

        _this.$toast.open({
          message: html,
          type: 'error'
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/AdminPanel/DashBoard/DashBoard.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/AdminPanel/DashBoard/DashBoard.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashBoard_vue_vue_type_template_id_38e9c6c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashBoard.vue?vue&type=template&id=38e9c6c4&scoped=true& */ "./resources/js/views/AdminPanel/DashBoard/DashBoard.vue?vue&type=template&id=38e9c6c4&scoped=true&");
/* harmony import */ var _DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashBoard.vue?vue&type=script&lang=js& */ "./resources/js/views/AdminPanel/DashBoard/DashBoard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DashBoard_vue_vue_type_template_id_38e9c6c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DashBoard_vue_vue_type_template_id_38e9c6c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "38e9c6c4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AdminPanel/DashBoard/DashBoard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/AdminPanel/DashBoard/DashBoard.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/DashBoard/DashBoard.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashBoard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/DashBoard/DashBoard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/AdminPanel/DashBoard/DashBoard.vue?vue&type=template&id=38e9c6c4&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/DashBoard/DashBoard.vue?vue&type=template&id=38e9c6c4&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_template_id_38e9c6c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_template_id_38e9c6c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashBoard_vue_vue_type_template_id_38e9c6c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashBoard.vue?vue&type=template&id=38e9c6c4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/DashBoard/DashBoard.vue?vue&type=template&id=38e9c6c4&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/DashBoard/DashBoard.vue?vue&type=template&id=38e9c6c4&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/DashBoard/DashBoard.vue?vue&type=template&id=38e9c6c4&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "v-row",
    { staticClass: "justify-content-center" },
    [
      _c(
        "v-col",
        { attrs: { cols: "12", sm: "12", md: "4", lg: "4" } },
        [
          _c(
            "v-card",
            {
              staticClass: "text-xs-center",
              attrs: {
                height: "100%",
                dark: "",
                tile: "",
                flat: "",
                color: "red lighten-1",
                hover: ""
              }
            },
            [
              _c("v-card-title", [
                _c(
                  "h6",
                  {
                    staticStyle: {
                      color: "white",
                      "text-transform": "uppercase"
                    }
                  },
                  [_vm._v("Total Orders Income")]
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _c("div", { staticClass: "text-center" }, [
                  _c("h3", { staticStyle: { color: "white" } }, [
                    _vm._v(
                      _vm._s(_vm.dashBoardData.totalOrderIncome.toFixed(2))
                    )
                  ])
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "12", sm: "12", md: "4", lg: "4" } },
        [
          _c(
            "v-card",
            {
              staticClass: "text-xs-center",
              attrs: {
                height: "100%",
                dark: "",
                tile: "",
                flat: "",
                color: "indigo darken-1",
                hover: ""
              }
            },
            [
              _c("v-card-title", { staticStyle: { "font-size": "14px" } }, [
                _c(
                  "h6",
                  {
                    staticStyle: {
                      color: "white",
                      "text-transform": "uppercase"
                    }
                  },
                  [_vm._v("Total Orders")]
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _c("div", { staticClass: "text-center" }, [
                  _c("h3", { staticStyle: { color: "white" } }, [
                    _vm._v(_vm._s(_vm.dashBoardData.totalOrders))
                  ])
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "12", sm: "12", md: "4", lg: "4" } },
        [
          _c(
            "v-card",
            {
              staticClass: "text-xs-center",
              attrs: {
                height: "100%",
                dark: "",
                tile: "",
                flat: "",
                color: "purple lighten-1",
                hover: ""
              }
            },
            [
              _c("v-card-title", [
                _c(
                  "h6",
                  {
                    staticStyle: {
                      color: "white",
                      "text-transform": "uppercase"
                    }
                  },
                  [_vm._v("Total Membership Income")]
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _c("div", { staticClass: "text-center" }, [
                  _c("h3", { staticStyle: { color: "white" } }, [
                    _vm._v(
                      _vm._s(_vm.dashBoardData.totalMembershipIncome.toFixed(2))
                    )
                  ])
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "12", sm: "12", md: "4", lg: "4" } },
        [
          _c(
            "v-card",
            {
              staticClass: "text-xs-center",
              attrs: {
                height: "100%",
                dark: "",
                tile: "",
                flat: "",
                color: "cyan darken-3",
                hover: ""
              }
            },
            [
              _c("v-card-title", { staticStyle: { "font-size": "13px" } }, [
                _c(
                  "h6",
                  {
                    staticStyle: {
                      color: "white",
                      "text-transform": "uppercase"
                    }
                  },
                  [_vm._v("Current Month Orders Income")]
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _c("div", { staticClass: "text-center" }, [
                  _c("h3", { staticStyle: { color: "white" } }, [
                    _vm._v(
                      _vm._s(
                        _vm.dashBoardData.currentMonthOrderIncome.toFixed(2)
                      )
                    )
                  ])
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "12", sm: "12", md: "4", lg: "4" } },
        [
          _c(
            "v-card",
            {
              staticClass: "text-xs-center",
              attrs: {
                height: "100%",
                dark: "",
                tile: "",
                flat: "",
                color: "green",
                hover: ""
              }
            },
            [
              _c("v-card-title", { staticStyle: { "font-size": "13px" } }, [
                _c(
                  "h6",
                  {
                    staticStyle: {
                      color: "white",
                      "text-transform": "uppercase"
                    }
                  },
                  [_vm._v("Current Month Orders")]
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _c("div", { staticClass: "text-center" }, [
                  _c("h3", { staticStyle: { color: "white" } }, [
                    _vm._v(_vm._s(_vm.dashBoardData.currentMonthOrders))
                  ])
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "12", sm: "12", md: "4", lg: "4" } },
        [
          _c(
            "v-card",
            {
              staticClass: "text-xs-center",
              attrs: {
                height: "100%",
                dark: "",
                tile: "",
                flat: "",
                color: "yellow darken-4",
                hover: ""
              }
            },
            [
              _c("v-card-title", { staticStyle: { "font-size": "13px" } }, [
                _c(
                  "h6",
                  {
                    staticStyle: {
                      color: "white",
                      "text-transform": "uppercase"
                    }
                  },
                  [
                    _vm._v("Current Month Membership "),
                    _c("br"),
                    _vm._v(" Income")
                  ]
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _c("div", { staticClass: "text-center" }, [
                  _c("h3", { staticStyle: { color: "white" } }, [
                    _vm._v(
                      _vm._s(
                        _vm.dashBoardData.currentMonthMembershipIncome.toFixed(
                          2
                        )
                      )
                    )
                  ])
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "12", sm: "12", md: "4", lg: "4" } },
        [
          _c(
            "v-card",
            {
              staticClass: "text-xs-center",
              attrs: {
                height: "100%",
                dark: "",
                tile: "",
                flat: "",
                color: "deep-orange darken-4",
                hover: ""
              }
            },
            [
              _c("v-card-title", { staticStyle: { "font-size": "13px" } }, [
                _c(
                  "h6",
                  {
                    staticStyle: {
                      color: "white",
                      "text-transform": "uppercase"
                    }
                  },
                  [_vm._v("Total Members")]
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _c("div", { staticClass: "text-center" }, [
                  _c("h3", { staticStyle: { color: "white" } }, [
                    _vm._v(_vm._s(_vm.dashBoardData.totalMembers))
                  ])
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "12", sm: "12", md: "4", lg: "4" } },
        [
          _c(
            "v-card",
            {
              staticClass: "text-xs-center",
              attrs: {
                height: "100%",
                dark: "",
                tile: "",
                flat: "",
                color: "cyan accent-4",
                hover: ""
              }
            },
            [
              _c("v-card-title", { staticStyle: { "font-size": "13px" } }, [
                _c(
                  "h6",
                  {
                    staticStyle: {
                      color: "white",
                      "text-transform": "uppercase"
                    }
                  },
                  [_vm._v("Total Customers")]
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _c("div", { staticClass: "text-center" }, [
                  _c("h3", { staticStyle: { color: "white" } }, [
                    _vm._v(_vm._s(_vm.dashBoardData.totalCustomers))
                  ])
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "12", sm: "12", md: "4", lg: "4" } },
        [
          _c(
            "v-card",
            {
              staticClass: "text-xs-center",
              attrs: {
                height: "100%",
                dark: "",
                tile: "",
                flat: "",
                color: "brown darken-4",
                hover: ""
              }
            },
            [
              _c("v-card-title", { staticStyle: { "font-size": "13px" } }, [
                _c(
                  "h6",
                  {
                    staticStyle: {
                      color: "white",
                      "text-transform": "uppercase"
                    }
                  },
                  [
                    _vm._v("Total Unique Visitors"),
                    _c("br"),
                    _c("small", [_vm._v("(Member link click)")])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c("v-card-text", [
                _c("div", { staticClass: "text-center" }, [
                  _c("h3", { staticStyle: { color: "white" } }, [
                    _vm._v(_vm._s(_vm.dashBoardData.totalUniqueVisitors))
                  ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);