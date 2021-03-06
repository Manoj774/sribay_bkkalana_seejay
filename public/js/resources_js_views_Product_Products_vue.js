(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Product_Products_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItem.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItem.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["data", "deleteProduct"],
  data: function data() {
    return {
      selectedItem: null
    };
  },
  methods: {
    deleteItem: function deleteItem(data) {
      this.$refs.deleteConfirmationDialog.openDialog();
      this.selectedItem = data;
    },
    onDeleteItemFromProductsList: function onDeleteItemFromProductsList() {
      this.$refs.deleteConfirmationDialog.close();
      this.$emit("deleteProduct", this.selectedItem);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItems.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItems.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItem */ "./resources/js/views/Product/ProductItem.vue");
/* harmony import */ var _ProductItemsListView_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItemsListView.vue */ "./resources/js/views/Product/ProductItemsListView.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 //import api from "../../api";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ["colxs", "colsm", "colmd", "collg", "colxl", "gridListView"],
  data: function data() {
    return {
      products: null,
      headersForListView: [{
        text: "ID",
        sortable: false,
        value: "count"
      }, {
        text: "Image",
        sortable: false,
        value: "image"
      }, {
        text: "Name",
        sortable: false,
        value: "name"
      }, {
        text: "Price",
        sortable: false,
        value: "price"
      }, {
        text: "Action",
        sortable: false,
        value: "action"
      }],
      listData: []
    };
  },
  mounted: function mounted() {
    this.getProductsData();
  },
  methods: {
    itemDeleted: function itemDeleted(item) {
      var deletedToDoList = this.listData;
      var index = deletedToDoList.indexOf(item);
      this.listData.splice(index, 1);
    },
    getProductsData: function getProductsData() {
      var _this = this;

      this.$http.get(this.$serverUrl + 'api/product', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + localStorage.getItem('bigStore.jwt')
        }
      }).then(function (response) {
        _this.products = response.body.products;
        var count = 1;

        for (var categoryKey in _this.products) {
          _this.listData.push({
            'count': count++,
            'image': _this.products[categoryKey].image_url,
            'name': _this.products[categoryKey].product_name,
            'price': _this.products[categoryKey].sell_price,
            'id': _this.products[categoryKey].id
          });
        }
      })["catch"](function (error) {
        console.log(error);
      });
    }
  },
  components: {
    ProductItem: _ProductItem__WEBPACK_IMPORTED_MODULE_0__.default,
    ProductItemsListView: _ProductItemsListView_vue__WEBPACK_IMPORTED_MODULE_1__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItemsListView.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItemsListView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  props: ["data", "deleteProduct"],
  data: function data() {
    return {
      headers: [{
        text: "ID",
        sortable: false,
        value: "count"
      }, {
        text: "Image",
        sortable: false,
        value: "image"
      }, {
        text: "Name",
        sortable: false,
        value: "name"
      }, {
        text: "Price",
        sortable: false,
        value: "price"
      }, {
        text: "Action",
        sortable: false,
        value: "action"
      }],
      selectedItem: null
    };
  },
  methods: {
    deleteItem: function deleteItem(data) {
      this.$refs.deleteConfirmationDialog.openDialog();
      this.selectedItem = data;
    },
    ondeleteItemFromListView: function ondeleteItemFromListView() {
      this.$refs.deleteConfirmationDialog.close();
      this.$emit("deleteProduct", this.selectedItem);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Products.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Products.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductItems_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItems.vue */ "./resources/js/views/Product/ProductItems.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      typeItems: ["Men", "Women", "Gadgets"],
      recentItems: ["This Week", "This Month", "Past Month"],
      noOfItems: ["10", "20", "30"],
      gridView: true,
      listView: false
    };
  },
  components: {
    ProductItems: _ProductItems_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  methods: {
    switchToGridView: function switchToGridView(value) {
      this.gridView = value;
    },
    switchToListView: function switchToListView(value) {
      this.gridView = value;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/Product/ProductItem.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Product/ProductItem.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductItem_vue_vue_type_template_id_1d05f5da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItem.vue?vue&type=template&id=1d05f5da& */ "./resources/js/views/Product/ProductItem.vue?vue&type=template&id=1d05f5da&");
/* harmony import */ var _ProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItem.vue?vue&type=script&lang=js& */ "./resources/js/views/Product/ProductItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductItem_vue_vue_type_template_id_1d05f5da___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductItem_vue_vue_type_template_id_1d05f5da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Product/ProductItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Product/ProductItems.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/Product/ProductItems.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductItems_vue_vue_type_template_id_41cf3e70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItems.vue?vue&type=template&id=41cf3e70& */ "./resources/js/views/Product/ProductItems.vue?vue&type=template&id=41cf3e70&");
/* harmony import */ var _ProductItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItems.vue?vue&type=script&lang=js& */ "./resources/js/views/Product/ProductItems.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductItems_vue_vue_type_template_id_41cf3e70___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductItems_vue_vue_type_template_id_41cf3e70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Product/ProductItems.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Product/ProductItemsListView.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/Product/ProductItemsListView.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductItemsListView_vue_vue_type_template_id_45539d1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductItemsListView.vue?vue&type=template&id=45539d1a& */ "./resources/js/views/Product/ProductItemsListView.vue?vue&type=template&id=45539d1a&");
/* harmony import */ var _ProductItemsListView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductItemsListView.vue?vue&type=script&lang=js& */ "./resources/js/views/Product/ProductItemsListView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductItemsListView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductItemsListView_vue_vue_type_template_id_45539d1a___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductItemsListView_vue_vue_type_template_id_45539d1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Product/ProductItemsListView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Product/Products.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Product/Products.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Products_vue_vue_type_template_id_560efc7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=560efc7a& */ "./resources/js/views/Product/Products.vue?vue&type=template&id=560efc7a&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/views/Product/Products.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Products_vue_vue_type_template_id_560efc7a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Products_vue_vue_type_template_id_560efc7a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Product/Products.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Product/ProductItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Product/ProductItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Product/ProductItems.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Product/ProductItems.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItems.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Product/ProductItemsListView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/Product/ProductItemsListView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItemsListView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductItemsListView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItemsListView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItemsListView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Product/Products.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Product/Products.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Products.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Product/ProductItem.vue?vue&type=template&id=1d05f5da&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Product/ProductItem.vue?vue&type=template&id=1d05f5da& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem_vue_vue_type_template_id_1d05f5da___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem_vue_vue_type_template_id_1d05f5da___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItem_vue_vue_type_template_id_1d05f5da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductItem.vue?vue&type=template&id=1d05f5da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItem.vue?vue&type=template&id=1d05f5da&");


/***/ }),

/***/ "./resources/js/views/Product/ProductItems.vue?vue&type=template&id=41cf3e70&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Product/ProductItems.vue?vue&type=template&id=41cf3e70& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItems_vue_vue_type_template_id_41cf3e70___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItems_vue_vue_type_template_id_41cf3e70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItems_vue_vue_type_template_id_41cf3e70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductItems.vue?vue&type=template&id=41cf3e70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItems.vue?vue&type=template&id=41cf3e70&");


