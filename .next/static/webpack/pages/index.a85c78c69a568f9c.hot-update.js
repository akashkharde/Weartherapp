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

/***/ "./src/components/layouts/Header.tsx":
/*!*******************************************!*\
  !*** ./src/components/layouts/Header.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_logos_weatherworks_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/images/logos/weatherworks.webp */ \"./src/assets/images/logos/weatherworks.webp\");\n/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Container */ \"./src/components/Container.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n\n\n\n\n\n\nfunction Header() {\n    const socials = [\n        {\n            position: 0,\n            title: \"View GitHub profile\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoMailUnreadSharp, {}, void 0, false, {\n                fileName: \"C:\\\\react\\\\react_prc\\\\weatherworks-master\\\\src\\\\components\\\\layouts\\\\Header.tsx\",\n                lineNumber: 14,\n                columnNumber: 12\n            }, this),\n            link: \"https://github.lokkeestudios.com\"\n        },\n        {\n            position: 1,\n            title: \"Join Discord server\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoMailUnreadSharp, {}, void 0, false, {\n                fileName: \"C:\\\\react\\\\react_prc\\\\weatherworks-master\\\\src\\\\components\\\\layouts\\\\Header.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            link: \"https://discord.lokkeestudios.com\"\n        },\n        {\n            position: 2,\n            title: \"View source code\",\n            icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_5__.IoMailUnreadSharp, {}, void 0, false, {\n                fileName: \"C:\\\\react\\\\react_prc\\\\weatherworks-master\\\\src\\\\components\\\\layouts\\\\Header.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            link: \"https://github.com/lokkeestudios/WeatherWorks\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full py-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Container__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/\",\n                        title: \"Go back home\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: _assets_images_logos_weatherworks_webp__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n                            alt: \"WeatherWorks\",\n                            className: \"h-14 w-14 lg:h-16 lg:w-16\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\react\\\\react_prc\\\\weatherworks-master\\\\src\\\\components\\\\layouts\\\\Header.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\react_prc\\\\weatherworks-master\\\\src\\\\components\\\\layouts\\\\Header.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex gap-x-2\",\n                        children: socials.map((social)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: social.link,\n                                rel: \"noreferrer\",\n                                target: \"_blank\",\n                                title: social.title,\n                                className: \"text-neutrals-50/70 transition-colors duration-200 focus-visible:text-neutrals-50 hover:text-neutrals-50\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"h-6 w-6\",\n                                    children: social.icon\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\react\\\\react_prc\\\\weatherworks-master\\\\src\\\\components\\\\layouts\\\\Header.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 17\n                                }, this)\n                            }, social.position, false, {\n                                fileName: \"C:\\\\react\\\\react_prc\\\\weatherworks-master\\\\src\\\\components\\\\layouts\\\\Header.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 17\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\react\\\\react_prc\\\\weatherworks-master\\\\src\\\\components\\\\layouts\\\\Header.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\react\\\\react_prc\\\\weatherworks-master\\\\src\\\\components\\\\layouts\\\\Header.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\react\\\\react_prc\\\\weatherworks-master\\\\src\\\\components\\\\layouts\\\\Header.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\react\\\\react_prc\\\\weatherworks-master\\\\src\\\\components\\\\layouts\\\\Header.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXRzL0hlYWRlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBNEU7QUFDN0I7QUFDaEI7QUFDRjtBQUN1QjtBQUdwRCxTQUFTSztJQUVQLE1BQU1DLFVBQVU7UUFDZDtZQUNFQyxVQUFVO1lBQ1ZDLE9BQU87WUFDUEMsb0JBQUssOERBQUNMLDhEQUFpQkE7Ozs7O1lBQ3ZCTSxNQUFNO1FBQ1I7UUFDQTtZQUNFSCxVQUFVO1lBQ1ZDLE9BQU87WUFDUEMsb0JBQU0sOERBQUNMLDhEQUFpQkE7Ozs7O1lBQ3hCTSxNQUFNO1FBQ1I7UUFDQTtZQUNFSCxVQUFVO1lBQ1ZDLE9BQU87WUFDUEMsb0JBQU0sOERBQUNMLDhEQUFpQkE7Ozs7O1lBQ3hCTSxNQUFNO1FBQ1I7S0FDRDtJQUNELHFCQUNFLDhEQUFDQztRQUFPQyxXQUFVO2tCQUNoQiw0RUFBQ1gsNkRBQVNBO3NCQUNSLDRFQUFDWTtnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNULGtEQUFJQTt3QkFDSFcsTUFBSzt3QkFDTE4sT0FBTTtrQ0FFTiw0RUFBQ04sbURBQUtBOzRCQUNKYSxLQUFLZiw4RUFBcUJBOzRCQUMxQmdCLEtBQUk7NEJBQ0pKLFdBQVU7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDQzt3QkFBSUQsV0FBVTtrQ0FDWk4sUUFBUVcsR0FBRyxDQUFDLENBQUNDOzRCQUVaLHFCQUNFLDhEQUFDQztnQ0FFQ0wsTUFBTUksT0FBT1IsSUFBSTtnQ0FDakJVLEtBQUk7Z0NBQ0pDLFFBQU87Z0NBQ1BiLE9BQU9VLE9BQU9WLEtBQUs7Z0NBQ25CSSxXQUFVOzBDQUVaLDRFQUFDQztvQ0FBS0QsV0FBVTs4Q0FBV00sT0FBT1QsSUFBSTs7Ozs7OytCQVAvQlMsT0FBT1gsUUFBUTs7Ozs7d0JBVTFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVo7S0F6RFNGO0FBMkRULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dHMvSGVhZGVyLnRzeD9hMTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZWF0aGVyd29ya3NMb2dvSW1hZ2UgZnJvbSAnQC9hc3NldHMvaW1hZ2VzL2xvZ29zL3dlYXRoZXJ3b3Jrcy53ZWJwJztcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQC9jb21wb25lbnRzL0NvbnRhaW5lcic7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgSW9NYWlsVW5yZWFkU2hhcnAgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5cblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuXG4gIGNvbnN0IHNvY2lhbHMgPSBbXG4gICAge1xuICAgICAgcG9zaXRpb246IDAsXG4gICAgICB0aXRsZTogJ1ZpZXcgR2l0SHViIHByb2ZpbGUnLFxuICAgICAgaWNvbjo8SW9NYWlsVW5yZWFkU2hhcnAgLz4sXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIubG9ra2Vlc3R1ZGlvcy5jb20nLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9zaXRpb246IDEsXG4gICAgICB0aXRsZTogJ0pvaW4gRGlzY29yZCBzZXJ2ZXInLFxuICAgICAgaWNvbjogPElvTWFpbFVucmVhZFNoYXJwIC8+LFxuICAgICAgbGluazogJ2h0dHBzOi8vZGlzY29yZC5sb2trZWVzdHVkaW9zLmNvbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb3NpdGlvbjogMixcbiAgICAgIHRpdGxlOiAnVmlldyBzb3VyY2UgY29kZScsXG4gICAgICBpY29uOiA8SW9NYWlsVW5yZWFkU2hhcnAgLz4sXG4gICAgICBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL2xva2tlZXN0dWRpb3MvV2VhdGhlcldvcmtzJyxcbiAgICB9LFxuICBdXG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9XCJ3LWZ1bGwgcHktM1wiPlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgdGl0bGU9XCJHbyBiYWNrIGhvbWVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e3dlYXRoZXJ3b3Jrc0xvZ29JbWFnZX1cbiAgICAgICAgICAgICAgYWx0PVwiV2VhdGhlcldvcmtzXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xNCB3LTE0IGxnOmgtMTYgbGc6dy0xNlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLXgtMlwiPlxuICAgICAgICAgICAge3NvY2lhbHMubWFwKChzb2NpYWwpID0+IHtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBrZXk9e3NvY2lhbC5wb3NpdGlvbn1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e3NvY2lhbC5saW5rfVxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3NvY2lhbC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtbmV1dHJhbHMtNTAvNzAgdHJhbnNpdGlvbi1jb2xvcnMgZHVyYXRpb24tMjAwIGZvY3VzLXZpc2libGU6dGV4dC1uZXV0cmFscy01MCBob3Zlcjp0ZXh0LW5ldXRyYWxzLTUwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiaC02IHctNlwiPntzb2NpYWwuaWNvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIl0sIm5hbWVzIjpbIndlYXRoZXJ3b3Jrc0xvZ29JbWFnZSIsIkNvbnRhaW5lciIsIkltYWdlIiwiTGluayIsIklvTWFpbFVucmVhZFNoYXJwIiwiSGVhZGVyIiwic29jaWFscyIsInBvc2l0aW9uIiwidGl0bGUiLCJpY29uIiwibGluayIsImhlYWRlciIsImNsYXNzTmFtZSIsImRpdiIsImhyZWYiLCJzcmMiLCJhbHQiLCJtYXAiLCJzb2NpYWwiLCJhIiwicmVsIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/layouts/Header.tsx\n"));

/***/ })

});