(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_layouts_DashboardLayout_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fullscreen/Fullscreen.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fullscreen/Fullscreen.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Fullscreen',
  data: function data() {
    return {
      data: true
    };
  },
  props: {
    extraclass: {
      type: String,
      "default": ''
    },
    color: {
      type: String,
      "default": 'primary'
    }
  },
  methods: {
    fullscreen: function fullscreen() {
      if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          console.log(document.documentElement.requestFullscreen());
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    },
    change: function change() {
      this.data = !this.data;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader/Loader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader/Loader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_pluginInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config/pluginInit */ "./resources/js/config/pluginInit.js");
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Loader',
  watch: {
    $route: function $route() {
      this.init();
    }
  },
  computed: {},
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      var load = document.getElementById('loading');
      load.classList.remove('d-none');
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      _config_pluginInit__WEBPACK_IMPORTED_MODULE_0__.animation.fadeIn(load, {
        duration: 20
      });
      setTimeout(function () {
        _config_pluginInit__WEBPACK_IMPORTED_MODULE_0__.animation.fadeOut(load, {
          duration: 20
        });
        load.classList.add('d-none');
      }, 1000);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/backend/Footer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/backend/Footer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Footer",
  prop: {},
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    appName: 'app/appName'
  })), {}, {
    currentYear: function currentYear() {
      return new Date().getFullYear();
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/backend/Header.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/backend/Header.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_pluginInit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/pluginInit */ "./resources/js/config/pluginInit.js");
/* harmony import */ var _fullscreen_Fullscreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fullscreen/Fullscreen */ "./resources/js/components/fullscreen/Fullscreen.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Header",
  components: {
    Fullscreen: _fullscreen_Fullscreen__WEBPACK_IMPORTED_MODULE_2__.default
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_3__.mapGetters)({
    logo: 'app/darklogo',
    sidelogo: 'app/logo',
    user: 'auth/user'
  })),
  methods: {
    miniSidebar: function miniSidebar() {
      _config_pluginInit__WEBPACK_IMPORTED_MODULE_1__.core.triggerSet();
    },
    logOut: function logOut() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch('auth/logOut');

              case 2:
                _context.next = 4;
                return _this.$router.push({
                  name: 'auth.login'
                });

              case 4:
                _this.$toasted.success('Successfully loggged out!');

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/DashboardLayout.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/DashboardLayout.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_pluginInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/pluginInit */ "./resources/js/config/pluginInit.js");
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loader/Loader */ "./resources/js/components/loader/Loader.vue");
/* harmony import */ var _components_partials_backend_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/partials/backend/Header */ "./resources/js/components/partials/backend/Header.vue");
/* harmony import */ var _components_partials_backend_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/partials/backend/Footer */ "./resources/js/components/partials/backend/Footer.vue");
//
//
//
//
//
//
//
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
  name: 'DashboardLayout',
  components: {
    Header: _components_partials_backend_Header__WEBPACK_IMPORTED_MODULE_2__.default,
    Footer: _components_partials_backend_Footer__WEBPACK_IMPORTED_MODULE_3__.default,
    Loader: _components_loader_Loader__WEBPACK_IMPORTED_MODULE_1__.default
  },
  mounted: function mounted() {
    document.body.classList = 'box-bg mm-hotel';
    _config_pluginInit__WEBPACK_IMPORTED_MODULE_0__.core.iconanimate();
  },
  destroyed: function destroyed() {
    document.body.classList = 'box-bg mm-hotel';
  }
});

/***/ }),

/***/ "./resources/js/components/fullscreen/Fullscreen.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/fullscreen/Fullscreen.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Fullscreen_vue_vue_type_template_id_63c909f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fullscreen.vue?vue&type=template&id=63c909f4& */ "./resources/js/components/fullscreen/Fullscreen.vue?vue&type=template&id=63c909f4&");
/* harmony import */ var _Fullscreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fullscreen.vue?vue&type=script&lang=js& */ "./resources/js/components/fullscreen/Fullscreen.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Fullscreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Fullscreen_vue_vue_type_template_id_63c909f4___WEBPACK_IMPORTED_MODULE_0__.render,
  _Fullscreen_vue_vue_type_template_id_63c909f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/fullscreen/Fullscreen.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/loader/Loader.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/loader/Loader.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Loader_vue_vue_type_template_id_f03ce418___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=f03ce418& */ "./resources/js/components/loader/Loader.vue?vue&type=template&id=f03ce418&");
