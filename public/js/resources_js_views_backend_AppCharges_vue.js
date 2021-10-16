(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_backend_AppCharges_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/AppCharges.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/AppCharges.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/response */ "./resources/js/config/response.js");
/* harmony import */ var _mixins_validationErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/validationErrors */ "./resources/js/mixins/validationErrors.js");


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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_mixins_validationErrors__WEBPACK_IMPORTED_MODULE_2__.default],
  created: function created() {
    this.getCharges();
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.$broadcast();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  data: function data() {
    return {
      charge: {},
      error: null,
      status: null,
      loading: false,
      validating: false
    };
  },
  computed: {
    buttonText: function buttonText() {
      return this.validating === true ? 'Updating...' : 'Update';
    },
    hasErrors: function hasErrors() {
      return 422 === this.status && this.errors !== null;
    }
  },
  methods: {
    getCharges: function getCharges() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;
                _context2.prev = 1;
                _context2.next = 4;
                return axios.get('/api/app-charges', {
                  headers: {
                    'Authorization': "Bearer ".concat(localStorage.getItem('sserpxe_cigam'))
                  }
                });

              case 4:
                response = _context2.sent;
                _this2.charge = response.data;
                _context2.next = 13;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);

                if ((0,_config_response__WEBPACK_IMPORTED_MODULE_1__.is401)(_context2.t0)) {
                  _this2.$logOut();
                }

                if ((0,_config_response__WEBPACK_IMPORTED_MODULE_1__.is403)(_context2.t0)) {
                  _this2.$toasted.error("Kindly verify your account before performing any actions!");
                }

              case 13:
                _this2.loading = false;

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 8]]);
      }))();
    },
    updateCharges: function updateCharges() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.errors = null;
                _this3.status = null;
                _this3.validating = true;
                _context3.prev = 3;
                _context3.next = 6;
                return axios.put('/api/admin/app-charges', _this3.charge, {
                  headers: {
                    'Authorization': "Bearer ".concat(localStorage.getItem('sserpxe_cigam'))
                  }
                });

              case 6:
                response = _context3.sent;
                _this3.charge = response.data;
                $('#updateChargesModal').modal('hide');

                _this3.$toasted.success('App Charges has been updated');

                _context3.next = 18;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](3);
                console.log(_context3.t0);

                if ((0,_config_response__WEBPACK_IMPORTED_MODULE_1__.is422)(_context3.t0)) {
                  _this3.errors = _context3.t0.response.data.errors;
                }

                if ((0,_config_response__WEBPACK_IMPORTED_MODULE_1__.is401)(_context3.t0)) {
                  $('#updateChargesModal').modal('hide');

                  _this3.$logOut();
                }

                _this3.status = _context3.t0.response.status;

              case 18:
                _this3.validating = false;

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[3, 12]]);
      }))();
    },
    showModal: function showModal() {
      $('#updateChargesModal').modal('show');
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

/***/ "./resources/js/views/backend/AppCharges.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/backend/AppCharges.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AppCharges_vue_vue_type_template_id_31326418___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppCharges.vue?vue&type=template&id=31326418& */ "./resources/js/views/backend/AppCharges.vue?vue&type=template&id=31326418&");
/* harmony import */ var _AppCharges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppCharges.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/AppCharges.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AppCharges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AppCharges_vue_vue_type_template_id_31326418___WEBPACK_IMPORTED_MODULE_0__.render,
  _AppCharges_vue_vue_type_template_id_31326418___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/AppCharges.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/AppCharges.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/backend/AppCharges.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCharges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppCharges.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/AppCharges.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCharges_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/backend/AppCharges.vue?vue&type=template&id=31326418&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/backend/AppCharges.vue?vue&type=template&id=31326418& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCharges_vue_vue_type_template_id_31326418___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCharges_vue_vue_type_template_id_31326418___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppCharges_vue_vue_type_template_id_31326418___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AppCharges.vue?vue&type=template&id=31326418& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/AppCharges.vue?vue&type=template&id=31326418&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/AppCharges.vue?vue&type=template&id=31326418&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/AppCharges.vue?vue&type=template&id=31326418& ***!
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
                    "\n                    Update Charges\n                 "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "modal fade",
                  attrs: {
                    id: "updateChargesModal",
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
                      _c("div", { staticClass: "modal-content" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("div", { staticClass: "modal-body" }, [
                          _c(
                            "form",
                            {
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.updateCharges.apply(
                                    null,
                                    arguments
                                  )
                                }
                              }
                            },
                            [
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group col-md-12" },
                                  [
                                    _c(
                                      "label",
                                      { attrs: { for: "dispatch_base_price" } },
                                      [_vm._v("Dispatch Base Price:")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model.number",
                                          value: _vm.charge.dispatch_base_price,
                                          expression:
                                            "charge.dispatch_base_price",
                                          modifiers: { number: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: [
                                        {
                                          "is-invalid": _vm.errorFor(
                                            "dispatch_base_price"
                                          )
                                        }
                                      ],
                                      attrs: {
                                        type: "number",
                                        step: "0.01",
                                        id: "dispatch_base_price",
                                        placeholder: "Dispatch Base Price"
                                      },
                                      domProps: {
                                        value: _vm.charge.dispatch_base_price
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.charge,
                                            "dispatch_base_price",
                                            _vm._n($event.target.value)
                                          )
                                        },
                                        blur: function($event) {
                                          return _vm.$forceUpdate()
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-errors", {
                                      attrs: {
                                        errors: _vm.errorFor(
                                          "dispatch_base_price"
                                        )
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group col-md-12" },
                                  [
                                    _c(
                                      "label",
                                      {
                                        attrs: { for: "dispatch_price_per_km" }
                                      },
                                      [_vm._v("Dispatch Price Per Km:")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model.number",
                                          value:
                                            _vm.charge.dispatch_price_per_km,
                                          expression:
                                            "charge.dispatch_price_per_km",
                                          modifiers: { number: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: [
                                        {
                                          "is-invalid": _vm.errorFor(
                                            "dispatch_price_per_km"
                                          )
                                        }
                                      ],
                                      attrs: {
                                        type: "number",
                                        step: "0.01",
                                        id: "dispatch_price_per_km",
                                        placeholder: "Dispatch Price Per Km"
                                      },
                                      domProps: {
                                        value: _vm.charge.dispatch_price_per_km
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.charge,
                                            "dispatch_price_per_km",
                                            _vm._n($event.target.value)
                                          )
                                        },
                                        blur: function($event) {
                                          return _vm.$forceUpdate()
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-errors", {
                                      attrs: {
                                        errors: _vm.errorFor(
                                          "dispatch_price_per_km"
                                        )
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group col-md-12" },
                                  [
                                    _c(
                                      "label",
                                      { attrs: { for: "errand_base_price" } },
                                      [_vm._v("Errand Base Price:")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model.number",
                                          value: _vm.charge.errand_base_price,
                                          expression:
                                            "charge.errand_base_price",
                                          modifiers: { number: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: [
                                        {
                                          "is-invalid": _vm.errorFor(
                                            "errand_base_price"
                                          )
                                        }
                                      ],
                                      attrs: {
                                        type: "number",
                                        step: "0.01",
                                        id: "errand_base_price",
                                        placeholder: "Errand Base Price"
                                      },
                                      domProps: {
                                        value: _vm.charge.errand_base_price
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.charge,
                                            "errand_base_price",
                                            _vm._n($event.target.value)
                                          )
                                        },
                                        blur: function($event) {
                                          return _vm.$forceUpdate()
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-errors", {
                                      attrs: {
                                        errors: _vm.errorFor(
                                          "errand_base_price"
                                        )
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "row" }, [
                                _c(
                                  "div",
                                  { staticClass: "form-group col-md-12" },
                                  [
                                    _c(
                                      "label",
                                      { attrs: { for: "errand_price_per_km" } },
                                      [_vm._v("Errand Price Per Km:")]
                                    ),
                                    _vm._v(" "),
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model.number",
                                          value: _vm.charge.errand_price_per_km,
                                          expression:
                                            "charge.errand_price_per_km",
                                          modifiers: { number: true }
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: [
                                        {
                                          "is-invalid": _vm.errorFor(
                                            "errand_price_per_km"
                                          )
                                        }
                                      ],
                                      attrs: {
                                        type: "number",
                                        step: "0.01",
                                        id: "errand_price_per_km",
                                        placeholder: "Errand Price Per Km"
                                      },
                                      domProps: {
                                        value: _vm.charge.errand_price_per_km
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.charge,
                                            "errand_price_per_km",
                                            _vm._n($event.target.value)
                                          )
                                        },
                                        blur: function($event) {
                                          return _vm.$forceUpdate()
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("v-errors", {
                                      attrs: {
                                        errors: _vm.errorFor(
                                          "errand_price_per_km"
                                        )
                                      }
                                    })
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "btn btn-primary float-right mb-3",
                                  attrs: {
                                    type: "submit",
                                    disabled: _vm.validating
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.buttonText) +
                                      "\n                              "
                                  )
                                ]
                              )
                            ]
                          )
                        ])
                      ])
                    ]
                  )
                ]
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "mt-3 container-fluid" }, [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-lg-12" }, [
                _c(
                  "div",
                  { staticClass: "card card-block card-stretch card-height" },
                  [
                    _vm._m(2),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "card-body" },
                      [
                        _c(
                          "b-table-simple",
                          { attrs: { responsive: "" } },
                          [
                            !_vm.loading
                              ? _c(
                                  "b-tbody",
                                  [
                                    _c(
                                      "b-tr",
                                      [
                                        _c("b-td", [
                                          _c("strong", [
                                            _vm._v("Dispatch Base Price")
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("b-td", [
                                          _vm._v(
                                            "\n                                      " +
                                              _vm._s(
                                                _vm.charge.dispatch_base_price.toFixed(
                                                  2
                                                )
                                              ) +
                                              "\n                                    "
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
                                            _vm._v("Dispatch Price Per Km")
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("b-td", [
                                          _vm._v(
                                            "\n                                      " +
                                              _vm._s(
                                                _vm.charge.dispatch_price_per_km.toFixed(
                                                  2
                                                )
                                              ) +
                                              "\n                                      "
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
                                            _vm._v("Errand Base Price")
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("b-td", [
                                          _vm._v(
                                            "\n                                        " +
                                              _vm._s(
                                                _vm.charge.errand_base_price.toFixed(
                                                  2
                                                )
                                              ) +
                                              "\n                                      "
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
                                            _vm._v("Errand Price Per Km")
                                          ])
                                        ]),
                                        _vm._v(" "),
                                        _c("b-td", [
                                          _vm._v(
                                            "\n                                      " +
                                              _vm._s(
                                                _vm.charge.errand_price_per_km.toFixed(
                                                  2
                                                )
                                              ) +
                                              "\n                                      "
                                          )
                                        ])
                                      ],
                                      1
                                    )
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
                  ]
                )
              ])
            ])
          ])
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
      _c("h4", { staticClass: "card-title mb-0" }, [_vm._v("App Charges")])
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
          _c("div", [_c("strong", [_vm._v("Current Charges")])])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);