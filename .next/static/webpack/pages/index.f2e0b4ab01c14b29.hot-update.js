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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; },\n/* harmony export */   useProjects: function() { return /* binding */ useProjects; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\naxios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.baseURL = \"https://portfolio-api-a758.onrender.com/\";\nconst token = {\n    setToken (token) {\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.common.Authorization = \"Bearer \".concat(token);\n    },\n    unsetToken () {\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.common.Authorization = \"\";\n    }\n};\nconst useAuth = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set)=>({\n        user: null,\n        loading: false,\n        error: null,\n        logInUser: async (event)=>{\n            set({\n                loading: true\n            });\n            try {\n                const { res } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"api/auth/login\", event);\n                console.log(res);\n                if (!res.ok) {\n                    throw new Error(\"Someting went wrong (\");\n                }\n                setToken(res.token);\n                set({\n                    user: res,\n                    error: null\n                });\n            } catch (error) {\n                set({\n                    error: error.massege\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        }\n    }));\nconst useProjects = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set, get)=>({\n        project: null,\n        loading: false,\n        error: null,\n        addProject: async (event)=>{\n            set({\n                loading: true\n            });\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"api/projects\", event);\n                if (!res.ok) {\n                    throw new Error(\"Someting went wrong (\");\n                }\n                set({\n                    project: res,\n                    error: null\n                });\n            } catch (error) {\n                set({\n                    error: error.massege\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        }\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWlDO0FBQ1A7QUFFMUJDLHNEQUFjLENBQUNFLE9BQU8sR0FBRztBQUV6QixNQUFNQyxRQUFRO0lBQ1pDLFVBQVNELEtBQUs7UUFDWkgsc0RBQWMsQ0FBQ0ssT0FBTyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRyxVQUFnQixPQUFOSjtJQUMxRDtJQUNBSztRQUNFUixzREFBYyxDQUFDSyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsYUFBYSxHQUFHO0lBQ2hEO0FBQ0Y7QUFFTyxNQUFNRSxVQUFVViwrQ0FBTUEsQ0FBQyxDQUFDVyxNQUFTO1FBQ3RDQyxNQUFNO1FBQ05DLFNBQVM7UUFDVEMsT0FBTztRQUVQQyxXQUFXLE9BQU9DO1lBQ2hCTCxJQUFJO2dCQUFFRSxTQUFTO1lBQUs7WUFFcEIsSUFBSTtnQkFDRixNQUFNLEVBQUVJLEdBQUcsRUFBRSxHQUFHLE1BQU1oQixrREFBVSxDQUFDLGtCQUFrQmU7Z0JBQ25ERyxRQUFRQyxHQUFHLENBQUNIO2dCQUNaLElBQUksQ0FBQ0EsSUFBSUksRUFBRSxFQUFFO29CQUNYLE1BQU0sSUFBSUMsTUFBTTtnQkFDbEI7Z0JBQ0FqQixTQUFTWSxJQUFJYixLQUFLO2dCQUVsQk8sSUFBSTtvQkFBRUMsTUFBTUs7b0JBQUtILE9BQU87Z0JBQUs7WUFDL0IsRUFBRSxPQUFPQSxPQUFPO2dCQUNkSCxJQUFJO29CQUFFRyxPQUFPQSxNQUFNUyxPQUFPO2dCQUFDO1lBQzdCLFNBQVU7Z0JBQ1JaLElBQUk7b0JBQUVFLFNBQVM7Z0JBQU07WUFDdkI7UUFDRjtJQUNGLElBQUk7QUFFRyxNQUFNVyxjQUFjeEIsK0NBQU1BLENBQUMsQ0FBQ1csS0FBS2MsTUFBUztRQUMvQ0MsU0FBUztRQUNUYixTQUFTO1FBQ1RDLE9BQU87UUFFUGEsWUFBWSxPQUFPWDtZQUNqQkwsSUFBSTtnQkFBRUUsU0FBUztZQUFLO1lBRXBCLElBQUk7Z0JBQ0YsTUFBTUksTUFBTSxNQUFNaEIsa0RBQVUsQ0FBQyxnQkFBZ0JlO2dCQUU3QyxJQUFJLENBQUNDLElBQUlJLEVBQUUsRUFBRTtvQkFDWCxNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUVBWCxJQUFJO29CQUFFZSxTQUFTVDtvQkFBS0gsT0FBTztnQkFBSztZQUNsQyxFQUFFLE9BQU9BLE9BQU87Z0JBQ2RILElBQUk7b0JBQUVHLE9BQU9BLE1BQU1TLE9BQU87Z0JBQUM7WUFDN0IsU0FBVTtnQkFDUlosSUFBSTtvQkFBRUUsU0FBUztnQkFBTTtZQUN2QjtRQUNGO0lBQ0YsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS5qcz80MGY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJ6dXN0YW5kXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHBzOi8vcG9ydGZvbGlvLWFwaS1hNzU4Lm9ucmVuZGVyLmNvbS9cIjtcclxuXHJcbmNvbnN0IHRva2VuID0ge1xyXG4gIHNldFRva2VuKHRva2VuKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbi5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgfSxcclxuICB1bnNldFRva2VuKCkge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24uQXV0aG9yaXphdGlvbiA9IFwiXCI7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gY3JlYXRlKChzZXQpID0+ICh7XHJcbiAgdXNlcjogbnVsbCxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxuXHJcbiAgbG9nSW5Vc2VyOiBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIHNldCh7IGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyByZXMgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvYXV0aC9sb2dpblwiLCBldmVudCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRpbmcgd2VudCB3cm9uZyAoXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldFRva2VuKHJlcy50b2tlbik7XHJcblxyXG4gICAgICBzZXQoeyB1c2VyOiByZXMsIGVycm9yOiBudWxsIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0KHsgZXJyb3I6IGVycm9yLm1hc3NlZ2UgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXQoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUHJvamVjdHMgPSBjcmVhdGUoKHNldCwgZ2V0KSA9PiAoe1xyXG4gIHByb2plY3Q6IG51bGwsXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcblxyXG4gIGFkZFByb2plY3Q6IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgc2V0KHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5wb3N0KFwiYXBpL3Byb2plY3RzXCIsIGV2ZW50KTtcclxuXHJcbiAgICAgIGlmICghcmVzLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRpbmcgd2VudCB3cm9uZyAoXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXQoeyBwcm9qZWN0OiByZXMsIGVycm9yOiBudWxsIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0KHsgZXJyb3I6IGVycm9yLm1hc3NlZ2UgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXQoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9LFxyXG59KSk7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsInRva2VuIiwic2V0VG9rZW4iLCJoZWFkZXJzIiwiY29tbW9uIiwiQXV0aG9yaXphdGlvbiIsInVuc2V0VG9rZW4iLCJ1c2VBdXRoIiwic2V0IiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsImxvZ0luVXNlciIsImV2ZW50IiwicmVzIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJvayIsIkVycm9yIiwibWFzc2VnZSIsInVzZVByb2plY3RzIiwiZ2V0IiwicHJvamVjdCIsImFkZFByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store.js\n"));

/***/ })

});