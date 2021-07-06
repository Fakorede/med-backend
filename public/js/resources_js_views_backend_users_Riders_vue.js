(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_backend_users_Riders_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/users/AddUser.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/users/AddUser.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/response */ "./resources/js/config/response.js");
/* harmony import */ var _mixins_validationErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mixins/validationErrors */ "./resources/js/mixins/validationErrors.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AddUserModal',
  mixins: [_mixins_validationErrors__WEBPACK_IMPORTED_MODULE_2__.default],
  props: {
    usertype: {
      type: Number,
      required: true
    }
  },
  data: function data() {
    return {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        phone_number: ''
      },
      validating: false,
      status: null
    };
  },
  computed: {
    buttonText: function buttonText() {
      return this.validating === true ? 'Submitting...' : 'Submit';
    },
    hasErrors: function hasErrors() {
      return 422 === this.status && this.errors !== null;
    }
  },
  methods: {
    addUser: function addUser() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.errors = null;
                _this.status = null;
                _this.validating = true;
                _context.prev = 3;
                _context.next = 6;
                return axios.post('/api/settings/invite', _objectSpread(_objectSpread({}, _this.user), {}, {
                  role_id: _this.usertype
                }));

              case 6:
                response = _context.sent;

                // $('#addUserModal').modal('hide')
                // this.user = {}
                _this.$router.go();

                _this.$toasted.success(response.data.message);

                _context.next = 17;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                console.log(_context.t0);

                if ((0,_config_response__WEBPACK_IMPORTED_MODULE_1__.is422)(_context.t0)) {
                  _this.errors = _context.t0.response.data.errors;
                }

                if ((0,_config_response__WEBPACK_IMPORTED_MODULE_1__.is401)(_context.t0)) {
                  $('#addUserModal').modal('hide');

                  _this.$logOut();
                }

                _this.status = _context.t0.response.status;

              case 17:
                _this.validating = false;

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 11]]);
      }))();
    },
    showModal: function showModal() {
      $('#addUserModal').modal('show');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/users/Riders.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/users/Riders.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/response */ "./resources/js/config/response.js");
/* harmony import */ var _AddUser_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddUser.vue */ "./resources/js/views/backend/users/AddUser.vue");


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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'RiderList',
  components: {
    AddUserModal: _AddUser_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  created: function created() {
    this.getUsers();
  },
  data: function data() {
    return {
      users: [],
      loading: false
    };
  },
  methods: {
    getUsers: function getUsers() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.loading = true;
                _context.prev = 1;
                _context.next = 4;
                return axios.get('/api/admin/riders');

              case 4:
                response = _context.sent;
                _this.users = response.data.data;
                _context.next = 13;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

                if ((0,_config_response__WEBPACK_IMPORTED_MODULE_1__.is401)(_context.t0)) {
                  _this.$logOut();
                }

                if ((0,_config_response__WEBPACK_IMPORTED_MODULE_1__.is403)(_context.t0)) {
                  _this.$toasted.error("Kindly verify your account before performing any actions!");
                }

              case 13:
                _this.loading = false;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }))();
    },
    showModal: function showModal() {
      $('#addUserModal').modal('show');
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

/***/ "./resources/js/mixins/validationErrors.js":
/*!*************************************************!*\
  !*** ./resources/js/mixins/validationErrors.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      errors: null
    };
  },
  methods: {
    errorFor: function errorFor(field) {
      return null !== this.errors && this.errors[field] ? this.errors[field] : null;
    }
  }
});

/***/ }),

