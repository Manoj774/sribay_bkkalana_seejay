(self.webpackChunk=self.webpackChunk||[]).push([[4782],{64782:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>u});var s=a(20629),r=a(30381),i=a.n(r);function n(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){a&&(t=a);var s=0,r=function(){};return{s:r,n:function(){return s>=t.length?{done:!0}:{done:!1,value:t[s++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,n=!0,l=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return n=t.done,t},e:function(t){l=!0,i=t},f:function(){try{n||null==a.return||a.return()}finally{if(l)throw i}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,s=new Array(e);a<e;a++)s[a]=t[a];return s}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const v={computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,s.Se)(["invoiceData","tax","shipping","userDetails"])),data:function(){return{userInfo:{firstName:"",lastName:"",streetName:"",aptBuilding:"",zipCode:"",cityState:"",country:"",phone:"",email:""},productDetail:[{"Product Name":"Super Jacket",Quantity:1,Price:"$67.00"}]}},methods:{deliveryDate:function(){var t="MMMM Do , YYYY",e=i()().format(t);return i()(e,t).add(5,"days").format(t)},itemTotal:function(){var t=0;if(this.invoiceData.products&&this.invoiceData.products.length>0){var e,a=n(this.invoiceData.products);try{for(a.s();!(e=a.n()).done;){var s=e.value;t+=s.price*s.quantity}}catch(t){a.e(t)}finally{a.f()}return t.toFixed(2)}return t},getTotalPrice:function(){var t=this.tax+this.shipping;if(this.invoiceData.products&&this.invoiceData.products.length>0){var e,a=n(this.invoiceData.products);try{for(a.s();!(e=a.n()).done;){var s=e.value;t+=s.price*s.quantity}}catch(t){a.e(t)}finally{a.f()}return t.toFixed(2)}return t.toFixed(2)}}};const u=(0,a(51900).Z)(v,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.userDetails?a("div",{staticClass:"emb-FinalReceipt-wrap"},[a("emb-page-title",{attrs:{heading:"Payment Information"}}),t._v(" "),a("div",{staticClass:"final-receipt  section-gap"},[a("v-container",{attrs:{"grid-list-xl":"","py-0":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm12:"",md10:"",lg7:"",xl7:""}},[a("div",{staticClass:"emb-card pb-12"},[a("div",{attrs:{id:"payment-receipt"}},[a("div",{staticClass:"text-center bg-grey pa-sm-12 pa-6"},[a("h1",[t._v("Thank You")]),t._v(" "),a("h5",{staticClass:"mb-6"},[t._v("Payment is successfully processsed and your order is on the way ")]),t._v(" "),a("h6",{staticClass:"mb-6"},[t._v("Transaction ID: "+t._s(t.invoiceData.transactionId))]),t._v(" "),a("img",{attrs:{src:"/static/images/checked.png",width:"64",height:"64",alt:"Success"}})]),t._v(" "),a("div",{staticClass:"py-sm-12 py-8 px-sm-6 px-4"},[a("v-layout",{attrs:{row:"",wrap:"","mb-6":""}},[a("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg6:"",xl6:""}},[a("h6",[t._v("Summary")]),t._v(" "),a("p",{staticClass:"mb-1 text-capitalize"},[t._v("Order ID: "+t._s(t.invoiceData.orderId))]),t._v(" "),a("p",{staticClass:"mb-1"},[t._v("Order Date: "+t._s(t.invoiceData.orderedDate))]),t._v(" "),a("p",{staticClass:"mb-1"},[t._v("Order Total: "),a("emb-currency-sign"),t._v(t._s(t.getTotalPrice()))],1)]),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg6:"",xl6:""}},[a("h6",[t._v("Ship To")]),t._v(" "),a("p",{staticClass:"mb-1"},[t._v(t._s(t.userDetails.firstName)+" "+t._s(t.userDetails.lastName))]),t._v(" "),a("p",{staticClass:"mb-1"},[t._v(t._s(t.userDetails.aptBuilding))]),t._v(" "),a("p",{staticClass:"mb-1"},[t._v(t._s(t.userDetails.cityState))]),t._v(" "),a("p",{staticClass:"mb-1"},[t._v(t._s(t.userDetails.country)+" - "+t._s(t.userDetails.zipCode))]),t._v(" "),a("p",{staticClass:"mb-1"},[t._v("Contact No. "+t._s(t.userDetails.phone))])])],1),t._v(" "),a("div",{staticClass:"py-6 text-center bg-grey px-3"},[a("h4",[t._v("Expected Date of Delivery")]),t._v(" "),a("h3",[t._v(t._s(t.invoiceData.deliveryDate))])]),t._v(" "),a("h4",{staticClass:"pt-6"},[t._v("Your Ordered Details")]),t._v(" "),t._l(t.invoiceData.products,(function(e,s){return[t.invoiceData.products?a("div",{key:s,staticClass:"layout row wrap align-center d-flex my-0 text-md-left text-center"},[a("v-flex",{attrs:{xs12:"",sm12:"",md3:"",lg3:"",xl3:""}},[a("img",{attrs:{alt:"cart Image",width:"100",src:e.image}})]),t._v(" "),a("v-flex",{attrs:{xs12:"",sm4:"",md3:"",lg3:"",xl3:""}},[a("h6",[t._v("Product Name")]),t._v(" "),a("p",{staticClass:"mb-0 font-weight-bold"},[t._v(t._s(e.name))])]),t._v(" "),a("v-flex",{attrs:{xs6:"",sm4:"",md3:"",lg3:"",xl3:""}},[a("h6",[t._v("Quantity")]),t._v(" "),a("p",{staticClass:"mb-0"},[t._v(t._s(e.quantity))])]),t._v(" "),a("v-flex",{attrs:{xs6:"",sm4:"",md3:"",lg3:"",xl3:""}},[a("h6",[t._v("Price")]),t._v(" "),a("p",{staticClass:"mb-0"},[t._v("$"+t._s(e.price))])])],1):t._e()]})),t._v(" "),a("v-divider",{staticClass:"my-4"}),t._v(" "),a("div",[a("div",{staticClass:"d-flex align-center justify-space-between mt-4 mb-4"},[a("div",[a("p",{staticClass:"mb-0"},[t._v("Subtotal")])]),t._v(" "),a("div",[a("span",[a("emb-currency-sign"),t._v(t._s(t.itemTotal()))],1)])]),t._v(" "),a("div",{staticClass:"d-flex align-center justify-space-between mb-4"},[a("p",{staticClass:"mb-0"},[t._v("Shipping")]),t._v(" "),a("span",[a("emb-currency-sign"),t._v(t._s(t.shipping))],1)]),t._v(" "),a("div",{staticClass:"d-flex align-center justify-space-between mb-4"},[a("p",{staticClass:"mb-0"},[t._v("Tax(GST)")]),t._v(" "),a("span",[a("emb-currency-sign"),t._v(t._s(t.tax))],1)])]),t._v(" "),a("v-divider",{staticClass:"my-4"}),t._v(" "),a("div",{staticClass:"d-flex align-center justify-space-between"},[a("h4",[t._v("Total")]),t._v(" "),a("h4",[a("emb-currency-sign"),t._v(t._s(t.getTotalPrice()))],1)])],2)]),t._v(" "),a("div",{staticClass:"layout row wrap pt-6 px-4 text-center"},[a("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg6:"",xl6:"","text-md-left":""}},[a("v-btn",{staticClass:"accent",attrs:{large:""}},[t._v("Download PDF")])],1),t._v(" "),a("v-flex",{attrs:{xs12:"",sm6:"",md6:"",lg6:"",xl6:"","text-md-right":""}},[a("v-btn",{staticClass:"accent",attrs:{large:"",to:"/"}},[t._v("Go To Home")])],1)],1)])])],1)],1)],1)],1):t._e()}),[],!1,null,null,null).exports}}]);