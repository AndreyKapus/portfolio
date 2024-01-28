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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/projects.module.css */ \"./styles/components/projects.module.css\");\n/* harmony import */ var _styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _deleteBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteBtn */ \"./Components/deleteBtn.js\");\n/* harmony import */ var _detailsBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detailsBtn */ \"./Components/detailsBtn.js\");\n/* harmony import */ var _editAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editAvatar */ \"./Components/editAvatar.js\");\n\n\n\n\n\nconst dir = \"https://portfolio-api-a758.onrender.com/\";\nconst Projects = (param)=>{\n    let { projects } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().projectsContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().projectsList),\n            children: projects && projects.map((param)=>/*#__PURE__*/ {\n                let { _id, img, name, techs, descr, team, avatarUrl } = param;\n                return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().listItem),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_editAvatar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            projectId: _id\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                            lineNumber: 15,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgWrapper),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: \"\".concat(dir).concat(avatarUrl),\n                                className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().projectImg)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                                lineNumber: 17,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                            lineNumber: 16,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().descriptionWrapper),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().projectTitle),\n                                    children: name\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().techs),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().techTitle),\n                                            children: \"Technologies:\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                                            lineNumber: 22,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        techs\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                                    lineNumber: 21,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().descriptionContainer),\n                                    children: descr.length > 20 ? console.log(descr.length) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_4___default().description),\n                                        children: descr\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 21\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 17\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: team ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Team project\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 30\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Individual\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 52\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                            lineNumber: 19,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_detailsBtn__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            projectId: _id\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                            lineNumber: 34,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_deleteBtn__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            projectId: _id\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                            lineNumber: 35,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, _id, true, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n                    lineNumber: 14,\n                    columnNumber: 13\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\projects.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3Byb2plY3RzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4RDtBQUMxQjtBQUNFO0FBQ0E7QUFFdEMsTUFBTUksTUFBTTtBQUVaLE1BQU1DLFdBQVc7UUFBQyxFQUFFQyxRQUFRLEVBQUU7SUFDNUIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdSLGlHQUF3QjtrQkFDdEMsNEVBQUNVO1lBQUdGLFdBQVdSLDRGQUFtQjtzQkFDL0JNLFlBQ0NBLFNBQVNNLEdBQUcsQ0FBQztvQkFBQyxFQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUU7dUJBQzdELDhEQUFDQztvQkFBYVosV0FBV1Isd0ZBQWU7O3NDQUN0Qyw4REFBQ0csbURBQVVBOzRCQUFDbUIsV0FBV1Q7Ozs7OztzQ0FDdkIsOERBQUNOOzRCQUFJQyxXQUFXUiwwRkFBaUI7c0NBQy9CLDRFQUFDYztnQ0FBSVUsS0FBSyxHQUFTTCxPQUFOZixLQUFnQixPQUFWZTtnQ0FBYVgsV0FBV1IsMEZBQWlCOzs7Ozs7Ozs7OztzQ0FFOUQsOERBQUNPOzRCQUFJQyxXQUFXUixrR0FBeUI7OzhDQUN2Qyw4REFBQzJCO29DQUFHbkIsV0FBV1IsNEZBQW1COzhDQUFHZTs7Ozs7OzhDQUNyQyw4REFBQ2M7b0NBQUVyQixXQUFXUixxRkFBWTs7c0RBQ3hCLDhEQUFDOEI7NENBQUt0QixXQUFXUix5RkFBZ0I7c0RBQUU7Ozs7Ozt3Q0FDbENnQjs7Ozs7Ozs4Q0FFSCw4REFBQ1Q7b0NBQUlDLFdBQVdSLG9HQUEyQjs4Q0FDeENpQixNQUFNZ0IsTUFBTSxHQUFHLEtBQ2RDLFFBQVFDLEdBQUcsQ0FBQ2xCLE1BQU1nQixNQUFNLGtCQUV4Qiw4REFBQ0o7d0NBQUVyQixXQUFXUiwyRkFBa0I7a0RBQUdpQjs7Ozs7Ozs7Ozs7OENBR3ZDLDhEQUFDVjs4Q0FBS1cscUJBQU8sOERBQUNXO2tEQUFFOzs7OztrRUFBbUIsOERBQUNBO2tEQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FFeEMsOERBQUMzQixtREFBVUE7NEJBQUNvQixXQUFXVDs7Ozs7O3NDQUN2Qiw4REFBQ1osa0RBQVNBOzRCQUFDcUIsV0FBV1Q7Ozs7Ozs7bUJBckJmQTs7Ozs7WUFzQkw7Ozs7Ozs7Ozs7O0FBS2hCO0tBakNNUjtBQW1DTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL3Byb2plY3RzLmpzP2ZjYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2NvbXBvbmVudHMvcHJvamVjdHMubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgRGVsZXRlQnRuIGZyb20gXCIuL2RlbGV0ZUJ0blwiO1xyXG5pbXBvcnQgRGV0YWlsc0J0biBmcm9tIFwiLi9kZXRhaWxzQnRuXCI7XHJcbmltcG9ydCBFZGl2QXZhdGFyIGZyb20gXCIuL2VkaXRBdmF0YXJcIjtcclxuXHJcbmNvbnN0IGRpciA9IFwiaHR0cHM6Ly9wb3J0Zm9saW8tYXBpLWE3NTgub25yZW5kZXIuY29tL1wiO1xyXG5cclxuY29uc3QgUHJvamVjdHMgPSAoeyBwcm9qZWN0cyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdHNDb250YWluZXJ9PlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdHNMaXN0fT5cclxuICAgICAgICB7cHJvamVjdHMgJiZcclxuICAgICAgICAgIHByb2plY3RzLm1hcCgoeyBfaWQsIGltZywgbmFtZSwgdGVjaHMsIGRlc2NyLCB0ZWFtLCBhdmF0YXJVcmwgfSkgPT4gKFxyXG4gICAgICAgICAgICA8bGkga2V5PXtfaWR9IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RJdGVtfT5cclxuICAgICAgICAgICAgICA8RWRpdkF2YXRhciBwcm9qZWN0SWQ9e19pZH0gLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltZ1dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake2Rpcn0ke2F2YXRhclVybH1gfSBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0SW1nfSAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb25XcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5wcm9qZWN0VGl0bGV9PntuYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZWNoc30+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRlY2hUaXRsZX0+VGVjaG5vbG9naWVzOjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAge3RlY2hzfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgIHtkZXNjci5sZW5ndGggPiAyMCA/IChcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkZXNjci5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntkZXNjcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+e3RlYW0gPyA8cD5UZWFtIHByb2plY3Q8L3A+IDogPHA+SW5kaXZpZHVhbDwvcD59PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPERldGFpbHNCdG4gcHJvamVjdElkPXtfaWR9IC8+XHJcbiAgICAgICAgICAgICAgPERlbGV0ZUJ0biBwcm9qZWN0SWQ9e19pZH0gLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzO1xyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwiRGVsZXRlQnRuIiwiRGV0YWlsc0J0biIsIkVkaXZBdmF0YXIiLCJkaXIiLCJQcm9qZWN0cyIsInByb2plY3RzIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvamVjdHNDb250YWluZXIiLCJ1bCIsInByb2plY3RzTGlzdCIsIm1hcCIsIl9pZCIsImltZyIsIm5hbWUiLCJ0ZWNocyIsImRlc2NyIiwidGVhbSIsImF2YXRhclVybCIsImxpIiwibGlzdEl0ZW0iLCJwcm9qZWN0SWQiLCJpbWdXcmFwcGVyIiwic3JjIiwicHJvamVjdEltZyIsImRlc2NyaXB0aW9uV3JhcHBlciIsImgyIiwicHJvamVjdFRpdGxlIiwicCIsInNwYW4iLCJ0ZWNoVGl0bGUiLCJkZXNjcmlwdGlvbkNvbnRhaW5lciIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/projects.js\n"));

/***/ })

});