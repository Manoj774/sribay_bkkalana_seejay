(self.webpackChunk=self.webpackChunk||[]).push([[948],{948:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>c});const a={props:["data","deleteProduct"],data:function(){return{selectedItem:null}},methods:{deleteItem:function(t){this.$refs.deleteConfirmationDialog.openDialog(),this.selectedItem=t},onDeleteItemFromProductsList:function(){var t=this;this.$refs.deleteConfirmationDialog.close(),axios.delete("/api/product/"+this.selectedItem.id).then((function(e){t.$snotify.success(e.data.message,{closeOnClick:!1,pauseOnHover:!1,timeout:1e3,showProgressBar:!1}),setTimeout((function(){window.location.href=""}),2e3)}),(function(e){var s=e.response.data.message,a="";for(var i in s)a+=s[i];t.$toast.open({message:a,type:"error"})}))}}};var i=s(51900);const r={props:["data","deleteProduct"],data:function(){return{headers:[{text:"ID",sortable:!1,value:"count"},{text:"Image",sortable:!1,value:"image"},{text:"Name",sortable:!1,value:"name"},{text:"Price",sortable:!1,value:"price"},{text:"Action",sortable:!1,value:"action"}],selectedItem:null}},methods:{deleteItem:function(t){this.$refs.deleteConfirmationDialog.openDialog(),this.selectedItem=t},ondeleteItemFromListView:function(){var t=this;this.$refs.deleteConfirmationDialog.close(),axios.delete("/api/product/"+this.selectedItem.id).then((function(e){t.$snotify.success(e.data.message,{closeOnClick:!1,pauseOnHover:!1,timeout:1e3,showProgressBar:!1}),setTimeout((function(){window.location.href=""}),2e3)}),(function(e){var s=e.response.data.message,a="";for(var i in s)a+=s[i];t.$toast.open({message:a,type:"error"})}))}}};const o={props:["colxs","colsm","colmd","collg","colxl","gridListView"],data:function(){return{products:null,headersForListView:[{text:"ID",sortable:!1,value:"count"},{text:"Image",sortable:!1,value:"image"},{text:"Name",sortable:!1,value:"name"},{text:"Price",sortable:!1,value:"price"},{text:"Action",sortable:!1,value:"action"}],listData:[]}},mounted:function(){this.getProductsData()},methods:{itemDeleted:function(t){var e=this.listData.indexOf(t);this.listData.splice(e,1)},getProductsData:function(t){var e=this;null!=t&&""!==t?axios.post("/api/product/filter",{searchText:t}).then((function(t){e.listData=[],e.products=t.data.products;var s=1;for(var a in e.products)e.listData.push({count:s++,image:e.products[a].image_url,name:e.products[a].product_name,price:e.products[a].sell_price,id:e.products[a].id})})).catch((function(t){console.log(t)})):axios.get("/api/product").then((function(t){e.listData=[],e.products=t.data.products;var s=1;for(var a in e.products)e.listData.push({count:s++,image:e.products[a].image_url,name:e.products[a].product_name,price:e.products[a].sell_price,id:e.products[a].id})})).catch((function(t){console.log(t)}))}},components:{ProductItem:(0,i.Z)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"product-item-wrap emb-card",staticStyle:{"max-height":"400px","min-height":"400px"}},[s("div",{staticClass:"thumb-warp"},[s("img",{staticStyle:{"max-height":"280px","min-height":"280px"},attrs:{alt:"product",src:t.data.image}}),t._v(" "),s("div",{staticClass:"wishlist-icon"},[s("v-btn",{attrs:{icon:""},on:{click:function(e){return t.deleteItem(t.data)}}},[s("v-icon",{staticClass:"grey--text"},[t._v("mdi-delete")])],1)],1),t._v(" "),s("router-link",{attrs:{to:"/sriBay-admin/product-edit/"+t.data.id}},[s("div",{staticClass:"add-to-cart"},[s("v-btn",{staticClass:"accent",attrs:{small:"",icon:""}},[s("v-icon",[t._v("mdi-pencil")])],1)],1)])],1),t._v(" "),s("div",{staticClass:"emb-card-content pa-4"},[s("h5",{staticClass:"font-weight-medium text-capitalize"},[t._v(t._s(t.data.name.substring(0,50)+"...."))]),t._v(" "),s("div",{staticClass:"inline-block"},[s("p",[t._v(t._s(t.data.category))])]),t._v(" "),s("div",{staticClass:"emb-meta-info layout align-center justify-space-between"},[s("div",{staticClass:"inline-block"},[s("h6",{staticClass:"accent--text"},[s("emb-currency-sign"),t._v(t._s(t.data.price)+"\n                    ")],1)])])])]),t._v(" "),s("emb-delete-confirmation-2",{ref:"deleteConfirmationDialog",attrs:{messageTitle:"Are You Sure You Want To Delete?",messageDescription:"Are you sure you want to delete this product permanently?",btn1:"Cancel",btn2:"Yes"},on:{onConfirm:t.onDeleteItemFromProductsList}})],1)}),[],!1,null,null,null).exports,ProductItemsListView:(0,i.Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-responsive"},[s("v-data-table",{attrs:{headers:t.headers,items:t.data},scopedSlots:t._u([{key:"item.image",fn:function(t){var e=t.item;return[s("img",{attrs:{src:e.image,width:"50px"}})]}},{key:"item.name",fn:function(e){var s=e.item;return[t._v("\n                "+t._s(s.name.substring(0,50)+"....")+"\n            ")]}},{key:"item.action",fn:function(e){var a=e.item;return[s("router-link",{attrs:{to:"/sriBay-admin/product-edit/"+a.id}},[s("v-btn",{staticClass:"primary--text",attrs:{small:"",icon:""}},[s("v-icon",[t._v("mdi-pencil")])],1)],1),t._v(" "),s("v-btn",{attrs:{icon:"",color:"grey",small:""}},[s("v-icon",{staticClass:"error--text",on:{click:function(e){return t.deleteItem(a)}}},[t._v("mdi-delete")])],1)]}}])}),t._v(" "),s("emb-delete-confirmation-2",{ref:"deleteConfirmationDialog",attrs:{messageTitle:"Are You Sure You Want To Delete?",messageDescription:"Are you sure you want to delete this product permanently?",btn1:"Cancel",btn2:"Yes"},on:{onConfirm:t.ondeleteItemFromListView}})],1)}),[],!1,null,null,null).exports}};const n={data:function(){return{gridView:!0,listView:!1,searchText:null,search:null}},components:{ProductItems:(0,i.Z)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"shop-content-wrap"},[1==t.gridListView&&null!=t.listData?[s("v-row",t._l(t.listData,(function(e,a){return s("v-col",{key:a,attrs:{cols:"12",sm:"6",md:"4",lg:"3"}},[s("product-item",{attrs:{data:e},on:{deleteProduct:t.itemDeleted}})],1)})),1)]:[s("product-items-list-view",{attrs:{data:t.listData},on:{deleteProduct:t.itemDeleted}})]],2)}),[],!1,null,null,null).exports},methods:{switchToGridView:function(t){this.gridView=t},switchToListView:function(t){this.gridView=t},productSearch:function(){this.$refs.products.getProductsData(this.searchText)}}};const c=(0,i.Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"emb-card pa-4 search-box-wrap"},[s("div",{staticClass:"d-flex justify-start align-center"},[t._m(0),t._v(" "),s("div",{staticClass:"search-input d-flex justify-space-between align-center"},[s("div",{staticClass:"input-wrap"},[s("v-text-field",{attrs:{label:"Search Projects"},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),t._v(" "),s("div",{staticClass:"action-btn-wrap"},[s("v-btn",{staticClass:"mr-3",attrs:{color:"primary"},on:{click:function(e){return t.productSearch(t.searchText)}}},[t._v("Search")]),t._v(" "),s("v-btn",{attrs:{color:"primary",to:"/sriBay-admin/product-add"}},[t._v("\n\t\t\t\t\t\t\tAdd Product\n\t\t\t\t\t\t\t"),s("v-icon",[t._v("mdi-plus-thick")])],1)],1)])])]),t._v(" "),s("v-layout",{staticClass:"pt-12 ma-0",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:"",md9:"","py-0":""}},[s("h5",{staticClass:"mb-0 pt-2"},[t._v("Product grid")])]),t._v(" "),s("v-flex",{attrs:{xs12:"",sm4:"",md3:"","py-0":"","text-right":""}},[s("v-icon",{staticClass:"pa-2",on:{click:function(e){return t.switchToGridView(!0)}}},[t._v("mdi-apps")]),t._v(" "),s("v-icon",{staticClass:"pa-2",on:{click:function(e){return t.switchToListView(!1)}}},[t._v("mdi-format-list-bulleted ")])],1)],1),t._v(" "),s("div",{staticClass:"d-md-inline-flex mb-5"}),t._v(" "),s("product-items",{ref:"products",attrs:{gridListView:t.gridView,cols:6,colxl:3,collg:3,colmd:4,colsm:4,colxs:12}})],1)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dash-title-wrap"},[s("h5",{staticClass:"dash-title mb-0"},[t._v("Search")])])}],!1,null,null,null).exports}}]);