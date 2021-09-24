(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_backend_notifications_Read_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/notifications/Read.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/notifications/Read.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _config_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/response */ "./resources/js/config/response.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ReadNotifications',
  created: function created() {
    this.getRead();
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
      loading: false
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    notifications: 'notifications/read'
  })),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapActions)({
    getNotifications: 'notifications/getNotifications'
  })), {}, {
    getRead: function getRead() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this2.loading = true;

                try {
                  _this2.getNotifications('read');
                } catch (error) {
                  console.log(error);

                  if ((0,_config_response__WEBPACK_IMPORTED_MODULE_1__.is401)(error)) {
                    _this2.$logOut();
                  }

                  if ((0,_config_response__WEBPACK_IMPORTED_MODULE_1__.is403)(error)) {
                    _this2.$toasted.error("Kindly verify your account before performing any actions!");
                  }
                }

                _this2.loading = false;

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  })
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

/***/ "./resources/js/views/backend/notifications/Read.vue":
/*!***********************************************************!*\
  !*** ./resources/js/views/backend/notifications/Read.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Read_vue_vue_type_template_id_7bd4e3d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Read.vue?vue&type=template&id=7bd4e3d2& */ "./resources/js/views/backend/notifications/Read.vue?vue&type=template&id=7bd4e3d2&");
/* harmony import */ var _Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Read.vue?vue&type=script&lang=js& */ "./resources/js/views/backend/notifications/Read.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Read_vue_vue_type_template_id_7bd4e3d2___WEBPACK_IMPORTED_MODULE_0__.render,
  _Read_vue_vue_type_template_id_7bd4e3d2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/backend/notifications/Read.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/backend/notifications/Read.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/backend/notifications/Read.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Read.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/notifications/Read.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/backend/notifications/Read.vue?vue&type=template&id=7bd4e3d2&":
/*!******************************************************************************************!*\
  !*** ./resources/js/views/backend/notifications/Read.vue?vue&type=template&id=7bd4e3d2& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_7bd4e3d2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_7bd4e3d2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Read_vue_vue_type_template_id_7bd4e3d2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Read.vue?vue&type=template&id=7bd4e3d2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/notifications/Read.vue?vue&type=template&id=7bd4e3d2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/notifications/Read.vue?vue&type=template&id=7bd4e3d2&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/backend/notifications/Read.vue?vue&type=template&id=7bd4e3d2& ***!
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
  return _c("div", { staticClass: "container-fluid" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-12" }, [
        _c("div", { staticClass: "card card-block card-stretch card-height" }, [
          _vm._m(0),
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
                      _c("b-th", [_vm._v("Type")]),
                      _vm._v(" "),
                      _c("b-th", [_vm._v("Message")]),
                      _vm._v(" "),
                      _c("b-th", [_vm._v("Created Date")]),
                      _vm._v(" "),
                      _c("b-th", [_vm._v("Read Date")])
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
                    : _vm.notifications.length > 0
                    ? _c(
                        "b-tbody",
                        _vm._l(_vm.notifications, function(
                          notification,
                          index
                        ) {
                          return _c(
                            "b-tr",
                            { key: "notification" + index },
                            [
                              _c("b-th", [_vm._v(_vm._s(index + 1))]),
                              _vm._v(" "),
                              _c("b-td", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("formatType")(notification.type)
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("b-td", [
                                _vm._v(_vm._s(notification.data.message))
                              ]),
                              _vm._v(" "),
                              _c("b-td", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("dateFilter")(
                                      notification.created_at
                                    )
                                  )
                                )
                              ]),
                              _vm._v(" "),
                              _c("b-td", [
                                _vm._v(
                                  _vm._s(
                                    _vm._f("dateFilter")(notification.read_at)
                                  )
                                )
                              ])
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
    return _c(
      "div",
      { staticClass: "card-header d-flex justify-content-between" },
      [
        _c("div", { staticClass: "header-title" }, [
          _c("h4", { staticClass: "card-title mb-0" }, [
            _vm._v("Read Notifications")
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);