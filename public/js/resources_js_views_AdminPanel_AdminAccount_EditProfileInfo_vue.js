(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_AdminPanel_AdminAccount_EditProfileInfo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/AdminAccount/EditProfileInfo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/AdminAccount/EditProfileInfo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      val: '',
      valid: false,
      inputRules: {
        basictextRules: [function (v) {
          return !!v || 'This field should not be empty';
        }]
      },
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+/.test(v) || 'E-mail must be valid';
      }],
      profileData: {
        first_name: '',
        last_name: '',
        address: '',
        phone_number: '',
        email: ''
      }
    };
  },
  created: function created() {
    this.getProfileData();
  },
  methods: {
    getProfileData: function getProfileData() {
      var _this = this;

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
    },
    saveDetails: function saveDetails() {
      var _this2 = this;

      this.$refs.form.validate();

      if (this.valid == true) {
        axios.put('/api/users/' + this.profileData.id, this.profileData).then(function (response) {
          _this2.$snotify.success(response.data.message, {
            closeOnClick: false,
            pauseOnHover: false,
            timeout: 1000,
            showProgressBar: false
          });

          setTimeout(function () {
            _this2.$router.push({
              path: '/sriBay-admin/account/profile'
            });
          }, 50);
        }, function (response) {
          var errors = response.error;
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
    },
    save: function save(date) {
      this.$refs.menu.save(date);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/AdminPanel/AdminAccount/EditProfileInfo.vue":
/*!************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/AdminAccount/EditProfileInfo.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EditProfileInfo_vue_vue_type_template_id_0ce12267___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditProfileInfo.vue?vue&type=template&id=0ce12267& */ "./resources/js/views/AdminPanel/AdminAccount/EditProfileInfo.vue?vue&type=template&id=0ce12267&");
/* harmony import */ var _EditProfileInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditProfileInfo.vue?vue&type=script&lang=js& */ "./resources/js/views/AdminPanel/AdminAccount/EditProfileInfo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EditProfileInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EditProfileInfo_vue_vue_type_template_id_0ce12267___WEBPACK_IMPORTED_MODULE_0__.render,
  _EditProfileInfo_vue_vue_type_template_id_0ce12267___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AdminPanel/AdminAccount/EditProfileInfo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/AdminPanel/AdminAccount/EditProfileInfo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/AdminAccount/EditProfileInfo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProfileInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/AdminAccount/EditProfileInfo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/AdminPanel/AdminAccount/EditProfileInfo.vue?vue&type=template&id=0ce12267&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/AdminAccount/EditProfileInfo.vue?vue&type=template&id=0ce12267& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileInfo_vue_vue_type_template_id_0ce12267___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileInfo_vue_vue_type_template_id_0ce12267___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditProfileInfo_vue_vue_type_template_id_0ce12267___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EditProfileInfo.vue?vue&type=template&id=0ce12267& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/AdminAccount/EditProfileInfo.vue?vue&type=template&id=0ce12267&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/AdminAccount/EditProfileInfo.vue?vue&type=template&id=0ce12267&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/AdminAccount/EditProfileInfo.vue?vue&type=template&id=0ce12267& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "editInfo-wrap emb-card pa-4" }, [
    _c(
      "div",
      {},
      [
        _c("h4", [_vm._v("Edit Profile Information")]),
        _vm._v(" "),
        _c(
          "v-form",
          {
            ref: "form",
            staticClass: "mb-2",
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
                  { attrs: { xs12: "", sm12: "", md12: "", lg6: "", xl6: "" } },
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
                              lg12: "",
                              xl12: "",
                              "py-1": ""
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
                                  _vm.$set(_vm.profileData, "first_name", $$v)
                                },
                                expression: "profileData.first_name"
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
                              "py-1": ""
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
                                  _vm.$set(_vm.profileData, "last_name", $$v)
                                },
                                expression: "profileData.last_name"
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
                              "py-1": ""
                            }
                          },
                          [
                            _c("v-text-field", {
                              attrs: {
                                label: "Mobile No",
                                rules: _vm.inputRules.basictextRules
                              },
                              model: {
                                value: _vm.profileData.phone_number,
                                callback: function($$v) {
                                  _vm.$set(_vm.profileData, "phone_number", $$v)
                                },
                                expression: "profileData.phone_number"
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
                              "py-1": ""
                            }
                          },
                          [
                            _c("v-text-field", {
                              attrs: {
                                label: "Location",
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
                              "py-1": ""
                            }
                          },
                          [
                            _c("v-text-field", {
                              attrs: { label: "Email", rules: _vm.emailRules },
                              model: {
                                value: _vm.profileData.email,
                                callback: function($$v) {
                                  _vm.$set(_vm.profileData, "email", $$v)
                                },
                                expression: "profileData.email"
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
                              "pt-1": "",
                              "pb-0": ""
                            }
                          },
                          [
                            _c(
                              "v-btn",
                              {
                                staticClass: "accent mx-0 mb-4",
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
                    "user-bg": "",
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);