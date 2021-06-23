(self.webpackChunk=self.webpackChunk||[]).push([[5968],{35968:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>l});function s(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var s=0,i=function(){};return{s:i,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){l=!0,n=t},f:function(){try{o||null==r.return||r.return()}finally{if(l)throw n}}}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,s=new Array(e);r<e;r++)s[r]=t[r];return s}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const o={computed:function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},(0,r(20629).Se)(["cart","wishlist"])),mounted:function(){null!=this.$router.history.current.params.id&&null!=this.$router.history.current.params.user?this.getProductDetailWithUser(this.$router.history.current.params.id,this.$router.history.current.params.user):this.getProductDetails(this.$router.history.current.params.id),null!=JSON.parse(sessionStorage.getItem("user"))&&(this.user=JSON.parse(sessionStorage.getItem("user")))},data:function(){return{tab:null,title:"",id:"",selectedImage:null,selectedProduct:null,generateLink:null,model:"tab-2",role:sessionStorage.getItem("role"),dialog:!1,login:{email:null,password:null,checkbox:!1},login_valid:!1,register:{first_name:null,last_name:null,phone_number:null,email:null,password:null,confirm_password:null},register_valid:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],inputRules:{basictextRules:[function(t){return!!t||"This field should not be empty"}]},user:null,buyNowItem:null}},methods:{buyNow:function(t){this.buyNowItem=t,null==this.user?this.dialog=!0:this.buyNowAndCart()},buyNowAndCart:function(){var t=this,e={product_id:this.buyNowItem.id,image:this.buyNowItem.images[0].image_url,name:this.buyNowItem.product_name,price:this.buyNowItem.sell_price,quantity:this.buyNowItem.quantity?this.buyNowItem.quantity:1,total:this.buyNowItem.sell_price*(this.buyNowItem.quantity?this.buyNowItem.quantity:1),aff_user_id:this.selectedProduct.user};axios.post("/api/cart/add-to-cart",e).then((function(t){window.location.href="/checkout/payment"}),(function(e){var r=e.response.data.message,s="";for(var a in r)s+=r[a];t.$toast.open({message:s,type:"error"})}))},registerUser:function(){var t=this;this.$refs.register_form.validate(),!0===this.register_valid&&axios.post("/api/register",this.register).then((function(e){sessionStorage.setItem("token",e.data.token),sessionStorage.setItem("role",e.data.role),sessionStorage.setItem("user",JSON.stringify(e.data.user)),t.user=e.data.user,t.buyNowAndCart()})).catch((function(e){t.$toast.open({message:e.response.data.message,type:"error"})}))},loginUser:function(){var t=this;this.$refs.login_form.validate(),!0===this.login_valid&&axios.post("/api/login",this.login).then((function(e){sessionStorage.setItem("token",e.data.token),sessionStorage.setItem("role",e.data.role),sessionStorage.setItem("user",JSON.stringify(e.data.user)),t.user=e.data.user,t.buyNowAndCart(),window.location.href="/checkout/payment"})).catch((function(e){t.$toast.open({message:e.response.data.message,type:"error"})}))},toggleCopy:function(){this.$refs.productLinkToCopy.$el.querySelector("input").select(),document.execCommand("copy")},toggleGenerate:function(){var t=this;axios.post("/api/product/link-generate",{productId:this.selectedProduct.id}).then((function(e){t.generateLink=decodeURIComponent(e.data.generateLink)}),(function(e){var r=e.response.data.message,s="";for(var a in r)s+=r[a];t.$toast.open({message:s,type:"error"})}))},getProductDetails:function(t){var e=this;axios.get("/api/product/"+t).then((function(t){var r=t.data.product;e.selectedProduct=r,e.selectedProduct.quantity=1,e.selectedImage=r.images[0].image_url}),(function(t){var r=t.response.data.message,s="";for(var a in r)s+=r[a];e.$toast.open({message:s,type:"error"})}))},getProductDetailWithUser:function(t,e){var r=this;axios.get("/api/product/"+t+"/"+e).then((function(t){var e=t.data.product;r.selectedProduct=e,r.selectedProduct.quantity=1,r.selectedImage=e.images[0].image_url}),(function(t){var e=t.response.data.message,s="";for(var a in e)s+=e[a];r.$toast.open({message:s,type:"error"})}))},productQuantity:function(t){this.selectedProduct.quantity=t},showReviewPopup:function(){this.$refs.productReviewPopup.open()},togglePreviewImage:function(t){this.selectedImage=t},addProductToCart:function(t){var e=this;this.$snotify.success("Product adding to the cart",{closeOnClick:!1,pauseOnHover:!1,timeout:1e3,showProgressBar:!1}),setTimeout((function(){var r={product_id:t.id,image:t.images[0].image_url,name:t.product_name,price:t.sell_price,quantity:t.quantity?t.quantity:1,total:t.sell_price*(t.quantity?t.quantity:1),aff_user_id:t.user};axios.post("/api/cart/add-to-cart",r).then((function(t){window.location.href=e.$router.history.current.path}),(function(t){var r=t.response.data.message,s="";for(var a in r)s+=r[a];e.$toast.open({message:s,type:"error"})}))}),50)},ifItemExistInCart:function(t){var e,r=!1,a=s(this.cart);try{for(a.s();!(e=a.n()).done;){e.value.id==t.objectID&&(r=!0)}}catch(t){a.e(t)}finally{a.f()}return r},addItemToWishlist:function(t){var e=this;this.ifItemExistInWishlist(t)?this.$snotify.error("Product already exist in the wishlist",{showProgressBar:!1}):(this.$snotify.success("Product adding to the wishlist",{closeOnClick:!1,pauseOnHover:!1,timeout:1e3,showProgressBar:!1}),setTimeout((function(){e.$store.dispatch("addItemToWishlist",t)}),2e3))},ifItemExistInWishlist:function(t){var e,r=!1,a=s(this.wishlist);try{for(a.s();!(e=a.n()).done;){e.value.id==t.objectID&&(r=!0)}}catch(t){a.e(t)}finally{a.f()}return r}}};const l=(0,r(51900).Z)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"emb-product-detail"},[null!=t.selectedProduct?[r("emb-page-title",{attrs:{heading:t.selectedProduct.product_name}}),t._v(" "),r("div",{staticClass:"emb-productDetail-content white"},[r("div",{staticClass:"product-detail section-gap"},[r("v-container",{attrs:{"grid-list-xl":"","py-0":""}},[r("v-layout",{attrs:{row:"",wrap:"","product-detail-row":""}},[r("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl6:"","text-center":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs2:"",sm2:"",md2:"",lg2:"",xl2:"","product-gallery":""}},t._l(t.selectedProduct.images,(function(e,s){return r("div",{key:s,staticClass:"detail-image-gallery d-inline-block mb-6 mx-2",on:{mouseover:function(r){return t.togglePreviewImage(e.image_url)}}},[r("a",{attrs:{href:"javascript:void(0)"}},[r("img",{attrs:{src:e.image_url,width:"71",height:"91",alt:"product image"}})])])})),0),t._v(" "),r("v-flex",{attrs:{xs10:"",lg10:"",sm10:"",md10:"",xl10:"","product-detail-img":""}},[r("div",{staticClass:"product-detail-thumb"},[r("div",{staticClass:"image-wrapper emb-card"},[r("a",{attrs:{href:"javascript:void(0)"}},[r("img",{staticClass:"detailImg",attrs:{src:t.selectedImage,width:"auto",height:"auto",alt:"product detail image"}})])])])])],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm12:"",md6:"",lg6:"",xl5:""}},[r("router-link",{attrs:{to:"/"}},[t._v("Back to shop")]),t._v(" "),r("h5",[t._v(t._s(t.selectedProduct.product_name))]),t._v(" "),r("h4",{staticClass:"accent--text"},[r("emb-currency-sign"),t._v("\n                                    "+t._s(t.selectedProduct.sell_price.toFixed(2))+"\n                                ")],1),t._v(" "),r("ul",{staticClass:"product-availablity list-unstyled pl-0 mb-4 mt-4"},[r("li",[1===t.selectedProduct.stat?[r("span",{staticClass:"font-weight-medium"},[t._v("Availablity")]),t._v(" : "),r("span",{staticClass:"font-weight-regular"},[t._v("In Stocks")])]:[r("span",{staticClass:"font-weight-medium"},[t._v("Availablity")]),t._v(" : "),r("span",{staticClass:"font-weight-regular"},[t._v("Out Of Stocks")])]],2),t._v(" "),r("li"),t._v(" "),r("li",[r("span",{staticClass:"font-weight-medium"},[t._v("Tags")]),t._v(" "),r("span",[t._v(":")])])]),t._v(" "),r("div",{staticClass:"select-group mb-4"},[r("v-layout",{attrs:{wrap:""}},[r("v-flex",{attrs:{xs12:"",sm4:"",lg4:"",md4:"",lg3:"",xl3:"","pb-0":""}},[r("v-select",{attrs:{items:[1,2,3,4,5]},on:{change:t.productQuantity},model:{value:t.selectedProduct.quantity,callback:function(e){t.$set(t.selectedProduct,"quantity",e)},expression:"selectedProduct.quantity"}})],1)],1)],1),t._v(" "),r("div",{staticClass:"mb-6 btn-wrap"},[t.ifItemExistInCart(t.selectedProduct)?r("v-btn",{staticClass:"accent cpx-0",attrs:{large:"",to:"/cart"}},[t._v("\n                                        View Cart\n                                    ")]):r("v-btn",{staticClass:"accent d-inline-block cpx-0",attrs:{large:""},on:{click:function(e){return t.addProductToCart(t.selectedProduct)}}},[t._v("\n                                        Add To Cart\n                                    ")]),t._v(" "),r("v-btn",{staticClass:"white buyProduct cpx-0",attrs:{large:""},on:{click:function(e){return t.buyNow(t.selectedProduct)}}},[t._v("Buy\n                                        Now\n                                    ")])],1),t._v(" "),3==t.role?r("div",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("span",{staticClass:"font-weight-medium"},[t._v("Affiliate")]),t._v(" "),r("v-text-field",{ref:"productLinkToCopy",attrs:{"append-icon":"mdi-content-copy ","prepend-icon":"mdi-reload ",label:"Generate Link",type:"text"},on:{"click:append":t.toggleCopy,"click:prepend":function(e){return t.toggleGenerate()}},model:{value:t.generateLink,callback:function(e){t.generateLink=e},expression:"generateLink"}}),t._v(" "),r("v-chip",{staticClass:"ma-2",attrs:{color:"pink",label:"","text-color":"white"}},[t._v("\n                                                Commission Rate: "+t._s(this.selectedProduct.selling_margin)+"%\n                                            ")]),t._v(" "),r("v-chip",{staticClass:"ma-2",attrs:{color:"primary",label:"","text-color":"white"}},[t._v("\n                                                Estimated Commissions:\n                                                "),r("emb-currency-sign"),t._v("\n                                                "+t._s((this.selectedProduct.sell_price*this.selectedProduct.selling_margin/100).toFixed(2))+"\n                                            ")],1)],1),t._v(" "),r("v-col",{attrs:{cols:"12"}})],1)],1):t._e(),t._v(" "),r("div",[r("span",[t._v("Share Now")]),t._v(" "),r("emb-social-share",{staticClass:"mx-2"})],1)],1)],1),t._v(" "),[r("v-tabs",{staticClass:"mt-5",attrs:{centered:"","slider-color":"red"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[r("v-tab",{attrs:{href:"#tab-description"}},[t._v("\n                                    Description\n                                ")]),t._v(" "),r("v-tab",{attrs:{href:"#tab-reviews"}},[t._v("\n                                    Reviews\n                                ")])],1),t._v(" "),r("v-tabs-items",{model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},[r("v-tab-item",{attrs:{value:"tab-description"}},[r("v-card",{attrs:{flat:""}},[r("v-card-text",{staticStyle:{"justify-content":"center"},domProps:{innerHTML:t._s(t.selectedProduct.description)}})],1)],1),t._v(" "),r("v-tab-item",{attrs:{value:"tab-reviews"}},[r("v-card",{attrs:{flat:""}},[r("v-card-text")],1)],1)],1)]],2)],1),t._v(" "),[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{sm:"12"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"text-h5"},[t._v("User Profile")])]),t._v(" "),r("v-card-text",[r("v-tabs",{attrs:{"background-color":"transparent",color:"basil",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab",{attrs:{href:"#tab-register"}},[t._v("\n                                                Register\n                                            ")]),t._v(" "),r("v-tab",{attrs:{href:"#tab-signin"}},[t._v("\n                                                Sign In\n                                            ")])],1),t._v(" "),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",{attrs:{value:"tab-register"}},[r("v-card",[r("v-card-text",[r("v-form",{ref:"register_form",model:{value:t.register_valid,callback:function(e){t.register_valid=e},expression:"register_valid"}},[r("v-row",[r("v-col",{attrs:{sm:"12",md:"6",xl:"6"}},[r("v-text-field",{attrs:{type:"text",placeholder:"First Name*",rules:t.inputRules.basictextRules},model:{value:t.register.first_name,callback:function(e){t.$set(t.register,"first_name",e)},expression:"register.first_name"}})],1),t._v(" "),r("v-col",{attrs:{sm:"12",md:"6",xl:"6"}},[r("v-text-field",{attrs:{type:"text",placeholder:"Last Name*",rules:t.inputRules.basictextRules},model:{value:t.register.last_name,callback:function(e){t.$set(t.register,"last_name",e)},expression:"register.last_name"}})],1),t._v(" "),r("v-col",{attrs:{sm:"12",md:"6",xl:"6"}},[r("v-text-field",{attrs:{type:"number",max:"10",placeholder:"Mobile Number*",rules:t.inputRules.basictextRules},model:{value:t.register.phone_number,callback:function(e){t.$set(t.register,"phone_number",e)},expression:"register.phone_number"}})],1),t._v(" "),r("v-col",{attrs:{sm:"12",md:"6",xl:"6"}},[r("v-text-field",{attrs:{type:"email",placeholder:"Email*",rules:t.emailRules},model:{value:t.register.email,callback:function(e){t.$set(t.register,"email",e)},expression:"register.email"}})],1),t._v(" "),r("v-col",{attrs:{sm:"12",md:"6",xl:"6"}},[r("v-text-field",{attrs:{type:"password",placeholder:"Enter Password*",rules:t.inputRules.basictextRules},model:{value:t.register.password,callback:function(e){t.$set(t.register,"password",e)},expression:"register.password"}})],1),t._v(" "),r("v-col",{attrs:{sm:"12",md:"6",xl:"6"}},[r("v-text-field",{staticClass:"mb-4",attrs:{type:"password",placeholder:"Retype Passowrd*",rules:t.inputRules.basictextRules},model:{value:t.register.confirm_password,callback:function(e){t.$set(t.register,"confirm_password",e)},expression:"register.confirm_password"}})],1)],1),t._v(" "),r("v-btn",{staticClass:"accent mx-0 mb-4",attrs:{large:""},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.registerUser.apply(null,arguments)}}},[t._v("\n                                                                Sign Up\n                                                            ")])],1)],1)],1)],1),t._v(" "),r("v-tab-item",{attrs:{value:"tab-signin"}},[r("v-card",[r("v-card-text",[r("v-form",{ref:"login_form",model:{value:t.login_valid,callback:function(e){t.login_valid=e},expression:"login_valid"}},[r("v-text-field",{attrs:{type:"email",label:"Email*",rules:t.emailRules},model:{value:t.login.email,callback:function(e){t.$set(t.login,"email",e)},expression:"login.email"}}),t._v(" "),r("v-text-field",{attrs:{type:"password",label:"Password*",rules:t.inputRules.basictextRules},model:{value:t.login.password,callback:function(e){t.$set(t.login,"password",e)},expression:"login.password"}}),t._v(" "),r("v-btn",{staticClass:"accent mb-3 ma-0",attrs:{large:""},on:{click:t.loginUser}},[t._v("\n                                                                Sign In\n                                                            ")])],1)],1)],1)],1)],1),t._v(" "),r("small",[t._v("*indicates required field")])],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                                            Close\n                                        ")])],1)],1)],1)],1)],1)]],2)]:t._e()],2)}),[],!1,null,null,null).exports}}]);