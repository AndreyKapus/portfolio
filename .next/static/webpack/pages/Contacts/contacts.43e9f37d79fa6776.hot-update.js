"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Contacts/contacts",{

/***/ "./Components/addProjectModal.js":
/*!***************************************!*\
  !*** ./Components/addProjectModal.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_components_layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/components/layout.module.css */ \"./styles/components/layout.module.css\");\n/* harmony import */ var _styles_components_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_components_layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _addProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addProject */ \"./Components/addProject.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AddProjectModal = ()=>{\n    _s();\n    const customStyles = {\n        content: {\n            top: \"50%\",\n            left: \"50%\",\n            right: \"auto\",\n            bottom: \"auto\",\n            widht: \"70%\",\n            marginRight: \"-50%\",\n            transform: \"translate(-50%, -50%)\",\n            backgroundColor: \"#343434\"\n        }\n    };\n    react_modal__WEBPACK_IMPORTED_MODULE_1___default().setAppElement(\"body\");\n    const [modalIsOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    function openModal() {\n        setIsOpen(true);\n    }\n    function closeModal() {\n        setIsOpen(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_components_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().addBtn),\n                type: \"button\",\n                onClick: openModal,\n                children: \"Add project\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {\n                isOpen: modalIsOpen,\n                onRequestClose: closeModal,\n                style: customStyles,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: closeModal,\n                        children: \"close\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_addProject__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddProjectModal, \"EOxo+0MXKxyCdUCTWpcfchJ0gFI=\");\n_c = AddProjectModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddProjectModal);\nvar _c;\n$RefreshReg$(_c, \"AddProjectModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2FkZFByb2plY3RNb2RhbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDQztBQUMyQjtBQUN0QjtBQUV0QyxNQUFNSSxrQkFBa0I7O0lBQ3RCLE1BQU1DLGVBQWU7UUFDbkJDLFNBQVM7WUFDUEMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLE9BQU87WUFDUEMsUUFBUTtZQUNSQyxPQUFPO1lBQ1BDLGFBQWE7WUFDYkMsV0FBVztZQUNYQyxpQkFBaUI7UUFDbkI7SUFDRjtJQUVBZCxnRUFBbUIsQ0FBQztJQUVwQixNQUFNLENBQUNnQixhQUFhQyxVQUFVLEdBQUdoQiwrQ0FBUUEsQ0FBQztJQUUxQyxTQUFTaUI7UUFDUEQsVUFBVTtJQUNaO0lBRUEsU0FBU0U7UUFDUEYsVUFBVTtJQUNaO0lBRUEscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ0M7Z0JBQU9DLFdBQVdwQixvRkFBYTtnQkFBRXNCLE1BQUs7Z0JBQVNDLFNBQVNQOzBCQUFXOzs7Ozs7MEJBR3BFLDhEQUFDbEIsb0RBQUtBO2dCQUNKMEIsUUFBUVY7Z0JBQ1JXLGdCQUFnQlI7Z0JBQ2hCUyxPQUFPdkI7O2tDQUVQLDhEQUFDZ0I7d0JBQU9JLFNBQVNOO2tDQUFZOzs7Ozs7a0NBQzdCLDhEQUFDaEIsbURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluQjtHQXpDTUM7S0FBQUE7QUEyQ04sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9hZGRQcm9qZWN0TW9kYWwuanM/ODY3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jb21wb25lbnRzL2xheW91dC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBBZGRQcm9qZWN0IGZyb20gXCIuL2FkZFByb2plY3RcIjtcclxuXHJcbmNvbnN0IEFkZFByb2plY3RNb2RhbCA9ICgpID0+IHtcclxuICBjb25zdCBjdXN0b21TdHlsZXMgPSB7XHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgcmlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICBib3R0b206IFwiYXV0b1wiLFxyXG4gICAgICB3aWRodDogXCI3MCVcIixcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiLTUwJVwiLFxyXG4gICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlKC01MCUsIC01MCUpXCIsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzQzNDM0XCIsXHJcbiAgICB9LFxyXG4gIH07XHJcblxyXG4gIE1vZGFsLnNldEFwcEVsZW1lbnQoXCJib2R5XCIpO1xyXG5cclxuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcclxuICAgIHNldElzT3Blbih0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnRufSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b3Blbk1vZGFsfT5cclxuICAgICAgICBBZGQgcHJvamVjdFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cclxuICAgICAgICBvblJlcXVlc3RDbG9zZT17Y2xvc2VNb2RhbH1cclxuICAgICAgICBzdHlsZT17Y3VzdG9tU3R5bGVzfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjbG9zZU1vZGFsfT5jbG9zZTwvYnV0dG9uPlxyXG4gICAgICAgIDxBZGRQcm9qZWN0IC8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUHJvamVjdE1vZGFsO1xyXG4iXSwibmFtZXMiOlsiTW9kYWwiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkFkZFByb2plY3QiLCJBZGRQcm9qZWN0TW9kYWwiLCJjdXN0b21TdHlsZXMiLCJjb250ZW50IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwid2lkaHQiLCJtYXJnaW5SaWdodCIsInRyYW5zZm9ybSIsImJhY2tncm91bmRDb2xvciIsInNldEFwcEVsZW1lbnQiLCJtb2RhbElzT3BlbiIsInNldElzT3BlbiIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJkaXYiLCJidXR0b24iLCJjbGFzc05hbWUiLCJhZGRCdG4iLCJ0eXBlIiwib25DbGljayIsImlzT3BlbiIsIm9uUmVxdWVzdENsb3NlIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/addProjectModal.js\n"));

/***/ })

});