(self.webpackChunk=self.webpackChunk||[]).push([[749],{4323:(t,e,r)=>{"use strict";r.d(e,{qc:()=>n,jE:()=>a,tl:()=>s,M$:()=>i});var n=function(t){return o(t)&&400===t.response.status},a=function(t){return o(t)&&401===t.response.status},s=function(t){return o(t)&&403===t.response.status},i=function(t){return o(t)&&422===t.response.status},o=function(t){return t.response&&t.response.status}},9749:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>v});var n=r(7757),a=r.n(n),s=r(629),i=r(4323);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t,e,r,n,a,s,i){try{var o=t[s](i),c=o.value}catch(t){return void r(t)}o.done?e(c):Promise.resolve(c).then(n,a)}function f(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var s=t.apply(e,r);function i(t){d(s,n,a,i,o,"next",t)}function o(t){d(s,n,a,i,o,"throw",t)}i(void 0)}))}}const l={name:"ReadNotifications",created:function(){this.getRead()},mounted:function(){var t=this;return f(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$broadcast();case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{loading:!1}},computed:c({},(0,s.Se)({notifications:"notifications/read"})),methods:c(c({},(0,s.nv)({getNotifications:"notifications/getNotifications"})),{},{getRead:function(){var t=this;return f(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.loading=!0;try{t.getNotifications("read")}catch(e){console.log(e),(0,i.jE)(e)&&t.$logOut(),(0,i.tl)(e)&&t.$toasted.error("Kindly verify your account before performing any actions!")}t.loading=!1;case 3:case"end":return e.stop()}}),e)})))()}})};const v=(0,r(1900).Z)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"card card-block card-stretch card-height"},[t._m(0),t._v(" "),r("div",{staticClass:"card-body"},[r("b-table-simple",{attrs:{responsive:""}},[r("b-thead",[r("b-th",[t._v("#")]),t._v(" "),r("b-th",[t._v("Type")]),t._v(" "),r("b-th",[t._v("Message")]),t._v(" "),r("b-th",[t._v("Created Date")]),t._v(" "),r("b-th",[t._v("Read Date")])],1),t._v(" "),t.loading?r("b-tr",{staticClass:"text-center"},[r("b-td"),t._v(" "),r("b-td"),t._v(" "),r("b-td",[r("b-spinner",{attrs:{variant:"primary",type:"grow",label:"Spinning"}})],1),t._v(" "),r("b-td"),t._v(" "),r("b-td")],1):t.notifications.length>0?r("b-tbody",t._l(t.notifications,(function(e,n){return r("b-tr",{key:"notification"+n},[r("b-th",[t._v(t._s(n+1))]),t._v(" "),r("b-td",[t._v(t._s(t._f("formatType")(e.type)))]),t._v(" "),r("b-td",[t._v(t._s(e.data.message))]),t._v(" "),r("b-td",[t._v(t._s(t._f("dateFilter")(e.created_at)))]),t._v(" "),r("b-td",[t._v(t._s(t._f("dateFilter")(e.read_at)))])],1)})),1):r("b-tbody",[r("b-tr",{staticClass:"text-center"},[r("b-td",{attrs:{colspan:"6"}},[t._v("No result match your search.")])],1)],1)],1)],1)])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card-header d-flex justify-content-between"},[r("div",{staticClass:"header-title"},[r("h4",{staticClass:"card-title mb-0"},[t._v("Read Notifications")])])])}],!1,null,null,null).exports}}]);