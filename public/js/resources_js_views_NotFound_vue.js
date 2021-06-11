(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_NotFound_vue"],{

/***/ "./resources/js/views/NotFound.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/NotFound.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NotFound_vue_vue_type_template_id_5dcdfd0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound.vue?vue&type=template&id=5dcdfd0e& */ "./resources/js/views/NotFound.vue?vue&type=template&id=5dcdfd0e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _NotFound_vue_vue_type_template_id_5dcdfd0e___WEBPACK_IMPORTED_MODULE_0__.render,
  _NotFound_vue_vue_type_template_id_5dcdfd0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/NotFound.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/NotFound.vue?vue&type=template&id=5dcdfd0e&":
/*!************************************************************************!*\
  !*** ./resources/js/views/NotFound.vue?vue&type=template&id=5dcdfd0e& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_5dcdfd0e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_5dcdfd0e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_5dcdfd0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NotFound.vue?vue&type=template&id=5dcdfd0e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/NotFound.vue?vue&type=template&id=5dcdfd0e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/NotFound.vue?vue&type=template&id=5dcdfd0e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/NotFound.vue?vue&type=template&id=5dcdfd0e& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      _c(
        "div",
        { staticClass: "headers" },
        [
          _vm.$route.meta.header != 2 && _vm.$route.meta.header != 3
            ? _c("emb-header-v1")
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "emb-notFound-wrap section-gap" }, [
        _c("div", { staticClass: "container" }, [
          _c(
            "div",
            { staticClass: "layout align-center justify-center" },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "", sm9: "", md6: "", lg5: "", xl5: "" } },
                [
                  _c(
                    "div",
                    { staticClass: "emb-card text-center pb-12 pa-6" },
                    [
                      _c("h1", [_vm._v("404")]),
                      _vm._v(" "),
                      _c("h5", { staticClass: "mb-4" }, [
                        _vm._v(
                          "We can’t seem to find the page you’re looking for."
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "accent",
                          attrs: { block: "", to: "/" }
                        },
                        [_vm._v("Go To Home")]
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("emb-footer-V1", {
        attrs: {
          title: "About company",
          description:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quo nesciunt pariatur laboriosam accusantium? Doloremque fugit unde explicabo consequuntur aliquid laudantium id voluptatum? Saepe earum, suscipit ex quos eius natus. ",
          img: "/static/images/cards.png"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);