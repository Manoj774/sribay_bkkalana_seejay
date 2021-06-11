(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Sessions_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sessions/Register.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sessions/Register.vue?vue&type=script&lang=js& ***!
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
      }],
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
        this.$router.go('/session/signup');
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Sessions/Register.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Sessions/Register.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_63f1aa66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=63f1aa66& */ "./resources/js/views/Sessions/Register.vue?vue&type=template&id=63f1aa66&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/Sessions/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Register_vue_vue_type_template_id_63f1aa66___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_63f1aa66___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Sessions/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Sessions/Register.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Sessions/Register.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sessions/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Sessions/Register.vue?vue&type=template&id=63f1aa66&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/Sessions/Register.vue?vue&type=template&id=63f1aa66& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_63f1aa66___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_63f1aa66___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_63f1aa66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=63f1aa66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sessions/Register.vue?vue&type=template&id=63f1aa66&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sessions/Register.vue?vue&type=template&id=63f1aa66&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Sessions/Register.vue?vue&type=template&id=63f1aa66& ***!
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
  return _c("div", { staticClass: "emb-register-wrap section-gap" }, [
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
              { attrs: { sm12: "", md12: "", lg8: "", xl7: "" } },
              [
                _c(
                  "v-layout",
                  {
                    attrs: {
                      row: "",
                      "mx-sm-0": "",
                      "mx-3": "",
                      wrap: "",
                      "align-center": "",
                      "justify-center": ""
                    }
                  },
                  [
                    _c(
                      "v-flex",
                      {
                        attrs: {
                          sm6: "",
                          md7: "",
                          lg6: "",
                          xl6: "",
                          "hidden-sm-and-down": ""
                        }
                      },
                      [_c("div", { staticClass: "form-img register-image" })]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-flex",
                      { attrs: { sm10: "", md5: "", lg6: "", xl6: "" } },
                      [
                        _c(
                          "div",
                          {
                            staticClass:
                              "emb-card sign-in-form form-margin d-block white pa-6"
                          },
                          [
                            _c("h4", [_vm._v("Enter Your Details")]),
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
                                    type: "text",
                                    placeholder: "First Name*",
                                    rules: _vm.inputRules.basictextRules
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-text-field", {
                                  attrs: {
                                    type: "text",
                                    placeholder: "Last Name*",
                                    rules: _vm.inputRules.basictextRules
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-text-field", {
                                  attrs: {
                                    type: "email",
                                    placeholder: "Email*",
                                    rules: _vm.emailRules
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-text-field", {
                                  attrs: {
                                    type: "password",
                                    placeholder: "Enter Password*",
                                    rules: _vm.inputRules.basictextRules
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-text-field", {
                                  staticClass: "mb-4",
                                  attrs: {
                                    type: "password",
                                    placeholder: "Retype Passowrd*",
                                    rules: _vm.inputRules.basictextRules
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "accent mx-0 mb-4",
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
                                      "\n\t\t\t\t\t\t\t\t\t\tSign Up\n\t\t\t\t\t\t\t\t\t"
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "p",
                                  [
                                    _vm._v("Already have account? then"),
                                    _c(
                                      "router-link",
                                      {
                                        staticClass: "accent--text",
                                        attrs: { to: "/session/signin" }
                                      },
                                      [_vm._v(" Sign In")]
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
                      ]
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