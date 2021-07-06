(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_UserPanel_EditAddress_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/EditAddress.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/EditAddress.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      valid: false,
      inputRules: {
        basictextRules: [function (v) {
          return !!v || 'This field should not be empty';
        }],
        emailRules: [function (v) {
          return !!v || 'E-mail is required';
        }, function (v) {
          return /.+@.+/.test(v) || 'E-mail must be valid';
        }],
        phoneNumber: [function (v) {
          return !!v || 'Phone Number is required';
        }, function (v) {
          return v.length <= 10 || 'Name must be less than 10 characters';
        }]
      },
      profileData: {
        first_name: '',
        last_name: '',
        address: '',
        email: '',
        phone_number: '',
        city: '',
        state: '',
        zip_code: ''
      }
    };
  },
  created: function created() {
    this.getAddressData();
  },
  methods: {
    getAddressData: function getAddressData() {
      var _this = this;

      if (this.$route.query.type === 'address') {
        axios.get('/api/user/profile').then(function (response) {
          _this.profileData = response.data;
        }, function (response) {
          var errors = response.body.message;
          var html = '';

          for (var i in errors) {
            html += errors[i];
          }

          _this.$toast.open({
            message: html,
            type: 'error'
          });
        });
      } else {
        axios.get('/api/users/shipping-address').then(function (response) {
          if (response.data.shipping_address != null) {
            _this.profileData = response.data.shipping_address;
          }
        }, function (response) {
          var errors = response.body.message;
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
    },
    saveDetails: function saveDetails() {
      var _this2 = this;

      this.$refs.form.validate();

      if (this.valid == true) {
        if (this.$route.query.type === 'address') {
          axios.put('/api/users/' + this.profileData.id, this.profileData).then(function (response) {
            _this2.$snotify.success("Billing address update successful", {
              closeOnClick: false,
              pauseOnHover: false,
              timeout: 1000,
              showProgressBar: false
            });

            setTimeout(function () {
              _this2.$router.push({
                path: '/account/address'
              });
            }, 50);
          }, function (error) {
            var errors = error.response.data.message;
            var html = '';

            for (var i in errors) {
              html += errors[i];
            }

            _this2.$toast.open({
              message: html,
              type: 'error'
            });
          });
        } else {
          axios.post('/api/users/create-shipping-address', this.profileData).then(function (response) {
            _this2.$snotify.success("Shipping address update successful", {
              closeOnClick: false,
              pauseOnHover: false,
              timeout: 1000,
              showProgressBar: false
            });

            setTimeout(function () {
              _this2.$router.push({
                path: '/account/address'
              });
            }, 50);
          }, function (error) {
            var errors = error.response.data.message;
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
  }
});

/***/ }),

/***/ "./resources/js/views/UserPanel/EditAddress.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/UserPanel/EditAddress.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditAddress_vue_vue_type_template_id_4a960676___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditAddress.vue?vue&type=template&id=4a960676& */ "./resources/js/views/UserPanel/EditAddress.vue?vue&type=template&id=4a960676&");
/* harmony import */ var _EditAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditAddress.vue?vue&type=script&lang=js& */ "./resources/js/views/UserPanel/EditAddress.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EditAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EditAddress_vue_vue_type_template_id_4a960676___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditAddress_vue_vue_type_template_id_4a960676___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UserPanel/EditAddress.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/UserPanel/EditAddress.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/UserPanel/EditAddress.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditAddress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/EditAddress.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAddress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/UserPanel/EditAddress.vue?vue&type=template&id=4a960676&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/UserPanel/EditAddress.vue?vue&type=template&id=4a960676& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAddress_vue_vue_type_template_id_4a960676___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAddress_vue_vue_type_template_id_4a960676___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditAddress_vue_vue_type_template_id_4a960676___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditAddress.vue?vue&type=template&id=4a960676& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/EditAddress.vue?vue&type=template&id=4a960676&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/EditAddress.vue?vue&type=template&id=4a960676&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/EditAddress.vue?vue&type=template&id=4a960676& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _vm.$route.query.type == "address" ||
    _vm.$route.query.type == "ship-address"
    ? _c("div", [
        _c(
          "div",
          { staticClass: "edit-address-wrap emb-card pa-4" },
          [
            _vm.$route.query.type == "ship-address"
              ? _c("h4", [_vm._v("Edit shipping Information")])
              : _c("h4", [_vm._v("Edit Billing Information")]),
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
                _c(
                  "v-layout",
                  { attrs: { row: "", wrap: "" } },
                  [
                    _c(
                      "v-flex",
                      {
                        attrs: {
                          xs12: "",
                          sm12: "",
                          md12: "",
                          lg6: "",
                          xl6: ""
                        }
                      },
                      [
                        _c(
                          "v-layout",
                          { attrs: { row: "", wrap: "" } },
                          [
                            _vm.$route.query.type == "ship-address"
                              ? _c(
                                  "v-flex",
                                  {
                                    attrs: {
                                      xs12: "",
                                      sm12: "",
                                      md12: "",
                                      lg12: "",
                                      xl12: "",
                                      "py-2": ""
                                    }
                                  },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "First Name",
                                        rules: _vm.inputRules.basictextRules
                                      },
                                      model: {
                                        value: _vm.profileData.first_name,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.profileData,
                                            "first_name",
                                            $$v
                                          )
                                        },
                                        expression: "profileData.first_name"
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.$route.query.type == "ship-address"
                              ? _c(
                                  "v-flex",
                                  {
                                    attrs: {
                                      xs12: "",
                                      sm12: "",
                                      md12: "",
                                      lg12: "",
                                      xl12: "",
                                      "py-2": ""
                                    }
                                  },
                                  [
                                    _c("v-text-field", {
                                      attrs: {
                                        label: "Last Name",
                                        rules: _vm.inputRules.basictextRules
                                      },
                                      model: {
                                        value: _vm.profileData.last_name,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.profileData,
                                            "last_name",
                                            $$v
                                          )
                                        },
                                        expression: "profileData.last_name"
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm12: "",
                                  md12: "",
                                  lg12: "",
                                  xl12: "",
                                  "py-2": ""
                                }
                              },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    label: "Address",
                                    rules: _vm.inputRules.basictextRules
                                  },
                                  model: {
                                    value: _vm.profileData.address,
                                    callback: function($$v) {
                                      _vm.$set(_vm.profileData, "address", $$v)
                                    },
                                    expression: "profileData.address"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm12: "",
                                  md12: "",
                                  lg12: "",
                                  xl12: "",
                                  "py-2": ""
                                }
                              },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    label: "City",
                                    rules: _vm.inputRules.basictextRules
                                  },
                                  model: {
                                    value: _vm.profileData.city,
                                    callback: function($$v) {
                                      _vm.$set(_vm.profileData, "city", $$v)
                                    },
                                    expression: "profileData.city"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm12: "",
                                  md12: "",
                                  lg12: "",
                                  xl12: "",
                                  "py-2": ""
                                }
                              },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    label: "State",
                                    rules: _vm.inputRules.basictextRules
                                  },
                                  model: {
                                    value: _vm.profileData.state,
                                    callback: function($$v) {
                                      _vm.$set(_vm.profileData, "state", $$v)
                                    },
                                    expression: "profileData.state"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm12: "",
                                  md12: "",
                                  lg12: "",
                                  xl12: "",
                                  "py-2": ""
                                }
                              },
                              [
                                _c("v-text-field", {
                                  attrs: {
                                    label: "Zip Code",
                                    rules: _vm.inputRules.basictextRules
                                  },
                                  model: {
                                    value: _vm.profileData.zip_code,
                                    callback: function($$v) {
                                      _vm.$set(_vm.profileData, "zip_code", $$v)
                                    },
                                    expression: "profileData.zip_code"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm12: "",
                                  md12: "",
                                  lg12: "",
                                  xl12: "",
                                  "py-2": ""
                                }
                              },
                              [
                                _vm.$route.query.type == "ship-address"
                                  ? _c("v-text-field", {
                                      attrs: {
                                        type: "email",
                                        label: "Email",
                                        rules: _vm.inputRules.emailRules
                                      },
                                      model: {
                                        value: _vm.profileData.email,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.profileData,
                                            "email",
                                            $$v
                                          )
                                        },
                                        expression: "profileData.email"
                                      }
                                    })
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm12: "",
                                  md12: "",
                                  lg12: "",
                                  xl12: "",
                                  "py-2": ""
                                }
                              },
                              [
                                _vm.$route.query.type == "ship-address"
                                  ? _c("v-text-field", {
                                      attrs: {
                                        type: "tel",
                                        max: "10",
                                        counter: 10,
                                        label: "Phone Number",
                                        rules: _vm.inputRules.phoneNumber
                                      },
                                      model: {
                                        value: _vm.profileData.phone_number,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.profileData,
                                            "phone_number",
                                            $$v
                                          )
                                        },
                                        expression: "profileData.phone_number"
                                      }
                                    })
                                  : _vm._e()
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm12: "",
                                  md12: "",
                                  lg12: "",
                                  xl12: "",
                                  "py-2": ""
                                }
                              },
                              [
                                _c(
                                  "v-btn",
                                  {
                                    staticClass: "accent mx-0 mb-4",
                                    attrs: { type: "billing" },
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
                                  [_vm._v("Save")]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("v-flex", {
                      attrs: {
                        xs12: "",
                        sm12: "",
                        md6: "",
                        lg6: "",
                        xl6: "",
                        "reciept-bg": "",
                        "edit-profile": "",
                        "hidden-md-and-down": ""
                      }
                    })
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);