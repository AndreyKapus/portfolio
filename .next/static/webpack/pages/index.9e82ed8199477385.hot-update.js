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

/***/ "./Components/addProject.js":
/*!**********************************!*\
  !*** ./Components/addProject.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_components_addProject_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/addProject.module.css */ \"./styles/components/addProject.module.css\");\n/* harmony import */ var _styles_components_addProject_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_addProject_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddProject = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [techs, setTechs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [descr, setDescr] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [team, setTeam] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const addNewProject = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useProjects)((state)=>state.addProject);\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        switch(name){\n            case \"title\":\n                setTitle(value);\n                break;\n            case \"techs\":\n                setTechs(value);\n                break;\n            case \"descr\":\n                setDescr(value);\n        }\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const event = {\n            title,\n            techs,\n            descr,\n            team\n        };\n        addNewProject(event);\n    };\n    const handleCheckboxChange = (e)=>{\n        setTeam(e.currentTarget.checked);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_components_addProject_module_css__WEBPACK_IMPORTED_MODULE_3___default().addContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            className: (_styles_components_addProject_module_css__WEBPACK_IMPORTED_MODULE_3___default().addForm),\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"title\",\n                    className: (_styles_components_addProject_module_css__WEBPACK_IMPORTED_MODULE_3___default().formLabel),\n                    children: \"Title\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProject.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"title\",\n                    name: \"title\",\n                    className: (_styles_components_addProject_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProject.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"techs\",\n                    className: (_styles_components_addProject_module_css__WEBPACK_IMPORTED_MODULE_3___default().formLabel),\n                    children: \"Technologies\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProject.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    id: \"techs\",\n                    name: \"techs\",\n                    className: (_styles_components_addProject_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProject.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"descr\",\n                    name: \"descr\",\n                    className: (_styles_components_addProject_module_css__WEBPACK_IMPORTED_MODULE_3___default().formLabel),\n                    children: \"description\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProject.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    type: \"text\",\n                    name: \"textarea\",\n                    rows: \"10\",\n                    cols: \"5\",\n                    id: \"descr\",\n                    className: (_styles_components_addProject_module_css__WEBPACK_IMPORTED_MODULE_3___default().textarea),\n                    onChange: handleChange\n                }, void 0, false, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProject.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"checkbox\",\n                    className: (_styles_components_addProject_module_css__WEBPACK_IMPORTED_MODULE_3___default().formLabel),\n                    children: \"Team project\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProject.js\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"checkbox\",\n                    id: \"checkbox\",\n                    name: \"team\",\n                    checked: team,\n                    onChange: handleCheckboxChange\n                }, void 0, false, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProject.js\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Add project\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProject.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProject.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProject.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddProject, \"htC01QRJ0io1dxvHWBJ2IDj5iPc=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_2__.useProjects\n    ];\n});\n_c = AddProject;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddProject);\nvar _c;\n$RefreshReg$(_c, \"AddProject\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2FkZFByb2plY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFpQztBQUMrQjtBQUN6QjtBQUV2QyxNQUFNRyxhQUFhOztJQUNqQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxPQUFPQyxTQUFTLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1EsT0FBT0MsU0FBUyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQUM7SUFFakMsTUFBTVksZ0JBQWdCVixtREFBV0EsQ0FBQyxDQUFDVyxRQUFVQSxNQUFNQyxVQUFVO0lBRTdELE1BQU1DLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBRWhDLE9BQVFGO1lBQ04sS0FBSztnQkFDSFosU0FBU2E7Z0JBQ1Q7WUFDRixLQUFLO2dCQUNIWCxTQUFTVztnQkFDVDtZQUNGLEtBQUs7Z0JBQ0hULFNBQVNTO1FBQ2I7SUFDRjtJQUVBLE1BQU1FLGVBQWUsQ0FBQ0o7UUFDcEJBLEVBQUVLLGNBQWM7UUFFaEIsTUFBTUMsUUFBUTtZQUNabEI7WUFDQUU7WUFDQUU7WUFDQUU7UUFDRjtRQUVBRSxjQUFjVTtJQUNoQjtJQUVBLE1BQU1DLHVCQUF1QixDQUFDUDtRQUM1QkwsUUFBUUssRUFBRVEsYUFBYSxDQUFDQyxPQUFPO0lBQ2pDO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVcxQiw4RkFBbUI7a0JBQ2pDLDRFQUFDNEI7WUFBS0YsV0FBVzFCLHlGQUFjO1lBQUU4QixVQUFVWDs7OEJBQ3pDLDhEQUFDWTtvQkFBTUMsU0FBUTtvQkFBUU4sV0FBVzFCLDJGQUFnQjs4QkFBRTs7Ozs7OzhCQUdwRCw4REFBQ2tDO29CQUNDQyxNQUFLO29CQUNMQyxJQUFHO29CQUNIcEIsTUFBSztvQkFDTFUsV0FBVzFCLHVGQUFZO29CQUN2QnFDLFVBQVV2Qjs7Ozs7OzhCQUVaLDhEQUFDaUI7b0JBQU1DLFNBQVE7b0JBQVFOLFdBQVcxQiwyRkFBZ0I7OEJBQUU7Ozs7Ozs4QkFHcEQsOERBQUNrQztvQkFDQ0MsTUFBSztvQkFDTEMsSUFBRztvQkFDSHBCLE1BQUs7b0JBQ0xVLFdBQVcxQix1RkFBWTtvQkFDdkJxQyxVQUFVdkI7Ozs7Ozs4QkFFWiw4REFBQ2lCO29CQUFNQyxTQUFRO29CQUFRaEIsTUFBSztvQkFBUVUsV0FBVzFCLDJGQUFnQjs4QkFBRTs7Ozs7OzhCQUdqRSw4REFBQ3NDO29CQUNDSCxNQUFLO29CQUNMbkIsTUFBSztvQkFDTHVCLE1BQUs7b0JBQ0xDLE1BQUs7b0JBQ0xKLElBQUc7b0JBQ0hWLFdBQVcxQiwwRkFBZTtvQkFDMUJxQyxVQUFVdkI7Ozs7Ozs4QkFFWiw4REFBQ2lCO29CQUFNQyxTQUFRO29CQUFXTixXQUFXMUIsMkZBQWdCOzhCQUFFOzs7Ozs7OEJBR3ZELDhEQUFDa0M7b0JBQ0NDLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hwQixNQUFLO29CQUNMUSxTQUFTZjtvQkFDVDRCLFVBQVVmOzs7Ozs7OEJBRVosOERBQUNtQjtvQkFBT04sTUFBSzs4QkFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0F6Rk1qQzs7UUFNa0JELCtDQUFXQTs7O0tBTjdCQztBQTJGTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9Db21wb25lbnRzL2FkZFByb2plY3QuanM/NWY5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9hZGRQcm9qZWN0Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUHJvamVjdHMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmNvbnN0IEFkZFByb2plY3QgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdGVjaHMsIHNldFRlY2hzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZXNjciwgc2V0RGVzY3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3RlYW0sIHNldFRlYW1dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBhZGROZXdQcm9qZWN0ID0gdXNlUHJvamVjdHMoKHN0YXRlKSA9PiBzdGF0ZS5hZGRQcm9qZWN0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG5cclxuICAgIHN3aXRjaCAobmFtZSkge1xyXG4gICAgICBjYXNlIFwidGl0bGVcIjpcclxuICAgICAgICBzZXRUaXRsZSh2YWx1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJ0ZWNoc1wiOlxyXG4gICAgICAgIHNldFRlY2hzKHZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImRlc2NyXCI6XHJcbiAgICAgICAgc2V0RGVzY3IodmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc3QgZXZlbnQgPSB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICB0ZWNocyxcclxuICAgICAgZGVzY3IsXHJcbiAgICAgIHRlYW0sXHJcbiAgICB9O1xyXG5cclxuICAgIGFkZE5ld1Byb2plY3QoZXZlbnQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrYm94Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldFRlYW0oZS5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZENvbnRhaW5lcn0+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmFkZEZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtTGFiZWx9PlxyXG4gICAgICAgICAgVGl0bGVcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgaWQ9XCJ0aXRsZVwiXHJcbiAgICAgICAgICBuYW1lPVwidGl0bGVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZWNoc1wiIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1MYWJlbH0+XHJcbiAgICAgICAgICBUZWNobm9sb2dpZXNcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgaWQ9XCJ0ZWNoc1wiXHJcbiAgICAgICAgICBuYW1lPVwidGVjaHNcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjclwiIG5hbWU9XCJkZXNjclwiIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1MYWJlbH0+XHJcbiAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgcm93cz1cIjEwXCJcclxuICAgICAgICAgIGNvbHM9XCI1XCJcclxuICAgICAgICAgIGlkPVwiZGVzY3JcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGFyZWF9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjaGVja2JveFwiIGNsYXNzTmFtZT17c3R5bGVzLmZvcm1MYWJlbH0+XHJcbiAgICAgICAgICBUZWFtIHByb2plY3RcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgIGlkPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgbmFtZT1cInRlYW1cIlxyXG4gICAgICAgICAgY2hlY2tlZD17dGVhbX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja2JveENoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBwcm9qZWN0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRQcm9qZWN0O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJ1c2VQcm9qZWN0cyIsIkFkZFByb2plY3QiLCJ0aXRsZSIsInNldFRpdGxlIiwidGVjaHMiLCJzZXRUZWNocyIsImRlc2NyIiwic2V0RGVzY3IiLCJ0ZWFtIiwic2V0VGVhbSIsImFkZE5ld1Byb2plY3QiLCJzdGF0ZSIsImFkZFByb2plY3QiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJldmVudCIsImhhbmRsZUNoZWNrYm94Q2hhbmdlIiwiY3VycmVudFRhcmdldCIsImNoZWNrZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJhZGRDb250YWluZXIiLCJmb3JtIiwiYWRkRm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiZm9ybUxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwicm93cyIsImNvbHMiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/addProject.js\n"));

/***/ })

});