(self.webpackChunk=self.webpackChunk||[]).push([[4465],{64465:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>a});const i={data:function(){return{settings:{profile:[{title:"Profile",icon:"mdi-account-circle",path:"/account/profile",id:"profile"}]},selectedTab:0,user:null}},beforeMount:function(){this.user=JSON.parse(sessionStorage.getItem("admin-user"))},methods:{onTabChange:function(t){this.selectedTab=t}}};const a=(0,e(51900).Z)(i,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"account-wrap"},[e("div",{staticClass:"inner-container"},[e("div",{staticClass:"final-receipt-page section-gap"},[e("div",{staticClass:"account-info"},[e("div",{staticClass:"px-sm-4 px-md-12"},[e("div",{staticClass:"layout justify-start mt-0 mb-sm-11 mb-8  mx-0"},[t._m(0),t._v(" "),e("div",{staticClass:"px-4"},[e("h4",[t._v(t._s(this.user.first_name+" "+this.user.last_name))]),t._v(" "),e("div",{staticClass:"text-muted text-xl"},[t._v(t._s(this.user.email))])])]),t._v(" "),e("div",{staticClass:"px-3"},[e("v-layout",{attrs:{row:"",wrap:"","fill-height":"","profile-list":""}},[e("v-flex",{attrs:{xs12:"",sm12:"",md4:"",lg3:"",xl2:"","user-nav-list":"","pr-md-4":"","mb-md-0":"","mb-6":""}},[e("div",{staticClass:"emb-card account-block fill-height py-4"},[t._l(t.settings,(function(s,i,a){return t._l(t.settings[i],(function(s){return e("v-list",{key:s.name,staticClass:"py-0 text-center"},[e("v-list-item",{attrs:{to:s.path},on:{click:function(s){return t.onTabChange(a)}}},[e("v-list-item-action",{staticClass:"ma-0"},[e("v-icon",[t._v(t._s(s.icon))])],1),t._v(" "),e("v-list-item-content",{staticClass:"py-0 text-left"},[e("v-list-item-title",[e("span",[t._v(t._s(s.title))])])],1)],1)],1)}))}))],2)]),t._v(" "),e("v-flex",{attrs:{xs12:"",sm12:"",md8:"",lg9:"",xl9:"","user-content-wrapper":""}},t._l(t.settings,(function(s,i,a){return e("div",{key:i},[a==t.selectedTab?e("router-view"):t._e()],1)})),0)],1)],1)])])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"login-user-img"},[s("img",{attrs:{src:"/static/images/user-3.jpg",width:"70",alt:"Active User"}})])}],!1,null,null,null).exports}}]);