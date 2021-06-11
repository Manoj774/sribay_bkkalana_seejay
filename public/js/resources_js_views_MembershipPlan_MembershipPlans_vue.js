(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_MembershipPlan_MembershipPlans_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MembershipPlan/MembershipPlans.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MembershipPlan/MembershipPlans.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MembershipPlans",
  data: function data() {
    return {
      tableHeaders: [{
        text: '#',
        align: 'start',
        sortable: false,
        value: 'count'
      }, {
        text: 'Subscription Plan Name',
        value: 'name',
        sortable: false
      }, {
        text: 'Price',
        value: 'price',
        sortable: false
      }, {
        text: 'No of Link Click Per Day',
        value: 'no_of_link_click_per_day',
        sortable: false
      }, {
        text: 'Task Rewards',
        value: 'task_rewards',
        sortable: false
      }, {
        text: 'Total Reward Per Day',
        value: 'total_reward_per_day',
        sortable: false
      }, {
        text: 'Bonus Rewards',
        value: 'bonus_rewards',
        sortable: false
      }, {
        text: 'Annual Revenue',
        value: 'annual_revenue',
        sortable: false
      }, {
        text: 'Actions',
        value: 'actions',
        sortable: false
      }],
      membershipPlans: [],
      editedIndex: -1,
      editedItem: {
        count: '',
        name: 0,
        price: 0,
        no_of_link_click_per_day: 0,
        task_rewards: 0,
        total_reward_per_day: 0,
        bonus_rewards: 0,
        annual_revenue: 0
      },
      defaultItem: {
        count: '',
        name: 0,
        price: 0,
        no_of_link_click_per_day: 0,
        task_rewards: 0,
        total_reward_per_day: 0,
        bonus_rewards: 0,
        annual_revenue: 0
      },
      headers: null,
      dialog: false,
      dialogDelete: false
    };
  },
  watch: {
    dialog: function dialog(val) {
      val || this.close();
    },
    dialogDelete: function dialogDelete(val) {
      val || this.closeDelete();
    }
  },
  created: function created() {
    this.getMembershipPlans();
  },
  methods: {
    getMembershipPlans: function getMembershipPlans() {
      var _this = this;

      this.$http.get(this.$serverUrl + 'api/membership', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('bigStore.jwt')
        }
      }).then(function (response) {
        var responseData = response.body.membershipPlans;
        _this.membershipPlans = responseData;
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
    editItem: function editItem(id) {
      this.$router.push('/edit-membership-plan/' + id);
    },
    deleteItem: function deleteItem(id) {
      this.dialogDelete = true;
    },
    deleteItemConfirm: function deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close: function close() {
      this.editCategory = false;
      this.editCategoryId = 0;
      this.editedIndex = 0;
      this.$router.go(this.$router.currentRoute);
    },
    closeDelete: function closeDelete() {
      this.dialogDelete = false;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/MembershipPlan/MembershipPlans.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/MembershipPlan/MembershipPlans.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MembershipPlans_vue_vue_type_template_id_11ad3d03_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MembershipPlans.vue?vue&type=template&id=11ad3d03&scoped=true& */ "./resources/js/views/MembershipPlan/MembershipPlans.vue?vue&type=template&id=11ad3d03&scoped=true&");
/* harmony import */ var _MembershipPlans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MembershipPlans.vue?vue&type=script&lang=js& */ "./resources/js/views/MembershipPlan/MembershipPlans.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _MembershipPlans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MembershipPlans_vue_vue_type_template_id_11ad3d03_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MembershipPlans_vue_vue_type_template_id_11ad3d03_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "11ad3d03",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/MembershipPlan/MembershipPlans.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/MembershipPlan/MembershipPlans.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/MembershipPlan/MembershipPlans.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MembershipPlans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MembershipPlans.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MembershipPlan/MembershipPlans.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MembershipPlans_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/MembershipPlan/MembershipPlans.vue?vue&type=template&id=11ad3d03&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/MembershipPlan/MembershipPlans.vue?vue&type=template&id=11ad3d03&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembershipPlans_vue_vue_type_template_id_11ad3d03_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembershipPlans_vue_vue_type_template_id_11ad3d03_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MembershipPlans_vue_vue_type_template_id_11ad3d03_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MembershipPlans.vue?vue&type=template&id=11ad3d03&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MembershipPlan/MembershipPlans.vue?vue&type=template&id=11ad3d03&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MembershipPlan/MembershipPlans.vue?vue&type=template&id=11ad3d03&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/MembershipPlan/MembershipPlans.vue?vue&type=template&id=11ad3d03&scoped=true& ***!
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
    [
      _c("v-col", [
        _c("div", { staticClass: "emb-card pa-4 search-box-wrap" }, [
          _c("div", { staticClass: "d-flex justify-end align-center" }, [
            _c(
              "div",
              { staticClass: "action-btn-wrap" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { color: "primary", to: "/admin-panel/product-add" }
                  },
                  [_vm._v("\n                                Members\n")]
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: { color: "primary", to: "/admin-panel/product-add" }
                  },
                  [
                    _vm._v(
                      "\n                                Add Membership Plan\n                                "
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
              headers: _vm.tableHeaders,
              items: _vm.membershipPlans,
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
                        attrs: { "max-width": "620px" },
                        model: {
                          value: _vm.dialogDelete,
                          callback: function($$v) {
                            _vm.dialogDelete = $$v
                          },
                          expression: "dialogDelete"
                        }
                      },
                      [
                        _c(
                          "v-card",
                          [
                            _c("v-card-title", { staticClass: "text-h5" }, [
                              _vm._v(
                                "Are you sure you want to disable this membership plan ?"
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
                                    on: { click: _vm.closeDelete }
                                  },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { color: "blue darken-1", text: "" },
                                    on: { click: _vm.deleteItemConfirm }
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
                key: "item.actions",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-icon",
                      {
                        staticClass: "mr-2",
                        attrs: { small: "" },
                        on: {
                          click: function($event) {
                            return _vm.editItem(item.id)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                            mdi-pencil\n                        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "v-icon",
                      {
                        attrs: { small: "" },
                        on: {
                          click: function($event) {
                            return _vm.deleteItem(item.id)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                            mdi-delete\n                        "
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);