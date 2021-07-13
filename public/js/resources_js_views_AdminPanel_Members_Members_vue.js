(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_AdminPanel_Members_Members_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Members/Members.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Members/Members.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Members",
  data: function data() {
    return {
      switch1: true,
      width: 300,
      tableHeaders: [{
        text: '#',
        align: 'start',
        sortable: false,
        value: 'count'
      }, {
        text: 'Name',
        value: 'name',
        sortable: false
      }, {
        text: 'Email',
        value: 'email',
        sortable: false
      }, {
        text: 'Orders',
        value: 'orders',
        sortable: true
      }, {
        text: 'Membership',
        value: 'membership',
        sortable: false
      }, {
        text: 'Account Amount',
        value: 'account_amount',
        sortable: false
      }, {
        text: 'Date Registered',
        value: 'date_registered',
        sortable: true
      }, {
        text: 'Status',
        value: 'status',
        sortable: false
      }, {
        text: 'Affiliate Status',
        value: 'affiliate_status',
        sortable: false
      }, {
        text: 'Payment Status',
        value: 'actions',
        sortable: false
      }],
      members: [],
      search: null,
      dialog: false,
      changeStatus: true,
      changeStatusCustomerId: null,
      payment_status_dialog: false,
      payment_status_change_dialog: false
    };
  },
  watch: {
    dialog: function dialog(val) {
      val || this.closeStatusChangeDialog();
    }
  },
  mounted: function mounted() {
    this.getMembers();
  },
  methods: {
    getMembers: function getMembers() {
      var _this = this;

      axios.get('/api/users/members').then(function (response) {
        _this.members = [];
        var responseData = response.data.members;
        var count = 1;

        for (var i in responseData) {
          _this.members.push({
            count: count,
            name: responseData[i].first_name + " " + responseData[i].last_name,
            email: responseData[i].email,
            orders: responseData[i].orders,
            city: responseData[i].city,
            membership: responseData[i].membership,
            account_amount: responseData[i].account_amount,
            date_registered: responseData[i].created_at,
            stat: responseData[i].stat,
            id: responseData[i].id,
            affiliate_stat: responseData[i].affiliate_stat,
            payment_detail: responseData[i].payment_details
          });

          count++;
        }

        _this.users = responseData;
      }, function (err) {
        var errors = err.response.data.message;
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
    changeStatusCustomerDialogOpen: function changeStatusCustomerDialogOpen(cus_id, value, event) {
      this.changeStatus = value;
      this.changeStatusCustomerId = cus_id;
      this.dialog = true;
    },
    closeStatusChangeDialog: function closeStatusChangeDialog() {
      this.changeStatus = null;
      this.changeStatusCustomerId = null;
      this.dialog = false;
      window.location.href = "";
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
          window.location.href = "";
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
    },
    changeAffiliateStatusDialogOpen: function changeAffiliateStatusDialogOpen(user_id, value, event) {
      this.changeStatus = value;
      this.changeStatusCustomerId = user_id;
      this.payment_status_change_dialog = true;
    },
    closeAffiliateStatusChangeDialog: function closeAffiliateStatusChangeDialog() {
      this.changeStatus = null;
      this.changeStatusCustomerId = null;
      this.payment_status_change_dialog = false;
      window.location.href = "";
    },
    changeAffiliateStatus: function changeAffiliateStatus() {
      var _this3 = this;

      var member = {
        id: this.changeStatusCustomerId,
        status: this.changeStatus
      };
      axios.post('/api/members/change-affiliate-status', member).then(function (response) {
        _this3.closeAffiliateStatusChangeDialog();

        _this3.$snotify.success('Member Affiliate Status Updated', {
          closeOnClick: false,
          pauseOnHover: false,
          timeout: 1000,
          showProgressBar: false
        });

        setTimeout(function () {
          window.location.href = "";
        }, 2000);
      }, function (err) {
        var errors = err.response.data.message;
        var html = '';

        for (var i in errors) {
          html += errors[i];
        }

        _this3.$toast.open({
          message: html,
          type: 'error'
        });
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/AdminPanel/Members/Members.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/AdminPanel/Members/Members.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Members_vue_vue_type_template_id_66c588b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Members.vue?vue&type=template&id=66c588b0&scoped=true& */ "./resources/js/views/AdminPanel/Members/Members.vue?vue&type=template&id=66c588b0&scoped=true&");
/* harmony import */ var _Members_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Members.vue?vue&type=script&lang=js& */ "./resources/js/views/AdminPanel/Members/Members.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Members_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Members_vue_vue_type_template_id_66c588b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Members_vue_vue_type_template_id_66c588b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "66c588b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AdminPanel/Members/Members.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/AdminPanel/Members/Members.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/Members/Members.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Members_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Members.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Members/Members.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Members_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/AdminPanel/Members/Members.vue?vue&type=template&id=66c588b0&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/Members/Members.vue?vue&type=template&id=66c588b0&scoped=true& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Members_vue_vue_type_template_id_66c588b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Members_vue_vue_type_template_id_66c588b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Members_vue_vue_type_template_id_66c588b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Members.vue?vue&type=template&id=66c588b0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Members/Members.vue?vue&type=template&id=66c588b0&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Members/Members.vue?vue&type=template&id=66c588b0&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Members/Members.vue?vue&type=template&id=66c588b0&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    [
      _c("h4", { staticClass: "mb-6" }, [_vm._v("Members")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "pa-4 pt-0 emb-card mb-6" },
        [
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "8", md: "5", lg: "5" } },
                [
                  _c("v-text-field", {
                    attrs: {
                      label: "Search",
                      "single-line": "",
                      "hide-details": ""
                    },
                    model: {
                      value: _vm.search,
                      callback: function($$v) {
                        _vm.search = $$v
                      },
                      expression: "search"
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
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: " pa-4" },
        [
          _c("v-data-table", {
            staticClass: "elevation-1",
            attrs: {
              headers: _vm.tableHeaders,
              items: _vm.members,
              "items-per-page": 20,
              search: _vm.search
            },
            scopedSlots: _vm._u([
              {
                key: "top",
                fn: function() {
                  return [
                    _c(
                      "v-dialog",
                      {
                        attrs: { "max-width": "720px" },
                        model: {
                          value: _vm.payment_status_change_dialog,
                          callback: function($$v) {
                            _vm.payment_status_change_dialog = $$v
                          },
                          expression: "payment_status_change_dialog"
                        }
                      },
                      [
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", { staticClass: "text-h5" }, [
                              _vm._v(
                                "Are you sure you want to change this this member affiliate status ?"
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
                                    on: {
                                      click:
                                        _vm.closeAffiliateStatusChangeDialog
                                    }
                                  },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "blue darken-1", text: "" },
                                    on: { click: _vm.changeAffiliateStatus }
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
                key: "item.account_amount",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _vm._v(
                      "\n               " +
                        _vm._s(item.account_amount.toFixed(2)) +
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
              },
              {
                key: "item.affiliate_status",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("v-switch", {
                      attrs: {
                        color: "success",
                        value: item.affiliate_stat,
                        "input-value": item.affiliate_stat
                      },
                      on: {
                        change: function($event) {
                          return _vm.changeAffiliateStatusDialogOpen(
                            item.id,
                            $event !== null,
                            $event
                          )
                        }
                      }
                    })
                  ]
                }
              },
              {
                key: "item.actions",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    !item.affiliate_stat
                      ? _c(
                          "v-dialog",
                          {
                            attrs: { persistent: "", "max-width": "600px" },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    var attrs = ref.attrs
                                    return [
                                      _c(
                                        "v-chip",
                                        _vm._g(
                                          _vm._b(
                                            {
                                              staticClass: "ma-2",
                                              attrs: {
                                                color: "orange",
                                                "text-color": "white"
                                              }
                                            },
                                            "v-chip",
                                            attrs,
                                            false
                                          ),
                                          on
                                        ),
                                        [
                                          _vm._v(
                                            "\n                            Pending\n                        "
                                          )
                                        ]
                                      )
                                    ]
                                  }
                                }
                              ],
                              null,
                              true
                            ),
                            model: {
                              value: _vm.payment_status_dialog,
                              callback: function($$v) {
                                _vm.payment_status_dialog = $$v
                              },
                              expression: "payment_status_dialog"
                            }
                          },
                          [
                            _vm._v(" "),
                            _c(
                              "v-card",
                              [
                                _c("v-card-title", [
                                  _c("span", { staticClass: "text-h5" }, [
                                    _vm._v("Member Bank Payment Details")
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("v-card-text", [
                                  _c("h6", [_vm._v("Payment Slip Image")]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex flex-column justify-space-between align-center"
                                    },
                                    [
                                      _c("v-slider", {
                                        staticClass: "align-self-stretch",
                                        attrs: {
                                          min: "200",
                                          max: "500",
                                          step: "1"
                                        },
                                        model: {
                                          value: _vm.width,
                                          callback: function($$v) {
                                            _vm.width = $$v
                                          },
                                          expression: "width"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("v-img", {
                                        attrs: {
                                          "aspect-ratio": 16 / 9,
                                          width: _vm.width,
                                          src: item.payment_detail.payment_slip
                                        }
                                      })
                                    ],
                                    1
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
                                        attrs: {
                                          color: "blue darken-1",
                                          text: ""
                                        },
                                        on: {
                                          click: function($event) {
                                            _vm.payment_status_dialog = false
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                Close\n                            "
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
                      : _c(
                          "v-chip",
                          {
                            staticClass: "ma-2",
                            attrs: { color: "success", "text-color": "white" }
                          },
                          [
                            _vm._v(
                              "\n                    Approval\n                "
                            )
                          ]
                        )
                  ]
                }
              }
            ])
          })
        ],
        1
      ),
      _vm._v(" "),
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
                  "Are you sure you want to change this this member status ?"
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);