/***/ }),

/***/ "./resources/js/views/Product/ProductItemsListView.vue?vue&type=template&id=45539d1a&":
/*!********************************************************************************************!*\
  !*** ./resources/js/views/Product/ProductItemsListView.vue?vue&type=template&id=45539d1a& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItemsListView_vue_vue_type_template_id_45539d1a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItemsListView_vue_vue_type_template_id_45539d1a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductItemsListView_vue_vue_type_template_id_45539d1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductItemsListView.vue?vue&type=template&id=45539d1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItemsListView.vue?vue&type=template&id=45539d1a&");


/***/ }),

/***/ "./resources/js/views/Product/Products.vue?vue&type=template&id=560efc7a&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Product/Products.vue?vue&type=template&id=560efc7a& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_560efc7a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_560efc7a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_560efc7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Products.vue?vue&type=template&id=560efc7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Products.vue?vue&type=template&id=560efc7a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItem.vue?vue&type=template&id=1d05f5da&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItem.vue?vue&type=template&id=1d05f5da& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "product-item-wrap emb-card" }, [
        _c(
          "div",
          { staticClass: "thumb-warp" },
          [
            _c("img", {
              attrs: {
                alt: "product",
                height: "800",
                width: "626",
                src: _vm.data.image
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "wishlist-icon" },
              [
                _c(
                  "v-btn",
                  {
                    attrs: { icon: "" },
                    on: {
                      click: function($event) {
                        return _vm.deleteItem(_vm.data)
                      }
                    }
                  },
                  [
                    _c("v-icon", { staticClass: "grey--text" }, [
                      _vm._v("mdi-delete")
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "router-link",
              { attrs: { to: "/product-edit/" + _vm.data.id } },
              [
                _c(
                  "div",
                  { staticClass: "add-to-cart" },
                  [
                    _c(
                      "v-btn",
                      { staticClass: "accent", attrs: { small: "", icon: "" } },
                      [_c("v-icon", [_vm._v("mdi-pencil")])],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "emb-card-content pa-4" }, [
          _c("h5", { staticClass: "font-weight-medium text-capitalize" }, [
            _vm._v(_vm._s(_vm.data.name))
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "inline-block" }, [
            _c("p", [_vm._v(_vm._s(_vm.data.category))])
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "emb-meta-info layout align-center justify-space-between"
            },
            [
              _c("div", { staticClass: "inline-block" }, [
                _c(
                  "h6",
                  { staticClass: "accent--text" },
                  [
                    _c("emb-currency-sign"),
                    _vm._v(_vm._s(_vm.data.price) + "\n\t\t\t\t\t")
                  ],
                  1
                )
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("emb-delete-confirmation-2", {
        ref: "deleteConfirmationDialog",
        attrs: {
          messageTitle: "Are You Sure You Want To Delete?",
          messageDescription:
            "Are you sure you want to delete this product permanently?",
          btn1: "Cancel",
          btn2: "Yes"
        },
        on: { onConfirm: _vm.onDeleteItemFromProductsList }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItems.vue?vue&type=template&id=41cf3e70&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItems.vue?vue&type=template&id=41cf3e70& ***!
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
    { staticClass: "shop-content-wrap" },
    [
      _vm.gridListView == true && _vm.listData != null
        ? [
            _c(
              "v-row",
              _vm._l(_vm.listData, function(category, index) {
                return _c(
                  "v-col",
                  {
                    key: index,
                    attrs: { cols: "12", sm: "6", md: "4", lg: "3" }
                  },
                  [
                    _c("product-item", {
                      attrs: { data: category },
                      on: { deleteProduct: _vm.itemDeleted }
                    })
                  ],
                  1
                )
              }),
              1
            )
          ]
        : [
            _c("product-items-list-view", {
              attrs: { data: _vm.listData },
              on: { deleteProduct: _vm.itemDeleted }
            })
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItemsListView.vue?vue&type=template&id=45539d1a&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/ProductItemsListView.vue?vue&type=template&id=45539d1a& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
        attrs: { headers: _vm.headers, items: _vm.data },
        scopedSlots: _vm._u([
          {
            key: "item.image",
            fn: function(ref) {
              var item = ref.item
              return [_c("img", { attrs: { src: item.image, width: "50px" } })]
            }
          },
          {
            key: "item.action",
            fn: function(ref) {
              var item = ref.item
              return [
                _c(
                  "router-link",
                  { attrs: { to: "/product-edit/" + item.id } },
                  [
                    _c(
                      "v-btn",
                      {
                        staticClass: "primary--text",
                        attrs: { small: "", icon: "" }
                      },
                      [_c("v-icon", [_vm._v("mdi-pencil")])],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
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
                            return _vm.deleteItem(item)
                          }
                        }
                      },
                      [_vm._v("mdi-delete")]
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      }),
      _vm._v(" "),
      _c("emb-delete-confirmation-2", {
        ref: "deleteConfirmationDialog",
        attrs: {
          messageTitle: "Are You Sure You Want To Delete?",
          messageDescription:
            "Are you sure you want to delete this product permanently?",
          btn1: "Cancel",
          btn2: "Yes"
        },
        on: { onConfirm: _vm.ondeleteItemFromListView }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Products.vue?vue&type=template&id=560efc7a&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Product/Products.vue?vue&type=template&id=560efc7a& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "emb-card pa-4 search-box-wrap" }, [
        _c("div", { staticClass: "d-flex justify-start align-center" }, [
          _vm._m(0),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "search-input d-flex justify-space-between align-center"
            },
            [
              _c(
                "div",
                { staticClass: "input-wrap" },
                [_c("v-text-field", { attrs: { label: "Search Projects" } })],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "action-btn-wrap" },
                [
                  _c(
                    "v-btn",
                    { staticClass: "mr-3", attrs: { color: "primary" } },
                    [_vm._v("Search")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        color: "primary",
                        to: "/admin-panel/product-add"
                      }
                    },
                    [
                      _vm._v("\n\t\t\t\t\t\tAdd Product\n\t\t\t\t\t\t"),
                      _c("v-icon", [_vm._v("mdi-plus-thick")])
                    ],
                    1
                  )
                ],
                1
              )
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "v-layout",
        { staticClass: "pt-12 ma-0", attrs: { row: "", wrap: "" } },
        [
          _c("v-flex", { attrs: { xs12: "", sm8: "", md9: "", "py-0": "" } }, [
            _c("h5", { staticClass: "mb-0 pt-2" }, [_vm._v("Product grid")])
          ]),
          _vm._v(" "),
          _c(
            "v-flex",
            {
              attrs: {
                xs12: "",
                sm4: "",
                md3: "",
                "py-0": "",
                "text-right": ""
              }
            },
            [
              _c(
                "v-icon",
                {
                  staticClass: "pa-2",
                  on: {
                    click: function($event) {
                      return _vm.switchToGridView(true)
                    }
                  }
                },
                [_vm._v("mdi-apps")]
              ),
              _vm._v(" "),
              _c(
                "v-icon",
                {
                  staticClass: "pa-2",
                  on: {
                    click: function($event) {
                      return _vm.switchToListView(false)
                    }
                  }
                },
                [_vm._v("mdi-format-list-bulleted ")]
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
        { staticClass: "d-md-inline-flex mb-5" },
        [
          _c("v-select", {
            staticClass: "mr-md-5",
            attrs: { items: _vm.typeItems, label: "Type" }
          }),
          _vm._v(" "),
          _c("v-select", {
            staticClass: "mr-md-5",
            attrs: { items: _vm.recentItems, label: "Recent" }
          }),
          _vm._v(" "),
          _c("v-select", {
            staticClass: "mr-md-5",
            attrs: { items: _vm.noOfItems, label: "No of Items" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("product-items", {
        attrs: {
          gridListView: _vm.gridView,
          cols: 6,
          colxl: 3,
          collg: 3,
          colmd: 4,
          colsm: 4,
          colxs: 12
        }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dash-title-wrap" }, [
      _c("h5", { staticClass: "dash-title mb-0" }, [_vm._v("Search")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);