(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_UserPanel_Auth_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Auth/Register.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Auth/Register.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      register: {
        first_name: null,
        last_name: null,
        phone_number: null,
        email: null,
        password: null,
        confirm_password: null
      },
      register_valid: false,
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
    registerUser: function registerUser() {
      var _this = this;

      this.$refs.register_form.validate();

      if (this.register_valid === true) {
        axios.post('/api/register', this.register).then(function (response) {
          sessionStorage.setItem('token', response.data.token);
          sessionStorage.setItem('role', response.data.role);
          sessionStorage.setItem('user', JSON.stringify(response.data.user));

          _this.$router.push('/');
        })["catch"](function (error) {
          _this.$toast.open({
            message: error.message,
            type: 'error'
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/views/UserPanel/Auth/Register.vue":
/*!********************************************************!*\
  !*** ./resources/js/views/UserPanel/Auth/Register.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Register_vue_vue_type_template_id_ae07a676___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=ae07a676& */ "./resources/js/views/UserPanel/Auth/Register.vue?vue&type=template&id=ae07a676&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/views/UserPanel/Auth/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Register_vue_vue_type_template_id_ae07a676___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_ae07a676___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UserPanel/Auth/Register.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/UserPanel/Auth/Register.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/UserPanel/Auth/Register.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Auth/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/UserPanel/Auth/Register.vue?vue&type=template&id=ae07a676&":
/*!***************************************************************************************!*\
  !*** ./resources/js/views/UserPanel/Auth/Register.vue?vue&type=template&id=ae07a676& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_ae07a676___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_ae07a676___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_ae07a676___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=ae07a676& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Auth/Register.vue?vue&type=template&id=ae07a676&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Auth/Register.vue?vue&type=template&id=ae07a676&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Auth/Register.vue?vue&type=template&id=ae07a676& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
                                ref: "register_form",
                                model: {
                                  value: _vm.register_valid,
                                  callback: function($$v) {
                                    _vm.register_valid = $$v
                                  },
                                  expression: "register_valid"
                                }
                              },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    type: "text",
                                    placeholder: "First Name*",
                                    rules: _vm.inputRules.basictextRules
                                  },
                                  model: {
                                    value: _vm.register.first_name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.register, "first_name", $$v)
                                    },
                                    expression: "register.first_name"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-text-field", {
                                  attrs: {
                                    type: "text",
                                    placeholder: "Last Name*",
                                    rules: _vm.inputRules.basictextRules
                                  },
                                  model: {
                                    value: _vm.register.last_name,
                                    callback: function($$v) {
                                      _vm.$set(_vm.register, "last_name", $$v)
                                    },
                                    expression: "register.last_name"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-text-field", {
                                  attrs: {
                                    type: "number",
                                    max: "10",
                                    placeholder: "Mobile Number*",
                                    rules: _vm.inputRules.basictextRules
                                  },
                                  model: {
                                    value: _vm.register.phone_number,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.register,
                                        "phone_number",
                                        $$v
                                      )
                                    },
                                    expression: "register.phone_number"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-text-field", {
                                  attrs: {
                                    type: "email",
                                    placeholder: "Email*",
                                    rules: _vm.emailRules
                                  },
                                  model: {
                                    value: _vm.register.email,
                                    callback: function($$v) {
                                      _vm.$set(_vm.register, "email", $$v)
                                    },
                                    expression: "register.email"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-text-field", {
                                  attrs: {
                                    type: "password",
                                    placeholder: "Enter Password*",
                                    rules: _vm.inputRules.basictextRules
                                  },
                                  model: {
                                    value: _vm.register.password,
                                    callback: function($$v) {
                                      _vm.$set(_vm.register, "password", $$v)
                                    },
                                    expression: "register.password"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-text-field", {
                                  staticClass: "mb-4",
                                  attrs: {
                                    type: "password",
                                    placeholder: "Retype Passowrd*",
                                    rules: _vm.inputRules.basictextRules
                                  },
                                  model: {
                                    value: _vm.register.confirm_password,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.register,
                                        "confirm_password",
                                        $$v
                                      )
                                    },
                                    expression: "register.confirm_password"
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
                                        return _vm.registerUser.apply(
                                          null,
                                          arguments
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                        Sign Up\n                                    "
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