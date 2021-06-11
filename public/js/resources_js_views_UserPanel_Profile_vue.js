(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_UserPanel_Profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Profile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Profile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      profileData: {
        first_name: '',
        last_name: '',
        address: '',
        phone_number: '',
        email: '',
        role: ''
      }
    };
  },
  created: function created() {
    this.getProfileData();
  },
  methods: {
    getProfileData: function getProfileData() {
      var _this = this;

      axios.get('/api/user/profile').then(function (response) {
        _this.profileData = response.data;
      }, function (response) {
        var errors = response.body.message;
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
});

/***/ }),

/***/ "./resources/js/views/UserPanel/Profile.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/UserPanel/Profile.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Profile_vue_vue_type_template_id_c7843c38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=c7843c38& */ "./resources/js/views/UserPanel/Profile.vue?vue&type=template&id=c7843c38&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/views/UserPanel/Profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Profile_vue_vue_type_template_id_c7843c38___WEBPACK_IMPORTED_MODULE_0__.render,
  _Profile_vue_vue_type_template_id_c7843c38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/UserPanel/Profile.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/UserPanel/Profile.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/UserPanel/Profile.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/UserPanel/Profile.vue?vue&type=template&id=c7843c38&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/UserPanel/Profile.vue?vue&type=template&id=c7843c38& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_c7843c38___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_c7843c38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_c7843c38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Profile.vue?vue&type=template&id=c7843c38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Profile.vue?vue&type=template&id=c7843c38&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Profile.vue?vue&type=template&id=c7843c38&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/UserPanel/Profile.vue?vue&type=template&id=c7843c38& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "profile-wrapper emb-card pa-4" }, [
    _c("h4", [_vm._v("Profile Information")]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "pt-4" },
      [
        _c("div", { staticClass: "proflie-field mb-4" }, [
          _c("label", [_vm._v("First Name :")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.profileData.first_name))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "proflie-field mb-4" }, [
          _c("label", [_vm._v("Last Name :")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.profileData.last_name))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "proflie-field mb-4" }, [
          _c("label", [_vm._v("Mobile Number :")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.profileData.phone_number))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "proflie-field mb-4" }, [
          _c("label", [_vm._v("Location :")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.profileData.address))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "proflie-field mb-4" }, [
          _c("label", [_vm._v("E-mail :")]),
          _vm._v(" "),
          _c("span", [_vm._v(_vm._s(_vm.profileData.email))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "proflie-field mb-4" }, [
          _c("label", [_vm._v("Role :")]),
          _vm._v(" "),
          _c("span", [
            _vm._v(
              _vm._s(
                _vm.profileData.role == 3
                  ? "Member"
                  : _vm.profileData.role == 1
                  ? "Admin"
                  : "User"
              )
            )
          ])
        ]),
        _vm._v(" "),
        _c(
          "router-link",
          {
            attrs: { to: { name: "EditProfileInfo", query: { type: "info" } } }
          },
          [_c("v-btn", { staticClass: "accent mx-0" }, [_vm._v("Edit")])],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);