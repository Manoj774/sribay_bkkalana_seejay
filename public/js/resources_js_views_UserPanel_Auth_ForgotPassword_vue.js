(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_UserPanel_Auth_ForgotPassword_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Auth/ForgotPassword.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Auth/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      valid: false,
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+/.test(v) || 'E-mail must be valid';
      }]
    };
  },
  methods: {
    saveDetails: function saveDetails() {
      this.$refs.form.validate();

      if (this.valid == true) {
        this.$router.go('/session/forgot-password');
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/views/UserPanel/Auth/ForgotPassword.vue":
/*!**************************************************************!*\
  !*** ./resources/js/views/UserPanel/Auth/ForgotPassword.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_2f53b000___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=2f53b000& */ "./resources/js/views/UserPanel/Auth/ForgotPassword.vue?vue&type=template&id=2f53b000&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./resources/js/views/UserPanel/Auth/ForgotPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ForgotPassword_vue_vue_type_template_id_2f53b000___WEBPACK_IMPORTED_MODULE_0__.render,
  _ForgotPassword_vue_vue_type_template_id_2f53b000___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UserPanel/Auth/ForgotPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/UserPanel/Auth/ForgotPassword.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/UserPanel/Auth/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Auth/ForgotPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/UserPanel/Auth/ForgotPassword.vue?vue&type=template&id=2f53b000&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/UserPanel/Auth/ForgotPassword.vue?vue&type=template&id=2f53b000& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_2f53b000___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_2f53b000___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_2f53b000___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=2f53b000& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Auth/ForgotPassword.vue?vue&type=template&id=2f53b000&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Auth/ForgotPassword.vue?vue&type=template&id=2f53b000&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Auth/ForgotPassword.vue?vue&type=template&id=2f53b000& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "emb-forgetpassword-wrap section-gap" }, [
    _c(
      "div",
      { staticClass: "container py-0" },
      [
        _c(
          "v-layout",
          {
            attrs: {
              row: "",
              wrap: "",
              "align-center": "",
              "justify-center": ""
            }
          },
          [
            _c(
              "v-flex",
              { attrs: { sm12: "", md12: "", lg8: "", xl8: "" } },
              [
                _c(
                  "v-layout",
                  {
                    attrs: {
                      "align-center": "",
                      "mx-sm-0": "",
                      "mx-3": "",
                      "justify-center": "",
                      row: "",
                      wrap: ""
                    }
                  },
                  [
                    _c(
                      "v-flex",
                      {
                        attrs: {
                          sm6: "",
                          md6: "",
                          lg6: "",
                          xl6: "",
                          "hidden-sm-and-down": ""
                        }
                      },
                      [
                        _c("div", {
                          staticClass: "forgot-password-image form-img"
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      {
                        staticClass:
                          "emb-card form-margin pa-4 d-inline-block white",
                        attrs: { sm10: "", md6: "", lg6: "", xl6: "" }
                      },
                      [
                        _c("h3", { staticClass: "accent--text" }, [
                          _vm._v("Forgot Password ?")
                        ]),
                        _vm._v(" "),
                        _c("h4", [_vm._v("No Problem")]),
                        _vm._v(" "),
                        _c(
                          "v-form",
                          {
                            ref: "form",
                            model: {
                              value: _vm.valid,
                              callback: function($$v) {
                                _vm.valid = $$v
                              },
                              expression: "valid"
                            }
                          },
                          [
                            _c("v-text-field", {
                              attrs: {
                                type: "email",
                                rules: _vm.emailRules,
                                placeholder: "Enter Your Email*"
                              }
                            }),
                            _vm._v(" "),
                            _c("v-text-field", {
                              staticClass: "mb-4",
                              attrs: {
                                type: "email",
                                rules: _vm.emailRules,
                                placeholder: "Retype Your Email*"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                staticClass: "accent mb-4 ma-0",
                                attrs: { large: "" },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    $event.preventDefault()
                                    return _vm.saveDetails.apply(
                                      null,
                                      arguments
                                    )
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t\t"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "p",
                              [
                                _vm._v("If have an account then "),
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "accent--text",
                                    attrs: { to: "/session/signin" }
                                  },
                                  [_vm._v("Sign In\n\t\t\t\t\t\t\t\t")]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);