(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_AdminPanel_Users_Users_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/Users.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/Users.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      users: [],
      headers: [{
        text: "Image",
        sortable: false,
        value: "profile_picture"
      }, {
        text: "First Name",
        sortable: false,
        value: "first_name"
      }, {
        text: "Last Name",
        sortable: false,
        value: "last_name"
      }, {
        text: "Email",
        sortable: false,
        value: "email"
      }, {
        text: "Action",
        sortable: false,
        value: "action"
      }],
      selectDeletedItem: null
    };
  },
  mounted: function mounted() {
    this.getAdminUsers();
  },
  methods: {
    getAdminUsers: function getAdminUsers() {
      var _this = this;

      axios.get(this.$serverUrl + 'api/users', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('sriBay.jwt')
        }
      }).then(function (response) {
        var responseData = response.data.users;
        _this.users = responseData;
      }, function (response) {
        var errors = response.data.message;
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

/***/ "./resources/js/views/AdminPanel/Users/Users.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/AdminPanel/Users/Users.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Users_vue_vue_type_template_id_282c4f74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users.vue?vue&type=template&id=282c4f74& */ "./resources/js/views/AdminPanel/Users/Users.vue?vue&type=template&id=282c4f74&");
/* harmony import */ var _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users.vue?vue&type=script&lang=js& */ "./resources/js/views/AdminPanel/Users/Users.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Users_vue_vue_type_template_id_282c4f74___WEBPACK_IMPORTED_MODULE_0__.render,
  _Users_vue_vue_type_template_id_282c4f74___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AdminPanel/Users/Users.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/AdminPanel/Users/Users.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/Users/Users.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/Users.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/AdminPanel/Users/Users.vue?vue&type=template&id=282c4f74&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/AdminPanel/Users/Users.vue?vue&type=template&id=282c4f74& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_282c4f74___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_282c4f74___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Users_vue_vue_type_template_id_282c4f74___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Users.vue?vue&type=template&id=282c4f74& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/Users.vue?vue&type=template&id=282c4f74&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/Users.vue?vue&type=template&id=282c4f74&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/AdminPanel/Users/Users.vue?vue&type=template&id=282c4f74& ***!
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
    "v-row",
    [
      _c("v-col", { attrs: { cols: "12", sm: "12", md: "12", lg: "12" } }, [
        _c("div", { staticClass: "emb-card pa-4 search-box-wrap" }, [
          _c("div", { staticClass: "d-flex justify-end align-center" }, [
            _c(
              "div",
              { staticClass: "action-btn-wrap" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: {
                      color: "primary",
                      to: "/sriBay-admin/users/add-user"
                    }
                  },
                  [
                    _vm._v(
                      "\n                        Add Admin\n                        "
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
              headers: _vm.headers,
              items: _vm.users,
              "items-per-page": 20
            },
            scopedSlots: _vm._u([
              {
                key: "top",
                fn: function() {
                  return [
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
                  ]
                },
                proxy: true
              },
              {
                key: "item.profile_picture",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c("img", {
                      attrs: { src: item.profile_picture, width: "40" }
                    })
                  ]
                }
              },
              {
                key: "item.action",
                fn: function(ref) {
                  var item = ref.item
                  return [
                    _c(
                      "v-icon",
                      {
                        attrs: { small: "" },
                        on: {
                          click: function($event) {
                            return _vm.deleteItemFromCollaborationList(item.id)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                    mdi-delete\n                "
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