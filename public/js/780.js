(self.webpackChunk=self.webpackChunk||[]).push([[780],{4323:(r,s,t)=>{"use strict";t.d(s,{qc:()=>e,jE:()=>n,tl:()=>o,M$:()=>a});var e=function(r){return i(r)&&400===r.response.status},n=function(r){return i(r)&&401===r.response.status},o=function(r){return i(r)&&403===r.response.status},a=function(r){return i(r)&&422===r.response.status},i=function(r){return r.response&&r.response.status}},4681:(r,s,t)=>{"use strict";t.d(s,{Z:()=>e});const e={data:function(){return{errors:null}},methods:{errorFor:function(r){return null!==this.errors&&this.errors[r]?this.errors[r]:null}}}},8780:(r,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>p});var e=t(7757),n=t.n(e),o=t(4323);function a(r,s){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);s&&(e=e.filter((function(s){return Object.getOwnPropertyDescriptor(r,s).enumerable}))),t.push.apply(t,e)}return t}function i(r){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?a(Object(t),!0).forEach((function(s){u(r,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(s){Object.defineProperty(r,s,Object.getOwnPropertyDescriptor(t,s))}))}return r}function u(r,s,t){return s in r?Object.defineProperty(r,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[s]=t,r}function c(r,s,t,e,n,o,a){try{var i=r[o](a),u=i.value}catch(r){return void t(r)}i.done?s(u):Promise.resolve(u).then(e,n)}function l(r){return function(){var s=this,t=arguments;return new Promise((function(e,n){var o=r.apply(s,t);function a(r){c(o,e,n,a,i,"next",r)}function i(r){c(o,e,n,a,i,"throw",r)}a(void 0)}))}}const d={name:"UpdatePassword",mixins:[t(4681).Z],data:function(){return{user:{old_password:"",password:"",password_confirmation:""},success:!1,successMsg:"",validating:!1,status:null,error:null}},mounted:function(){var r=this;return l(n().mark((function s(){return n().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,r.$broadcast();case 2:case"end":return s.stop()}}),s)})))()},computed:{buttonText:function(){return!0===this.validating?"Submitting...":"Submit"},hasErrors:function(){return 422===this.status&&null!==this.errors}},methods:{resetPassword:function(){var r=this;return l(n().mark((function s(){var t;return n().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return r.error=null,r.errors=null,r.status=null,r.validating=!0,r.success=!1,r.successMsg="",s.prev=6,s.next=9,axios.post("/backend/password/update",i({},r.user));case 9:t=s.sent,r.successMsg=t.data.message,r.success=!0,s.next=21;break;case 14:s.prev=14,s.t0=s.catch(6),console.log(s.t0),(0,o.M$)(s.t0)&&(r.errors=s.t0.response.data.errors),(0,o.qc)(s.t0)&&(r.error=s.t0.response.data.error),(0,o.jE)(s.t0)&&r.$logOut(),r.status=s.t0.response.status;case 21:r.validating=!1;case 22:case"end":return s.stop()}}),s,null,[[6,14]])})))()}}};const p=(0,t(1900).Z)(d,(function(){var r=this,s=r.$createElement,t=r._self._c||s;return t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-lg-12"},[r.success?[t("v-success",[r._v(r._s(r.successMsg))])]:r._e(),r._v(" "),r.error?[t("v-error",{attrs:{variant:"danger",icon:"alert"}},[r._v(r._s(r.error))])]:r._e(),r._v(" "),t("div",{staticClass:"mm-edit-list-data"},[t("div",{staticClass:"card"},[r._m(0),r._v(" "),t("div",{staticClass:"card-body"},[t("form",{on:{submit:function(s){return s.preventDefault(),r.resetPassword.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"cpass"}},[r._v("Current Password:")]),r._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:r.user.old_password,expression:"user.old_password"}],staticClass:"form-control",class:[{"is-invalid":r.errorFor("old_password")}],attrs:{type:"Password",id:"cpass"},domProps:{value:r.user.old_password},on:{input:function(s){s.target.composing||r.$set(r.user,"old_password",s.target.value)}}}),r._v(" "),t("v-errors",{attrs:{errors:r.errorFor("old_password")}})],1),r._v(" "),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"npass"}},[r._v("New Password:")]),r._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:r.user.password,expression:"user.password"}],staticClass:"form-control",class:[{"is-invalid":r.errorFor("password")}],attrs:{type:"Password",id:"npass"},domProps:{value:r.user.password},on:{input:function(s){s.target.composing||r.$set(r.user,"password",s.target.value)}}}),r._v(" "),t("v-errors",{attrs:{errors:r.errorFor("password")}})],1),r._v(" "),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"vpass"}},[r._v("Verify Password:")]),r._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:r.user.password_confirmation,expression:"user.password_confirmation"}],staticClass:"form-control",attrs:{type:"Password",id:"vpass"},domProps:{value:r.user.password_confirmation},on:{input:function(s){s.target.composing||r.$set(r.user,"password_confirmation",s.target.value)}}})]),r._v(" "),t("button",{staticClass:"btn btn-primary mr-2",attrs:{type:"submit",disabled:r.validating}},[r._v("\n                          "+r._s(r.buttonText)+"\n                       ")])])])])])],2)])])}),[function(){var r=this,s=r.$createElement,t=r._self._c||s;return t("div",{staticClass:"card-header d-flex justify-content-between"},[t("div",{staticClass:"mm-header-title"},[t("h4",{staticClass:"card-title"},[r._v("Change Password")])])])}],!1,null,null,null).exports}}]);