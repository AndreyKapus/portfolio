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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getStaticProps: function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// import axios from \"axios\";\n\n\n// const getAll = async () => {\n//   const res = await fetch(\n//     \"https://portfolio-api-a758.onrender.com/api/projects\"\n//   );\n//   const projects = await res.json();\n//   const strPr = JSON.stringify(projects);\n//   return strPr;\n// };\nconst Projects = (props)=>{\n    // const [item, setItem] = useState(null);\n    // console.log(item);\n    const { projects } = props;\n    // useEffect(async () => {\n    //   const res = await fetch(\n    //     \"https://portfolio-api-a758.onrender.com/api/projects\"\n    //   );\n    //   const projects = await res.json();\n    //   setItem(projects);\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            children: projects && projects.map((el)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: el.name\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                            lineNumber: 33,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: el.descr\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: el.techs\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, el._id, true, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nconst getStaticProps = async (context)=>{\n    const res = await fetch(\"https://portfolio-api-a758.onrender.com/api/projects\");\n    const projects = await res.json();\n    return {\n        props: {\n            projects\n        }\n    };\n};\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3Byb2plY3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsNkJBQTZCOztBQUNlO0FBRTVDLCtCQUErQjtBQUMvQiw2QkFBNkI7QUFDN0IsNkRBQTZEO0FBQzdELE9BQU87QUFDUCx1Q0FBdUM7QUFDdkMsNENBQTRDO0FBQzVDLGtCQUFrQjtBQUNsQixLQUFLO0FBRUwsTUFBTUUsV0FBVyxDQUFDQztJQUNoQiwwQ0FBMEM7SUFDMUMscUJBQXFCO0lBRXJCLE1BQU0sRUFBRUMsUUFBUSxFQUFFLEdBQUdEO0lBRXJCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsNkRBQTZEO0lBQzdELE9BQU87SUFDUCx1Q0FBdUM7SUFDdkMsdUJBQXVCO0lBQ3ZCLFVBQVU7SUFFVixxQkFDRSw4REFBQ0U7a0JBQ0MsNEVBQUNDO3NCQUNFRixZQUNDQSxTQUFTRyxHQUFHLENBQUMsQ0FBQ0MsbUJBQ1osOERBQUNDOztzQ0FDQyw4REFBQ0M7c0NBQUdGLEdBQUdHLElBQUk7Ozs7OztzQ0FDWCw4REFBQ0Q7c0NBQUdGLEdBQUdJLEtBQUs7Ozs7OztzQ0FDWiw4REFBQ0Y7c0NBQUdGLEdBQUdLLEtBQUs7Ozs7Ozs7bUJBSExMLEdBQUdNLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztBQVMzQjtLQTVCTVo7QUE4Qk4sK0RBQWVBLFFBQVFBLEVBQUM7QUFFakIsTUFBTWEsaUJBQWlCLE9BQU9DO0lBQ25DLE1BQU1DLE1BQU0sTUFBTUMsTUFDaEI7SUFFRixNQUFNZCxXQUFXLE1BQU1hLElBQUlFLElBQUk7SUFDL0IsT0FBTztRQUNMaEIsT0FBTztZQUFFQztRQUFTO0lBQ3BCO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL3Byb2plY3RzLmpzP2ZjYmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBjb25zdCBnZXRBbGwgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbi8vICAgICBcImh0dHBzOi8vcG9ydGZvbGlvLWFwaS1hNzU4Lm9ucmVuZGVyLmNvbS9hcGkvcHJvamVjdHNcIlxyXG4vLyAgICk7XHJcbi8vICAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgIGNvbnN0IHN0clByID0gSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpO1xyXG4vLyAgIHJldHVybiBzdHJQcjtcclxuLy8gfTtcclxuXHJcbmNvbnN0IFByb2plY3RzID0gKHByb3BzKSA9PiB7XHJcbiAgLy8gY29uc3QgW2l0ZW0sIHNldEl0ZW1dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgLy8gY29uc29sZS5sb2coaXRlbSk7XHJcblxyXG4gIGNvbnN0IHsgcHJvamVjdHMgfSA9IHByb3BzO1xyXG5cclxuICAvLyB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgLy8gICAgIFwiaHR0cHM6Ly9wb3J0Zm9saW8tYXBpLWE3NTgub25yZW5kZXIuY29tL2FwaS9wcm9qZWN0c1wiXHJcbiAgLy8gICApO1xyXG4gIC8vICAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIC8vICAgc2V0SXRlbShwcm9qZWN0cyk7XHJcbiAgLy8gfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtwcm9qZWN0cyAmJlxyXG4gICAgICAgICAgcHJvamVjdHMubWFwKChlbCkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtlbC5faWR9PlxyXG4gICAgICAgICAgICAgIDxwPntlbC5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICA8cD57ZWwuZGVzY3J9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPntlbC50ZWNoc308L3A+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBcImh0dHBzOi8vcG9ydGZvbGlvLWFwaS1hNzU4Lm9ucmVuZGVyLmNvbS9hcGkvcHJvamVjdHNcIlxyXG4gICk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwcm9qZWN0cyB9LFxyXG4gIH07XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2plY3RzIiwicHJvcHMiLCJwcm9qZWN0cyIsImRpdiIsInVsIiwibWFwIiwiZWwiLCJsaSIsInAiLCJuYW1lIiwiZGVzY3IiLCJ0ZWNocyIsIl9pZCIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/projects.js\n"));

/***/ })

});