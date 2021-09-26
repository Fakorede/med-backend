(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_backend_orders_OrderView_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderModal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderModal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'OrderBody',
  props: ['order', 'loading'],
  data: function data() {
    return {
      riders: [],
      rider: ''
    };
  },
  mounted: function mounted() {//this.getAvailableRiders()
  },
  methods: {
    getAvailableRiders: function getAvailableRiders() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios.get("/api/admin", {
                  headers: {
                    'Authorization': "Bearer ".concat(localStorage.getItem('sserpxe_cigam'))
                  }
                });

              case 2:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.riders = data.data;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    assignRider: function assignRider() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios.post("/api/admin", _this2.rider, {
                  headers: {
                    'Authorization': "Bearer ".concat(localStorage.getItem('sserpxe_cigam'))
                  }
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _OrderModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderModal */ "./resources/js/views/backend/orders/OrderModal.vue");
/* harmony import */ var _config_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config/response */ "./resources/js/config/response.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  name: 'OrderView',
  components: {
    OrderBody: _OrderModal__WEBPACK_IMPORTED_MODULE_1__.default
  },
  data: function data() {
    return {
      order: {},
      loading: false,
      errors: null
    };
  },
  created: function created() {
    this.getOrder();
  },
  methods: {
    getOrder: function getOrder() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$axios$get, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.prev = 1;
                _context.next = 4;
                return axios.get("/api/admin/order/".concat(_this.$route.params.id), {
                  headers: {
                    'Authorization': "Bearer ".concat(localStorage.getItem('sserpxe_cigam'))
                  }
                });

              case 4:
                _yield$axios$get = _context.sent;
                data = _yield$axios$get.data;
                _this.order = data.data;
                _context.next = 13;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

                if ((0,_config_response__WEBPACK_IMPORTED_MODULE_2__.is401)(_context.t0)) {
                  _this.$logOut();
                }

              case 13:
                _this.loading = false;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 9]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/config/response.js":
/*!*****************************************!*\
  !*** ./resources/js/config/response.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "is400": () => (/* binding */ is400),
/* harmony export */   "is401": () => (/* binding */ is401),
/* harmony export */   "is403": () => (/* binding */ is403),
/* harmony export */   "is422": () => (/* binding */ is422)
/* harmony export */ });
var is400 = function is400(err) {
  return isErrorWithResponseAndStatus(err) && 400 === err.response.status;
};
var is401 = function is401(err) {
  return isErrorWithResponseAndStatus(err) && 401 === err.response.status;
};
var is403 = function is403(err) {
  return isErrorWithResponseAndStatus(err) && 403 === err.response.status;
};
var is422 = function is422(err) {
  return isErrorWithResponseAndStatus(err) && 422 === err.response.status;
};

