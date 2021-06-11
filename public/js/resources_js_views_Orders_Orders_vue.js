(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Orders_Orders_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Invoice.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Invoice.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
//import api from "Api";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    search: {
      "default": null,
      type: String
    }
  },
  data: function data() {
    return {
      editDialog: false,
      invoiceList: null,
      headers: [{
        text: "No.",
        sortable: false,
        value: "position"
      }, {
        text: "Invoice ID",
        sortable: false,
        value: "invoiceId"
      }, {
        text: "Buyer",
        sortable: false,
        value: "name"
      }, {
        text: "Date",
        sortable: false,
        value: "date"
      }, {
        text: "Price",
        sortable: false,
        value: "price"
      }, {
        text: "Payment",
        sortable: false,
        value: "payment"
      }, {
        text: "Status",
        sortable: false,
        value: "status"
      }, {
        text: "Actions",
        sortable: false,
        value: "action"
      }],
      selectDeletedItem: null,
      invoiceData: []
    };
  },
  mounted: function mounted() {
    this.getInvoice();
  },
  methods: {
    openDialog: function openDialog() {
      this.editDialog = true;
    },
    deleteItemFromInvoicesList: function deleteItemFromInvoicesList(item) {
      this.$refs.deleteConfirmationDialog.openDialog();
      this.selectDeletedItem = item;
    },
    ondeleteItemFromInvoicesList: function ondeleteItemFromInvoicesList() {
      this.$refs.deleteConfirmationDialog.close();
      var index = this.invoiceData.indexOf(this.selectDeletedItem);
      this.invoiceData.splice(index, 1);
    },
    getInvoice: function getInvoice() {
      var self = this; // api
      //   .get("invoiceData.json")
      //   .then(response => {
      //     self.loader = false;
      //     this.invoiceList = response.data;
      //
      //     for (var i = 0; i < this.invoiceList.length; i++) {
      //       this.invoiceData.push(this.invoiceList[i]);
      //     }
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Orders/Orders.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Orders/Orders.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Widgets_Invoice_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Widgets/Invoice.vue */ "./resources/js/components/Widgets/Invoice.vue");
//
//
//
//
//
//
//
//
//
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
      search: ''
    };
  },
  components: {
    Invoice: _components_Widgets_Invoice_vue__WEBPACK_IMPORTED_MODULE_0__.default
  }
});

/***/ }),

/***/ "./resources/js/components/Widgets/Invoice.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Widgets/Invoice.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Invoice_vue_vue_type_template_id_8fcb54dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoice.vue?vue&type=template&id=8fcb54dc& */ "./resources/js/components/Widgets/Invoice.vue?vue&type=template&id=8fcb54dc&");
/* harmony import */ var _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoice.vue?vue&type=script&lang=js& */ "./resources/js/components/Widgets/Invoice.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Invoice_vue_vue_type_template_id_8fcb54dc___WEBPACK_IMPORTED_MODULE_0__.render,
  _Invoice_vue_vue_type_template_id_8fcb54dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Widgets/Invoice.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Orders/Orders.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Orders/Orders.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Orders_vue_vue_type_template_id_a392c140___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Orders.vue?vue&type=template&id=a392c140& */ "./resources/js/views/Orders/Orders.vue?vue&type=template&id=a392c140&");
/* harmony import */ var _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Orders.vue?vue&type=script&lang=js& */ "./resources/js/views/Orders/Orders.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Orders_vue_vue_type_template_id_a392c140___WEBPACK_IMPORTED_MODULE_0__.render,
  _Orders_vue_vue_type_template_id_a392c140___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Orders/Orders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Widgets/Invoice.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Widgets/Invoice.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Invoice.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Orders/Orders.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Orders/Orders.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Orders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Orders/Orders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Widgets/Invoice.vue?vue&type=template&id=8fcb54dc&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Widgets/Invoice.vue?vue&type=template&id=8fcb54dc& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_8fcb54dc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_8fcb54dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_8fcb54dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Invoice.vue?vue&type=template&id=8fcb54dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Invoice.vue?vue&type=template&id=8fcb54dc&");


