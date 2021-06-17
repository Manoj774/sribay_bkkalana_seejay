(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_AdminPanel_Users_Users_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/Users.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/Users.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      collaborationList: null,
      open: false,
      select: null,
      valid: true,
      items: [{
        text: "Admin"
      }],
      name: "",
      nameRules: [function (v) {
        return !!v || "Name is required";
      }],
      email: "",
      emailRules: [function (v) {
        return !!v || "E-mail is required";
      }, function (v) {
        return /.+@.+/.test(v) || "E-mail must be valid";
      }],
      selectRules: [function (v) {
        return !!v || "Item is required";
      }],
      loader: true,
      users: [],
      headers: [{
        text: "First Name",
        sortable: false,
        value: "first_name"
      }, {
        text: "Last Name",
        sortable: false,
        value: "last_name"
      }, {
        text: "Email",
        sortable: false,
        value: "email"
      }, {
        text: "Role",
        sortable: false,
        value: "role"
      }, {
        text: 'Status',
        value: 'status',
        sortable: false
      }],
      selectDeletedItem: null,
      dialog: false,
      changeStatus: true,
      changeStatusCustomerId: null
    };
  },
  watch: {
    dialog: function dialog(val) {
      val || this.closeStatusChangeDialog();
    }
  },
  mounted: function mounted() {
    this.getAdminUsers();
  },
  methods: {
    getAdminUsers: function getAdminUsers() {
      var _this = this;

      axios.get('/api/users').then(function (response) {
        var responseData = response.data.users;
        _this.users = responseData;
      }, function (response) {
        var errors = response.data.message;
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
    addItemToCollaborationList: function addItemToCollaborationList(item) {
      if (this.$refs.form.validate()) {
        this.collaborationData.push(item);
        this.open = false;
        this.$refs.form.reset();
      } else {
        console.log("Invalid Inputs");
      }
    },
    changeStatusCustomerDialogOpen: function changeStatusCustomerDialogOpen(cus_id, value, event) {
      this.changeStatus = value;
      this.changeStatusCustomerId = cus_id;
      this.dialog = true;
    },
    closeStatusChangeDialog: function closeStatusChangeDialog() {
      this.changeStatus = null;
      this.changeStatusCustomerId = null;
      this.dialog = false;
    },
    changeCustomerStatus: function changeCustomerStatus() {
      var _this2 = this;

      var customer = {
        id: this.changeStatusCustomerId,
        status: this.changeStatus
      };
      axios.post('/api/users/change-status', customer).then(function (response) {
        _this2.closeStatusChangeDialog();

        _this2.$snotify.success('User Status Updated', {
          closeOnClick: false,
          pauseOnHover: false,
          timeout: 1000,
          showProgressBar: false
        });

        setTimeout(function () {
          _this2.getCustomers();
        }, 2000);
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
});

/***/ }),

/***/ "./resources/js/views/AdminPanel/Users/Users.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/AdminPanel/Users/Users.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_vue_vue_type_template_id_282c4f74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=282c4f74& */ "./resources/js/views/AdminPanel/Users/Users.vue?vue&type=template&id=282c4f74&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/views/AdminPanel/Users/Users.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Users_vue_vue_type_template_id_282c4f74___WEBPACK_IMPORTED_MODULE_0__.render,
  _Users_vue_vue_type_template_id_282c4f74___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AdminPanel/Users/Users.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/AdminPanel/Users/Users.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/Users/Users.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/Users.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/AdminPanel/Users/Users.vue?vue&type=template&id=282c4f74&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/Users/Users.vue?vue&type=template&id=282c4f74& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_282c4f74___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_282c4f74___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_282c4f74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=template&id=282c4f74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/Users.vue?vue&type=template&id=282c4f74&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/Users.vue?vue&type=template&id=282c4f74&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/Users.vue?vue&type=template&id=282c4f74& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    [
      _c("v-col", { attrs: { cols: "12", sm: "12", md: "12", lg: "12" } }, [
        _c("div", { staticClass: "emb-card pa-4 search-box-wrap" }, [
          _c("div", { staticClass: "d-flex justify-end align-center" }, [
            _c(
              "div",
              { staticClass: "action-btn-wrap" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: {
                      color: "primary",
                      to: "/sriBay-admin/users/add-user"
                    }
                  },
                  [
                    _vm._v(
                      "\n                        Add Admin\n                        "
                    ),
                    _c("v-icon", [_vm._v("mdi-plus-thick")])
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-col",
        { attrs: { cols: "12", sm: "12", md: "12", lg: "12" } },
        [
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: {
              headers: _vm.headers,
              items: _vm.users,
              "items-per-page": 20
            },
            scopedSlots: _vm._u([
              {
                key: "top",
                fn: function() {
                  return [
                    _c(
                      "v-dialog",
                      {
                        attrs: { "max-width": "650px" },
                        model: {
                          value: _vm.dialog,
                          callback: function($$v) {
                            _vm.dialog = $$v
                          },
                          expression: "dialog"
                        }
                      },
                      [
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", { staticClass: "text-h5" }, [
                              _vm._v(
                                "Are you sure you want to change this this customer status ?"
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-card-actions",
                              [
                                _c("v-spacer"),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "blue darken-1", text: "" },
                                    on: { click: _vm.closeStatusChangeDialog }
                                  },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "blue darken-1", text: "" },
                                    on: { click: _vm.changeCustomerStatus }
                                  },
                                  [_vm._v("OK")]
                                ),
                                _vm._v(" "),
                                _c("v-spacer")
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
                },
                proxy: true
              },
              {
                key: "item.role",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n               " +
                        _vm._s(
                          item.role == 1
                            ? "Admin"
                            : item.role == 3
                            ? "Member"
                            : "User"
                        ) +
                        "\n            "
                    )
                  ]
                }
              },
              {
                key: "item.status",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("v-switch", {
                      attrs: {
                        color: "success",
                        value: item.stat,
                        "input-value": item.stat
                      },
                      on: {
                        change: function($event) {
                          return _vm.changeStatusCustomerDialogOpen(
                            item.id,
                            $event !== null,
                            $event
                          )
                        }
                      }
                    })
                  ]
                }
              }
            ])
          })
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