var isErrorWithResponseAndStatus = function isErrorWithResponseAndStatus(err) {
  return err.response && err.response.status;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderModal.vue?vue&type=style&index=0&id=0fd4a3df&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderModal.vue?vue&type=style&index=0&id=0fd4a3df&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.prc-box[data-v-0fd4a3df] {\n  padding: 5px\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderModal.vue?vue&type=style&index=0&id=0fd4a3df&scoped=true&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderModal.vue?vue&type=style&index=0&id=0fd4a3df&scoped=true&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderModal_vue_vue_type_style_index_0_id_0fd4a3df_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderModal.vue?vue&type=style&index=0&id=0fd4a3df&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderModal.vue?vue&type=style&index=0&id=0fd4a3df&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderModal_vue_vue_type_style_index_0_id_0fd4a3df_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderModal_vue_vue_type_style_index_0_id_0fd4a3df_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/backend/orders/OrderModal.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/backend/orders/OrderModal.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderModal_vue_vue_type_template_id_0fd4a3df_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderModal.vue?vue&type=template&id=0fd4a3df&scoped=true& */ "./resources/js/views/backend/orders/OrderModal.vue?vue&type=template&id=0fd4a3df&scoped=true&");
/* harmony import */ var _OrderModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderModal.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/orders/OrderModal.vue?vue&type=script&lang=js&");
/* harmony import */ var _OrderModal_vue_vue_type_style_index_0_id_0fd4a3df_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrderModal.vue?vue&type=style&index=0&id=0fd4a3df&scoped=true&lang=css& */ "./resources/js/views/backend/orders/OrderModal.vue?vue&type=style&index=0&id=0fd4a3df&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _OrderModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _OrderModal_vue_vue_type_template_id_0fd4a3df_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _OrderModal_vue_vue_type_template_id_0fd4a3df_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0fd4a3df",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/orders/OrderModal.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/orders/OrderView.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/backend/orders/OrderView.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OrderView_vue_vue_type_template_id_1200f263___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OrderView.vue?vue&type=template&id=1200f263& */ "./resources/js/views/backend/orders/OrderView.vue?vue&type=template&id=1200f263&");
/* harmony import */ var _OrderView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OrderView.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/orders/OrderView.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _OrderView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _OrderView_vue_vue_type_template_id_1200f263___WEBPACK_IMPORTED_MODULE_0__.render,
  _OrderView_vue_vue_type_template_id_1200f263___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/orders/OrderView.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/orders/OrderModal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/backend/orders/OrderModal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderModal.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/backend/orders/OrderView.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/backend/orders/OrderView.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderView.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/backend/orders/OrderModal.vue?vue&type=style&index=0&id=0fd4a3df&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/views/backend/orders/OrderModal.vue?vue&type=style&index=0&id=0fd4a3df&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderModal_vue_vue_type_style_index_0_id_0fd4a3df_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderModal.vue?vue&type=style&index=0&id=0fd4a3df&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderModal.vue?vue&type=style&index=0&id=0fd4a3df&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/views/backend/orders/OrderModal.vue?vue&type=template&id=0fd4a3df&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/views/backend/orders/OrderModal.vue?vue&type=template&id=0fd4a3df&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderModal_vue_vue_type_template_id_0fd4a3df_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderModal_vue_vue_type_template_id_0fd4a3df_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderModal_vue_vue_type_template_id_0fd4a3df_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderModal.vue?vue&type=template&id=0fd4a3df&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderModal.vue?vue&type=template&id=0fd4a3df&scoped=true&");


/***/ }),