/* harmony import */ var _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.vue?vue&type=script&lang=js& */ "./resources/js/components/loader/Loader.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Loader_vue_vue_type_template_id_f03ce418___WEBPACK_IMPORTED_MODULE_0__.render,
  _Loader_vue_vue_type_template_id_f03ce418___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/loader/Loader.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/partials/backend/Footer.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/partials/backend/Footer.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_86ef8f90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=86ef8f90& */ "./resources/js/components/partials/backend/Footer.vue?vue&type=template&id=86ef8f90&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/partials/backend/Footer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Footer_vue_vue_type_template_id_86ef8f90___WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_86ef8f90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/partials/backend/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/partials/backend/Header.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/partials/backend/Header.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_vue_vue_type_template_id_448ac7ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=448ac7ac& */ "./resources/js/components/partials/backend/Header.vue?vue&type=template&id=448ac7ac&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/components/partials/backend/Header.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Header_vue_vue_type_template_id_448ac7ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _Header_vue_vue_type_template_id_448ac7ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/partials/backend/Header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/DashboardLayout.vue":
/*!**************************************************!*\
  !*** ./resources/js/layouts/DashboardLayout.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DashboardLayout_vue_vue_type_template_id_549bf5ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=template&id=549bf5ac& */ "./resources/js/layouts/DashboardLayout.vue?vue&type=template&id=549bf5ac&");
/* harmony import */ var _DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardLayout.vue?vue&type=script&lang=js& */ "./resources/js/layouts/DashboardLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DashboardLayout_vue_vue_type_template_id_549bf5ac___WEBPACK_IMPORTED_MODULE_0__.render,
  _DashboardLayout_vue_vue_type_template_id_549bf5ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/DashboardLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/fullscreen/Fullscreen.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/fullscreen/Fullscreen.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Fullscreen.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fullscreen/Fullscreen.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/loader/Loader.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/loader/Loader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader/Loader.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/partials/backend/Footer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/partials/backend/Footer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/backend/Footer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/partials/backend/Header.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/partials/backend/Header.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/backend/Header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/layouts/DashboardLayout.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/layouts/DashboardLayout.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/DashboardLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/fullscreen/Fullscreen.vue?vue&type=template&id=63c909f4&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/fullscreen/Fullscreen.vue?vue&type=template&id=63c909f4& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_template_id_63c909f4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_template_id_63c909f4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Fullscreen_vue_vue_type_template_id_63c909f4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Fullscreen.vue?vue&type=template&id=63c909f4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fullscreen/Fullscreen.vue?vue&type=template&id=63c909f4&");


/***/ }),

/***/ "./resources/js/components/loader/Loader.vue?vue&type=template&id=f03ce418&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/loader/Loader.vue?vue&type=template&id=f03ce418& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_f03ce418___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_f03ce418___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_f03ce418___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Loader.vue?vue&type=template&id=f03ce418& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader/Loader.vue?vue&type=template&id=f03ce418&");


/***/ }),

/***/ "./resources/js/components/partials/backend/Footer.vue?vue&type=template&id=86ef8f90&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/partials/backend/Footer.vue?vue&type=template&id=86ef8f90& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_86ef8f90___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_86ef8f90___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_86ef8f90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=86ef8f90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/backend/Footer.vue?vue&type=template&id=86ef8f90&");


/***/ }),

/***/ "./resources/js/components/partials/backend/Header.vue?vue&type=template&id=448ac7ac&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/partials/backend/Header.vue?vue&type=template&id=448ac7ac& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_448ac7ac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_448ac7ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_448ac7ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Header.vue?vue&type=template&id=448ac7ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/backend/Header.vue?vue&type=template&id=448ac7ac&");


/***/ }),

