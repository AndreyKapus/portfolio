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

/***/ "./Components/addProjectModal.js":
/*!***************************************!*\
  !*** ./Components/addProjectModal.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-modal */ \"./node_modules/react-modal/lib/index.js\");\n/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/layout.module.scss */ \"./styles/layout.module.scss\");\n/* harmony import */ var _styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddProjectModal = ()=>{\n    _s();\n    const customStyles = {\n        content: {\n            top: \"50%\",\n            left: \"50%\",\n            right: \"auto\",\n            bottom: \"auto\",\n            marginRight: \"-50%\",\n            transform: \"translate(-50%, -50%)\"\n        }\n    };\n    react_modal__WEBPACK_IMPORTED_MODULE_1___default().setAppElement(\"body\");\n    let subtitle;\n    const [modalIsOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    function openModal() {\n        setIsOpen(true);\n    }\n    function afterOpenModal() {\n        subtitle.style.color = \"#f00\";\n    }\n    function closeModal() {\n        setIsOpen(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().addBtn),\n                type: \"button\",\n                onClick: openModal,\n                children: \"Add project\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_modal__WEBPACK_IMPORTED_MODULE_1___default()), {\n                isOpen: modalIsOpen,\n                onAfterOpen: afterOpenModal,\n                onRequestClose: closeModal,\n                style: customStyles,\n                contentLabel: \"Example Modal\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        ref: (_subtitle)=>subtitle = _subtitle,\n                        children: \"Hello\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: closeModal,\n                        children: \"close\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"I am a modal\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {}, void 0, false, {\n                                fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"tab navigation\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"stays\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"inside\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                children: \"the modal\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Fullstack 51\\\\portfolio\\\\Components\\\\addProjectModal.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddProjectModal, \"EOxo+0MXKxyCdUCTWpcfchJ0gFI=\");\n_c = AddProjectModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddProjectModal);\nvar _c;\n$RefreshReg$(_c, \"AddProjectModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2FkZFByb2plY3RNb2RhbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFnQztBQUNDO0FBQ2lCO0FBRWxELE1BQU1HLGtCQUFrQjs7SUFDdEIsTUFBTUMsZUFBZTtRQUNuQkMsU0FBUztZQUNQQyxLQUFLO1lBQ0xDLE1BQU07WUFDTkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLGFBQWE7WUFDYkMsV0FBVztRQUNiO0lBQ0Y7SUFFQVgsZ0VBQW1CLENBQUM7SUFFcEIsSUFBSWE7SUFDSixNQUFNLENBQUNDLGFBQWFDLFVBQVUsR0FBR2QsK0NBQVFBLENBQUM7SUFFMUMsU0FBU2U7UUFDUEQsVUFBVTtJQUNaO0lBRUEsU0FBU0U7UUFDUEosU0FBU0ssS0FBSyxDQUFDQyxLQUFLLEdBQUc7SUFDekI7SUFFQSxTQUFTQztRQUNQTCxVQUFVO0lBQ1o7SUFFQSxxQkFDRSw4REFBQ007OzBCQUNDLDhEQUFDQztnQkFBT0MsV0FBV3JCLDBFQUFhO2dCQUFFdUIsTUFBSztnQkFBU0MsU0FBU1Y7MEJBQVc7Ozs7OzswQkFHcEUsOERBQUNoQixvREFBS0E7Z0JBQ0oyQixRQUFRYjtnQkFDUmMsYUFBYVg7Z0JBQ2JZLGdCQUFnQlQ7Z0JBQ2hCRixPQUFPZDtnQkFDUDBCLGNBQWE7O2tDQUViLDhEQUFDQzt3QkFBR0MsS0FBSyxDQUFDQyxZQUFlcEIsV0FBV29CO2tDQUFZOzs7Ozs7a0NBQ2hELDhEQUFDWDt3QkFBT0ksU0FBU047a0NBQVk7Ozs7OztrQ0FDN0IsOERBQUNDO2tDQUFJOzs7Ozs7a0NBQ0wsOERBQUNhOzswQ0FDQyw4REFBQ0M7Ozs7OzBDQUNELDhEQUFDYjswQ0FBTzs7Ozs7OzBDQUNSLDhEQUFDQTswQ0FBTzs7Ozs7OzBDQUNSLDhEQUFDQTswQ0FBTzs7Ozs7OzBDQUNSLDhEQUFDQTswQ0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBdERNbkI7S0FBQUE7QUF3RE4sK0RBQWVBLGVBQWVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9hZGRQcm9qZWN0TW9kYWwuanM/ODY3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9sYXlvdXQubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IEFkZFByb2plY3RNb2RhbCA9ICgpID0+IHtcclxuICBjb25zdCBjdXN0b21TdHlsZXMgPSB7XHJcbiAgICBjb250ZW50OiB7XHJcbiAgICAgIHRvcDogXCI1MCVcIixcclxuICAgICAgbGVmdDogXCI1MCVcIixcclxuICAgICAgcmlnaHQ6IFwiYXV0b1wiLFxyXG4gICAgICBib3R0b206IFwiYXV0b1wiLFxyXG4gICAgICBtYXJnaW5SaWdodDogXCItNTAlXCIsXHJcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUoLTUwJSwgLTUwJSlcIixcclxuICAgIH0sXHJcbiAgfTtcclxuXHJcbiAgTW9kYWwuc2V0QXBwRWxlbWVudChcImJvZHlcIik7XHJcblxyXG4gIGxldCBzdWJ0aXRsZTtcclxuICBjb25zdCBbbW9kYWxJc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9wZW5Nb2RhbCgpIHtcclxuICAgIHNldElzT3Blbih0cnVlKTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGFmdGVyT3Blbk1vZGFsKCkge1xyXG4gICAgc3VidGl0bGUuc3R5bGUuY29sb3IgPSBcIiNmMDBcIjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XHJcbiAgICBzZXRJc09wZW4oZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYWRkQnRufSB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b3Blbk1vZGFsfT5cclxuICAgICAgICBBZGQgcHJvamVjdFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXttb2RhbElzT3Blbn1cclxuICAgICAgICBvbkFmdGVyT3Blbj17YWZ0ZXJPcGVuTW9kYWx9XHJcbiAgICAgICAgb25SZXF1ZXN0Q2xvc2U9e2Nsb3NlTW9kYWx9XHJcbiAgICAgICAgc3R5bGU9e2N1c3RvbVN0eWxlc31cclxuICAgICAgICBjb250ZW50TGFiZWw9XCJFeGFtcGxlIE1vZGFsXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxoMiByZWY9eyhfc3VidGl0bGUpID0+IChzdWJ0aXRsZSA9IF9zdWJ0aXRsZSl9PkhlbGxvPC9oMj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlTW9kYWx9PmNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgPGRpdj5JIGFtIGEgbW9kYWw8L2Rpdj5cclxuICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgIDxpbnB1dCAvPlxyXG4gICAgICAgICAgPGJ1dHRvbj50YWIgbmF2aWdhdGlvbjwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbj5zdGF5czwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbj5pbnNpZGU8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24+dGhlIG1vZGFsPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFkZFByb2plY3RNb2RhbDtcclxuIl0sIm5hbWVzIjpbIk1vZGFsIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJBZGRQcm9qZWN0TW9kYWwiLCJjdXN0b21TdHlsZXMiLCJjb250ZW50IiwidG9wIiwibGVmdCIsInJpZ2h0IiwiYm90dG9tIiwibWFyZ2luUmlnaHQiLCJ0cmFuc2Zvcm0iLCJzZXRBcHBFbGVtZW50Iiwic3VidGl0bGUiLCJtb2RhbElzT3BlbiIsInNldElzT3BlbiIsIm9wZW5Nb2RhbCIsImFmdGVyT3Blbk1vZGFsIiwic3R5bGUiLCJjb2xvciIsImNsb3NlTW9kYWwiLCJkaXYiLCJidXR0b24iLCJjbGFzc05hbWUiLCJhZGRCdG4iLCJ0eXBlIiwib25DbGljayIsImlzT3BlbiIsIm9uQWZ0ZXJPcGVuIiwib25SZXF1ZXN0Q2xvc2UiLCJjb250ZW50TGFiZWwiLCJoMiIsInJlZiIsIl9zdWJ0aXRsZSIsImZvcm0iLCJpbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/addProjectModal.js\n"));

/***/ })

});