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

/***/ "./Components/projectDescr.js":
/*!************************************!*\
  !*** ./Components/projectDescr.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/components/projects.module.css */ \"./styles/components/projects.module.css\");\n/* harmony import */ var _styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProjectDescr = (param)=>{\n    let { descr } = param;\n    console.log(descr.length);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_1___default().descriptionContainer),\n        children: descr.length > 200 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_1___default()[\"continue\"]),\n            children: descr\n        }, void 0, false, {\n            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projectDescr.js\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_1___default().description),\n            children: descr\n        }, void 0, false, {\n            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projectDescr.js\",\n            lineNumber: 10,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projectDescr.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ProjectDescr;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDescr);\nvar _c;\n$RefreshReg$(_c, \"ProjectDescr\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3Byb2plY3REZXNjci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEQ7QUFFOUQsTUFBTUMsZUFBZTtRQUFDLEVBQUVDLEtBQUssRUFBRTtJQUM3QkMsUUFBUUMsR0FBRyxDQUFDRixNQUFNRyxNQUFNO0lBQ3hCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXUCxvR0FBMkI7a0JBQ3hDRSxNQUFNRyxNQUFNLEdBQUcsb0JBQ2QsOERBQUNJO1lBQUVGLFdBQVdQLDJGQUFlO3NCQUFHRTs7Ozs7c0NBRWhDLDhEQUFDTztZQUFFRixXQUFXUCwyRkFBa0I7c0JBQUdFOzs7Ozs7Ozs7OztBQUkzQztLQVhNRDtBQWFOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvcHJvamVjdERlc2NyLmpzP2Y2MDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvcHJvamVjdHMubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgUHJvamVjdERlc2NyID0gKHsgZGVzY3IgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGRlc2NyLmxlbmd0aCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb25Db250YWluZXJ9PlxyXG4gICAgICB7ZGVzY3IubGVuZ3RoID4gMjAwID8gKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRpbnVlfT57ZGVzY3J9PC9wPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT57ZGVzY3J9PC9wPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3REZXNjcjtcclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlByb2plY3REZXNjciIsImRlc2NyIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImRlc2NyaXB0aW9uQ29udGFpbmVyIiwicCIsImNvbnRpbnVlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/projectDescr.js\n"));

/***/ })

});