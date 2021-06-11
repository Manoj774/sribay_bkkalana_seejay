(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_UserPanel_Address_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Address.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Address.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      valid: false,
      inputRules: {
        basictextRules: [function (v) {
          return !!v || 'This field should not be empty';
        }]
      }
    };
  },
  methods: {
    saveDetails: function saveDetails() {
      this.$refs.form.validate();

      if (this.valid == true) {
        this.$store.dispatch("addUserDetails", this.userInfo);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/views/UserPanel/Address.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/UserPanel/Address.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Address_vue_vue_type_template_id_3f8ed6af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Address.vue?vue&type=template&id=3f8ed6af& */ "./resources/js/views/UserPanel/Address.vue?vue&type=template&id=3f8ed6af&");
/* harmony import */ var _Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Address.vue?vue&type=script&lang=js& */ "./resources/js/views/UserPanel/Address.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Address_vue_vue_type_template_id_3f8ed6af___WEBPACK_IMPORTED_MODULE_0__.render,
  _Address_vue_vue_type_template_id_3f8ed6af___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UserPanel/Address.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/UserPanel/Address.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/UserPanel/Address.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Address.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Address.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/UserPanel/Address.vue?vue&type=template&id=3f8ed6af&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/UserPanel/Address.vue?vue&type=template&id=3f8ed6af& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_3f8ed6af___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_3f8ed6af___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Address_vue_vue_type_template_id_3f8ed6af___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Address.vue?vue&type=template&id=3f8ed6af& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Address.vue?vue&type=template&id=3f8ed6af&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Address.vue?vue&type=template&id=3f8ed6af&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Address.vue?vue&type=template&id=3f8ed6af& ***!
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
  return _c(
    "div",
    { staticClass: "address-block-wrap emb-card pa-4" },
    [
      _c("h4", { staticClass: "mb-6" }, [_vm._v("Address Infomation")]),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "", sm5: "", md5: "", lg5: "", xl5: "" } },
            [
              _c("h5", [_vm._v("Billing Address")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pt-4" },
                [
                  _c("address", { staticClass: "mb-6" }, [
                    _vm._v("\n                  2735  Sherman Street"),
                    _c("br"),
                    _vm._v("\n                  Hodour Sheridan Plaza"),
                    _c("br"),
                    _vm._v("\n                  New Jersey"),
                    _c("br"),
                    _vm._v("\n                  Zip - 6739HG1"),
                    _c("br"),
                    _vm._v("\n                  USA"),
                    _c("br")
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "EditAddress", query: { type: "address" } }
                      }
                    },
                    [
                      _c("v-btn", { staticClass: "accent mx-0" }, [
                        _vm._v("Edit")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "", sm5: "", md5: "", lg5: "", xl5: "" } },
            [
              _c("h5", [_vm._v("Shipping Address")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "pt-4" },
                [
                  _c("address", { staticClass: "mb-6" }, [
                    _vm._v("\n                  2735  Sherman Street"),
                    _c("br"),
                    _vm._v("\n                  Hodour Sheridan Plaza"),
                    _c("br"),
                    _vm._v("\n                  New Jersey"),
                    _c("br"),
                    _vm._v("\n                  Zip - 6739HG1"),
                    _c("br"),
                    _vm._v("\n                  USA"),
                    _c("br")
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: {
                          name: "EditAddress",
                          query: { type: "ship-address" }
                        }
                      }
                    },
                    [
                      _c("v-btn", { staticClass: "accent mx-0" }, [
                        _vm._v("Edit")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ]
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