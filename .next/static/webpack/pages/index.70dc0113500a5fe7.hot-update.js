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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   token: function() { return /* binding */ token; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; },\n/* harmony export */   useProjects: function() { return /* binding */ useProjects; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand/middleware */ \"./node_modules/zustand/esm/middleware.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\naxios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.baseURL = \"https://portfolio-api-a758.onrender.com/\";\nconst token = {\n    setToken (token) {\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.common.Authorization = \"Bearer \".concat(token);\n    },\n    unsetToken () {\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.common.Authorization = \"\";\n    }\n};\nconst useAuth = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_2__.persist)((set)=>({\n        user: null,\n        loading: false,\n        error: null,\n        logInUser: async (event)=>{\n            set({\n                loading: true\n            });\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"api/auth/login\", event);\n                // if (!data.ok) {\n                //   throw new Error(\"Someting went wrong (\");\n                // }\n                set({\n                    user: data,\n                    error: null\n                });\n                token.setToken(data.token);\n                console.log(axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.common.Authorization);\n            } catch (error) {\n                set({\n                    error: error.massege\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        }\n    }), {\n    name: \"events-storage\",\n    storage: (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_2__.createJSONStorage)(()=>localStorage)\n}));\nconst useProjects = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set, get)=>({\n        project: null,\n        loading: false,\n        error: null,\n        photo: null,\n        addProject: async (event)=>{\n            set({\n                loading: true\n            });\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"api/projects\", event);\n                if (!data.ok) {\n                    throw new Error(\"Someting went wrong (\");\n                }\n                set({\n                    project: data,\n                    error: null\n                });\n            } catch (error) {\n                set({\n                    error: error.massege\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        },\n        deleteProject: async (projectId)=>{\n            set({\n                loading: true\n            });\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](\"api/projects/\".concat(projectId));\n                if (!data.ok) {\n                    throw new Error(\"Someting went wrong (\");\n                }\n            } catch (error) {\n                set({\n                    error: error.massege\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        },\n        updatePhoto: async (formData, param)=>{\n            let { projectId } = param;\n            set({\n                loading: true\n            });\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(\"api/projects/avatars/\".concat(projectId), formData);\n                const data = await res.json();\n                set({\n                    photo: data\n                });\n            } catch (error) {\n                return error.massege;\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        }\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0gsT0FBTztnQkFDZCxPQUFPQSxNQUFNTyxPQUFPO1lBQ3RCLFNBQVU7Z0JBQ1JWLElBQUk7b0JBQ0ZFLFNBQVM7Z0JBQ1g7WUFDRjtRQUNGO0lBQ0YsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdG9yZS5qcz80MGY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gXCJ6dXN0YW5kXCI7XHJcbmltcG9ydCB7IHBlcnNpc3QsIGNyZWF0ZUpTT05TdG9yYWdlIH0gZnJvbSBcInp1c3RhbmQvbWlkZGxld2FyZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gXCJodHRwczovL3BvcnRmb2xpby1hcGktYTc1OC5vbnJlbmRlci5jb20vXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdG9rZW4gPSB7XHJcbiAgc2V0VG9rZW4odG9rZW4pIHtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICB9LFxyXG4gIHVuc2V0VG9rZW4oKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbi5BdXRob3JpemF0aW9uID0gXCJcIjtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSBjcmVhdGUoXHJcbiAgcGVyc2lzdChcclxuICAgIChzZXQpID0+ICh7XHJcbiAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogbnVsbCxcclxuXHJcbiAgICAgIGxvZ0luVXNlcjogYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0KHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcImFwaS9hdXRoL2xvZ2luXCIsIGV2ZW50KTtcclxuXHJcbiAgICAgICAgICAvLyBpZiAoIWRhdGEub2spIHtcclxuICAgICAgICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRpbmcgd2VudCB3cm9uZyAoXCIpO1xyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgc2V0KHsgdXNlcjogZGF0YSwgZXJyb3I6IG51bGwgfSk7XHJcbiAgICAgICAgICB0b2tlbi5zZXRUb2tlbihkYXRhLnRva2VuKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uLkF1dGhvcml6YXRpb24pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBzZXQoeyBlcnJvcjogZXJyb3IubWFzc2VnZSB9KTtcclxuICAgICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgICAgc2V0KHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiZXZlbnRzLXN0b3JhZ2VcIixcclxuICAgICAgc3RvcmFnZTogY3JlYXRlSlNPTlN0b3JhZ2UoKCkgPT4gbG9jYWxTdG9yYWdlKSxcclxuICAgIH1cclxuICApXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUHJvamVjdHMgPSBjcmVhdGUoKHNldCwgZ2V0KSA9PiAoe1xyXG4gIHByb2plY3Q6IG51bGwsXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcbiAgcGhvdG86IG51bGwsXHJcblxyXG4gIGFkZFByb2plY3Q6IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgc2V0KHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvcHJvamVjdHNcIiwgZXZlbnQpO1xyXG5cclxuICAgICAgaWYgKCFkYXRhLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRpbmcgd2VudCB3cm9uZyAoXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldCh7IHByb2plY3Q6IGRhdGEsIGVycm9yOiBudWxsIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0KHsgZXJyb3I6IGVycm9yLm1hc3NlZ2UgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXQoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBkZWxldGVQcm9qZWN0OiBhc3luYyAocHJvamVjdElkKSA9PiB7XHJcbiAgICBzZXQoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZGVsZXRlKGBhcGkvcHJvamVjdHMvJHtwcm9qZWN0SWR9YCk7XHJcblxyXG4gICAgICBpZiAoIWRhdGEub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGluZyB3ZW50IHdyb25nIChcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldCh7IGVycm9yOiBlcnJvci5tYXNzZWdlIH0pO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0KHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlUGhvdG86IGFzeW5jIChmb3JtRGF0YSwgeyBwcm9qZWN0SWQgfSkgPT4ge1xyXG4gICAgc2V0KHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgIGBhcGkvcHJvamVjdHMvYXZhdGFycy8ke3Byb2plY3RJZH1gLFxyXG4gICAgICAgIGZvcm1EYXRhXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0KHsgcGhvdG86IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gZXJyb3IubWFzc2VnZTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldCh7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZSIsInBlcnNpc3QiLCJjcmVhdGVKU09OU3RvcmFnZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwidG9rZW4iLCJzZXRUb2tlbiIsImhlYWRlcnMiLCJjb21tb24iLCJBdXRob3JpemF0aW9uIiwidW5zZXRUb2tlbiIsInVzZUF1dGgiLCJzZXQiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwibG9nSW5Vc2VyIiwiZXZlbnQiLCJkYXRhIiwicG9zdCIsImNvbnNvbGUiLCJsb2ciLCJtYXNzZWdlIiwibmFtZSIsInN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJ1c2VQcm9qZWN0cyIsImdldCIsInByb2plY3QiLCJwaG90byIsImFkZFByb2plY3QiLCJvayIsIkVycm9yIiwiZGVsZXRlUHJvamVjdCIsInByb2plY3RJZCIsImRlbGV0ZSIsInVwZGF0ZVBob3RvIiwiZm9ybURhdGEiLCJyZXMiLCJwYXRjaCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store.js\n"));

/***/ })

});