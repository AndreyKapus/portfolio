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

/***/ "./Components/editAvatar.js":
/*!**********************************!*\
  !*** ./Components/editAvatar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_CiEdit_react_icons_ci__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CiEdit!=!react-icons/ci */ \"__barrel_optimize__?names=CiEdit!=!./node_modules/react-icons/ci/index.esm.js\");\n/* harmony import */ var _styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/projects.module.css */ \"./styles/components/projects.module.css\");\n/* harmony import */ var _styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst EdivAvatar = (projectId)=>{\n    _s();\n    const [selectedPhoto, setSelectedPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // const [id, setId] = useState(null);\n    // console.log(\"selected photo\", selectedPhoto);\n    const uploadFile = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useProjects)((state)=>state.updatePhoto);\n    const handleChange = (e)=>{\n        const input = e.target.files;\n        const file = input[0];\n        setSelectedPhoto(input);\n        console.log(\"file\", input);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (!selectedPhoto) {\n            alert(\"chose photo\");\n            return;\n        }\n        const formData = new FormData();\n        formData.append(\"avatar\", selectedPhoto);\n        uploadFile(formData, projectId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default().editPhotoForm),\n        onSubmit: handleSubmit,\n        children: !selectedPhoto ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"editPrhoto\",\n                    className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default().editLabel),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CiEdit_react_icons_ci__WEBPACK_IMPORTED_MODULE_4__.CiEdit, {}, void 0, false, {\n                        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\editAvatar.js\",\n                        lineNumber: 39,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\editAvatar.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: handleChange,\n                    type: \"file\",\n                    name: \"file\",\n                    id: \"editPrhoto\",\n                    className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default().editPhotoInput),\n                    accept: \"image/*, .jpg, .jpeg, .png\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\editAvatar.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\editAvatar.js\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"submit\",\n            className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default().acceptBtn),\n            children: \"accept\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\editAvatar.js\",\n            lineNumber: 51,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\editAvatar.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EdivAvatar, \"6+mFN7FR9oWJ1Pxbvhrjw6VDCGI=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_2__.useProjects\n    ];\n});\n_c = EdivAvatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EdivAvatar);\nvar _c;\n$RefreshReg$(_c, \"EdivAvatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2VkaXRBdmF0YXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDc0I7QUFDN0I7QUFDTTtBQUV2QyxNQUFNSSxhQUFhLENBQUNDOztJQUNsQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuRCxzQ0FBc0M7SUFDdEMsZ0RBQWdEO0lBRWhELE1BQU1NLGFBQWFMLG1EQUFXQSxDQUFDLENBQUNNLFFBQVVBLE1BQU1DLFdBQVc7SUFFM0QsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNQyxRQUFRRCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7UUFFNUIsTUFBTUMsT0FBT0gsS0FBSyxDQUFDLEVBQUU7UUFDckJOLGlCQUFpQk07UUFDakJJLFFBQVFDLEdBQUcsQ0FBQyxRQUFRTDtJQUN0QjtJQUVBLE1BQU1NLGVBQWUsQ0FBQ1A7UUFDcEJBLEVBQUVRLGNBQWM7UUFFaEIsSUFBSSxDQUFDZCxlQUFlO1lBQ2xCZSxNQUFNO1lBQ047UUFDRjtRQUVBLE1BQU1DLFdBQVcsSUFBSUM7UUFDckJELFNBQVNFLE1BQU0sQ0FBQyxVQUFVbEI7UUFDMUJFLFdBQVdjLFVBQVVqQjtJQUN2QjtJQUVBLHFCQUNFLDhEQUFDb0I7UUFBS0MsV0FBV3pCLDZGQUFvQjtRQUFFMkIsVUFBVVQ7a0JBQzlDLENBQUNiLDhCQUNBLDhEQUFDdUI7OzhCQUNDLDhEQUFDQztvQkFBTUMsU0FBUTtvQkFBYUwsV0FBV3pCLHlGQUFnQjs4QkFDckQsNEVBQUNELGdGQUFNQTs7Ozs7Ozs7Ozs4QkFFVCw4REFBQ2E7b0JBQ0NvQixVQUFVdEI7b0JBQ1Z1QixNQUFLO29CQUNMQyxNQUFLO29CQUNMQyxJQUFHO29CQUNIVixXQUFXekIsOEZBQXFCO29CQUNoQ3FDLFFBQU87Ozs7Ozs7Ozs7O3NDQUlYLDhEQUFDQztZQUFPTCxNQUFLO1lBQVNSLFdBQVd6Qix5RkFBZ0I7c0JBQUU7Ozs7Ozs7Ozs7O0FBTTNEO0dBbkRNRzs7UUFLZUQsK0NBQVdBOzs7S0FMMUJDO0FBcUROLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvZWRpdEF2YXRhci5qcz8wNDc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENpRWRpdCB9IGZyb20gXCJyZWFjdC1pY29ucy9jaVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY29tcG9uZW50cy9wcm9qZWN0cy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVByb2plY3RzIH0gZnJvbSBcIi4uL3N0b3JlXCI7XHJcblxyXG5jb25zdCBFZGl2QXZhdGFyID0gKHByb2plY3RJZCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFBob3RvLCBzZXRTZWxlY3RlZFBob3RvXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIC8vIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgLy8gY29uc29sZS5sb2coXCJzZWxlY3RlZCBwaG90b1wiLCBzZWxlY3RlZFBob3RvKTtcclxuXHJcbiAgY29uc3QgdXBsb2FkRmlsZSA9IHVzZVByb2plY3RzKChzdGF0ZSkgPT4gc3RhdGUudXBkYXRlUGhvdG8pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSBlLnRhcmdldC5maWxlcztcclxuXHJcbiAgICBjb25zdCBmaWxlID0gaW5wdXRbMF07XHJcbiAgICBzZXRTZWxlY3RlZFBob3RvKGlucHV0KTtcclxuICAgIGNvbnNvbGUubG9nKFwiZmlsZVwiLCBpbnB1dCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoIXNlbGVjdGVkUGhvdG8pIHtcclxuICAgICAgYWxlcnQoXCJjaG9zZSBwaG90b1wiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoXCJhdmF0YXJcIiwgc2VsZWN0ZWRQaG90byk7XHJcbiAgICB1cGxvYWRGaWxlKGZvcm1EYXRhLCBwcm9qZWN0SWQpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGhvdG9Gb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgeyFzZWxlY3RlZFBob3RvID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVkaXRQcmhvdG9cIiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0TGFiZWx9PlxyXG4gICAgICAgICAgICA8Q2lFZGl0IC8+XHJcbiAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgbmFtZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBpZD1cImVkaXRQcmhvdG9cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5lZGl0UGhvdG9JbnB1dH1cclxuICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKiwgLmpwZywgLmpwZWcsIC5wbmdcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5hY2NlcHRCdG59PlxyXG4gICAgICAgICAgYWNjZXB0XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICl9XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXZBdmF0YXI7XHJcbiJdLCJuYW1lcyI6WyJDaUVkaXQiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZVByb2plY3RzIiwiRWRpdkF2YXRhciIsInByb2plY3RJZCIsInNlbGVjdGVkUGhvdG8iLCJzZXRTZWxlY3RlZFBob3RvIiwidXBsb2FkRmlsZSIsInN0YXRlIiwidXBkYXRlUGhvdG8iLCJoYW5kbGVDaGFuZ2UiLCJlIiwiaW5wdXQiLCJ0YXJnZXQiLCJmaWxlcyIsImZpbGUiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmb3JtIiwiY2xhc3NOYW1lIiwiZWRpdFBob3RvRm9ybSIsIm9uU3VibWl0IiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiZWRpdExhYmVsIiwib25DaGFuZ2UiLCJ0eXBlIiwibmFtZSIsImlkIiwiZWRpdFBob3RvSW5wdXQiLCJhY2NlcHQiLCJidXR0b24iLCJhY2NlcHRCdG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/editAvatar.js\n"));

/***/ })

});