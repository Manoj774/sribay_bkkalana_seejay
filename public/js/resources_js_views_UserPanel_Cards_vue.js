(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_UserPanel_Cards_vue"],{

/***/ "./resources/js/views/UserPanel/Cards.vue":
/*!************************************************!*\
  !*** ./resources/js/views/UserPanel/Cards.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Cards_vue_vue_type_template_id_60ceff5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cards.vue?vue&type=template&id=60ceff5e& */ "./resources/js/views/UserPanel/Cards.vue?vue&type=template&id=60ceff5e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _Cards_vue_vue_type_template_id_60ceff5e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Cards_vue_vue_type_template_id_60ceff5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UserPanel/Cards.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/UserPanel/Cards.vue?vue&type=template&id=60ceff5e&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/UserPanel/Cards.vue?vue&type=template&id=60ceff5e& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_60ceff5e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_60ceff5e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Cards_vue_vue_type_template_id_60ceff5e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Cards.vue?vue&type=template&id=60ceff5e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Cards.vue?vue&type=template&id=60ceff5e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Cards.vue?vue&type=template&id=60ceff5e&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Cards.vue?vue&type=template&id=60ceff5e& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "cards-wrap emb-card pa-4" },
    [
      _c(
        "div",
        {
          staticClass:
            "d-sm-flex align-center justify-space-between mb-sm-4 mb-6"
        },
        [
          _c("h4", [_vm._v("Saved Card Infomation")]),
          _vm._v(" "),
          _c(
            "router-link",
            {
              attrs: {
                to: { name: "EditProfile", query: { type: "add-card" } }
              }
            },
            [
              _c("v-btn", { staticClass: "accent mx-0" }, [
                _vm._v("Add New Cards")
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "", sm6: "", md6: "", lg5: "", xl5: "" } },
            [
              _c("div", { staticClass: "emb-card pa-4" }, [
                _c("h5", [_vm._v("VISA -- Credit Card")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "pt-4" },
                  [
                    _c("div", { staticClass: "saved-card-box text-xl mb-6" }, [
                      _c("span", [_vm._v("4545 4XXX XXX5 4545")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "EditProfile",
                            query: { type: "edit-card" }
                          }
                        }
                      },
                      [
                        _c("v-btn", { staticClass: "accent mx-0" }, [
                          _vm._v("Edit")
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs12: "", sm6: "", md6: "", lg5: "", xl5: "" } },
            [
              _c("div", { staticClass: "emb-card pa-4" }, [
                _c("h5", [_vm._v("MasterCard -- Debit Card")]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "pt-4" },
                  [
                    _c("div", { staticClass: "saved-card-box text-xl mb-6" }, [
                      _c("span", [_vm._v("8585 8XXX XXX5 8585")])
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        attrs: {
                          to: {
                            name: "EditProfile",
                            query: { type: "edit-card" }
                          }
                        }
                      },
                      [
                        _c("v-btn", { staticClass: "accent mx-0" }, [
                          _vm._v("Edit")
                        ])
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
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);