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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/components/projects.module.css */ \"./styles/components/projects.module.css\");\n/* harmony import */ var _styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst ProjectDescr = (param)=>{\n    let { descr } = param;\n    _s();\n    const [shortDescr, setShortDescr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [standartDescr, setStandartDescr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(descr);\n    const sliceDescr = ()=>{\n        if (descr.length > 110) {\n            const slicedDescr = descr.slice(110);\n            setShortDescr(slicedDescr);\n        }\n        return;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_2___default().descriptionContainer),\n        children: descr.length > 110 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_2___default()[\"continue\"]),\n            children: shortDescr\n        }, void 0, false, {\n            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projectDescr.js\",\n            lineNumber: 18,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),\n            children: descr\n        }, void 0, false, {\n            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projectDescr.js\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projectDescr.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProjectDescr, \"qHI7jmo1z8jJD0TVvo9FluXELVw=\");\n_c = ProjectDescr;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectDescr);\nvar _c;\n$RefreshReg$(_c, \"ProjectDescr\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3Byb2plY3REZXNjci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDNkI7QUFFOUQsTUFBTUUsZUFBZTtRQUFDLEVBQUVDLEtBQUssRUFBRTs7SUFDN0IsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ00sZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFDRztJQUVuRCxNQUFNSyxhQUFhO1FBQ2pCLElBQUlMLE1BQU1NLE1BQU0sR0FBRyxLQUFLO1lBQ3RCLE1BQU1DLGNBQWNQLE1BQU1RLEtBQUssQ0FBQztZQUNoQ04sY0FBY0s7UUFDaEI7UUFDQTtJQUNGO0lBQ0EscUJBQ0UsOERBQUNFO1FBQUlDLFdBQVdaLG9HQUEyQjtrQkFDeENFLE1BQU1NLE1BQU0sR0FBRyxvQkFDZCw4REFBQ007WUFBRUYsV0FBV1osMkZBQWU7c0JBQUdHOzs7OztzQ0FFaEMsOERBQUNXO1lBQUVGLFdBQVdaLDJGQUFrQjtzQkFBR0U7Ozs7Ozs7Ozs7O0FBSTNDO0dBcEJNRDtLQUFBQTtBQXNCTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL3Byb2plY3REZXNjci5qcz9mNjA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL3Byb2plY3RzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFByb2plY3REZXNjciA9ICh7IGRlc2NyIH0pID0+IHtcclxuICBjb25zdCBbc2hvcnREZXNjciwgc2V0U2hvcnREZXNjcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbc3RhbmRhcnREZXNjciwgc2V0U3RhbmRhcnREZXNjcl0gPSB1c2VTdGF0ZShkZXNjcik7XHJcblxyXG4gIGNvbnN0IHNsaWNlRGVzY3IgPSAoKSA9PiB7XHJcbiAgICBpZiAoZGVzY3IubGVuZ3RoID4gMTEwKSB7XHJcbiAgICAgIGNvbnN0IHNsaWNlZERlc2NyID0gZGVzY3Iuc2xpY2UoMTEwKTtcclxuICAgICAgc2V0U2hvcnREZXNjcihzbGljZWREZXNjcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm47XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbkNvbnRhaW5lcn0+XHJcbiAgICAgIHtkZXNjci5sZW5ndGggPiAxMTAgPyAoXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGludWV9PntzaG9ydERlc2NyfTwvcD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2Rlc2NyfTwvcD5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0RGVzY3I7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIlByb2plY3REZXNjciIsImRlc2NyIiwic2hvcnREZXNjciIsInNldFNob3J0RGVzY3IiLCJzdGFuZGFydERlc2NyIiwic2V0U3RhbmRhcnREZXNjciIsInNsaWNlRGVzY3IiLCJsZW5ndGgiLCJzbGljZWREZXNjciIsInNsaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZGVzY3JpcHRpb25Db250YWluZXIiLCJwIiwiY29udGludWUiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/projectDescr.js\n"));

/***/ })

});