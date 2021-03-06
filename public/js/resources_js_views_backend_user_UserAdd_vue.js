(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_backend_user_UserAdd_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/user/UserAdd.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/user/UserAdd.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserAdd',
  mixins: [_mixins_validationErrors__WEBPACK_IMPORTED_MODULE_2__.default],
  data: function data() {
    return {
      user: {
        name: '',
        email: ''
      },
      success: false,
      successMsg: '',
      validating: false,
      status: null
    };
  },
  computed: {
    buttonText: function buttonText() {
      return this.validating === true ? 'Adding User...' : 'Add New User';
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
                _this.success = false;
                _this.successMsg = '';
                _context.prev = 5;
                _context.next = 8;
                return axios.post('/backend/dashboard/invite', _objectSpread({}, _this.user));

              case 8:
                response = _context.sent;
                _this.successMsg = response.data.message;
                _this.success = true;
                _context.next = 19;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](5);
                console.log(_context.t0);

                if ((0,_config_response__WEBPACK_IMPORTED_MODULE_1__.is422)(_context.t0)) {
                  _this.errors = _context.t0.response.data.errors;
                }

                if ((0,_config_response__WEBPACK_IMPORTED_MODULE_1__.is401)(_context.t0)) {
                  _this.$logOut();
                }

                _this.status = _context.t0.response.status;

              case 19:
                _this.user = {};
                _this.validating = false;

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 13]]);
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

/***/ "./resources/js/views/backend/user/UserAdd.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/backend/user/UserAdd.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserAdd_vue_vue_type_template_id_09ddbd0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAdd.vue?vue&type=template&id=09ddbd0c& */ "./resources/js/views/backend/user/UserAdd.vue?vue&type=template&id=09ddbd0c&");
/* harmony import */ var _UserAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserAdd.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/user/UserAdd.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _UserAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _UserAdd_vue_vue_type_template_id_09ddbd0c___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserAdd_vue_vue_type_template_id_09ddbd0c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/user/UserAdd.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/user/UserAdd.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/backend/user/UserAdd.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/user/UserAdd.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/backend/user/UserAdd.vue?vue&type=template&id=09ddbd0c&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/backend/user/UserAdd.vue?vue&type=template&id=09ddbd0c& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAdd_vue_vue_type_template_id_09ddbd0c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAdd_vue_vue_type_template_id_09ddbd0c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserAdd_vue_vue_type_template_id_09ddbd0c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserAdd.vue?vue&type=template&id=09ddbd0c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/user/UserAdd.vue?vue&type=template&id=09ddbd0c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/user/UserAdd.vue?vue&type=template&id=09ddbd0c&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/user/UserAdd.vue?vue&type=template&id=09ddbd0c& ***!
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
      _c(
        "div",
        { staticClass: "col-xl-12 col-lg-12" },
        [
          _vm.success
            ? [_c("v-success", [_vm._v(_vm._s(_vm.successMsg))])]
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card-header d-flex justify-content-between" },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "btn btn-primary",
                    attrs: {
                      to: { name: "app.user-list" },
                      "data-toggle": "modal",
                      "data-target": "#addContact"
                    }
                  },
                  [_vm._v("\n                   Users List\n                ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "new-user-info" }, [
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
                          _c("label", { attrs: { for: "name" } }, [
                            _vm._v("Name:")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.user.name,
                                expression: "user.name"
                              }
                            ],
                            staticClass: "form-control",
                            class: [{ "is-invalid": _vm.errorFor("name") }],
                            attrs: {
                              type: "text",
                              id: "name",
                              placeholder: "Full Name"
                            },
                            domProps: { value: _vm.user.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.user, "name", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c("v-errors", {
                            attrs: { errors: _vm.errorFor("name") }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group col-md-6" },
                        [
                          _c("label", { attrs: { for: "email" } }, [
                            _vm._v("Email:")
                          ]),
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
                            attrs: {
                              type: "email",
                              id: "email",
                              placeholder: "Email"
                            },
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
                          _c("v-errors", {
                            attrs: { errors: _vm.errorFor("email") }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        attrs: { type: "submit", disabled: _vm.validating }
                      },
                      [
                        _vm._v(
                          "\n                         " +
                            _vm._s(_vm.buttonText) +
                            "\n                      "
                        )
                      ]
                    )
                  ]
                )
              ])
            ])
          ])
        ],
        2
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header-title" }, [
      _c("h4", { staticClass: "card-title" }, [_vm._v("New User Information")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);