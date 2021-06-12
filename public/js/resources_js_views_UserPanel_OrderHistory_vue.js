(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_UserPanel_OrderHistory_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/OrderHistory.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/OrderHistory.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      headers: [{
        text: 'No',
        align: 'left',
        sortable: false,
        value: 'count'
      }, {
        text: 'Order Id',
        value: 'orderId'
      }, {
        text: 'Shipping Address',
        value: 'address'
      }, {
        text: 'Net Amount',
        value: 'net_amount'
      }, {
        text: 'Order Date',
        value: 'created_at'
      }, {
        text: 'Status',
        value: 'status'
      }, {
        text: 'Action',
        value: 'action'
      }],
      tableData: []
    };
  },
  mounted: function mounted() {},
  created: function created() {
    this.getUserOrderData(); // this.getUserOrderData();
  },
  methods: {
    getUserOrderData: function getUserOrderData() {
      var _this = this;

      axios.get('/api/orders/user-orders').then(function (response) {
        var orderdata = response.data.orders;
        var count = 1;

        for (var key in orderdata) {
          _this.tableData.push({
            'count': count,
            'orderId': _this.leftPad(orderdata[key].id, 6),
            'address': orderdata[key].address + ', ' + orderdata[key].city + ', ' + orderdata[key].state + ', ' + orderdata[key].zip_code,
            'net_amount': orderdata[key].net_amount.toFixed(2),
            'created_at': orderdata[key].created_at,
            'status': orderdata[key].order_stat
          });

          count++;
        }
      })["catch"](function (error) {
        console.log(error.response.data.message);
      });
    },
    leftPad: function leftPad(number, targetLength) {
      var output = number + '';

      while (output.length < targetLength) {
        output = '0' + output;
      }

      return output;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/UserPanel/OrderHistory.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/UserPanel/OrderHistory.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderHistory_vue_vue_type_template_id_bda0e68a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderHistory.vue?vue&type=template&id=bda0e68a& */ "./resources/js/views/UserPanel/OrderHistory.vue?vue&type=template&id=bda0e68a&");
/* harmony import */ var _OrderHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderHistory.vue?vue&type=script&lang=js& */ "./resources/js/views/UserPanel/OrderHistory.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _OrderHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _OrderHistory_vue_vue_type_template_id_bda0e68a___WEBPACK_IMPORTED_MODULE_0__.render,
  _OrderHistory_vue_vue_type_template_id_bda0e68a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UserPanel/OrderHistory.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/UserPanel/OrderHistory.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/UserPanel/OrderHistory.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderHistory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/OrderHistory.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/UserPanel/OrderHistory.vue?vue&type=template&id=bda0e68a&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/UserPanel/OrderHistory.vue?vue&type=template&id=bda0e68a& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderHistory_vue_vue_type_template_id_bda0e68a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderHistory_vue_vue_type_template_id_bda0e68a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderHistory_vue_vue_type_template_id_bda0e68a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderHistory.vue?vue&type=template&id=bda0e68a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/OrderHistory.vue?vue&type=template&id=bda0e68a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/OrderHistory.vue?vue&type=template&id=bda0e68a&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/OrderHistory.vue?vue&type=template&id=bda0e68a& ***!
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
    "div",
    { staticClass: "order-history-wrap emb-card pa-4" },
    [
      _c("h4", { staticClass: "mb-4" }, [_vm._v("Order History")]),
      _vm._v(" "),
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.tableData,
          "hide-default-footer": ""
        },
        scopedSlots: _vm._u([
          {
            key: "item.action",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "a",
                  { attrs: { href: "javascript:void(0)" } },
                  [
                    _c("v-icon", { staticClass: "accent--text" }, [
                      _vm._v("mdi-eye")
                    ])
                  ],
                  1
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);