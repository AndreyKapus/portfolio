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

/***/ "./Components/projects.js":
/*!********************************!*\
  !*** ./Components/projects.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/projects.module.scss */ \"./styles/projects.module.scss\");\n/* harmony import */ var _styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Projects = (param)=>{\n    let { projects } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: (_styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default().projectsList),\n            children: projects && projects.map((param)=>/*#__PURE__*/ {\n                let { _id, img, name, techs, descr, team, avatarUrl } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: (_styles_projects_module_scss__WEBPACK_IMPORTED_MODULE_1___default().listItem),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: avatarUrl,\n                            width: \"300\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                            lineNumber: 10,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                            lineNumber: 11,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: descr\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                            lineNumber: 12,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: techs\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                            lineNumber: 13,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, _id, true, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3Byb2plY3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFvRDtBQUVwRCxNQUFNQyxXQUFXO1FBQUMsRUFBRUMsUUFBUSxFQUFFO0lBQzVCLHFCQUNFLDhEQUFDQztrQkFDQyw0RUFBQ0M7WUFBR0MsV0FBV0wsa0ZBQW1CO3NCQUMvQkUsWUFDQ0EsU0FBU0ssR0FBRyxDQUFDO29CQUFDLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLFNBQVMsRUFBRTt1QkFDN0QsOERBQUNDO29CQUFhVixXQUFXTCw4RUFBZTs7c0NBQ3RDLDhEQUFDUzs0QkFBSVEsS0FBS0g7NEJBQVdJLE9BQU07Ozs7OztzQ0FDM0IsOERBQUNDO3NDQUFJVDs7Ozs7O3NDQUNMLDhEQUFDVTtzQ0FBR1I7Ozs7OztzQ0FDSiw4REFBQ1E7c0NBQUdUOzs7Ozs7O21CQUpHSDs7Ozs7WUFLTDs7Ozs7Ozs7Ozs7QUFLaEI7S0FoQk1QO0FBa0JOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvcHJvamVjdHMuanM/ZmNiYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvcHJvamVjdHMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IFByb2plY3RzID0gKHsgcHJvamVjdHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdHNMaXN0fT5cclxuICAgICAgICB7cHJvamVjdHMgJiZcclxuICAgICAgICAgIHByb2plY3RzLm1hcCgoeyBfaWQsIGltZywgbmFtZSwgdGVjaHMsIGRlc2NyLCB0ZWFtLCBhdmF0YXJVcmwgfSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtfaWR9IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz17YXZhdGFyVXJsfSB3aWR0aD1cIjMwMFwiIC8+XHJcbiAgICAgICAgICAgICAgPGgyPntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgPHA+e2Rlc2NyfTwvcD5cclxuICAgICAgICAgICAgICA8cD57dGVjaHN9PC9wPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XHJcbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJQcm9qZWN0cyIsInByb2plY3RzIiwiZGl2IiwidWwiLCJjbGFzc05hbWUiLCJwcm9qZWN0c0xpc3QiLCJtYXAiLCJfaWQiLCJpbWciLCJuYW1lIiwidGVjaHMiLCJkZXNjciIsInRlYW0iLCJhdmF0YXJVcmwiLCJsaSIsImxpc3RJdGVtIiwic3JjIiwid2lkdGgiLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/projects.js\n"));

/***/ })

});