(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_auth_VerifyEmail_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/VerifyEmail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/VerifyEmail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'VerifyEmail',
  data: function data() {
    return {
      message: null,
      'errors': null,
      'verifying': false
    };
  },
  created: function created() {
    this.verify();
  },
  methods: {
    verify: function verify() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _yield$axios$post, data;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.errors = null;
                _this.verifying = true;
                _context.prev = 2;
                _context.next = 5;
                return axios.post("/api".concat(_this.$route.fullPath));

              case 5:
                _yield$axios$post = _context.sent;
                data = _yield$axios$post.data;
                _this.message = data.message;

                _this.$toasted.success(data.message);

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                _this.errors = _context.t0.response.data.errors.message;

              case 14:
                _this.verifying = false;

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }))();
    }
  }
});

/***/ }),

/***/ "./resources/js/views/auth/VerifyEmail.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/auth/VerifyEmail.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VerifyEmail_vue_vue_type_template_id_4bb4879b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerifyEmail.vue?vue&type=template&id=4bb4879b& */ "./resources/js/views/auth/VerifyEmail.vue?vue&type=template&id=4bb4879b&");
/* harmony import */ var _VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerifyEmail.vue?vue&type=script&lang=js& */ "./resources/js/views/auth/VerifyEmail.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _VerifyEmail_vue_vue_type_template_id_4bb4879b___WEBPACK_IMPORTED_MODULE_0__.render,
  _VerifyEmail_vue_vue_type_template_id_4bb4879b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/auth/VerifyEmail.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/auth/VerifyEmail.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/auth/VerifyEmail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerifyEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/VerifyEmail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/auth/VerifyEmail.vue?vue&type=template&id=4bb4879b&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/auth/VerifyEmail.vue?vue&type=template&id=4bb4879b& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_template_id_4bb4879b___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_template_id_4bb4879b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerifyEmail_vue_vue_type_template_id_4bb4879b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VerifyEmail.vue?vue&type=template&id=4bb4879b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/VerifyEmail.vue?vue&type=template&id=4bb4879b&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/VerifyEmail.vue?vue&type=template&id=4bb4879b&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/auth/VerifyEmail.vue?vue&type=template&id=4bb4879b& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("section", { staticClass: "login-content" }, [
    _c("div", { staticClass: "container h-100" }, [
      _c("div", { staticClass: "row mt-5 justify-content-center h-100" }, [
        _c(
          "div",
          { staticClass: "col-md-5" },
          [
            _vm.errors
              ? [
                  _c(
                    "v-error",
                    { attrs: { variant: "danger", icon: "alert" } },
                    [_vm._v(_vm._s(_vm.errors))]
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                { staticClass: "card-body" },
                [
                  _vm.verifying
                    ? [
                        _c(
                          "div",
                          { staticClass: "text-center" },
                          [
                            _c("h5", [_vm._v("Verifying...")]),
                            _vm._v(" "),
                            _c("b-spinner", {
                              attrs: {
                                variant: "primary",
                                type: "grow",
                                label: "Spinning"
                              }
                            })
                          ],
                          1
                        )
                      ]
                    : [
                        _c("div", { staticClass: "text-center" }, [
                          _c("h5", { staticClass: "mb-2" }, [
                            _vm._v("Verify Email")
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.message))])
                        ])
                      ]
                ],
                2
              )
            ])
          ],
          2
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);