/***/ }),

/***/ "./resources/js/views/Orders/Orders.vue?vue&type=template&id=a392c140&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Orders/Orders.vue?vue&type=template&id=a392c140& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_a392c140___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_a392c140___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Orders_vue_vue_type_template_id_a392c140___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Orders.vue?vue&type=template&id=a392c140& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Orders/Orders.vue?vue&type=template&id=a392c140&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Invoice.vue?vue&type=template&id=8fcb54dc&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Widgets/Invoice.vue?vue&type=template&id=8fcb54dc& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "table-responsive" },
    [
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: _vm.invoiceData,
          "items-per-page": 15,
          search: _vm.search,
          align: "center"
        },
        scopedSlots: _vm._u([
          {
            key: "item.action",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "v-btn",
                  {
                    staticClass: "mr-3",
                    attrs: {
                      slot: "activator",
                      text: "",
                      icon: "",
                      color: "grey",
                      small: ""
                    },
                    on: {
                      click: function($event) {
                        return _vm.openDialog()
                      }
                    },
                    slot: "activator"
                  },
                  [
                    _c("v-icon", { staticClass: "primary--text" }, [
                      _vm._v("remove_red_eye")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "v-btn",
                  {
                    attrs: {
                      slot: "activator",
                      text: "",
                      icon: "",
                      color: "grey",
                      small: ""
                    },
                    on: {
                      click: function($event) {
                        return _vm.deleteItemFromInvoicesList(item)
                      }
                    },
                    slot: "activator"
                  },
                  [
                    _c("v-icon", { staticClass: "error--text" }, [
                      _vm._v("delete")
                    ])
                  ],
                  1
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          staticClass: "pa-2",
          attrs: { "max-width": "685px" },
          model: {
            value: _vm.editDialog,
            callback: function($$v) {
              _vm.editDialog = $$v
            },
            expression: "editDialog"
          }
        },
        [
          _c(
            "v-card",
            { staticClass: "emb-FinalReceipt-wrap" },
            [
              _c(
                "v-card-text",
                { staticClass: "pa-4" },
                [
                  _c("v-flex", { attrs: { xs12: "" } }, [
                    _c(
                      "div",
                      { staticClass: "text-center bg-grey px-4 py-6" },
                      [
                        _c("h4", [_vm._v("Payment Status")]),
                        _vm._v(" "),
                        _c("h5", { staticClass: "mb-6" }, [
                          _vm._v(
                            "Payment is successfully processsed and your order is on the way "
                          )
                        ]),
                        _vm._v(" "),
                        _c("h6", { staticClass: "mb-6" }, [
                          _vm._v("Transaction ID:267676GHERT105467")
                        ]),
                        _vm._v(" "),
                        _c("img", {
                          attrs: {
                            src: "/static/images/checked.png",
                            width: "64",
                            height: "64",
                            alt: "Success"
                          }
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mt-12 mx-4" },
                      [
                        _c(
                          "v-layout",
                          {
                            attrs: {
                              row: "",
                              wrap: "",
                              "mb-10": "",
                              "mx-0": "",
                              "mt-0": ""
                            }
                          },
                          [
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm6: "",
                                  md6: "",
                                  lg6: "",
                                  xl6: "",
                                  "text-left": "",
                                  "pa-0": ""
                                }
                              },
                              [
                                _c("h6", [_vm._v("Summary")]),
                                _vm._v(" "),
                                _c("p", { staticClass: "mb-1" }, [
                                  _vm._v("Order ID : 2563883628932")
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "mb-1" }, [
                                  _vm._v("Order Date : September 20, 2019")
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "mb-1" }, [
                                  _vm._v("Order Total : $888.00")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm6: "",
                                  md6: "",
                                  lg6: "",
                                  xl6: "",
                                  "text-left": "",
                                  "pa-0": ""
                                }
                              },
                              [
                                _c("h6", [_vm._v("Ship To")]),
                                _vm._v(" "),
                                _c("p", { staticClass: "mb-1" }, [
                                  _vm._v("Nitin Goyal")
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "mb-1" }, [
                                  _vm._v("Hyderabad")
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "mb-1" }, [
                                  _vm._v("India-500 002")
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "mb-1" }, [
                                  _vm._v("Contact No. 202-555-0185")
                                ])
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "py-6 text-center bg-grey" }, [
                          _c("h4", [_vm._v("Expected Date of Delivery")]),
                          _vm._v(" "),
                          _c("h3", [_vm._v("December 31, 2019")])
                        ]),
                        _vm._v(" "),
                        _c(
                          "h4",
                          {
                            staticClass: "pt-12 mb-7 text-sm-left text-center"
                          },
                          [_vm._v("Your Ordered Details")]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "layout row wrap align-center d-flex ma-0"
                          },
                          [
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm12: "",
                                  md3: "",
                                  lg3: "",
                                  xl3: ""
                                }
                              },
                              [
                                _c("img", {
                                  attrs: {
                                    alt: "cart Image",
                                    width: "100",
                                    src: "/static/images/gadgets/g-2-a.jpg"
                                  }
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm12: "",
                                  md3: "",
                                  lg3: "",
                                  xl3: ""
                                }
                              },
                              [
                                _c("h6", [_vm._v("Product Name")]),
                                _vm._v(" "),
                                _c("p", { staticClass: "font-weight-bold" }, [
                                  _vm._v("Black Smartphone")
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm12: "",
                                  md3: "",
                                  lg3: "",
                                  xl3: ""
                                }
                              },
                              [
                                _c("h6", [_vm._v("Quantity")]),
                                _vm._v(" "),
                                _c("p", [_vm._v("1")])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm12: "",
                                  md3: "",
                                  lg3: "",
                                  xl3: ""
                                }
                              },
                              [
                                _c("h6", [_vm._v("Price")]),
                                _vm._v(" "),
                                _c("p", [_vm._v("$888.00")])
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-divider", { staticClass: "my-6" }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "pt-6" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "layout align-center justify-space-between ma-0"
                              },
                              [
                                _c("p", [_vm._v("Subtotal")]),
                                _vm._v(" "),
                                _c("span", [_vm._v("$847.63")])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "layout align-center justify-space-between ma-0"
                              },
                              [
                                _c("p", [_vm._v("Shipping")]),
                                _vm._v(" "),
                                _c("span", [_vm._v("$12.95")])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "layout align-center justify-space-between ma-0"
                              },
                              [
                                _c("p", [_vm._v("Tax(GST)")]),
                                _vm._v(" "),
                                _c("span", [_vm._v("$27.95")])
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-divider", { staticClass: "my-4" }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "layout align-center justify-space-between ma-0"
                              },
                              [
                                _c("h4", [_vm._v("Total")]),
                                _vm._v(" "),
                                _c("h4", [_vm._v("$888.53")])
                              ]
                            ),
                            _vm._v(" "),
                            _c("v-divider", { staticClass: "my-4" })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "layout align-center justify-space-between ma-0 my-6"
                          },
                          [
                            _c("v-btn", { attrs: { color: "accent" } }, [
                              _vm._v("Download PDF")
                            ]),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: {
                                  color: "accent",
                                  to: "/admin-panel/reports"
                                }
                              },
                              [_vm._v("Go To Home")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ])
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
      _c("emb-delete-confirmation-2", {
        ref: "deleteConfirmationDialog",
        attrs: {
          messageTitle: "Are You Sure You Want To Delete?",
          messageDescription:
            "Are you sure you want to delete this invoice permanently?",
          btn1: "Cancel",
          btn2: "Yes"
        },
        on: { onConfirm: _vm.ondeleteItemFromInvoicesList }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Orders/Orders.vue?vue&type=template&id=a392c140&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Orders/Orders.vue?vue&type=template&id=a392c140& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    _c("h4", { staticClass: "mb-6" }, [_vm._v("Invoice List")]),
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
      { staticClass: "emb-card pa-4" },
      [_c("invoice", { attrs: { search: _vm.search } })],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);