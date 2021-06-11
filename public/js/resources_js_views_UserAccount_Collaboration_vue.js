(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_UserAccount_Collaboration_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserAccount/Collaboration.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserAccount/Collaboration.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      collaborationList: null,
      open: false,
      select: null,
      valid: true,
      items: [{
        text: "Admin"
      }, {
        text: "Write"
      }, {
        text: "Read"
      }],
      name: "",
      nameRules: [function (v) {
        return !!v || "Name is required";
      }],
      email: "",
      emailRules: [function (v) {
        return !!v || "E-mail is required";
      }, function (v) {
        return /.+@.+/.test(v) || "E-mail must be valid";
      }],
      selectRules: [function (v) {
        return !!v || "Item is required";
      }],
      loader: true,
      collaborationData: [],
      headers: [{
        text: "Image",
        sortable: false,
        value: "image"
      }, {
        text: "Name",
        sortable: false,
        value: "name"
      }, {
        text: "Email",
        sortable: false,
        value: "email"
      }, {
        text: "Access",
        sortable: false,
        value: "access"
      }, {
        text: "Action",
        sortable: false,
        value: "action"
      }],
      selectDeletedItem: null
    };
  },
  mounted: function mounted() {
    this.getCollaborationData();
  },
  methods: {
    getCollaborationData: function getCollaborationData() {// api
      //   .get("collaborationData.json")
      //   .then(response => {
      //     this.collaborationList = response.data;
      //     this.collaborationList.forEach(element => {
      //       this.collaborationData.push(element);
      //     });
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    },
    addItemToCollaborationList: function addItemToCollaborationList(item) {
      if (this.$refs.form.validate()) {
        this.collaborationData.push(item);
        this.open = false;
        this.$refs.form.reset();
      } else {
        console.log("Invalid Inputs");
      }
    },
    deleteItemFromCollaborationList: function deleteItemFromCollaborationList(item) {
      this.$refs.deleteConfirmationDialog.openDialog();
      this.selectDeletedItem = item;
    },
    ondeleteItemFromCollaborationList: function ondeleteItemFromCollaborationList() {
      this.$refs.deleteConfirmationDialog.close();
      var index = this.collaborationData.indexOf(this.selectDeletedItem);
      this.collaborationData.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/UserAccount/Collaboration.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/UserAccount/Collaboration.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Collaboration_vue_vue_type_template_id_973a6aae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collaboration.vue?vue&type=template&id=973a6aae& */ "./resources/js/views/UserAccount/Collaboration.vue?vue&type=template&id=973a6aae&");
/* harmony import */ var _Collaboration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Collaboration.vue?vue&type=script&lang=js& */ "./resources/js/views/UserAccount/Collaboration.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Collaboration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Collaboration_vue_vue_type_template_id_973a6aae___WEBPACK_IMPORTED_MODULE_0__.render,
  _Collaboration_vue_vue_type_template_id_973a6aae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UserAccount/Collaboration.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/UserAccount/Collaboration.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/UserAccount/Collaboration.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collaboration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Collaboration.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserAccount/Collaboration.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Collaboration_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/UserAccount/Collaboration.vue?vue&type=template&id=973a6aae&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/UserAccount/Collaboration.vue?vue&type=template&id=973a6aae& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collaboration_vue_vue_type_template_id_973a6aae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collaboration_vue_vue_type_template_id_973a6aae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Collaboration_vue_vue_type_template_id_973a6aae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Collaboration.vue?vue&type=template&id=973a6aae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserAccount/Collaboration.vue?vue&type=template&id=973a6aae&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserAccount/Collaboration.vue?vue&type=template&id=973a6aae&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserAccount/Collaboration.vue?vue&type=template&id=973a6aae& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "emb-card pa-4" },
    [
      _c(
        "v-dialog",
        {
          staticClass: "pa-4",
          attrs: { "max-width": "500px" },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function(ref) {
                var on = ref.on
                return [
                  _c(
                    "v-btn",
                    _vm._g(
                      {
                        attrs: { slot: "activator", color: "primary" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            _vm.open = true
                          }
                        },
                        slot: "activator"
                      },
                      on
                    ),
                    [_vm._v("\n\t\t\t\t\tAdd Users\n\t\t\t\t")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.open,
            callback: function($$v) {
              _vm.open = $$v
            },
            expression: "open"
          }
        },
        [
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c("v-card-title", { staticClass: "h4" }, [
                _vm._v("\n\t\t\t\tAdd New User\n\t\t\t\t")
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-form",
                    {
                      ref: "form",
                      attrs: { "lazy-validation": "" },
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
                          rules: _vm.nameRules,
                          label: "Name",
                          required: ""
                        },
                        model: {
                          value: _vm.name,
                          callback: function($$v) {
                            _vm.name = $$v
                          },
                          expression: "name"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          rules: _vm.emailRules,
                          label: "E-mail",
                          required: ""
                        },
                        model: {
                          value: _vm.email,
                          callback: function($$v) {
                            _vm.email = $$v
                          },
                          expression: "email"
                        }
                      }),
                      _vm._v(" "),
                      _c("v-select", {
                        attrs: {
                          items: _vm.items,
                          rules: [
                            function(v) {
                              return !!v || "Item is required"
                            }
                          ],
                          label: "Access Type",
                          required: ""
                        },
                        model: {
                          value: _vm.select,
                          callback: function($$v) {
                            _vm.select = $$v
                          },
                          expression: "select"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "mr-3",
                          attrs: { color: "primary" },
                          on: {
                            click: function($event) {
                              _vm.open = false
                            }
                          }
                        },
                        [_vm._v("Close")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { disabled: !_vm.valid, color: "error" },
                          on: {
                            click: function($event) {
                              return _vm.addItemToCollaborationList({
                                image: "/static/images/user.png",
                                name: _vm.name,
                                email: _vm.email,
                                access: _vm.select
                              })
                            }
                          }
                        },
                        [_vm._v("\n\t\t\t\t\t\t\tSubmit\n\t\t\t\t\t\t")]
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
      ),
      _vm._v(" "),
      [
        _c("v-data-table", {
          attrs: {
            headers: _vm.headers,
            items: _vm.collaborationData,
            "hide-default-footer": ""
          },
          scopedSlots: _vm._u([
            {
              key: "item.image",
              fn: function(ref) {
                var item = ref.item
                return [_c("img", { attrs: { src: item.image, width: "40" } })]
              }
            },
            {
              key: "item.action",
              fn: function(ref) {
                var item = ref.item
                return [
                  _c(
                    "v-btn",
                    { attrs: { icon: "", color: "grey", small: "" } },
                    [
                      _c(
                        "v-icon",
                        {
                          staticClass: "error--text",
                          on: {
                            click: function($event) {
                              return _vm.deleteItemFromCollaborationList(item)
                            }
                          }
                        },
                        [_vm._v("delete")]
                      )
                    ],
                    1
                  )
                ]
              }
            }
          ])
        })
      ],
      _vm._v(" "),
      _c("emb-delete-confirmation-2", {
        ref: "deleteConfirmationDialog",
        attrs: {
          messageTitle: "Are you sure you want to delete?",
          messageDescription:
            "Are you sure you want to delete this user permanently?",
          btn1: "Cancel",
          btn2: "Yes"
        },
        on: { onConfirm: _vm.ondeleteItemFromCollaborationList }
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);