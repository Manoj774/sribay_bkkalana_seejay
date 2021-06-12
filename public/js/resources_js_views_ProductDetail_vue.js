(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_ProductDetail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ProductDetail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ProductDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["cart", "wishlist"])),
  mounted: function mounted() {
    if (this.$router.history.current.params.id != null && this.$router.history.current.params.user != null) {
      this.getProductDetailWithUser(this.$router.history.current.params.id, this.$router.history.current.params.user);
    } else {
      this.getProductDetails(this.$router.history.current.params.id);
    }

    if (JSON.parse(localStorage.getItem('user')) != null) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
  },
  data: function data() {
    return {
      tab: null,
      title: "",
      id: "",
      selectedImage: null,
      selectedProduct: null,
      generateLink: null,
      model: 'tab-2',
      role: localStorage.getItem('role'),
      dialog: false,
      login: {
        email: null,
        password: null,
        checkbox: false
      },
      login_valid: false,
      register: {
        first_name: null,
        last_name: null,
        phone_number: null,
        email: null,
        password: null,
        confirm_password: null
      },
      register_valid: false,
      emailRules: [function (v) {
        return !!v || 'E-mail is required';
      }, function (v) {
        return /.+@.+/.test(v) || 'E-mail must be valid';
      }],
      inputRules: {
        basictextRules: [function (v) {
          return !!v || 'This field should not be empty';
        }]
      },
      user: null,
      buyNowItem: null
    };
  },
  methods: {
    buyNow: function buyNow(item) {
      this.buyNowItem = item;

      if (this.user == null) {
        this.dialog = true;
      } else {
        this.buyNowAndCart();
      }
    },
    buyNowAndCart: function buyNowAndCart() {
      var _this = this;

      var newProduct = {
        id: this.buyNowItem.id,
        image: this.buyNowItem.images[0].image_url,
        name: this.buyNowItem.product_name,
        price: this.buyNowItem.sell_price,
        quantity: this.buyNowItem.quantity ? this.buyNowItem.quantity : 1,
        total: this.buyNowItem.sell_price * (this.buyNowItem.quantity ? this.buyNowItem.quantity : 1),
        user: this.buyNowItem.user
      };
      axios.post('/api/cart/add-to-cart', newProduct).then(function (response) {
        _this.$router.push({
          path: '/checkout/payment'
        });
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
    registerUser: function registerUser() {
      var _this2 = this;

      this.$refs.register_form.validate();

      if (this.register_valid === true) {
        axios.post(this.$serverUrl + 'api/register', this.register).then(function (response) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('role', response.data.role);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          _this2.user = response.data.user;

          _this2.buyNowAndCart();

          window.location.href = '/checkout/payment'; // this.$router.push({path:'/checkout/payment'});
        })["catch"](function (error) {
          _this2.$toast.open({
            message: error.message,
            type: 'error'
          });
        });
      }
    },
    loginUser: function loginUser() {
      var _this3 = this;

      this.$refs.login_form.validate();

      if (this.login_valid === true) {
        axios.post(this.$serverUrl + 'api/login', this.login).then(function (response) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('role', response.data.role);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          _this3.user = response.data.user;

          _this3.buyNowAndCart();

          window.location.href = '/checkout/payment'; // this.$router.push({path:'/checkout/payment'});
        })["catch"](function (error) {
          _this3.$toast.open({
            message: error.message,
            type: 'error'
          });
        });
      }
    },
    toggleCopy: function toggleCopy() {
      this.marker = !this.marker;
    },
    toggleGenerate: function toggleGenerate() {
      var _this4 = this;

      axios.post(this.$serverUrl + 'api/product/link-generate', {
        productId: this.selectedProduct.id
      }).then(function (response) {
        _this4.generateLink = decodeURIComponent(response.data.generateLink);
      }, function (response) {
        var errors = response.data.message;
        var html = '';

        for (var i in errors) {
          html += errors[i];
        }

        _this4.$toast.open({
          message: html,
          type: 'error'
        });
      });
    },
    getProductDetails: function getProductDetails(id) {
      var _this5 = this;

      axios.get(this.$serverUrl + 'api/product/' + id + '').then(function (response) {
        var productDetails = response.data.product;
        _this5.selectedProduct = productDetails;
        _this5.selectedProduct.quantity = 1;
        _this5.selectedImage = productDetails.images[0].image_url;
      }, function (response) {
        var errors = response.data.message;
        var html = '';

        for (var i in errors) {
          html += errors[i];
        }

        _this5.$toast.open({
          message: html,
          type: 'error'
        });
      });
    },
    getProductDetailWithUser: function getProductDetailWithUser(id, user) {
      var _this6 = this;

      axios.get(this.$serverUrl + 'api/product/' + id + '/' + user + '').then(function (response) {
        var productDetails = response.data.product;
        _this6.selectedProduct = productDetails;
        _this6.selectedProduct.quantity = 1;
        _this6.selectedImage = productDetails.images[0].image_url;
      }, function (response) {
        var errors = response.data.message;
        var html = '';

        for (var i in errors) {
          html += errors[i];
        }

        _this6.$toast.open({
          message: html,
          type: 'error'
        });
      });
    },
    productQuantity: function productQuantity(value) {
      this.selectedProduct.quantity = value;
    },

    /* for opening the popup **/
    showReviewPopup: function showReviewPopup() {
      this.$refs.productReviewPopup.open();
    },

    /* for toggling image **/
    togglePreviewImage: function togglePreviewImage(image) {
      this.selectedImage = image;
    },

    /* for adding product in car	**/
    addProductToCart: function addProductToCart(item) {
      var _this7 = this;

      this.$snotify.success('Product adding to the cart', {
        closeOnClick: false,
        pauseOnHover: false,
        timeout: 1000,
        showProgressBar: false
      });
      setTimeout(function () {
        var newProduct = {
          id: item.id,
          image: item.images[0].image_url,
          name: item.product_name,
          price: item.sell_price,
          quantity: item.quantity ? item.quantity : 1,
          total: item.sell_price * (item.quantity ? item.quantity : 1),
          aff_user_id: item.user
        };
        axios.post('/api/cart/add-to-cart', newProduct).then(function (response) {
          window.location.href = _this7.$router.history.current.path; // console.log(this.$router.history.current);
          // console.log(response.data.message)
        }, function (response) {
          var errors = response.data.message;
          var html = '';

          for (var i in errors) {
            html += errors[i];
          }

          _this7.$toast.open({
            message: html,
            type: 'error'
          });
        });
      }, 50);
    },

    /* check weather the product exist in cart
        * retun the boolean
    */
    ifItemExistInCart: function ifItemExistInCart(result) {
      var exists = false;

      var _iterator = _createForOfIteratorHelper(this.cart),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;

          if (item.id == result.objectID) {
            exists = true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return exists;
    },

    /* to add a product in wishlist */
    addItemToWishlist: function addItemToWishlist(product) {
      var _this8 = this;

      if (this.ifItemExistInWishlist(product)) {
        this.$snotify.error('Product already exist in the wishlist', {
          showProgressBar: false
        });
      } else {
        this.$snotify.success('Product adding to the wishlist', {
          closeOnClick: false,
          pauseOnHover: false,
          timeout: 1000,
          showProgressBar: false
        });
        setTimeout(function () {
          _this8.$store.dispatch("addItemToWishlist", product);
        }, 2000);
      }
    },

    /* check weather the product exist in the wishlist
     * Return boolean
    */
    ifItemExistInWishlist: function ifItemExistInWishlist(result) {
      var exists = false;

      var _iterator2 = _createForOfIteratorHelper(this.wishlist),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var item = _step2.value;

          if (item.id == result.objectID) {
            exists = true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return exists;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/ProductDetail.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/ProductDetail.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProductDetail_vue_vue_type_template_id_00c560de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=template&id=00c560de& */ "./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de&");
/* harmony import */ var _ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductDetail.vue?vue&type=script&lang=js& */ "./resources/js/views/ProductDetail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProductDetail_vue_vue_type_template_id_00c560de___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProductDetail_vue_vue_type_template_id_00c560de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/ProductDetail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/ProductDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/ProductDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ProductDetail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_00c560de___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_00c560de___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductDetail_vue_vue_type_template_id_00c560de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProductDetail.vue?vue&type=template&id=00c560de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/ProductDetail.vue?vue&type=template&id=00c560de& ***!
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
  return _c(
    "div",
    { staticClass: "emb-product-detail" },
    [
      _vm.selectedProduct != null
        ? [
            _c("emb-page-title", {
              attrs: { heading: _vm.selectedProduct.product_name }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "emb-productDetail-content white" },
              [
                _c(
                  "div",
                  { staticClass: "product-detail section-gap" },
                  [
                    _c(
                      "v-container",
                      { attrs: { "grid-list-xl": "", "py-0": "" } },
                      [
                        _c(
                          "v-layout",
                          {
                            attrs: {
                              row: "",
                              wrap: "",
                              "product-detail-row": ""
                            }
                          },
                          [
                            _c(
                              "v-flex",
                              {
                                attrs: {
                                  xs12: "",
                                  sm12: "",
                                  md6: "",
                                  lg6: "",
                                  xl6: "",
                                  "text-center": ""
                                }
                              },
                              [
                                _c(
                                  "v-layout",
                                  { attrs: { row: "", wrap: "" } },
                                  [
                                    _c(
                                      "v-flex",
                                      {
                                        attrs: {
                                          xs2: "",
                                          sm2: "",
                                          md2: "",
                                          lg2: "",
                                          xl2: "",
                                          "product-gallery": ""
                                        }
                                      },
                                      _vm._l(
                                        _vm.selectedProduct.images,
                                        function(productItemImg, key) {
                                          return _c(
                                            "div",
                                            {
                                              key: key,
                                              staticClass:
                                                "detail-image-gallery d-inline-block mb-6 mx-2",
                                              on: {
                                                mouseover: function($event) {
                                                  return _vm.togglePreviewImage(
                                                    productItemImg.image_url
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c(
                                                "a",
                                                {
                                                  attrs: {
                                                    href: "javascript:void(0)"
                                                  }
                                                },
                                                [
                                                  _c("img", {
                                                    attrs: {
                                                      src:
                                                        productItemImg.image_url,
                                                      width: "71",
                                                      height: "91",
                                                      alt: "product image"
                                                    }
                                                  })
                                                ]
                                              )
                                            ]
                                          )
                                        }
                                      ),
                                      0
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "v-flex",
                                      {
                                        attrs: {
                                          xs10: "",
                                          lg10: "",
                                          sm10: "",
                                          md10: "",
                                          xl10: "",
                                          "product-detail-img": ""
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass: "product-detail-thumb"
                                          },
                                          [
                                            _c(
                                              "div",
                                              {
                                                staticClass:
                                                  "image-wrapper emb-card"
                                              },
                                              [
                                                _c(
                                                  "a",
                                                  {
                                                    attrs: {
                                                      href: "javascript:void(0)"
                                                    }
                                                  },
                                                  [
                                                    _c("img", {
                                                      staticClass: "detailImg",
                                                      attrs: {
                                                        src: _vm.selectedImage,
                                                        width: "auto",
                                                        height: "auto",
                                                        alt:
                                                          "product detail image"
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  ],
                                  1
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
                                  sm12: "",
                                  md6: "",
                                  lg6: "",
                                  xl5: ""
                                }
                              },
                              [
                                _c("router-link", { attrs: { to: "/" } }, [
                                  _vm._v("Back to shop")
                                ]),
                                _vm._v(" "),
                                _c("h5", [
                                  _vm._v(
                                    _vm._s(_vm.selectedProduct.product_name)
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "h4",
                                  { staticClass: "accent--text" },
                                  [
                                    _c("emb-currency-sign"),
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(
                                          _vm.selectedProduct.sell_price.toFixed(
                                            2
                                          )
                                        ) +
                                        "\n                            "
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "product-availablity list-unstyled pl-0 mb-4 mt-4"
                                  },
                                  [
                                    _c(
                                      "li",
                                      [
                                        _vm.selectedProduct.stat === 1
                                          ? [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "font-weight-medium"
                                                },
                                                [_vm._v("Availablity")]
                                              ),
                                              _vm._v(" : "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "font-weight-regular"
                                                },
                                                [_vm._v("In Stocks")]
                                              )
                                            ]
                                          : [
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "font-weight-medium"
                                                },
                                                [_vm._v("Availablity")]
                                              ),
                                              _vm._v(" : "),
                                              _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "font-weight-regular"
                                                },
                                                [_vm._v("Out Of Stocks")]
                                              )
                                            ]
                                      ],
                                      2
                                    ),
                                    _vm._v(" "),
                                    _c("li"),
                                    _vm._v(" "),
                                    _c("li", [
                                      _c(
                                        "span",
                                        { staticClass: "font-weight-medium" },
                                        [_vm._v("Tags")]
                                      ),
                                      _vm._v(" "),
                                      _c("span", [_vm._v(":")])
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "select-group mb-4" },
                                  [
                                    _c(
                                      "v-layout",
                                      { attrs: { wrap: "" } },
                                      [
                                        _c(
                                          "v-flex",
                                          {
                                            attrs: {
                                              xs12: "",
                                              sm4: "",
                                              lg4: "",
                                              md4: "",
                                              lg3: "",
                                              xl3: "",
                                              "pb-0": ""
                                            }
                                          },
                                          [
                                            _c("v-select", {
                                              attrs: { items: [1, 2, 3, 4, 5] },
                                              on: {
                                                change: _vm.productQuantity
                                              },
                                              model: {
                                                value:
                                                  _vm.selectedProduct.quantity,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.selectedProduct,
                                                    "quantity",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "selectedProduct.quantity"
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
                                _c("div", { staticClass: "mb-6" }, [
                                  _c(
                                    "a",
                                    {
                                      staticClass:
                                        "color-inherit text-underline",
                                      attrs: { href: "javascript:void(0)" },
                                      on: {
                                        click: function($event) {
                                          return _vm.addItemToWishlist(
                                            _vm.selectedProduct
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    Add To WishList\n                                "
                                      )
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "mb-6 btn-wrap" },
                                  [
                                    _vm.ifItemExistInCart(_vm.selectedProduct)
                                      ? _c(
                                          "v-btn",
                                          {
                                            staticClass: "accent cpx-0",
                                            attrs: { large: "", to: "/cart" }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    View Cart\n                                "
                                            )
                                          ]
                                        )
                                      : _c(
                                          "v-btn",
                                          {
                                            staticClass:
                                              "accent d-inline-block cpx-0",
                                            attrs: { large: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.addProductToCart(
                                                  _vm.selectedProduct
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    Add To Cart\n                                "
                                            )
                                          ]
                                        ),
                                    _vm._v(" "),
                                    _c(
                                      "v-btn",
                                      {
                                        staticClass: "white buyProduct cpx-0",
                                        attrs: { large: "" },
                                        on: {
                                          click: function($event) {
                                            return _vm.buyNow(
                                              _vm.selectedProduct
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "Buy\n                                    Now\n                                "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _vm.role == 3 || _vm.role == 1
                                  ? _c(
                                      "div",
                                      [
                                        _c(
                                          "v-row",
                                          [
                                            _c(
                                              "v-col",
                                              { attrs: { cols: "12" } },
                                              [
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "font-weight-medium"
                                                  },
                                                  [_vm._v("Affiliate")]
                                                ),
                                                _vm._v(" "),
                                                _c("v-text-field", {
                                                  attrs: {
                                                    "append-icon":
                                                      "mdi-content-copy ",
                                                    "prepend-icon":
                                                      "mdi-reload ",
                                                    label: "Generate Link",
                                                    type: "text"
                                                  },
                                                  on: {
                                                    "click:append":
                                                      _vm.toggleCopy,
                                                    "click:prepend": function(
                                                      $event
                                                    ) {
                                                      return _vm.toggleGenerate()
                                                    }
                                                  },
                                                  model: {
                                                    value: _vm.generateLink,
                                                    callback: function($$v) {
                                                      _vm.generateLink = $$v
                                                    },
                                                    expression: "generateLink"
                                                  }
                                                }),
                                                _vm._v(" "),
                                                _c(
                                                  "v-chip",
                                                  {
                                                    staticClass: "ma-2",
                                                    attrs: {
                                                      color: "pink",
                                                      label: "",
                                                      "text-color": "white"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                            Commission Rate: " +
                                                        _vm._s(
                                                          this.selectedProduct
                                                            .selling_margin
                                                        ) +
                                                        "%\n                                        "
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c(
                                                  "v-chip",
                                                  {
                                                    staticClass: "ma-2",
                                                    attrs: {
                                                      color: "primary",
                                                      label: "",
                                                      "text-color": "white"
                                                    }
                                                  },
                                                  [
                                                    _vm._v(
                                                      "\n                                            Estimated Commissions:\n                                            "
                                                    ),
                                                    _c("emb-currency-sign"),
                                                    _vm._v(
                                                      "\n                                            " +
                                                        _vm._s(
                                                          (
                                                            (this
                                                              .selectedProduct
                                                              .sell_price *
                                                              this
                                                                .selectedProduct
                                                                .selling_margin) /
                                                            100
                                                          ).toFixed(2)
                                                        ) +
                                                        "\n                                        "
                                                    )
                                                  ],
                                                  1
                                                )
                                              ],
                                              1
                                            ),
                                            _vm._v(" "),
                                            _c("v-col", {
                                              attrs: { cols: "12" }
                                            })
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  [
                                    _c("span", [_vm._v("Share Now")]),
                                    _vm._v(" "),
                                    _c("emb-social-share", {
                                      staticClass: "mx-2"
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
                        [
                          _c(
                            "v-tabs",
                            {
                              staticClass: "mt-5",
                              attrs: { centered: "", "slider-color": "red" },
                              model: {
                                value: _vm.model,
                                callback: function($$v) {
                                  _vm.model = $$v
                                },
                                expression: "model"
                              }
                            },
                            [
                              _c(
                                "v-tab",
                                { attrs: { href: "#tab-description" } },
                                [
                                  _vm._v(
                                    "\n                                Description\n                            "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-tab", { attrs: { href: "#tab-reviews" } }, [
                                _vm._v(
                                  "\n                                Reviews\n                            "
                                )
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tabs-items",
                            {
                              model: {
                                value: _vm.model,
                                callback: function($$v) {
                                  _vm.model = $$v
                                },
                                expression: "model"
                              }
                            },
                            [
                              _c(
                                "v-tab-item",
                                { attrs: { value: "tab-description" } },
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [
                                      _c("v-card-text", {
                                        staticStyle: {
                                          "justify-content": "center"
                                        },
                                        domProps: {
                                          innerHTML: _vm._s(
                                            _vm.selectedProduct.description
                                          )
                                        }
                                      })
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-tab-item",
                                { attrs: { value: "tab-reviews" } },
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "" } },
                                    [_c("v-card-text")],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      ],
                      2
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                [
                  _c(
                    "v-row",
                    { attrs: { justify: "center" } },
                    [
                      _c(
                        "v-col",
                        { attrs: { sm: "12" } },
                        [
                          _c(
                            "v-dialog",
                            {
                              attrs: { persistent: "", "max-width": "500px" },
                              model: {
                                value: _vm.dialog,
                                callback: function($$v) {
                                  _vm.dialog = $$v
                                },
                                expression: "dialog"
                              }
                            },
                            [
                              _c(
                                "v-card",
                                [
                                  _c("v-card-title", [
                                    _c("span", { staticClass: "text-h5" }, [
                                      _vm._v("User Profile")
                                    ])
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-text",
                                    [
                                      _c(
                                        "v-tabs",
                                        {
                                          attrs: {
                                            "background-color": "transparent",
                                            color: "basil",
                                            grow: ""
                                          },
                                          model: {
                                            value: _vm.tab,
                                            callback: function($$v) {
                                              _vm.tab = $$v
                                            },
                                            expression: "tab"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-tab",
                                            {
                                              attrs: { href: "#tab-register" }
                                            },
                                            [
                                              _vm._v(
                                                "\n                                            Register\n                                        "
                                              )
                                            ]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-tab",
                                            { attrs: { href: "#tab-signin" } },
                                            [
                                              _vm._v(
                                                "\n                                            Sign In\n                                        "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-tabs-items",
                                        {
                                          model: {
                                            value: _vm.tab,
                                            callback: function($$v) {
                                              _vm.tab = $$v
                                            },
                                            expression: "tab"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-tab-item",
                                            {
                                              attrs: { value: "tab-register" }
                                            },
                                            [
                                              _c(
                                                "v-card",
                                                [
                                                  _c(
                                                    "v-card-text",
                                                    [
                                                      _c(
                                                        "v-form",
                                                        {
                                                          ref: "register_form",
                                                          model: {
                                                            value:
                                                              _vm.register_valid,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.register_valid = $$v
                                                            },
                                                            expression:
                                                              "register_valid"
                                                          }
                                                        },
                                                        [
                                                          _c(
                                                            "v-row",
                                                            [
                                                              _c(
                                                                "v-col",
                                                                {
                                                                  attrs: {
                                                                    sm: "12",
                                                                    md: "6",
                                                                    xl: "6"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-text-field",
                                                                    {
                                                                      attrs: {
                                                                        type:
                                                                          "text",
                                                                        placeholder:
                                                                          "First Name*",
                                                                        rules:
                                                                          _vm
                                                                            .inputRules
                                                                            .basictextRules
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .register
                                                                            .first_name,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.register,
                                                                            "first_name",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "register.first_name"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-col",
                                                                {
                                                                  attrs: {
                                                                    sm: "12",
                                                                    md: "6",
                                                                    xl: "6"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-text-field",
                                                                    {
                                                                      attrs: {
                                                                        type:
                                                                          "text",
                                                                        placeholder:
                                                                          "Last Name*",
                                                                        rules:
                                                                          _vm
                                                                            .inputRules
                                                                            .basictextRules
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .register
                                                                            .last_name,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.register,
                                                                            "last_name",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "register.last_name"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-col",
                                                                {
                                                                  attrs: {
                                                                    sm: "12",
                                                                    md: "6",
                                                                    xl: "6"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-text-field",
                                                                    {
                                                                      attrs: {
                                                                        type:
                                                                          "number",
                                                                        max:
                                                                          "10",
                                                                        placeholder:
                                                                          "Mobile Number*",
                                                                        rules:
                                                                          _vm
                                                                            .inputRules
                                                                            .basictextRules
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .register
                                                                            .phone_number,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.register,
                                                                            "phone_number",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "register.phone_number"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-col",
                                                                {
                                                                  attrs: {
                                                                    sm: "12",
                                                                    md: "6",
                                                                    xl: "6"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-text-field",
                                                                    {
                                                                      attrs: {
                                                                        type:
                                                                          "email",
                                                                        placeholder:
                                                                          "Email*",
                                                                        rules:
                                                                          _vm.emailRules
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .register
                                                                            .email,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.register,
                                                                            "email",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "register.email"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-col",
                                                                {
                                                                  attrs: {
                                                                    sm: "12",
                                                                    md: "6",
                                                                    xl: "6"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-text-field",
                                                                    {
                                                                      attrs: {
                                                                        type:
                                                                          "password",
                                                                        placeholder:
                                                                          "Enter Password*",
                                                                        rules:
                                                                          _vm
                                                                            .inputRules
                                                                            .basictextRules
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .register
                                                                            .password,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.register,
                                                                            "password",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "register.password"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "v-col",
                                                                {
                                                                  attrs: {
                                                                    sm: "12",
                                                                    md: "6",
                                                                    xl: "6"
                                                                  }
                                                                },
                                                                [
                                                                  _c(
                                                                    "v-text-field",
                                                                    {
                                                                      staticClass:
                                                                        "mb-4",
                                                                      attrs: {
                                                                        type:
                                                                          "password",
                                                                        placeholder:
                                                                          "Retype Passowrd*",
                                                                        rules:
                                                                          _vm
                                                                            .inputRules
                                                                            .basictextRules
                                                                      },
                                                                      model: {
                                                                        value:
                                                                          _vm
                                                                            .register
                                                                            .confirm_password,
                                                                        callback: function(
                                                                          $$v
                                                                        ) {
                                                                          _vm.$set(
                                                                            _vm.register,
                                                                            "confirm_password",
                                                                            $$v
                                                                          )
                                                                        },
                                                                        expression:
                                                                          "register.confirm_password"
                                                                      }
                                                                    }
                                                                  )
                                                                ],
                                                                1
                                                              )
                                                            ],
                                                            1
                                                          ),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              staticClass:
                                                                "accent mx-0 mb-4",
                                                              attrs: {
                                                                large: ""
                                                              },
                                                              on: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  $event.stopPropagation()
                                                                  $event.preventDefault()
                                                                  return _vm.registerUser.apply(
                                                                    null,
                                                                    arguments
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                            Sign Up\n                                                        "
                                                              )
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
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-tab-item",
                                            { attrs: { value: "tab-signin" } },
                                            [
                                              _c(
                                                "v-card",
                                                [
                                                  _c(
                                                    "v-card-text",
                                                    [
                                                      _c(
                                                        "v-form",
                                                        {
                                                          ref: "login_form",
                                                          model: {
                                                            value:
                                                              _vm.login_valid,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.login_valid = $$v
                                                            },
                                                            expression:
                                                              "login_valid"
                                                          }
                                                        },
                                                        [
                                                          _c("v-text-field", {
                                                            attrs: {
                                                              type: "email",
                                                              label: "Email*",
                                                              rules:
                                                                _vm.emailRules
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.login.email,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.login,
                                                                  "email",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "login.email"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c("v-text-field", {
                                                            attrs: {
                                                              type: "password",
                                                              label:
                                                                "Password*",
                                                              rules:
                                                                _vm.inputRules
                                                                  .basictextRules
                                                            },
                                                            model: {
                                                              value:
                                                                _vm.login
                                                                  .password,
                                                              callback: function(
                                                                $$v
                                                              ) {
                                                                _vm.$set(
                                                                  _vm.login,
                                                                  "password",
                                                                  $$v
                                                                )
                                                              },
                                                              expression:
                                                                "login.password"
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          _c(
                                                            "v-btn",
                                                            {
                                                              staticClass:
                                                                "accent mb-3 ma-0",
                                                              attrs: {
                                                                large: ""
                                                              },
                                                              on: {
                                                                click:
                                                                  _vm.loginUser
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                "\n                                                            Sign In\n                                                        "
                                                              )
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
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("small", [
                                        _vm._v("*indicates required field")
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-card-actions",
                                    [
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "blue darken-1",
                                            text: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.dialog = false
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                                        Close\n                                    "
                                          )
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
                    ],
                    1
                  )
                ]
              ],
              2
            )
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);