/***/ "./resources/js/views/backend/users/AddUser.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/backend/users/AddUser.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddUser_vue_vue_type_template_id_7ffe023b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddUser.vue?vue&type=template&id=7ffe023b&scoped=true& */ "./resources/js/views/backend/users/AddUser.vue?vue&type=template&id=7ffe023b&scoped=true&");
/* harmony import */ var _AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddUser.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/users/AddUser.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AddUser_vue_vue_type_template_id_7ffe023b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AddUser_vue_vue_type_template_id_7ffe023b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7ffe023b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/users/AddUser.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/users/Riders.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/backend/users/Riders.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Riders_vue_vue_type_template_id_ad073a4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Riders.vue?vue&type=template&id=ad073a4c& */ "./resources/js/views/backend/users/Riders.vue?vue&type=template&id=ad073a4c&");
/* harmony import */ var _Riders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Riders.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/users/Riders.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Riders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Riders_vue_vue_type_template_id_ad073a4c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Riders_vue_vue_type_template_id_ad073a4c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/users/Riders.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/users/AddUser.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/backend/users/AddUser.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUser.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/users/AddUser.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/backend/users/Riders.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/backend/users/Riders.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Riders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Riders.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/users/Riders.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Riders_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/backend/users/AddUser.vue?vue&type=template&id=7ffe023b&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/backend/users/AddUser.vue?vue&type=template&id=7ffe023b&scoped=true& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_template_id_7ffe023b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_template_id_7ffe023b_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddUser_vue_vue_type_template_id_7ffe023b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AddUser.vue?vue&type=template&id=7ffe023b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/users/AddUser.vue?vue&type=template&id=7ffe023b&scoped=true&");


/***/ }),

