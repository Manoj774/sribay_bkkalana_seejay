(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_AdminPanel_Customers_Customers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Customers/Customers.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Customers/Customers.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Customers",
  data: function data() {
    return {
      switch1: true,
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
        text: 'City',
        value: 'city',
        sortable: false
      }, {
        text: 'Postal Code',
        value: 'postal_code',
        sortable: false
      }, {
        text: 'Date Registered',
        value: 'date_registered',
        sortable: true
      }, {
        text: 'Status',
        value: 'status',
        sortable: false
      } // {
      //     text: 'Actions',
      //     value: 'actions',
      //     sortable: false,
      // },
      ],
      customers: [],
      search: null,
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
    this.getCustomers();
  },
  methods: {
    getCustomers: function getCustomers() {
      var _this = this;

      axios.get('/api/users/customers').then(function (response) {
        _this.customers = [];
        var responseData = response.data.customers;
        var count = 1;

        for (var i in responseData) {
          _this.customers.push({
            count: count,
            name: responseData[i].first_name + " " + responseData[i].last_name,
            email: responseData[i].email,
            orders: responseData[i].orders,
            city: responseData[i].city,
            postal_code: responseData[i].zip_code,
            date_registered: responseData[i].created_at,
            stat: responseData[i].stat,
            id: responseData[i].id
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

/***/ "./resources/js/views/AdminPanel/Customers/Customers.vue":
/*!***************************************************************!*\
  !*** ./resources/js/views/AdminPanel/Customers/Customers.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Customers_vue_vue_type_template_id_4f34ea20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customers.vue?vue&type=template&id=4f34ea20&scoped=true& */ "./resources/js/views/AdminPanel/Customers/Customers.vue?vue&type=template&id=4f34ea20&scoped=true&");
/* harmony import */ var _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customers.vue?vue&type=script&lang=js& */ "./resources/js/views/AdminPanel/Customers/Customers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Customers_vue_vue_type_template_id_4f34ea20_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Customers_vue_vue_type_template_id_4f34ea20_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4f34ea20",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AdminPanel/Customers/Customers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/AdminPanel/Customers/Customers.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/Customers/Customers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Customers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Customers/Customers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/AdminPanel/Customers/Customers.vue?vue&type=template&id=4f34ea20&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/Customers/Customers.vue?vue&type=template&id=4f34ea20&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_4f34ea20_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_4f34ea20_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_4f34ea20_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Customers.vue?vue&type=template&id=4f34ea20&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Customers/Customers.vue?vue&type=template&id=4f34ea20&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Customers/Customers.vue?vue&type=template&id=4f34ea20&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Customers/Customers.vue?vue&type=template&id=4f34ea20&scoped=true& ***!
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
  return _c("div", [
    _c("h4", { staticClass: "mb-6" }, [_vm._v("Customers")]),
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
            items: _vm.customers,
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);