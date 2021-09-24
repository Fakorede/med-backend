(self.webpackChunk=self.webpackChunk||[]).push([[699],{4323:(t,e,r)=>{"use strict";r.d(e,{qc:()=>s,jE:()=>a,tl:()=>n,M$:()=>o});var s=function(t){return i(t)&&400===t.response.status},a=function(t){return i(t)&&401===t.response.status},n=function(t){return i(t)&&403===t.response.status},o=function(t){return i(t)&&422===t.response.status},i=function(t){return t.response&&t.response.status}},4681:(t,e,r)=>{"use strict";r.d(e,{Z:()=>s});const s={data:function(){return{errors:null}},methods:{errorFor:function(t){return null!==this.errors&&this.errors[t]?this.errors[t]:null}}}},3692:(t,e,r)=>{"use strict";r.d(e,{Z:()=>d});var s=r(7757),a=r.n(s),n=r(4323);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function u(t,e,r,s,a,n,o){try{var i=t[n](o),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(s,a)}const c={name:"AddUserModal",mixins:[r(4681).Z],props:{usertype:{type:Number,required:!0}},data:function(){return{user:{first_name:"",last_name:"",email:"",phone_number:""},validating:!1,status:null}},computed:{buttonText:function(){return!0===this.validating?"Submitting...":"Submit"},hasErrors:function(){return 422===this.status&&null!==this.errors}},methods:{addUser:function(){var t,e=this;return(t=a().mark((function t(){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.errors=null,e.status=null,e.validating=!0,t.prev=3,t.next=6,axios.post("/api/settings/invite",i(i({},e.user),{},{role_id:e.usertype}),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("sserpxe_cigam"))}});case 6:r=t.sent,e.$router.go(),e.$toasted.success(r.data.message),t.next=17;break;case 11:t.prev=11,t.t0=t.catch(3),console.log(t.t0),(0,n.M$)(t.t0)&&(e.errors=t.t0.response.data.errors),(0,n.jE)(t.t0)&&($("#addUserModal").modal("hide"),e.$logOut()),e.status=t.t0.response.status;case 17:e.validating=!1;case 18:case"end":return t.stop()}}),t,null,[[3,11]])})),function(){var e=this,r=arguments;return new Promise((function(s,a){var n=t.apply(e,r);function o(t){u(n,s,a,o,i,"next",t)}function i(t){u(n,s,a,o,i,"throw",t)}o(void 0)}))})()},showModal:function(){$("#addUserModal").modal("show")}}};const d=(0,r(1900).Z)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"modal-body"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.addUser.apply(null,arguments)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"first_name"}},[t._v("First Name:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.first_name,expression:"user.first_name"}],staticClass:"form-control",class:[{"is-invalid":t.errorFor("first_name")}],attrs:{type:"text",id:"first_name",placeholder:"First Name"},domProps:{value:t.user.first_name},on:{input:function(e){e.target.composing||t.$set(t.user,"first_name",e.target.value)}}}),t._v(" "),r("v-errors",{attrs:{errors:t.errorFor("first_name")}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"last_name"}},[t._v("Last Name:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.last_name,expression:"user.last_name"}],staticClass:"form-control",class:[{"is-invalid":t.errorFor("last_name")}],attrs:{type:"text",id:"last_name",placeholder:"Last Name"},domProps:{value:t.user.last_name},on:{input:function(e){e.target.composing||t.$set(t.user,"last_name",e.target.value)}}}),t._v(" "),r("v-errors",{attrs:{errors:t.errorFor("last_name")}})],1)]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"phone_number"}},[t._v("Phone Number:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone_number,expression:"user.phone_number"}],staticClass:"form-control",class:[{"is-invalid":t.errorFor("phone_number")}],attrs:{type:"text",id:"phone_number",placeholder:"Phone Number"},domProps:{value:t.user.phone_number},on:{input:function(e){e.target.composing||t.$set(t.user,"phone_number",e.target.value)}}}),t._v(" "),r("v-errors",{attrs:{errors:t.errorFor("phone_number")}})],1),t._v(" "),r("div",{staticClass:"form-group col-md-6"},[r("label",{attrs:{for:"email"}},[t._v("Email:")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",class:[{"is-invalid":t.errorFor("email")}],attrs:{type:"email",id:"email",placeholder:"Email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),r("v-errors",{attrs:{errors:t.errorFor("email")}})],1)]),t._v(" "),r("button",{staticClass:"btn btn-primary float-right mb-3",attrs:{type:"submit",disabled:t.validating}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])])])])}),[],!1,null,"7a12eeea",null).exports},6699:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>u});var s=r(7757),a=r.n(s),n=r(4323);function o(t,e,r,s,a,n,o){try{var i=t[n](o),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(s,a)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(s,a){var n=t.apply(e,r);function i(t){o(n,s,a,i,l,"next",t)}function l(t){o(n,s,a,i,l,"throw",t)}i(void 0)}))}}const l={name:"AdminList",components:{AddUserModal:r(3692).Z},created:function(){this.getUsers()},mounted:function(){var t=this;return i(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$broadcast();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{users:[],loading:!1}},methods:{getUsers:function(){var t=this;return i(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,axios.get("/api/admin/admins",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("sserpxe_cigam"))}});case 4:r=e.sent,t.users=r.data.data,e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),(0,n.jE)(e.t0)&&t.$logOut(),(0,n.tl)(e.t0)&&t.$toasted.error("Kindly verify your account before performing any actions!");case 13:t.loading=!1;case 14:case"end":return e.stop()}}),e,null,[[1,8]])})))()},showModal:function(){$("#addUserModal").modal("show")}}};const u=(0,r(1900).Z)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card card-block card-stretch card-height"},[r("div",{staticClass:"card-header d-flex justify-content-between"},[t._m(0),t._v(" "),r("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"button"},on:{click:t.showModal}},[t._v("\n              Add New Admin\n            ")]),t._v(" "),r("div",{staticClass:"modal fade",attrs:{id:"addUserModal",tabindex:"-1",role:"dialog","aria-labelledby":"orderModal","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog modal-md",attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),r("add-user-modal",{attrs:{usertype:1}})],1)])])]),t._v(" "),r("div",{staticClass:"card-body"},[r("b-table-simple",{attrs:{responsive:""}},[r("b-thead",[r("b-th",[t._v("#")]),t._v(" "),r("b-th",[t._v("Name")]),t._v(" "),r("b-th",[t._v("Email")]),t._v(" "),r("b-th",[t._v("Phone Number")]),t._v(" "),r("b-th",[t._v("Date Added")])],1),t._v(" "),t.loading?r("b-tr",{staticClass:"text-center"},[r("b-td"),t._v(" "),r("b-td"),t._v(" "),r("b-td"),t._v(" "),r("b-td",[r("b-spinner",{attrs:{variant:"primary",type:"grow",label:"Spinning"}})],1),t._v(" "),r("b-td"),t._v(" "),r("b-td")],1):t.users.length>0?r("b-tbody",t._l(t.users,(function(e,s){return r("b-tr",{key:"user"+s},[r("b-th",[t._v(t._s(s+1))]),t._v(" "),r("b-td",[t._v(t._s(e.first_name)+" "+t._s(e.last_name))]),t._v(" "),r("b-td",[t._v(t._s(e.email))]),t._v(" "),r("b-td",[t._v(t._s(e.phone_number))]),t._v(" "),r("b-td",[t._v(t._s(t._f("dateFilter")(e.created_at)))])],1)})),1):r("b-tbody",[r("b-tr",{staticClass:"text-center"},[r("b-td",{attrs:{colspan:"6"}},[t._v("No result match your search.")])],1)],1)],1)],1)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header-title"},[r("h4",{staticClass:"card-title mb-0"},[t._v("Admin List")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal-header"},[r("h5",{staticClass:"modal-title"},[r("strong",[t._v("Add Admin")])]),t._v(" "),r("button",{staticClass:"close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],!1,null,null,null).exports}}]);