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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStaticProps: function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// import axios from \"axios\";\n\nvar _s = $RefreshSig$();\n\n// const getAll = async () => {\n//   const res = await fetch(\n//     \"https://portfolio-api-a758.onrender.com/api/projects\"\n//   );\n//   const projects = await res.json();\n//   const strPr = JSON.stringify(projects);\n//   return strPr;\n// };\nconst Projects = ()=>{\n    _s();\n    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // console.log(item);\n    // useEffect(async () => {\n    //   const res = await fetch(\n    //     \"https://portfolio-api-a758.onrender.com/api/projects\"\n    //   );\n    //   const projects = await res.json();\n    //   setItem(projects);\n    // }, []);\n    console.log(item);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: item && item.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: el.name\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: el.descr\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: el.techs\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, el._id, true, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Projects, \"1jwMjw4NxuqnVGbu1yekCVr6e0Y=\");\n_c = Projects;\nconst getStaticProps = async (context)=>{\n    const res = await fetch(\"https://portfolio-api-a758.onrender.com/api/projects\");\n    const projects = await res.json();\n    return {\n        props: {\n            projects\n        }\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3Byb2plY3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsNkJBQTZCOzs7QUFFZTtBQUU1QywrQkFBK0I7QUFDL0IsNkJBQTZCO0FBQzdCLDZEQUE2RDtBQUM3RCxPQUFPO0FBQ1AsdUNBQXVDO0FBQ3ZDLDRDQUE0QztBQUM1QyxrQkFBa0I7QUFDbEIsS0FBSztBQUVMLE1BQU1FLFdBQVc7O0lBQ2YsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdILCtDQUFRQSxDQUFDO0lBQ2pDLHFCQUFxQjtJQUVyQiwwQkFBMEI7SUFDMUIsNkJBQTZCO0lBQzdCLDZEQUE2RDtJQUM3RCxPQUFPO0lBQ1AsdUNBQXVDO0lBQ3ZDLHVCQUF1QjtJQUN2QixVQUFVO0lBRVZJLFFBQVFDLEdBQUcsQ0FBQ0g7SUFFWixxQkFDRSw4REFBQ0k7a0JBQ0MsNEVBQUNDO3NCQUNFTCxRQUNDQSxLQUFLTSxHQUFHLENBQUMsQ0FBQ0MsbUJBQ1IsOERBQUNDOztzQ0FDQyw4REFBQ0M7c0NBQUdGLEdBQUdHLElBQUk7Ozs7OztzQ0FDWCw4REFBQ0Q7c0NBQUdGLEdBQUdJLEtBQUs7Ozs7OztzQ0FDWiw4REFBQ0Y7c0NBQUdGLEdBQUdLLEtBQUs7Ozs7Ozs7bUJBSExMLEdBQUdNLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztBQVMzQjtHQTVCTWQ7S0FBQUE7QUE4QkMsTUFBTWUsaUJBQWlCLE9BQU9DO0lBQ25DLE1BQU1DLE1BQU0sTUFBTUMsTUFDaEI7SUFFRixNQUFNQyxXQUFXLE1BQU1GLElBQUlHLElBQUk7SUFDL0IsT0FBTztRQUNMQyxPQUFPO1lBQUVGO1FBQVM7SUFDcEI7QUFDRixFQUFFO0FBRUYsK0RBQWVuQixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvcHJvamVjdHMuanM/ZmNiYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBjb25zdCBnZXRBbGwgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbi8vICAgICBcImh0dHBzOi8vcG9ydGZvbGlvLWFwaS1hNzU4Lm9ucmVuZGVyLmNvbS9hcGkvcHJvamVjdHNcIlxyXG4vLyAgICk7XHJcbi8vICAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgIGNvbnN0IHN0clByID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xyXG4vLyAgIHJldHVybiBzdHJQcjtcclxuLy8gfTtcclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpdGVtLCBzZXRJdGVtXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgLy8gICAgIFwiaHR0cHM6Ly9wb3J0Zm9saW8tYXBpLWE3NTgub25yZW5kZXIuY29tL2FwaS9wcm9qZWN0c1wiXHJcbiAgLy8gICApO1xyXG4gIC8vICAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIC8vICAgc2V0SXRlbShwcm9qZWN0cyk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICBjb25zb2xlLmxvZyhpdGVtKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7aXRlbSAmJlxyXG4gICAgICAgICAgaXRlbS5tYXAoKGVsKSA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2VsLl9pZH0+XHJcbiAgICAgICAgICAgICAgPHA+e2VsLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPntlbC5kZXNjcn08L3A+XHJcbiAgICAgICAgICAgICAgPHA+e2VsLnRlY2hzfTwvcD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBcImh0dHBzOi8vcG9ydGZvbGlvLWFwaS1hNzU4Lm9ucmVuZGVyLmNvbS9hcGkvcHJvamVjdHNcIlxyXG4gICk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwcm9qZWN0cyB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvamVjdHMiLCJpdGVtIiwic2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJ1bCIsIm1hcCIsImVsIiwibGkiLCJwIiwibmFtZSIsImRlc2NyIiwidGVjaHMiLCJfaWQiLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJyZXMiLCJmZXRjaCIsInByb2plY3RzIiwianNvbiIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/projects.js\n"));

/***/ })

});