/***/ "./resources/js/layouts/DashboardLayout.vue?vue&type=template&id=549bf5ac&":
/*!*********************************************************************************!*\
  !*** ./resources/js/layouts/DashboardLayout.vue?vue&type=template&id=549bf5ac& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_549bf5ac___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_549bf5ac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DashboardLayout_vue_vue_type_template_id_549bf5ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DashboardLayout.vue?vue&type=template&id=549bf5ac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/DashboardLayout.vue?vue&type=template&id=549bf5ac&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fullscreen/Fullscreen.vue?vue&type=template&id=63c909f4&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/fullscreen/Fullscreen.vue?vue&type=template&id=63c909f4& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "li",
    {
      on: {
        click: function($event) {
          return _vm.change()
        }
      }
    },
    [
      _c(
        "a",
        {
          class: _vm.extraclass,
          attrs: { id: "btnFullscreen" },
          on: {
            click: function($event) {
              return _vm.fullscreen()
            }
          }
        },
        [
          _vm.data
            ? _c("i", { staticClass: "max" }, [
                _c(
                  "svg",
                  {
                    class:
                      "svg-icon feather feather-maximize text-" + _vm.color,
                    attrs: {
                      id: "d-3-max",
                      width: "20",
                      height: "20",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"
                      }
                    })
                  ]
                )
              ])
            : _c("i", { staticClass: "min" }, [
                _c(
                  "svg",
                  {
                    class:
                      "svg-icon  feather feather-minimize text-" + _vm.color,
                    attrs: {
                      id: "d-3-min",
                      width: "20",
                      height: "20",
                      xmlns: "http://www.w3.org/2000/svg",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }
                  },
                  [
                    _c("path", {
                      attrs: {
                        d:
                          "M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"
                      }
                    })
                  ]
                )
              ])
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader/Loader.vue?vue&type=template&id=f03ce418&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/loader/Loader.vue?vue&type=template&id=f03ce418& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "loading" } }, [
      _c("div", { attrs: { id: "loading-center" } })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/backend/Footer.vue?vue&type=template&id=86ef8f90&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/backend/Footer.vue?vue&type=template&id=86ef8f90& ***!
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
  return _c("footer", { staticClass: "mm-footer" }, [
    _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-lg-6" }),
        _vm._v(" "),
        _c("div", { staticClass: "col-lg-6 text-right" }, [
          _vm._v(
            "\n                © " +
              _vm._s(_vm.currentYear) +
              ". Magic Express Delivery. \n                "
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/backend/Header.vue?vue&type=template&id=448ac7ac&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/partials/backend/Header.vue?vue&type=template&id=448ac7ac& ***!
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
  return _c("div", { staticClass: "mm-top-navbar" }, [
    _c(
      "div",
      {
        staticClass:
          "mm-navbar-custom d-flex align-items-center justify-content-between"
      },
      [
        _c(
          "div",
          {
            staticClass:
              "mm-navbar-logo d-flex align-items-center justify-content-between",
            on: { click: _vm.miniSidebar }
          },
          [
            _c("i", { staticClass: "ri-menu-line wrapper-menu" }),
            _vm._v(" "),
            _c("router-link", {
              staticClass: "header-logo",
              attrs: { to: { name: "app.dashboard" } }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "menu-horizontal" }, [
          _c("nav", { staticClass: "mm-sidebar-menu" }, [
            _c(
              "div",
              {
                staticClass:
                  "mm-sidebar-logo d-flex align-items-center justify-content-between"
              },
              [
                _c("router-link", {
                  staticClass: "header-logo",
                  attrs: { to: { name: "app.dashboard" } }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "side-menu-bt-sidebar",
                    on: { click: _vm.miniSidebar }
                  },
                  [_c("i", { staticClass: "las la-bars wrapper-menu mr-0" })]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "ul",
              {
                staticClass: "side-menu d-flex",
                attrs: { id: "mm-sidebar-toggle feather feather-home" }
              },
              [
                _c(
                  "li",
                  { staticClass: "active" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "svg-icon",
                        attrs: { to: { name: "app.dashboard" } }
                      },
                      [
                        _c("i", {}, [
                          _c(
                            "svg",
                            {
                              staticClass: "feather feather-home svg-icon",
                              attrs: {
                                id: "mm-dash",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "20",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round"
                              }
                            },
                            [
                              _c("path", {
                                attrs: {
                                  d:
                                    "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                }
                              }),
                              _vm._v(" "),
                              _c("polyline", {
                                attrs: { points: "9 22 9 14 15 14 15 22" }
                              })
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("h4", [_c("span", [_vm._v("Dashboard")])])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: " " },
                  [
                    _c(
                      "a",
                      {
                        directives: [
                          {
                            name: "b-toggle",
                            rawName: "v-b-toggle.auth",
                            modifiers: { auth: true }
                          }
                        ],
                        staticClass: "collapsed",
                        attrs: {
                          "data-toggle": "collapse",
                          "aria-expanded": "false"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "svg-icon text-primary",
                            attrs: {
                              id: "mm-auth-1",
                              width: "20",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d:
                                  "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(0),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "ri-arrow-right-s-line mm-arrow-right"
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-collapse",
                      {
                        directives: [{ name: "hover", rawName: "v-hover" }],
                        staticClass: "mm-submenu sub-scrll",
                        attrs: {
                          tag: "ul",
                          id: "auth",
                          "data-parent": "#mm-sidebar-toggle"
                        }
                      },
                      [
                        _c(
                          "li",
                          { staticClass: " " },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "svg-icon",
                                attrs: { to: { name: "app.user-add" } }
                              },
                              [
                                _c("i", {}, [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "svg-icon",
                                      attrs: {
                                        id: "mm-user-1-2",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d:
                                            "M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("span", [_vm._v("Add User")])
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          { staticClass: " " },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "svg-icon",
                                attrs: { to: { name: "app.user-list" } }
                              },
                              [
                                _c("i", {}, [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "svg-icon",
                                      attrs: {
                                        id: "mm-user-1-3",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d:
                                            "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("span", [_vm._v("List Users")])
                              ]
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
                _c(
                  "li",
                  { staticClass: " " },
                  [
                    _c(
                      "a",
                      {
                        directives: [
                          {
                            name: "b-toggle",
                            rawName: "v-b-toggle.survey",
                            modifiers: { survey: true }
                          }
                        ],
                        staticClass: "collapsed",
                        attrs: {
                          "data-toggle": "collapse",
                          "aria-expanded": "false"
                        }
                      },
                      [
                        _c(
                          "svg",
                          {
                            staticClass: "svg-icon text-primary",
                            attrs: {
                              id: "mm-app-1",
                              width: "20",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              stroke: "currentColor"
                            }
                          },
                          [
                            _c("path", {
                              attrs: {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d:
                                  "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                              }
                            })
                          ]
                        ),
                        _vm._v(" "),
                        _vm._m(1),
                        _vm._v(" "),
                        _c("i", {
                          staticClass: "ri-arrow-right-s-line mm-arrow-right"
                        })
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-collapse",
                      {
                        directives: [{ name: "hover", rawName: "v-hover" }],
                        staticClass: "mm-submenu sub-scrll",
                        attrs: {
                          tag: "ul",
                          id: "survey",
                          "data-parent": "#mm-sidebar-toggle"
                        }
                      },
                      [
                        _c(
                          "li",
                          { staticClass: " " },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "svg-icon",
                                attrs: { to: { name: "app.response-list" } }
                              },
                              [
                                _c("i", {}, [
                                  _c(
                                    "svg",
                                    {
                                      staticClass: "svg-icon",
                                      attrs: {
                                        id: "mm-form-2",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "20",
                                        viewBox: "0 0 24 24",
                                        "stroke-width": "1.5",
                                        stroke: "#2c3e50",
                                        fill: "none",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                      }
                                    },
                                    [
                                      _c("path", {
                                        attrs: {
                                          stroke: "none",
                                          d: "M0 0h24v24H0z",
                                          fill: "none"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("rect", {
                                        attrs: {
                                          x: "5",
                                          y: "3",
                                          width: "14",
                                          height: "18",
                                          rx: "2"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("line", {
                                        attrs: {
                                          x1: "9",
                                          y1: "7",
                                          x2: "15",
                                          y2: "7"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("line", {
                                        attrs: {
                                          x1: "9",
                                          y1: "11",
                                          x2: "15",
                                          y2: "11"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("line", {
                                        attrs: {
                                          x1: "9",
                                          y1: "15",
                                          x2: "13",
                                          y2: "15"
                                        }
                                      })
                                    ]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("span", [_vm._v("Response Results")])
                              ]
                            )
                          ],
                          1
                        )
                      ]
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
          "nav",
          { staticClass: "navbar navbar-expand-lg navbar-light p-0" },
          [
            _c("ModeSwitch"),
            _vm._v(" "),
            _c(
              "b-navbar-toggle",
              {
                staticClass: "mr-2 text-primary",
                attrs: { target: "nav-collapse" }
              },
              [_c("i", { staticClass: "ri-menu-3-line" })]
            ),
            _vm._v(" "),
            _c("b-collapse", { attrs: { id: "nav-collapse", "is-nav": "" } }, [
              _c(
                "ul",
                {
                  staticClass:
                    "navbar-nav ml-auto navbar-list align-items-center"
                },
                [
                  _c(
                    "li",
                    {
                      directives: [
                        { name: "nav-toggle", rawName: "v-nav-toggle" }
                      ],
                      staticClass: "nav-item nav-icon search-content"
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "search-toggle dropdown-toggle",
                          attrs: {
                            href: "#",
                            id: "dropdownSearch",
                            "data-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false"
                          }
                        },
                        [_c("i", { staticClass: "ri-search-line" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "mm-search-bar mm-sub-dropdown dropdown-menu",
                          attrs: { "aria-labelledby": "dropdownSearch" }
                        },
                        [
                          _c(
                            "form",
                            {
                              staticClass: "searchbox p-2",
                              attrs: { action: "#" }
                            },
                            [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "form-group mb-0 position-relative"
                                },
                                [
                                  _c("input", {
                                    staticClass:
                                      "text search-input font-size-12",
                                    attrs: {
                                      type: "text",
                                      placeholder: "type here to search..."
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "search-link",
                                      attrs: { href: "#" }
                                    },
                                    [_c("i", { staticClass: "ri-search-line" })]
                                  )
                                ]
                              )
                            ]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c("Fullscreen", {
                    staticClass: "nav-item d-none d-lg-block  full-screen"
                  }),
                  _vm._v(" "),
                  _c(
                    "li",
                    {
                      directives: [
                        { name: "nav-toggle", rawName: "v-nav-toggle" }
                      ],
                      staticClass: "nav-item nav-icon dropdown"
                    },
                    [
                      _c(
                        "a",
                        {
                          staticClass:
                            "nav-item nav-icon dropdown-toggle pr-0 search-toggle",
                          attrs: {
                            id: "dropdownMenuButton",
                            "data-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false"
                          }
                        },
                        [
                          _vm._v("\n\t\t\t\t\t\t\t\tWelcome, Admin "),
                          _vm.user ? [_vm._v(_vm._s(_vm.user.name))] : _vm._e()
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "ul",
                        {
                          staticClass: "dropdown-menu dropdown-menu-right",
                          attrs: { "aria-labelledby": "dropdownMenuButton" }
                        },
                        [
                          _c(
                            "li",
                            { staticClass: "dropdown-item d-flex svg-icon" },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "svg-icon mr-0 text-primary",
                                  attrs: {
                                    id: "h-02-p",
                                    width: "20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d:
                                        "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: { name: "app.user-password-update" }
                                  }
                                },
                                [_vm._v("Change Password")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "li",
                            {
                              staticClass:
                                "dropdown-item  d-flex svg-icon border-top"
                            },
                            [
                              _c(
                                "svg",
                                {
                                  staticClass: "svg-icon mr-0 text-primary",
                                  attrs: {
                                    id: "h-05-p",
                                    width: "20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    stroke: "currentColor"
                                  }
                                },
                                [
                                  _c("path", {
                                    attrs: {
                                      "stroke-linecap": "round",
                                      "stroke-linejoin": "round",
                                      "stroke-width": "2",
                                      d:
                                        "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.logOut.apply(null, arguments)
                                    }
                                  }
                                },
                                [_vm._v("Logout")]
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
            ])
          ],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", [_c("span", { staticClass: "ml-2" }, [_vm._v("Settings")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h4", [_c("span", { staticClass: "ml-2" }, [_vm._v("Orders")])])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/DashboardLayout.vue?vue&type=template&id=549bf5ac&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layouts/DashboardLayout.vue?vue&type=template&id=549bf5ac& ***!
  \************************************************************************************************************************************************************************************************************************/
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
      _c("Loader"),
      _vm._v(" "),
      _c("div", { staticClass: "wrapper" }, [
        _c(
          "div",
          { staticClass: "container-fluid container-md hotel-container" },
          [
            _c("Header"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "content-page" },
              [
                _c(
                  "transition",
                  { attrs: { name: "router-anim" } },
                  [_c("router-view")],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("Footer")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);