/***/ "./resources/js/views/backend/orders/OrderView.vue?vue&type=template&id=1200f263&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/backend/orders/OrderView.vue?vue&type=template&id=1200f263& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderView_vue_vue_type_template_id_1200f263___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderView_vue_vue_type_template_id_1200f263___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OrderView_vue_vue_type_template_id_1200f263___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OrderView.vue?vue&type=template&id=1200f263& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderView.vue?vue&type=template&id=1200f263&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderModal.vue?vue&type=template&id=0fd4a3df&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderModal.vue?vue&type=template&id=0fd4a3df&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
      _vm.loading
        ? [_vm._v("Loading...")]
        : [
            _c(
              "div",
              { staticClass: "ml-4 mb-4" },
              [
                _c(
                  "router-link",
                  { attrs: { to: { name: "app.order-list" } } },
                  [
                    _c("span", { staticClass: "text-primary" }, [
                      _vm._v("← Go back")
                    ])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row mb-4 ml-2 mt-2" }, [
              _c("div", { staticClass: "col-md-6" }, [
                _c("strong", [_vm._v("ORDER DATE:")]),
                _vm._v(" " + _vm._s(_vm._f("dateFilter")(_vm.order.date)))
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-3" },
                [
                  _c("strong", [_vm._v("ORDER TYPE:")]),
                  _vm._v(" "),
                  _vm.order.order_type === "Dispatch"
                    ? [
                        _c("span", { staticClass: "badge badge-primary" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.order.order_type) +
                              "\n          "
                          )
                        ])
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.order.order_type === "Errand"
                    ? [
                        _c("span", { staticClass: "badge badge-info" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.order.order_type) +
                              "\n          "
                          )
                        ])
                      ]
                    : _vm._e()
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-3" },
                [
                  _c("strong", [_vm._v("ORDER STATUS:")]),
                  _vm._v(" "),
                  _vm.order.order_status === "Created"
                    ? [
                        _c("span", { staticClass: "badge badge-1" }, [
                          _vm._v(_vm._s(_vm.order.order_status))
                        ])
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.order.order_status === "Processed"
                    ? [
                        _c("span", { staticClass: "badge badge-2" }, [
                          _vm._v(_vm._s(_vm.order.order_status))
                        ])
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.order.order_status === "Assigned"
                    ? [
                        _c("span", { staticClass: "badge badge-3" }, [
                          _vm._v(_vm._s(_vm.order.order_status))
                        ])
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.order.order_status === "In-Transit"
                    ? [
                        _c("span", { staticClass: "badge badge-4" }, [
                          _vm._v(_vm._s(_vm.order.order_status))
                        ])
                      ]
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.order.order_status === "Delivered"
                    ? [
                        _c("span", { staticClass: "badge badge-5" }, [
                          _vm._v(_vm._s(_vm.order.order_status))
                        ])
                      ]
                    : _vm._e()
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "row mb-4 ml-2" }, [
              _c("div", { staticClass: "col-md-4" }, [
                _c("strong", [_vm._v("TOTAL AMOUNT: ")]),
                _vm._v(
                  "₦" +
                    _vm._s(
                      new Intl.NumberFormat().format(_vm.order.total_amount)
                    ) +
                    "\n      "
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col-md-4" },
                [
                  _c("strong", [_vm._v("PAYMENT STATUS:")]),
                  _vm._v(" "),
                  _vm.order.payment_status === "Paid"
                    ? [
                        _c("span", { staticClass: "badge badge-success" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.order.payment_status) +
                              "\n          "
                          )
                        ])
                      ]
                    : _vm.order.payment_status === "Not Paid"
                    ? [
                        _c("span", { staticClass: "badge badge-danger" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.order.payment_status) +
                              "\n          "
                          )
                        ])
                      ]
                    : [
                        _c("span", { staticClass: "badge badge-warning" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(_vm.order.payment_status) +
                              "\n          "
                          )
                        ])
                      ]
                ],
                2
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-4" }, [
                _c("strong", [_vm._v("TRACKING NUMBER:")]),
                _vm._v(" " + _vm._s(_vm.order.tracking_number) + "\n      ")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "container-fluid" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-sm-12" }, [
                  _c("div", { staticClass: "card" }, [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c(
                        "div",
                        { staticClass: "table-responsive pricing pt-2" },
                        [
                          _c(
                            "b-table-simple",
                            {
                              attrs: {
                                "foot-clone": "",
                                responsive: "",
                                outlined: "",
                                striped: "",
                                hover: ""
                              }
                            },
                            [
                              _c(
                                "b-thead",
                                [
                                  _c("b-th", [_vm._v("#")]),
                                  _vm._v(" "),
                                  _c("b-th", [_vm._v("Item")]),
                                  _vm._v(" "),
                                  _c("b-th", [_vm._v("Quantity")]),
                                  _vm._v(" "),
                                  _c("b-th", [_vm._v("Amount(₦)")]),
                                  _vm._v(" "),
                                  _c("b-th", [_vm._v("Description")])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-tbody",
                                _vm._l(_vm.order.order_items, function(
                                  orderItem,
                                  index
                                ) {
                                  return _c(
                                    "b-tr",
                                    { key: "order-item" + index },
                                    [
                                      _c("b-th", [_vm._v(_vm._s(index + 1))]),
                                      _vm._v(" "),
                                      _c("b-th", [
                                        _vm._v(_vm._s(orderItem.item))
                                      ]),
                                      _vm._v(" "),
                                      _c("b-th", [
                                        _vm._v(_vm._s(orderItem.quantity))
                                      ]),
                                      _vm._v(" "),
                                      _c("b-td", [
                                        _vm._v(
                                          "₦" +
                                            _vm._s(
                                              new Intl.NumberFormat().format(
                                                orderItem.price
                                              )
                                            )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("b-td", [
                                        _vm._v(_vm._s(orderItem.description))
                                      ])
                                    ],
                                    1
                                  )
                                }),
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "container-fluid" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c(
                    "div",
                    { staticClass: "card card-block card-stretch card-height" },
                    [
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "card-body" },
                        [
                          _c(
                            "b-table-simple",
                            { attrs: { responsive: "" } },
                            [
                              _c(
                                "b-tbody",
                                [
                                  _c(
                                    "b-tr",
                                    [
                                      _c("b-td", [
                                        _c("strong", [_vm._v("User Details")])
                                      ]),
                                      _vm._v(" "),
                                      _c("b-td", [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(_vm.order.user.first_name) +
                                            " " +
                                            _vm._s(_vm.order.user.last_name) +
                                            " - " +
                                            _vm._s(_vm.order.user.email) +
                                            "\n                          "
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tr",
                                    [
                                      _c("b-td", [
                                        _c("strong", [
                                          _vm._v("Personnel Option")
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("b-td", [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(_vm.order.personnel_option) +
                                            "\n                          "
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tr",
                                    [
                                      _c("b-td", [
                                        _c("strong", [_vm._v("Sender Name")])
                                      ]),
                                      _vm._v(" "),
                                      _c("b-td", [
                                        _vm._v(
                                          "\n                             " +
                                            _vm._s(_vm.order.sender_name) +
                                            "\n                            "
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tr",
                                    [
                                      _c("b-td", [
                                        _c("strong", [_vm._v("Sender Mobile")])
                                      ]),
                                      _vm._v(" "),
                                      _c("b-td", [
                                        _vm._v(
                                          "\n                              " +
                                            _vm._s(_vm.order.sender_mobile) +
                                            "\n                            "
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tr",
                                    [
                                      _c("b-td", [
                                        _c("strong", [_vm._v("Receiver Name")])
                                      ]),
                                      _vm._v(" "),
                                      _c("b-td", [
                                        _vm._v(
                                          "\n                             " +
                                            _vm._s(_vm.order.receiver_name) +
                                            "\n                            "
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tr",
                                    [
                                      _c("b-td", [
                                        _c("strong", [
                                          _vm._v("Receiver Mobile")
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("b-td", [
                                        _vm._v(
                                          "\n                              " +
                                            _vm._s(_vm.order.receiver_mobile) +
                                            "\n                            "
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tr",
                                    [
                                      _c("b-td", [
                                        _c("strong", [_vm._v("Pickup Address")])
                                      ]),
                                      _vm._v(" "),
                                      _c("b-td", [
                                        _vm._v(
                                          "\n                             " +
                                            _vm._s(_vm.order.pickup_address) +
                                            "\n                            "
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tr",
                                    [
                                      _c("b-td", [
                                        _c("strong", [
                                          _vm._v("Dropoff Address")
                                        ])
                                      ]),
                                      _vm._v(" "),
                                      _c("b-td", [
                                        _vm._v(
                                          "\n                              " +
                                            _vm._s(_vm.order.dropoff_address) +
                                            "\n                            "
                                        )
                                      ])
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
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "container-fluid" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c(
                    "div",
                    { staticClass: "card card-block card-stretch card-height" },
                    [
                      _vm._m(2),
                      _vm._v(" "),
                      _c("div", { staticClass: "card-body" }, [
                        _vm.order.rider
                          ? _c(
                              "div",
                              [
                                _c(
                                  "b-table-simple",
                                  { attrs: { responsive: "" } },
                                  [
                                    _c(
                                      "b-tbody",
                                      [
                                        _c(
                                          "b-tr",
                                          [
                                            _c("b-td", [
                                              _c("strong", [
                                                _vm._v("Sender Name")
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c("b-td", [
                                              _vm._v(
                                                "\n                              " +
                                                  _vm._s(
                                                    _vm.order.sender_name
                                                  ) +
                                                  "\n                              "
                                              )
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-tr",
                                          [
                                            _c("b-td", [
                                              _c("strong", [
                                                _vm._v("Sender Mobile")
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c("b-td", [
                                              _vm._v(
                                                "\n                                " +
                                                  _vm._s(
                                                    _vm.order.sender_mobile
                                                  ) +
                                                  "\n                              "
                                              )
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-tr",
                                          [
                                            _c("b-td", [
                                              _c("strong", [
                                                _vm._v("Receiver Name")
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c("b-td", [
                                              _vm._v(
                                                "\n                              " +
                                                  _vm._s(
                                                    _vm.order.receiver_name
                                                  ) +
                                                  "\n                              "
                                              )
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-tr",
                                          [
                                            _c("b-td", [
                                              _c("strong", [
                                                _vm._v("Receiver Mobile")
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c("b-td", [
                                              _vm._v(
                                                "\n                                " +
                                                  _vm._s(
                                                    _vm.order.receiver_mobile
                                                  ) +
                                                  "\n                              "
                                              )
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-tr",
                                          [
                                            _c("b-td", [
                                              _c("strong", [
                                                _vm._v("Pickup Address")
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c("b-td", [
                                              _vm._v(
                                                "\n                              " +
                                                  _vm._s(
                                                    _vm.order.pickup_address
                                                  ) +
                                                  "\n                              "
                                              )
                                            ])
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-tr",
                                          [
                                            _c("b-td", [
                                              _c("strong", [
                                                _vm._v("Dropoff Address")
                                              ])
                                            ]),
                                            _vm._v(" "),
                                            _c("b-td", [
                                              _vm._v(
                                                "\n                                " +
                                                  _vm._s(
                                                    _vm.order.dropoff_address
                                                  ) +
                                                  "\n                              "
                                              )
                                            ])
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
                          : _c("div", [
                              _vm._m(3),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col-md-6" }, [
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.rider,
                                          expression: "rider"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      attrs: { name: "", id: "rider" },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.rider = $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        }
                                      }
                                    },
                                    [
                                      _c("option", [_vm._v("Rider 2")]),
                                      _vm._v(" "),
                                      _c("option", [_vm._v("Rider 3")])
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "col-md-6" }, [
                                  _c(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary",
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.assignRider.apply(
                                            null,
                                            arguments
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Assign")]
                                  )
                                ])
                              ])
                            ])
                      ])
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "container-fluid" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-12" }, [
                  _c(
                    "div",
                    { staticClass: "card card-block card-stretch card-height" },
                    [
                      _vm._m(4),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "card-body" },
                        [
                          _c(
                            "b-table-simple",
                            { attrs: { responsive: "" } },
                            [
                              _c(
                                "b-tbody",
                                [
                                  _vm.order.order_type == "Errand"
                                    ? _c(
                                        "b-tr",
                                        [
                                          _c("b-td", [
                                            _c("strong", [_vm._v("Order Type")])
                                          ]),
                                          _vm._v(" "),
                                          _c("b-td", [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(_vm.order.order_type) +
                                                "\n                          "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.order.order_type == "Errand"
                                    ? _c(
                                        "b-tr",
                                        [
                                          _c("b-td", [
                                            _c("strong", [_vm._v("Store Name")])
                                          ]),
                                          _vm._v(" "),
                                          _c("b-td", [
                                            _vm._v(
                                              "\n                            " +
                                                _vm._s(_vm.order.store_name) +
                                                "\n                          "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "b-tr",
                                    [
                                      _c("b-td", [
                                        _c("strong", [_vm._v("Payment Method")])
                                      ]),
                                      _vm._v(" "),
                                      _c("b-td", [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(_vm.order.payment_method) +
                                            "\n                            "
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-tr",
                                    [
                                      _c("b-td", [
                                        _c("strong", [_vm._v("Delivery Note")])
                                      ]),
                                      _vm._v(" "),
                                      _c("b-td", [
                                        _vm._v(
                                          "\n                            " +
                                            _vm._s(_vm.order.delivery_note) +
                                            "\n                            "
                                        )
                                      ])
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _vm.order.payment_verified
                                    ? _c(
                                        "b-tr",
                                        [
                                          _c("b-td", [
                                            _c("strong", [
                                              _vm._v("Payment Date")
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("b-td", [
                                            _vm._v(
                                              "\n                              " +
                                                _vm._s(
                                                  _vm.order.paid_at ||
                                                    _vm.dateFilter
                                                ) +
                                                "\n                            "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.order.delivered_at
                                    ? _c(
                                        "b-tr",
                                        [
                                          _c("b-td", [
                                            _c("strong", [
                                              _vm._v("Delivery Date")
                                            ])
                                          ]),
                                          _vm._v(" "),
                                          _c("b-td", [
                                            _vm._v(
                                              "\n                              " +
                                                _vm._s(
                                                  _vm.order.delivered_at ||
                                                    _vm.dateFilter
                                                ) +
                                                "\n                            "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    : _vm._e()
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
                  )
                ])
              ])
            ])
          ]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("div", [_c("strong", [_vm._v("Order Items")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header d-flex justify-content-between" },
      [
        _c("div", { staticClass: "header-title" }, [
          _c("div", [_c("strong", [_vm._v("User Information")])])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header d-flex justify-content-between" },
      [
        _c("div", { staticClass: "header-title" }, [
          _c("div", [_c("strong", [_vm._v("Rider Information")])])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("label", { staticClass: "ml-3" }, [
        _vm._v("Assign a Rider to this Order")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "card-header d-flex justify-content-between" },
      [
        _c("div", { staticClass: "header-title" }, [
          _c("div", [_c("strong", [_vm._v("Other Information")])])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderView.vue?vue&type=template&id=1200f263&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/orders/OrderView.vue?vue&type=template&id=1200f263& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm.loading
      ? _c("div", [_vm._v("Loading...")])
      : _c(
          "div",
          [
            _c("order-body", {
              attrs: { order: _vm.order, loading: _vm.loading }
            })
          ],
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);