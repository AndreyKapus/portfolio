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

/***/ "./Components/deleteBtn.js":
/*!*********************************!*\
  !*** ./Components/deleteBtn.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ \"./store.js\");\n\nvar _s = $RefreshSig$();\n\nconst DeleteBtn = (param)=>{\n    let { projectId } = param;\n    _s();\n    var _s1 = $RefreshSig$();\n    const useDelete = (0,_store__WEBPACK_IMPORTED_MODULE_1__.useProjects)((state)=>state.deleteProject);\n    const logMes = ()=>{\n        console.log(projectId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            onClick: _s1(()=>{\n                _s1();\n                return useDelete(projectId);\n            }, \"0A8YcTdidCbr12ZWWGpNU6Duw1A=\", false, function() {\n                return [\n                    useDelete\n                ];\n            }),\n            children: \"Del\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\deleteBtn.js\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\deleteBtn.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(DeleteBtn, \"qXE0iBZDB8Pr+w2kOVj2fgCEwvY=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_1__.useProjects\n    ];\n});\n_c = DeleteBtn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeleteBtn);\nvar _c;\n$RefreshReg$(_c, \"DeleteBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2RlbGV0ZUJ0bi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFFdkMsTUFBTUMsWUFBWTtRQUFDLEVBQUVDLFNBQVMsRUFBRTs7O0lBQzlCLE1BQU1DLFlBQVlILG1EQUFXQSxDQUFDLENBQUNJLFFBQVVBLE1BQU1DLGFBQWE7SUFFNUQsTUFBTUMsU0FBUztRQUNiQyxRQUFRQyxHQUFHLENBQUNOO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ087a0JBQ0MsNEVBQUNDO1lBQU9DLE1BQUs7WUFBU0MsT0FBTyxNQUFFOztnQkFBTVQsT0FBQUEsVUFBVUQ7WUFBUzs7b0JBQW5CQzs7O3NCQUFzQjs7Ozs7Ozs7Ozs7QUFLakU7R0FkTUY7O1FBQ2NELCtDQUFXQTs7O0tBRHpCQztBQWdCTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL2RlbGV0ZUJ0bi5qcz8xMzcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVByb2plY3RzIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5jb25zdCBEZWxldGVCdG4gPSAoeyBwcm9qZWN0SWQgfSkgPT4ge1xyXG4gIGNvbnN0IHVzZURlbGV0ZSA9IHVzZVByb2plY3RzKChzdGF0ZSkgPT4gc3RhdGUuZGVsZXRlUHJvamVjdCk7XHJcblxyXG4gIGNvbnN0IGxvZ01lcyA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHByb2plY3RJZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHVzZURlbGV0ZShwcm9qZWN0SWQpfT5cclxuICAgICAgICBEZWxcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVsZXRlQnRuO1xyXG4iXSwibmFtZXMiOlsidXNlUHJvamVjdHMiLCJEZWxldGVCdG4iLCJwcm9qZWN0SWQiLCJ1c2VEZWxldGUiLCJzdGF0ZSIsImRlbGV0ZVByb2plY3QiLCJsb2dNZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/deleteBtn.js\n"));

/***/ })

});