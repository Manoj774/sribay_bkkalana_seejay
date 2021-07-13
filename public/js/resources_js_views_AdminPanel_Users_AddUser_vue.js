(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_AdminPanel_Users_AddUser_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/AddUser.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/AddUser.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    var _this = this;

    return {
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        confirmPassword: "",
        is_admin: true
      },
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
      },
      passwordRules: [function (value) {
        return !!value || 'Please type password.';
      }, function (value) {
        return value && value.length >= 6 || 'minimum 6 characters';
      }],
      confirmPasswordRules: [function (value) {
        return !!value || 'type confirm password';
      }, function (value) {
        return value === _this.user.password || 'The password confirmation does not match.';
      }]
    };
  },
  methods: {
    saveDetails: function saveDetails() {
      var _this2 = this;

      this.$refs.form.validate();

      if (this.valid == true) {
        axios.post(this.$serverUrl + 'api/users/create', this.user, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('sriBay.jwt')
          }
        }).then(function (response) {
          _this2.$toast.open({
            message: response.data.message,
            type: 'success'
          });

          _this2.$router.go(_this2.$router.currentRoute);
        }, function (err) {
          var errors = err.response.data.message;
          var html = '';

          for (var i in errors) {
            html += errors[i];
          }

          _this2.$toast.open({
            message: html,
            type: 'error'
          });
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/views/AdminPanel/Users/AddUser.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/AdminPanel/Users/AddUser.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddUser_vue_vue_type_template_id_a936126c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddUser.vue?vue&type=template&id=a936126c& */ "./resources/js/views/AdminPanel/Users/AddUser.vue?vue&type=template&id=a936126c&");
/* harmony import */ var _AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUser.vue?vue&type=script&lang=js& */ "./resources/js/views/AdminPanel/Users/AddUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddUser_vue_vue_type_template_id_a936126c___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddUser_vue_vue_type_template_id_a936126c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AdminPanel/Users/AddUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/AdminPanel/Users/AddUser.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/Users/AddUser.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/AddUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/AdminPanel/Users/AddUser.vue?vue&type=template&id=a936126c&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/Users/AddUser.vue?vue&type=template&id=a936126c& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_template_id_a936126c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_template_id_a936126c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_template_id_a936126c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUser.vue?vue&type=template&id=a936126c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/AddUser.vue?vue&type=template&id=a936126c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/AddUser.vue?vue&type=template&id=a936126c&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/AddUser.vue?vue&type=template&id=a936126c& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
        { attrs: { cols: "12", sm: "12", md: "12", lg: "12" } },
        [
          _c("v-toolbar-title", { staticClass: "text-center" }, [
            _c("h3", [_vm._v("Add New Admin")])
          ]),
          _vm._v(" "),
          _c(
            "v-card",
            { staticClass: "mx-auto", attrs: { "max-width": "500" } },
            [
              _c("v-card-text", [_c("div", [_vm._v("Create Admin")])]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "12", md: "12", lg: "12" } },
                        [
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
                                  label: "First Name*",
                                  rules: _vm.inputRules.basictextRules
                                },
                                model: {
                                  value: _vm.user.first_name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "first_name", $$v)
                                  },
                                  expression: "user.first_name"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  type: "text",
                                  label: "Last Name*",
                                  rules: _vm.inputRules.basictextRules
                                },
                                model: {
                                  value: _vm.user.last_name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "last_name", $$v)
                                  },
                                  expression: "user.last_name"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  type: "email",
                                  label: "Email*",
                                  rules: _vm.emailRules
                                },
                                model: {
                                  value: _vm.user.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "email", $$v)
                                  },
                                  expression: "user.email"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  type: "password",
                                  label: "Enter Password*",
                                  rules: _vm.passwordRules
                                },
                                model: {
                                  value: _vm.user.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "password", $$v)
                                  },
                                  expression: "user.password"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                staticClass: "mb-4",
                                attrs: {
                                  type: "password",
                                  label: "Confirm Password*",
                                  rules: _vm.confirmPasswordRules
                                },
                                model: {
                                  value: _vm.user.confirmPassword,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "confirmPassword", $$v)
                                  },
                                  expression: "user.confirmPassword"
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
                                    "\n                        Create\n                    "
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