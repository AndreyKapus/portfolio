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

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   token: function() { return /* binding */ token; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; },\n/* harmony export */   useProjects: function() { return /* binding */ useProjects; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand/middleware */ \"./node_modules/zustand/esm/middleware.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\naxios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.baseURL = \"https://portfolio-api-a758.onrender.com/\";\nconst token = {\n    setToken (token) {\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.common.Authorization = \"Bearer \".concat(token);\n    },\n    unsetToken () {\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.common.Authorization = \"\";\n    }\n};\nconst useAuth = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_2__.persist)((set)=>({\n        user: null,\n        loading: false,\n        error: null,\n        logInUser: async (event)=>{\n            set({\n                loading: true\n            });\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"api/auth/login\", event);\n                // if (!data.ok) {\n                //   throw new Error(\"Someting went wrong (\");\n                // }\n                set({\n                    user: data,\n                    error: null\n                });\n                token.setToken(data.token);\n            } catch (error) {\n                set({\n                    error: error.massege\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        }\n    }), {\n    name: \"events-storage\",\n    storage: (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_2__.createJSONStorage)(()=>localStorage)\n}));\nconst useProjects = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set, get)=>({\n        project: null,\n        loading: false,\n        error: null,\n        addProject: async (event)=>{\n            set({\n                loading: true\n            });\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"api/projects\", event);\n                if (!data.ok) {\n                    throw new Error(\"Someting went wrong (\");\n                }\n                set({\n                    project: data,\n                    error: null\n                });\n            } catch (error) {\n                set({\n                    error: error.massege\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        }\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDK0I7QUFDdEM7QUFFMUJHLHNEQUFjLENBQUNFLE9BQU8sR0FBRztBQUVsQixNQUFNQyxRQUFRO0lBQ25CQyxVQUFTRCxLQUFLO1FBQ1pILHNEQUFjLENBQUNLLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhLEdBQUcsVUFBZ0IsT0FBTko7SUFDMUQ7SUFDQUs7UUFDRVIsc0RBQWMsQ0FBQ0ssT0FBTyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRztJQUNoRDtBQUNGLEVBQUU7QUFFSyxNQUFNRSxVQUFVWiwrQ0FBTUEsQ0FDM0JDLDJEQUFPQSxDQUNMLENBQUNZLE1BQVM7UUFDUkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE9BQU87UUFFUEMsV0FBVyxPQUFPQztZQUNoQkwsSUFBSTtnQkFBRUUsU0FBUztZQUFLO1lBRXBCLElBQUk7Z0JBQ0YsTUFBTSxFQUFFSSxJQUFJLEVBQUUsR0FBRyxNQUFNaEIsa0RBQVUsQ0FBQyxrQkFBa0JlO2dCQUVwRCxrQkFBa0I7Z0JBQ2xCLDhDQUE4QztnQkFDOUMsSUFBSTtnQkFDSkwsSUFBSTtvQkFBRUMsTUFBTUs7b0JBQU1ILE9BQU87Z0JBQUs7Z0JBQzlCVixNQUFNQyxRQUFRLENBQUNZLEtBQUtiLEtBQUs7WUFDM0IsRUFBRSxPQUFPVSxPQUFPO2dCQUNkSCxJQUFJO29CQUFFRyxPQUFPQSxNQUFNSyxPQUFPO2dCQUFDO1lBQzdCLFNBQVU7Z0JBQ1JSLElBQUk7b0JBQUVFLFNBQVM7Z0JBQU07WUFDdkI7UUFDRjtJQUNGLElBQ0E7SUFDRU8sTUFBTTtJQUNOQyxTQUFTckIscUVBQWlCQSxDQUFDLElBQU1zQjtBQUNuQyxJQUVGO0FBRUssTUFBTUMsY0FBY3pCLCtDQUFNQSxDQUFDLENBQUNhLEtBQUthLE1BQVM7UUFDL0NDLFNBQVM7UUFDVFosU0FBUztRQUNUQyxPQUFPO1FBRVBZLFlBQVksT0FBT1Y7WUFDakJMLElBQUk7Z0JBQUVFLFNBQVM7WUFBSztZQUVwQixJQUFJO2dCQUNGLE1BQU0sRUFBRUksSUFBSSxFQUFFLEdBQUcsTUFBTWhCLGtEQUFVLENBQUMsZ0JBQWdCZTtnQkFFbEQsSUFBSSxDQUFDQyxLQUFLVSxFQUFFLEVBQUU7b0JBQ1osTUFBTSxJQUFJQyxNQUFNO2dCQUNsQjtnQkFDQWpCLElBQUk7b0JBQUVjLFNBQVNSO29CQUFNSCxPQUFPO2dCQUFLO1lBQ25DLEVBQUUsT0FBT0EsT0FBTztnQkFDZEgsSUFBSTtvQkFBRUcsT0FBT0EsTUFBTUssT0FBTztnQkFBQztZQUM3QixTQUFVO2dCQUNSUixJQUFJO29CQUFFRSxTQUFTO2dCQUFNO1lBQ3ZCO1FBQ0Y7SUFDRixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlLmpzPzQwZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcInp1c3RhbmRcIjtcclxuaW1wb3J0IHsgcGVyc2lzdCwgY3JlYXRlSlNPTlN0b3JhZ2UgfSBmcm9tIFwienVzdGFuZC9taWRkbGV3YXJlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHBzOi8vcG9ydGZvbGlvLWFwaS1hNzU4Lm9ucmVuZGVyLmNvbS9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2tlbiA9IHtcclxuICBzZXRUb2tlbih0b2tlbikge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24uQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gIH0sXHJcbiAgdW5zZXRUb2tlbigpIHtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uLkF1dGhvcml6YXRpb24gPSBcIlwiO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9IGNyZWF0ZShcclxuICBwZXJzaXN0KFxyXG4gICAgKHNldCkgPT4gKHtcclxuICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIGVycm9yOiBudWxsLFxyXG5cclxuICAgICAgbG9nSW5Vc2VyOiBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgICAgICBzZXQoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFwiYXBpL2F1dGgvbG9naW5cIiwgZXZlbnQpO1xyXG5cclxuICAgICAgICAgIC8vIGlmICghZGF0YS5vaykge1xyXG4gICAgICAgICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGluZyB3ZW50IHdyb25nIChcIik7XHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICBzZXQoeyB1c2VyOiBkYXRhLCBlcnJvcjogbnVsbCB9KTtcclxuICAgICAgICAgIHRva2VuLnNldFRva2VuKGRhdGEudG9rZW4pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBzZXQoeyBlcnJvcjogZXJyb3IubWFzc2VnZSB9KTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgc2V0KHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiZXZlbnRzLXN0b3JhZ2VcIixcclxuICAgICAgc3RvcmFnZTogY3JlYXRlSlNPTlN0b3JhZ2UoKCkgPT4gbG9jYWxTdG9yYWdlKSxcclxuICAgIH1cclxuICApXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUHJvamVjdHMgPSBjcmVhdGUoKHNldCwgZ2V0KSA9PiAoe1xyXG4gIHByb2plY3Q6IG51bGwsXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcblxyXG4gIGFkZFByb2plY3Q6IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgc2V0KHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvcHJvamVjdHNcIiwgZXZlbnQpO1xyXG5cclxuICAgICAgaWYgKCFkYXRhLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRpbmcgd2VudCB3cm9uZyAoXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldCh7IHByb2plY3Q6IGRhdGEsIGVycm9yOiBudWxsIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0KHsgZXJyb3I6IGVycm9yLm1hc3NlZ2UgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXQoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9LFxyXG59KSk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJwZXJzaXN0IiwiY3JlYXRlSlNPTlN0b3JhZ2UiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInRva2VuIiwic2V0VG9rZW4iLCJoZWFkZXJzIiwiY29tbW9uIiwiQXV0aG9yaXphdGlvbiIsInVuc2V0VG9rZW4iLCJ1c2VBdXRoIiwic2V0IiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsImxvZ0luVXNlciIsImV2ZW50IiwiZGF0YSIsInBvc3QiLCJtYXNzZWdlIiwibmFtZSIsInN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJ1c2VQcm9qZWN0cyIsImdldCIsInByb2plY3QiLCJhZGRQcm9qZWN0Iiwib2siLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store.js\n"));

/***/ })

});