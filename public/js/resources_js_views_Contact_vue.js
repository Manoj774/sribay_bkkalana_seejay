(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Contact_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Contact.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Contact.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
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
//import api from "Api";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      valid: false,
      contactInfo: "",
      emailRules: [function (v) {
        return !!v || "E-mail is required";
      }, function (v) {
        return /.+@.+/.test(v) || "E-mail must be valid";
      }],
      inputRules: {
        basictextRules: [function (v) {
          return !!v || "This field should not be empty";
        }]
      }
    };
  },
  mounted: function mounted() {
    this.getContactInfo();
  },
  methods: {
    getContactInfo: function getContactInfo() {// api
      //   .get("contact.json")
      //   .then(response => {
      //     this.contactInfo = response.data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    },
    saveDetails: function saveDetails() {
      this.$refs.form.validate();
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Contact.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Contact.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Contact_vue_vue_type_template_id_1d91a851___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact.vue?vue&type=template&id=1d91a851& */ "./resources/js/views/Contact.vue?vue&type=template&id=1d91a851&");
/* harmony import */ var _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Contact.vue?vue&type=script&lang=js& */ "./resources/js/views/Contact.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Contact_vue_vue_type_template_id_1d91a851___WEBPACK_IMPORTED_MODULE_0__.render,
  _Contact_vue_vue_type_template_id_1d91a851___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Contact.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Contact.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Contact.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Contact.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Contact.vue?vue&type=template&id=1d91a851&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Contact.vue?vue&type=template&id=1d91a851& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_1d91a851___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_1d91a851___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Contact_vue_vue_type_template_id_1d91a851___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Contact.vue?vue&type=template&id=1d91a851& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Contact.vue?vue&type=template&id=1d91a851&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Contact.vue?vue&type=template&id=1d91a851&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Contact.vue?vue&type=template&id=1d91a851& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    { staticClass: "emb-contact-wrap" },
    [
      _c("emb-page-title", {
        attrs: {
          heading: "Contact Us",
          subHeading: "Share your feedback with us."
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "emb-contact-content" }, [
        _c("div", { staticClass: "Contact-page" }, [
          _c("div", { staticClass: "contact-map" }, [_c("emb-google-map")], 1)
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "contact-info-wrapper" },
          [
            _c("v-container", { attrs: { "grid-list-xl": "", "py-0": "" } }, [
              _c(
                "div",
                { staticClass: "section-gap" },
                [
                  _c(
                    "v-layout",
                    { attrs: { row: "", wrap: "" } },
                    [
                      _c(
                        "v-flex",
                        { attrs: { sm12: "", md12: "", lg5: "", xl5: "" } },
                        [
                          _c("div", { staticClass: "sec-title" }, [
                            _c(
                              "h2",
                              {
                                staticClass:
                                  "v-layout justify-start align-center"
                              },
                              [_vm._v("Contact Info")]
                            ),
                            _vm._v(" "),
                            _c("h5", { staticClass: "font-italic mb-6" }, [
                              _vm._v(_vm._s(_vm.contactInfo.info))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "mb-6" }, [
                            _c("h3", [_vm._v("Call")]),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "color-inherit",
                                attrs: { href: "tel:12345688" }
                              },
                              [
                                _vm._v(
                                  "\n\t\t\t\t\t\t\t\t\t\t" +
                                    _vm._s(_vm.contactInfo.call)
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "mb-6" }, [
                            _c("h3", [_vm._v("Mail")]),
                            _vm._v(" "),
                            _c(
                              "a",
                              {
                                staticClass: "color-inherit",
                                attrs: {
                                  href: "mailto:support@theironnetwork.org"
                                }
                              },
                              [_vm._v(_vm._s(_vm.contactInfo.mail))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "mb-6" }, [
                            _c("h3", [_vm._v("Address")]),
                            _vm._v(" "),
                            _c("p", [_vm._v(_vm._s(_vm.contactInfo.address))])
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { sm12: "", md12: "", lg7: "", xl7: "" } },
                        [
                          _c("div", { staticClass: "sec-title" }, [
                            _c("h2", [_vm._v("Write to Us")])
                          ]),
                          _vm._v(" "),
                          _c(
                            "v-form",
                            {
                              ref: "form",
                              model: {
                                value: _vm.valid,
                                callback: function($$v) {
                                  _vm.valid = $$v
                                },
                                expression: "valid"
                              }
                            },
                            [
                              _c("v-text-field", {
                                attrs: {
                                  type: "text",
                                  placeholder: "First Name",
                                  rules: _vm.inputRules.basictextRules
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  type: "text",
                                  placeholder: "Last Name",
                                  rules: _vm.inputRules.basictextRules
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  type: "email",
                                  placeholder: "Email",
                                  rules: _vm.emailRules
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: {
                                  type: "text",
                                  placeholder: "Subject",
                                  rules: _vm.inputRules.basictextRules
                                }
                              }),
                              _vm._v(" "),
                              _c("v-textarea", {
                                attrs: {
                                  rows: "2",
                                  label: "Leave a Message",
                                  rules: _vm.inputRules.basictextRules
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticClass: "accent mx-0 mt-4",
                                  attrs: { large: "" },
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      $event.preventDefault()
                                      return _vm.saveDetails.apply(
                                        null,
                                        arguments
                                      )
                                    }
                                  }
                                },
                                [_vm._v("\tSend Message")]
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
            ])
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);