/***/ "./resources/js/views/backend/users/Riders.vue?vue&type=template&id=ad073a4c&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/backend/users/Riders.vue?vue&type=template&id=ad073a4c& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Riders_vue_vue_type_template_id_ad073a4c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Riders_vue_vue_type_template_id_ad073a4c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Riders_vue_vue_type_template_id_ad073a4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Riders.vue?vue&type=template&id=ad073a4c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/users/Riders.vue?vue&type=template&id=ad073a4c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/users/AddUser.vue?vue&type=template&id=7ffe023b&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/users/AddUser.vue?vue&type=template&id=7ffe023b&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    _c("div", { staticClass: "modal-body" }, [
      _c(
        "form",
        {
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.addUser.apply(null, arguments)
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "form-group col-md-6" },
              [
                _c("label", { attrs: { for: "first_name" } }, [
                  _vm._v("First Name:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.first_name,
                      expression: "user.first_name"
                    }
                  ],
                  staticClass: "form-control",
                  class: [{ "is-invalid": _vm.errorFor("first_name") }],
                  attrs: {
                    type: "text",
                    id: "first_name",
                    placeholder: "First Name"
                  },
                  domProps: { value: _vm.user.first_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "first_name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("v-errors", {
                  attrs: { errors: _vm.errorFor("first_name") }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group col-md-6" },
              [
                _c("label", { attrs: { for: "last_name" } }, [
                  _vm._v("Last Name:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.last_name,
                      expression: "user.last_name"
                    }
                  ],
                  staticClass: "form-control",
                  class: [{ "is-invalid": _vm.errorFor("last_name") }],
                  attrs: {
                    type: "text",
                    id: "last_name",
                    placeholder: "Last Name"
                  },
                  domProps: { value: _vm.user.last_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "last_name", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("v-errors", { attrs: { errors: _vm.errorFor("last_name") } })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "form-group col-md-6" },
              [
                _c("label", { attrs: { for: "phone_number" } }, [
                  _vm._v("Phone Number:")
                ]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.phone_number,
                      expression: "user.phone_number"
                    }
                  ],
                  staticClass: "form-control",
                  class: [{ "is-invalid": _vm.errorFor("phone_number") }],
                  attrs: {
                    type: "text",
                    id: "phone_number",
                    placeholder: "Phone Number"
                  },
                  domProps: { value: _vm.user.phone_number },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "phone_number", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("v-errors", {
                  attrs: { errors: _vm.errorFor("phone_number") }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "form-group col-md-6" },
              [
                _c("label", { attrs: { for: "email" } }, [_vm._v("Email:")]),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.email,
                      expression: "user.email"
                    }
                  ],
                  staticClass: "form-control",
                  class: [{ "is-invalid": _vm.errorFor("email") }],
                  attrs: { type: "email", id: "email", placeholder: "Email" },
                  domProps: { value: _vm.user.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "email", $event.target.value)
                    }
                  }
                }),
                _vm._v(" "),
                _c("v-errors", { attrs: { errors: _vm.errorFor("email") } })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary float-right mb-3",
              attrs: { type: "submit", disabled: _vm.validating }
            },
            [_vm._v("\n        " + _vm._s(_vm.buttonText) + "\n      ")]
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/users/Riders.vue?vue&type=template&id=ad073a4c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/users/Riders.vue?vue&type=template&id=ad073a4c& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card card-block card-stretch card-height" }, [
          _c(
            "div",
            { staticClass: "card-header d-flex justify-content-between" },
            [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-primary btn-sm",
                  attrs: { type: "button" },
                  on: { click: _vm.showModal }
                },
                [
                  _vm._v(
                    "\n                    Add New Rider\n                 "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal fade",
                  attrs: {
                    id: "addUserModal",
                    tabindex: "-1",
                    role: "dialog",
                    "aria-labelledby": "orderModal",
                    "aria-hidden": "true"
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "modal-dialog modal-md",
                      attrs: { role: "document" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "modal-content" },
                        [
                          _vm._m(1),
                          _vm._v(" "),
                          _c("add-user-modal", { attrs: { usertype: 2 } })
                        ],
                        1
                      )
                    ]
                  )
                ]
              )
            ]
          ),
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
                    "b-thead",
                    [
                      _c("b-th", [_vm._v("#")]),
                      _vm._v(" "),
                      _c("b-th", [_vm._v("Name")]),
                      _vm._v(" "),
                      _c("b-th", [_vm._v("Email")]),
                      _vm._v(" "),
                      _c("b-th", [_vm._v("Phone Number")]),
                      _vm._v(" "),
                      _c("b-th", [_vm._v("Date Added")]),
                      _vm._v(" "),
                      _c("b-th", [_vm._v("Invite Status")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.loading
                    ? _c(
                        "b-tr",
                        { staticClass: "text-center" },
                        [
                          _c("b-td"),
                          _vm._v(" "),
                          _c("b-td"),
                          _vm._v(" "),
                          _c("b-td"),
                          _vm._v(" "),
                          _c(
                            "b-td",
                            [
                              _c("b-spinner", {
                                attrs: {
                                  variant: "primary",
                                  type: "grow",
                                  label: "Spinning"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("b-td"),
                          _vm._v(" "),
                          _c("b-td")
                        ],
                        1
                      )
                    : _vm.users.length > 0
                    ? _c(
                        "b-tbody",
                        _vm._l(_vm.users, function(user, index) {
                          return _c(
                            "b-tr",
                            { key: "user" + index },
                            [
                              _c("b-th", [_vm._v(_vm._s(index + 1))]),
                              _vm._v(" "),
                              _c("b-td", [
                                _vm._v(
                                  _vm._s(user.first_name) +
                                    " " +
                                    _vm._s(user.last_name)
                                )
                              ]),
                              _vm._v(" "),
                              _c("b-td", [_vm._v(_vm._s(user.email))]),
                              _vm._v(" "),
                              _c("b-td", [_vm._v(_vm._s(user.phone_number))]),
                              _vm._v(" "),
                              _c("b-td", [
                                _vm._v(
                                  _vm._s(_vm._f("dateFilter")(user.created_at))
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-td",
                                [
                                  user.email_verified_at
                                    ? [
                                        _c(
                                          "span",
                                          {
                                            staticClass: "badge badge-success"
                                          },
                                          [_vm._v("Accepted")]
                                        )
                                      ]
                                    : [
                                        _c(
                                          "span",
                                          { staticClass: "badge badge-info" },
                                          [_vm._v("Pending")]
                                        )
                                      ]
                                ],
                                2
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    : _c(
                        "b-tbody",
                        [
                          _c(
                            "b-tr",
                            { staticClass: "text-center" },
                            [
                              _c("b-td", { attrs: { colspan: "6" } }, [
                                _vm._v("No result match your search.")
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
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header-title" }, [
      _c("h4", { staticClass: "card-title mb-0" }, [_vm._v("Rider List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [
        _c("strong", [_vm._v("Add Rider")])
      ]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: {
            type: "button",
            "data-bs-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);