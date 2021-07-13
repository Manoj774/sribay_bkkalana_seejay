(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_AdminPanel_MembershipPlan_CreateMembershipPlan_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/MembershipPlan/CreateMembershipPlan.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/MembershipPlan/CreateMembershipPlan.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "CreateMembership",
  data: function data() {
    return {
      membership: {
        name: "",
        price: '',
        value_for_point: '',
        no_of_link_click_per_day: "",
        task_rewards: "",
        total_reward_per_day: "",
        bonus_rewards: "",
        daily_income: "",
        weekly_income: "",
        monthly_income: "",
        monthly_income_with_bonus: "",
        annual_revenue: "",
        registered_commission: '',
        referral_commission: ''
      },
      membership_valid: false,
      membershipNameRules: [function (v) {
        return !!v || 'Membership Name is required';
      }, function (v) {
        return v && v.length <= 250 || 'Membership Name must be less than 250 characters';
      }],
      priceRules: [function (v) {
        return !!v || 'Price is required';
      }],
      valueForPoint: [function (v) {
        return !!v || 'Value For Point';
      }],
      nuOfLinkPerDayRules: [function (v) {
        return !!v || 'No of Link Click Per Day is required';
      }],
      taskRewardsRules: [function (v) {
        return !!v || 'Task Reward is required';
      }],
      rewardPerDayRules: [function (v) {
        return !!v || 'Total Reward Per Day is required';
      }],
      bonusRewardsRules: [function (v) {
        return !!v || 'Bonus Reward is required';
      }],
      referralCommissionRules: [function (v) {
        return !!v || 'Referral commission is required.';
      }],
      registerCommissionRules: [function (v) {
        return !!v || 'Registered commission is required';
      }]
    };
  },
  methods: {
    calculateDailyReward: function calculateDailyReward() {
      var calculateDailyReward = this.membership.task_rewards * this.membership.no_of_link_click_per_day;
      this.membership.total_reward_per_day = calculateDailyReward.toFixed(2);
    },
    calculateIncomes: function calculateIncomes() {
      var calculateDailyIncome = this.membership.total_reward_per_day * this.membership.value_for_point;
      this.membership.daily_income = calculateDailyIncome.toFixed(2);
      var calculateWeeklyIncome = calculateDailyIncome * 7;
      this.membership.weekly_income = calculateWeeklyIncome.toFixed(2);
      var calculateMonthlyIncome = calculateWeeklyIncome * 4;
      this.membership.monthly_income = calculateMonthlyIncome.toFixed(2);
      var calculateMonthlyIncomeWithBonus = calculateMonthlyIncome + this.membership.bonus_rewards * this.membership.value_for_point;
      this.membership.monthly_income_with_bonus = calculateMonthlyIncomeWithBonus.toFixed(2);
      this.membership.annual_revenue = calculateMonthlyIncomeWithBonus * 12;
    },
    submitNewMembershipPlanFrom: function submitNewMembershipPlanFrom() {
      var _this = this;

      this.$refs.create_membership_form.validate();

      if (this.membership_valid) {
        axios.post('/api/membership/create', this.membership).then(function (response) {
          _this.$toast.open({
            message: response.data.message,
            type: 'success'
          });

          _this.$router.go(_this.$router.currentRoute);
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
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/views/AdminPanel/MembershipPlan/CreateMembershipPlan.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/MembershipPlan/CreateMembershipPlan.vue ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateMembershipPlan_vue_vue_type_template_id_63433570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateMembershipPlan.vue?vue&type=template&id=63433570& */ "./resources/js/views/AdminPanel/MembershipPlan/CreateMembershipPlan.vue?vue&type=template&id=63433570&");
/* harmony import */ var _CreateMembershipPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateMembershipPlan.vue?vue&type=script&lang=js& */ "./resources/js/views/AdminPanel/MembershipPlan/CreateMembershipPlan.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CreateMembershipPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CreateMembershipPlan_vue_vue_type_template_id_63433570___WEBPACK_IMPORTED_MODULE_0__.render,
  _CreateMembershipPlan_vue_vue_type_template_id_63433570___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AdminPanel/MembershipPlan/CreateMembershipPlan.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/AdminPanel/MembershipPlan/CreateMembershipPlan.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/MembershipPlan/CreateMembershipPlan.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateMembershipPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateMembershipPlan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/MembershipPlan/CreateMembershipPlan.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateMembershipPlan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/AdminPanel/MembershipPlan/CreateMembershipPlan.vue?vue&type=template&id=63433570&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/MembershipPlan/CreateMembershipPlan.vue?vue&type=template&id=63433570& ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateMembershipPlan_vue_vue_type_template_id_63433570___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateMembershipPlan_vue_vue_type_template_id_63433570___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateMembershipPlan_vue_vue_type_template_id_63433570___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CreateMembershipPlan.vue?vue&type=template&id=63433570& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/MembershipPlan/CreateMembershipPlan.vue?vue&type=template&id=63433570&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/MembershipPlan/CreateMembershipPlan.vue?vue&type=template&id=63433570&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/MembershipPlan/CreateMembershipPlan.vue?vue&type=template&id=63433570& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "v-col",
        { attrs: { cols: "12", sm: "12", md: "12", lg: "12" } },
        [
          _c("v-toolbar-title", [_c("h3", [_vm._v("Create Membership Plan")])]),
          _vm._v(" "),
          _c(
            "v-row",
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "12", md: "12", lg: "12" } },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "pt-4 d-block font-weight-medium",
                      attrs: { to: "/sriBay-admin/membership-plans" }
                    },
                    [_vm._v("Back to Memberships\n                ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "12", md: "12", lg: "12" } },
                [
                  _c(
                    "v-form",
                    {
                      ref: "create_membership_form",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.submitNewMembershipPlanFrom.apply(
                            null,
                            arguments
                          )
                        }
                      },
                      model: {
                        value: _vm.membership_valid,
                        callback: function($$v) {
                          _vm.membership_valid = $$v
                        },
                        expression: "membership_valid"
                      }
                    },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "mx-auto",
                          attrs: { "max-width": "800" }
                        },
                        [
                          _c("v-card-text", [
                            _c("div", [_vm._v("Create Plan")])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-card-text",
                            [
                              _c(
                                "v-row",
                                [
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        md: "12",
                                        lg: "12"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "name-input",
                                        attrs: {
                                          label: "Membership Name",
                                          type: "text",
                                          required: "",
                                          counter: 250,
                                          rules: _vm.membershipNameRules
                                        },
                                        model: {
                                          value: _vm.membership.name,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.membership,
                                              "name",
                                              $$v
                                            )
                                          },
                                          expression: "membership.name"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "name-input",
                                        attrs: {
                                          label: "Price",
                                          type: "number",
                                          required: "",
                                          rules: _vm.priceRules
                                        },
                                        model: {
                                          value: _vm.membership.price,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.membership,
                                              "price",
                                              $$v
                                            )
                                          },
                                          expression: "membership.price"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "name-input",
                                        attrs: {
                                          label: "Value For Point",
                                          type: "number",
                                          required: "",
                                          rules: _vm.valueForPoint
                                        },
                                        on: { blur: _vm.calculateIncomes },
                                        model: {
                                          value: _vm.membership.value_for_point,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.membership,
                                              "value_for_point",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "membership.value_for_point"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "name-input",
                                        attrs: {
                                          label: "No of Link Click Per Day",
                                          type: "number",
                                          required: "",
                                          rules: _vm.nuOfLinkPerDayRules
                                        },
                                        model: {
                                          value:
                                            _vm.membership
                                              .no_of_link_click_per_day,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.membership,
                                              "no_of_link_click_per_day",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "membership.no_of_link_click_per_day"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "name-input",
                                        attrs: {
                                          label: "Task Rewards",
                                          type: "number",
                                          required: "",
                                          rules: _vm.taskRewardsRules
                                        },
                                        on: { blur: _vm.calculateDailyReward },
                                        model: {
                                          value: _vm.membership.task_rewards,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.membership,
                                              "task_rewards",
                                              $$v
                                            )
                                          },
                                          expression: "membership.task_rewards"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "name-input",
                                        attrs: {
                                          label: "Total Reward Per Day",
                                          type: "number",
                                          required: "",
                                          rules: _vm.rewardPerDayRules,
                                          readonly: ""
                                        },
                                        model: {
                                          value:
                                            _vm.membership.total_reward_per_day,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.membership,
                                              "total_reward_per_day",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "membership.total_reward_per_day"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "name-input",
                                        attrs: {
                                          label: "Bonus Rewards",
                                          type: "number",
                                          required: "",
                                          rules: _vm.bonusRewardsRules
                                        },
                                        on: { blur: _vm.calculateIncomes },
                                        model: {
                                          value: _vm.membership.bonus_rewards,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.membership,
                                              "bonus_rewards",
                                              $$v
                                            )
                                          },
                                          expression: "membership.bonus_rewards"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "name-input",
                                        attrs: {
                                          label: "Daily Income",
                                          type: "number",
                                          required: "",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.membership.daily_income,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.membership,
                                              "daily_income",
                                              $$v
                                            )
                                          },
                                          expression: "membership.daily_income"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "name-input",
                                        attrs: {
                                          label: "Weekly Income",
                                          type: "number",
                                          required: "",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.membership.weekly_income,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.membership,
                                              "weekly_income",
                                              $$v
                                            )
                                          },
                                          expression: "membership.weekly_income"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "name-input",
                                        attrs: {
                                          label: "Monthly Income",
                                          type: "number",
                                          required: "",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.membership.monthly_income,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.membership,
                                              "monthly_income",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "membership.monthly_income"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "name-input",
                                        attrs: {
                                          label: "Monthly Income with Bonus",
                                          type: "number",
                                          required: "",
                                          readonly: ""
                                        },
                                        model: {
                                          value:
                                            _vm.membership
                                              .monthly_income_with_bonus,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.membership,
                                              "monthly_income_with_bonus",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "membership.monthly_income_with_bonus"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "name-input",
                                        attrs: {
                                          label: "Annual Revenue",
                                          type: "number",
                                          required: "",
                                          readonly: ""
                                        },
                                        model: {
                                          value: _vm.membership.annual_revenue,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.membership,
                                              "annual_revenue",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "membership.annual_revenue"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "name-input",
                                        attrs: {
                                          label: "Registered Commission",
                                          type: "number",
                                          required: "",
                                          rules: _vm.registerCommissionRules
                                        },
                                        model: {
                                          value:
                                            _vm.membership
                                              .registered_commission,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.membership,
                                              "registered_commission",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "membership.registered_commission"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    {
                                      attrs: {
                                        cols: "12",
                                        sm: "12",
                                        md: "4",
                                        lg: "4"
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "name-input",
                                        attrs: {
                                          label: "Referral Commission",
                                          type: "number",
                                          required: "",
                                          rules: _vm.referralCommissionRules
                                        },
                                        model: {
                                          value:
                                            _vm.membership.referral_commission,
                                          callback: function($$v) {
                                            _vm.$set(
                                              _vm.membership,
                                              "referral_commission",
                                              $$v
                                            )
                                          },
                                          expression:
                                            "membership.referral_commission"
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
                            "v-card-actions",
                            [
                              _c(
                                "v-btn",
                                {
                                  staticClass: "mx-3",
                                  attrs: {
                                    type: "submit",
                                    color: "accent",
                                    large: ""
                                  }
                                },
                                [_vm._v("Create")]
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