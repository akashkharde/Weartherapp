"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Background */ \"./src/components/Background.tsx\");\n/* harmony import */ var _components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layouts/Layout */ \"./src/components/layouts/Layout.tsx\");\n/* harmony import */ var _components_sections_FavouritesSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/sections/FavouritesSection */ \"./src/components/sections/FavouritesSection.tsx\");\n/* harmony import */ var _components_sections_GeolocationSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/sections/GeolocationSection */ \"./src/components/sections/GeolocationSection.tsx\");\n\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layouts_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        title: \"WeatherWorks | The most visually compelling real-time weather app\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Background__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                src: \"/images/waves/background1.svg\"\n            }, void 0, false, {\n                fileName: \"D:\\\\A_portFolio\\\\WeatherApp\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sections_GeolocationSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\A_portFolio\\\\WeatherApp\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sections_FavouritesSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\A_portFolio\\\\WeatherApp\\\\src\\\\pages\\\\index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\A_portFolio\\\\WeatherApp\\\\src\\\\pages\\\\index.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlEO0FBQ0E7QUFDdUI7QUFDRTtBQUUxRSxTQUFTSTtJQUNQLHFCQUNFLDhEQUFDSCxrRUFBTUE7UUFBQ0ksT0FBTTs7MEJBQ1osOERBQUNMLDhEQUFVQTtnQkFBQ00sS0FBSTs7Ozs7OzBCQUNoQiw4REFBQ0gsK0VBQWtCQTs7Ozs7MEJBQ25CLDhEQUFDRCw4RUFBaUJBOzs7Ozs7Ozs7OztBQUd4QjtLQVJTRTtBQVVULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQmFja2dyb3VuZCBmcm9tICdAL2NvbXBvbmVudHMvQmFja2dyb3VuZCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9sYXlvdXRzL0xheW91dCc7XG5pbXBvcnQgRmF2b3VyaXRlc1NlY3Rpb24gZnJvbSAnQC9jb21wb25lbnRzL3NlY3Rpb25zL0Zhdm91cml0ZXNTZWN0aW9uJztcbmltcG9ydCBHZW9sb2NhdGlvblNlY3Rpb24gZnJvbSAnQC9jb21wb25lbnRzL3NlY3Rpb25zL0dlb2xvY2F0aW9uU2VjdGlvbic7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT1cIldlYXRoZXJXb3JrcyB8IFRoZSBtb3N0IHZpc3VhbGx5IGNvbXBlbGxpbmcgcmVhbC10aW1lIHdlYXRoZXIgYXBwXCI+XG4gICAgICA8QmFja2dyb3VuZCBzcmM9XCIvaW1hZ2VzL3dhdmVzL2JhY2tncm91bmQxLnN2Z1wiIC8+XG4gICAgICA8R2VvbG9jYXRpb25TZWN0aW9uIC8+XG4gICAgICA8RmF2b3VyaXRlc1NlY3Rpb24gLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJCYWNrZ3JvdW5kIiwiTGF5b3V0IiwiRmF2b3VyaXRlc1NlY3Rpb24iLCJHZW9sb2NhdGlvblNlY3Rpb24iLCJIb21lIiwidGl0bGUiLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});