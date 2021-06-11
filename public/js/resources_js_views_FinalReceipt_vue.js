(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_FinalReceipt_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/FinalReceipt.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/FinalReceipt.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(["invoiceData", "tax", "shipping", "userDetails"])),
  data: function data() {
    return {
      userInfo: {
        firstName: "",
        lastName: "",
        streetName: "",
        aptBuilding: "",
        zipCode: "",
        cityState: "",
        country: "",
        phone: "",
        email: ""
      },
      productDetail: [{
        "Product Name": "Super Jacket",
        Quantity: 1,
        Price: "$67.00"
      }]
    };
  },
  methods: {
    /**
     * this function returns the delivery date
     **/
    deliveryDate: function deliveryDate() {
      var format = "MMMM Do , YYYY";
      var startdate = moment__WEBPACK_IMPORTED_MODULE_0___default()().format(format);
      var new_date = moment__WEBPACK_IMPORTED_MODULE_0___default()(startdate, format).add(5, "days");
      return new_date.format(format);
    },

    /**
     * this function returns the total for the item
     **/
    itemTotal: function itemTotal() {
      var productTotal = 0;

      if (this.invoiceData.products && this.invoiceData.products.length > 0) {
        var _iterator = _createForOfIteratorHelper(this.invoiceData.products),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            productTotal += item.price * item.quantity;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return productTotal.toFixed(2);
      } else {
        return productTotal;
      }
    },

    /**
     * this function returns the total price
     **/
    getTotalPrice: function getTotalPrice() {
      var totalPrice = this.tax + this.shipping;

      if (this.invoiceData.products && this.invoiceData.products.length > 0) {
        var _iterator2 = _createForOfIteratorHelper(this.invoiceData.products),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            totalPrice += item.price * item.quantity;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        return totalPrice.toFixed(2);
      } else {
        return totalPrice.toFixed(2);
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/views/FinalReceipt.vue":
/*!*********************************************!*\
  !*** ./resources/js/views/FinalReceipt.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FinalReceipt_vue_vue_type_template_id_4f16ff81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FinalReceipt.vue?vue&type=template&id=4f16ff81& */ "./resources/js/views/FinalReceipt.vue?vue&type=template&id=4f16ff81&");
/* harmony import */ var _FinalReceipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FinalReceipt.vue?vue&type=script&lang=js& */ "./resources/js/views/FinalReceipt.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FinalReceipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FinalReceipt_vue_vue_type_template_id_4f16ff81___WEBPACK_IMPORTED_MODULE_0__.render,
  _FinalReceipt_vue_vue_type_template_id_4f16ff81___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/FinalReceipt.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/FinalReceipt.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/FinalReceipt.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FinalReceipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FinalReceipt.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/FinalReceipt.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FinalReceipt_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/FinalReceipt.vue?vue&type=template&id=4f16ff81&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/FinalReceipt.vue?vue&type=template&id=4f16ff81& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FinalReceipt_vue_vue_type_template_id_4f16ff81___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FinalReceipt_vue_vue_type_template_id_4f16ff81___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FinalReceipt_vue_vue_type_template_id_4f16ff81___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FinalReceipt.vue?vue&type=template&id=4f16ff81& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/FinalReceipt.vue?vue&type=template&id=4f16ff81&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/FinalReceipt.vue?vue&type=template&id=4f16ff81&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/FinalReceipt.vue?vue&type=template&id=4f16ff81& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _vm.userDetails
    ? _c(
        "div",
        { staticClass: "emb-FinalReceipt-wrap" },
        [
          _c("emb-page-title", { attrs: { heading: "Payment Information" } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "final-receipt  section-gap" },
            [
              _c(
                "v-container",
                { attrs: { "grid-list-xl": "", "py-0": "" } },
                [
                  _c(
                    "v-layout",
                    { attrs: { "align-center": "", "justify-center": "" } },
                    [
                      _c(
                        "v-flex",
                        {
                          attrs: {
                            xs12: "",
                            sm12: "",
                            md10: "",
                            lg7: "",
                            xl7: ""
                          }
                        },
                        [
                          _c("div", { staticClass: "emb-card pb-12" }, [
                            _c("div", { attrs: { id: "payment-receipt" } }, [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "text-center bg-grey pa-sm-12 pa-6"
                                },
                                [
                                  _c("h1", [_vm._v("Thank You")]),
                                  _vm._v(" "),
                                  _c("h5", { staticClass: "mb-6" }, [
                                    _vm._v(
                                      "Payment is successfully processsed and your order is on the way "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("h6", { staticClass: "mb-6" }, [
                                    _vm._v(
                                      "Transaction ID: " +
                                        _vm._s(_vm.invoiceData.transactionId)
                                    )
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
                                { staticClass: "py-sm-12 py-8 px-sm-6 px-4" },
                                [
                                  _c(
                                    "v-layout",
                                    {
                                      attrs: { row: "", wrap: "", "mb-6": "" }
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
                                            xl6: ""
                                          }
                                        },
                                        [
                                          _c("h6", [_vm._v("Summary")]),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "mb-1 text-capitalize"
                                            },
                                            [
                                              _vm._v(
                                                "Order ID: " +
                                                  _vm._s(
                                                    _vm.invoiceData.orderId
                                                  )
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-1" }, [
                                            _vm._v(
                                              "Order Date: " +
                                                _vm._s(
                                                  _vm.invoiceData.orderedDate
                                                )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c(
                                            "p",
                                            { staticClass: "mb-1" },
                                            [
                                              _vm._v("Order Total: "),
                                              _c("emb-currency-sign"),
                                              _vm._v(
                                                _vm._s(_vm.getTotalPrice())
                                              )
                                            ],
                                            1
                                          )
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
                                            xl6: ""
                                          }
                                        },
                                        [
                                          _c("h6", [_vm._v("Ship To")]),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-1" }, [
                                            _vm._v(
                                              _vm._s(
                                                _vm.userDetails.firstName
                                              ) +
                                                " " +
                                                _vm._s(_vm.userDetails.lastName)
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-1" }, [
                                            _vm._v(
                                              _vm._s(
                                                _vm.userDetails.aptBuilding
                                              )
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-1" }, [
                                            _vm._v(
                                              _vm._s(_vm.userDetails.cityState)
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-1" }, [
                                            _vm._v(
                                              _vm._s(_vm.userDetails.country) +
                                                " - " +
                                                _vm._s(_vm.userDetails.zipCode)
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("p", { staticClass: "mb-1" }, [
                                            _vm._v(
                                              "Contact No. " +
                                                _vm._s(_vm.userDetails.phone)
                                            )
                                          ])
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "py-6 text-center bg-grey px-3"
                                    },
                                    [
                                      _c("h4", [
                                        _vm._v("Expected Date of Delivery")
                                      ]),
                                      _vm._v(" "),
                                      _c("h3", [
                                        _vm._v(
                                          _vm._s(_vm.invoiceData.deliveryDate)
                                        )
                                      ])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("h4", { staticClass: "pt-6" }, [
                                    _vm._v("Your Ordered Details")
                                  ]),
                                  _vm._v(" "),
                                  _vm._l(_vm.invoiceData.products, function(
                                    cart,
                                    index
                                  ) {
                                    return [
                                      _vm.invoiceData.products
                                        ? _c(
                                            "div",
                                            {
                                              key: index,
                                              staticClass:
                                                "layout row wrap align-center d-flex my-0 text-md-left text-center"
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
                                                      src: cart.image
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
                                                    sm4: "",
                                                    md3: "",
                                                    lg3: "",
                                                    xl3: ""
                                                  }
                                                },
                                                [
                                                  _c("h6", [
                                                    _vm._v("Product Name")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    {
                                                      staticClass:
                                                        "mb-0 font-weight-bold"
                                                    },
                                                    [_vm._v(_vm._s(cart.name))]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-flex",
                                                {
                                                  attrs: {
                                                    xs6: "",
                                                    sm4: "",
                                                    md3: "",
                                                    lg3: "",
                                                    xl3: ""
                                                  }
                                                },
                                                [
                                                  _c("h6", [
                                                    _vm._v("Quantity")
                                                  ]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    { staticClass: "mb-0" },
                                                    [
                                                      _vm._v(
                                                        _vm._s(cart.quantity)
                                                      )
                                                    ]
                                                  )
                                                ]
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "v-flex",
                                                {
                                                  attrs: {
                                                    xs6: "",
                                                    sm4: "",
                                                    md3: "",
                                                    lg3: "",
                                                    xl3: ""
                                                  }
                                                },
                                                [
                                                  _c("h6", [_vm._v("Price")]),
                                                  _vm._v(" "),
                                                  _c(
                                                    "p",
                                                    { staticClass: "mb-0" },
                                                    [
                                                      _vm._v(
                                                        "$" + _vm._s(cart.price)
                                                      )
                                                    ]
                                                  )
                                                ]
                                              )
                                            ],
                                            1
                                          )
                                        : _vm._e()
                                    ]
                                  }),
                                  _vm._v(" "),
                                  _c("v-divider", { staticClass: "my-4" }),
                                  _vm._v(" "),
                                  _c("div", [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex align-center justify-space-between mt-4 mb-4"
                                      },
                                      [
                                        _c("div", [
                                          _c("p", { staticClass: "mb-0" }, [
                                            _vm._v("Subtotal")
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("div", [
                                          _c(
                                            "span",
                                            [
                                              _c("emb-currency-sign"),
                                              _vm._v(_vm._s(_vm.itemTotal()))
                                            ],
                                            1
                                          )
                                        ])
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex align-center justify-space-between mb-4"
                                      },
                                      [
                                        _c("p", { staticClass: "mb-0" }, [
                                          _vm._v("Shipping")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          [
                                            _c("emb-currency-sign"),
                                            _vm._v(_vm._s(_vm.shipping))
                                          ],
                                          1
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex align-center justify-space-between mb-4"
                                      },
                                      [
                                        _c("p", { staticClass: "mb-0" }, [
                                          _vm._v("Tax(GST)")
                                        ]),
                                        _vm._v(" "),
                                        _c(
                                          "span",
                                          [
                                            _c("emb-currency-sign"),
                                            _vm._v(_vm._s(_vm.tax))
                                          ],
                                          1
                                        )
                                      ]
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("v-divider", { staticClass: "my-4" }),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "d-flex align-center justify-space-between"
                                    },
                                    [
                                      _c("h4", [_vm._v("Total")]),
                                      _vm._v(" "),
                                      _c(
                                        "h4",
                                        [
                                          _c("emb-currency-sign"),
                                          _vm._v(_vm._s(_vm.getTotalPrice()))
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ],
                                2
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "layout row wrap pt-6 px-4 text-center"
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
                                      "text-md-left": ""
                                    }
                                  },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "accent",
                                        attrs: { large: "" }
                                      },
                                      [_vm._v("Download PDF")]
                                    )
                                  ],
                                  1
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
                                      "text-md-right": ""
                                    }
                                  },
                                  [
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "accent",
                                        attrs: { large: "", to: "/" }
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);