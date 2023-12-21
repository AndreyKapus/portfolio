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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_CiEdit_react_icons_ci__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=CiEdit!=!react-icons/ci */ \"__barrel_optimize__?names=CiEdit!=!./node_modules/react-icons/ci/index.esm.js\");\n/* harmony import */ var _styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/components/projects.module.css */ \"./styles/components/projects.module.css\");\n/* harmony import */ var _styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst EdivAvatar = (projectId)=>{\n    _s();\n    const [selectedPhoto, setSelectedPhoto] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    // const [id, setId] = useState(null);\n    // console.log(\"selected photo\", selectedPhoto);\n    const uploadFile = (0,_store__WEBPACK_IMPORTED_MODULE_2__.useProjects)((state)=>state.updatePhoto);\n    const handleChange = (e)=>{\n        const file = e.target.file;\n        const input = e.file.file[0];\n        setSelectedPhoto(file);\n        console.log(\"file\", input);\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        if (!selectedPhoto) {\n            alert(\"chose photo\");\n            return;\n        }\n        const formData = new FormData();\n        formData.append(\"avatar\", selectedPhoto);\n        uploadFile(formData, projectId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default().editPhotoForm),\n        onSubmit: handleSubmit,\n        children: !selectedPhoto ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    htmlFor: \"editPrhoto\",\n                    className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default().editLabel),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CiEdit_react_icons_ci__WEBPACK_IMPORTED_MODULE_4__.CiEdit, {}, void 0, false, {\n                        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\editAvatar.js\",\n                        lineNumber: 38,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\editAvatar.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    onChange: handleChange,\n                    type: \"file\",\n                    name: \"file\",\n                    id: \"editPrhoto\",\n                    className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default().editPhotoInput),\n                    accept: \"image/*, .jpg, .jpeg, .png\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\editAvatar.js\",\n                    lineNumber: 40,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\editAvatar.js\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"submit\",\n            className: (_styles_components_projects_module_css__WEBPACK_IMPORTED_MODULE_3___default().acceptBtn),\n            children: \"accept\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\editAvatar.js\",\n            lineNumber: 50,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\editAvatar.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EdivAvatar, \"6+mFN7FR9oWJ1Pxbvhrjw6VDCGI=\", false, function() {\n    return [\n        _store__WEBPACK_IMPORTED_MODULE_2__.useProjects\n    ];\n});\n_c = EdivAvatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EdivAvatar);\nvar _c;\n$RefreshReg$(_c, \"EdivAvatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2VkaXRBdmF0YXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBd0M7QUFDc0I7QUFDN0I7QUFDTTtBQUV2QyxNQUFNSSxhQUFhLENBQUNDOztJQUNsQixNQUFNLENBQUNDLGVBQWVDLGlCQUFpQixHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuRCxzQ0FBc0M7SUFDdEMsZ0RBQWdEO0lBRWhELE1BQU1NLGFBQWFMLG1EQUFXQSxDQUFDLENBQUNNLFFBQVVBLE1BQU1DLFdBQVc7SUFFM0QsTUFBTUMsZUFBZSxDQUFDQztRQUNwQixNQUFNQyxPQUFPRCxFQUFFRSxNQUFNLENBQUNELElBQUk7UUFDMUIsTUFBTUUsUUFBUUgsRUFBRUMsSUFBSSxDQUFDQSxJQUFJLENBQUMsRUFBRTtRQUM1Qk4saUJBQWlCTTtRQUNqQkcsUUFBUUMsR0FBRyxDQUFDLFFBQVFGO0lBQ3RCO0lBRUEsTUFBTUcsZUFBZSxDQUFDTjtRQUNwQkEsRUFBRU8sY0FBYztRQUVoQixJQUFJLENBQUNiLGVBQWU7WUFDbEJjLE1BQU07WUFDTjtRQUNGO1FBRUEsTUFBTUMsV0FBVyxJQUFJQztRQUNyQkQsU0FBU0UsTUFBTSxDQUFDLFVBQVVqQjtRQUMxQkUsV0FBV2EsVUFBVWhCO0lBQ3ZCO0lBRUEscUJBQ0UsOERBQUNtQjtRQUFLQyxXQUFXeEIsNkZBQW9CO1FBQUUwQixVQUFVVDtrQkFDOUMsQ0FBQ1osOEJBQ0EsOERBQUNzQjs7OEJBQ0MsOERBQUNDO29CQUFNQyxTQUFRO29CQUFhTCxXQUFXeEIseUZBQWdCOzhCQUNyRCw0RUFBQ0QsZ0ZBQU1BOzs7Ozs7Ozs7OzhCQUVULDhEQUFDZTtvQkFDQ2lCLFVBQVVyQjtvQkFDVnNCLE1BQUs7b0JBQ0xDLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hWLFdBQVd4Qiw4RkFBcUI7b0JBQ2hDb0MsUUFBTzs7Ozs7Ozs7Ozs7c0NBSVgsOERBQUNDO1lBQU9MLE1BQUs7WUFBU1IsV0FBV3hCLHlGQUFnQjtzQkFBRTs7Ozs7Ozs7Ozs7QUFNM0Q7R0FsRE1HOztRQUtlRCwrQ0FBV0E7OztLQUwxQkM7QUFvRE4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9lZGl0QXZhdGFyLmpzPzA0NzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2lFZGl0IH0gZnJvbSBcInJlYWN0LWljb25zL2NpXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL3Byb2plY3RzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUHJvamVjdHMgfSBmcm9tIFwiLi4vc3RvcmVcIjtcclxuXHJcbmNvbnN0IEVkaXZBdmF0YXIgPSAocHJvamVjdElkKSA9PiB7XHJcbiAgY29uc3QgW3NlbGVjdGVkUGhvdG8sIHNldFNlbGVjdGVkUGhvdG9dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgLy8gY29uc3QgW2lkLCBzZXRJZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAvLyBjb25zb2xlLmxvZyhcInNlbGVjdGVkIHBob3RvXCIsIHNlbGVjdGVkUGhvdG8pO1xyXG5cclxuICBjb25zdCB1cGxvYWRGaWxlID0gdXNlUHJvamVjdHMoKHN0YXRlKSA9PiBzdGF0ZS51cGRhdGVQaG90byk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZTtcclxuICAgIGNvbnN0IGlucHV0ID0gZS5maWxlLmZpbGVbMF07XHJcbiAgICBzZXRTZWxlY3RlZFBob3RvKGZpbGUpO1xyXG4gICAgY29uc29sZS5sb2coXCJmaWxlXCIsIGlucHV0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGlmICghc2VsZWN0ZWRQaG90bykge1xyXG4gICAgICBhbGVydChcImNob3NlIHBob3RvXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZChcImF2YXRhclwiLCBzZWxlY3RlZFBob3RvKTtcclxuICAgIHVwbG9hZEZpbGUoZm9ybURhdGEsIHByb2plY3RJZCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmVkaXRQaG90b0Zvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICB7IXNlbGVjdGVkUGhvdG8gPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZWRpdFByaG90b1wiIGNsYXNzTmFtZT17c3R5bGVzLmVkaXRMYWJlbH0+XHJcbiAgICAgICAgICAgIDxDaUVkaXQgLz5cclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICBuYW1lPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIGlkPVwiZWRpdFByaG90b1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmVkaXRQaG90b0lucHV0fVxyXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qLCAuanBnLCAuanBlZywgLnBuZ1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLmFjY2VwdEJ0bn0+XHJcbiAgICAgICAgICBhY2NlcHRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgKX1cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdkF2YXRhcjtcclxuIl0sIm5hbWVzIjpbIkNpRWRpdCIsInN0eWxlcyIsInVzZVN0YXRlIiwidXNlUHJvamVjdHMiLCJFZGl2QXZhdGFyIiwicHJvamVjdElkIiwic2VsZWN0ZWRQaG90byIsInNldFNlbGVjdGVkUGhvdG8iLCJ1cGxvYWRGaWxlIiwic3RhdGUiLCJ1cGRhdGVQaG90byIsImhhbmRsZUNoYW5nZSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiaW5wdXQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmb3JtIiwiY2xhc3NOYW1lIiwiZWRpdFBob3RvRm9ybSIsIm9uU3VibWl0IiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiZWRpdExhYmVsIiwib25DaGFuZ2UiLCJ0eXBlIiwibmFtZSIsImlkIiwiZWRpdFBob3RvSW5wdXQiLCJhY2NlcHQiLCJidXR0b24iLCJhY2NlcHRCdG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/editAvatar.js\n"));

/***/ })

});