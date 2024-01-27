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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   token: function() { return /* binding */ token; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; },\n/* harmony export */   useProjects: function() { return /* binding */ useProjects; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand/middleware */ \"./node_modules/zustand/esm/middleware.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\naxios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.baseURL = \"https://portfolio-api-a758.onrender.com/\";\nconst token = {\n    setToken (token) {\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.common.Authorization = \"Bearer \".concat(token);\n    },\n    unsetToken () {\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.common.Authorization = \"\";\n    }\n};\nconst useAuth = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set)=>({\n        user: null,\n        loading: false,\n        error: null,\n        logInUser: async (event)=>{\n            set({\n                loading: true\n            });\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"api/auth/login\", event);\n                if (!data.ok) {\n                    throw new Error(\"Someting went wrong (\");\n                }\n                set({\n                    user: data,\n                    error: null\n                });\n                token.setToken(data.token);\n            } catch (error) {\n                set({\n                    error: error.massege\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        }\n    }, {\n        name: \"events-storage\",\n        storage: (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_2__.createJSONStorage)(()=>localStorage)\n    }));\nconst useProjects = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set, get)=>({\n        project: null,\n        loading: false,\n        error: null,\n        photo: null,\n        addProject: async (event)=>{\n            set({\n                loading: true\n            });\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"api/projects\", event);\n                if (!data.ok) {\n                    throw new Error(\"Someting went wrong (\");\n                }\n                set({\n                    project: data,\n                    error: null\n                });\n            } catch (error) {\n                set({\n                    error: error.massege\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        },\n        deleteProject: async (projectId)=>{\n            set({\n                loading: true\n            });\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](\"api/projects/\".concat(projectId));\n                if (!data.ok) {\n                    throw new Error(\"Someting went wrong (\");\n                }\n            } catch (error) {\n                set({\n                    error: error.massege\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        },\n        updatePhoto: async (formData, param)=>{\n            let { projectId } = param;\n            set({\n                loading: true\n            });\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(\"api/projects/avatars/\".concat(projectId), formData);\n                const data = await res.json();\n                set({\n                    photo: data\n                });\n            } catch (error) {\n                return error.massege;\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        }\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RkUsU0FBUztnQkFDWDtZQUNGO1FBQ0Y7SUFDRixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlLmpzPzQwZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSBcInp1c3RhbmRcIjtcclxuaW1wb3J0IHsgcGVyc2lzdCwgY3JlYXRlSlNPTlN0b3JhZ2UgfSBmcm9tIFwienVzdGFuZC9taWRkbGV3YXJlXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHBzOi8vcG9ydGZvbGlvLWFwaS1hNzU4Lm9ucmVuZGVyLmNvbS9cIjtcclxuXHJcbmV4cG9ydCBjb25zdCB0b2tlbiA9IHtcclxuICBzZXRUb2tlbih0b2tlbikge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24uQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0b2tlbn1gO1xyXG4gIH0sXHJcbiAgdW5zZXRUb2tlbigpIHtcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuY29tbW9uLkF1dGhvcml6YXRpb24gPSBcIlwiO1xyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9IGNyZWF0ZShcclxuICAoc2V0KSA9PiAoXHJcbiAgICB7XHJcbiAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogbnVsbCxcclxuXHJcbiAgICAgIGxvZ0luVXNlcjogYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0KHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcImFwaS9hdXRoL2xvZ2luXCIsIGV2ZW50KTtcclxuXHJcbiAgICAgICAgICBpZiAoIWRhdGEub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRpbmcgd2VudCB3cm9uZyAoXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0KHsgdXNlcjogZGF0YSwgZXJyb3I6IG51bGwgfSk7XHJcbiAgICAgICAgICB0b2tlbi5zZXRUb2tlbihkYXRhLnRva2VuKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgc2V0KHsgZXJyb3I6IGVycm9yLm1hc3NlZ2UgfSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIHNldCh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiZXZlbnRzLXN0b3JhZ2VcIixcclxuICAgICAgc3RvcmFnZTogY3JlYXRlSlNPTlN0b3JhZ2UoKCkgPT4gbG9jYWxTdG9yYWdlKSxcclxuICAgIH1cclxuICApXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUHJvamVjdHMgPSBjcmVhdGUoKHNldCwgZ2V0KSA9PiAoe1xyXG4gIHByb2plY3Q6IG51bGwsXHJcbiAgbG9hZGluZzogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcbiAgcGhvdG86IG51bGwsXHJcblxyXG4gIGFkZFByb2plY3Q6IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgc2V0KHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvcHJvamVjdHNcIiwgZXZlbnQpO1xyXG5cclxuICAgICAgaWYgKCFkYXRhLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRpbmcgd2VudCB3cm9uZyAoXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIHNldCh7IHByb2plY3Q6IGRhdGEsIGVycm9yOiBudWxsIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0KHsgZXJyb3I6IGVycm9yLm1hc3NlZ2UgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXQoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBkZWxldGVQcm9qZWN0OiBhc3luYyAocHJvamVjdElkKSA9PiB7XHJcbiAgICBzZXQoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZGVsZXRlKGBhcGkvcHJvamVjdHMvJHtwcm9qZWN0SWR9YCk7XHJcblxyXG4gICAgICBpZiAoIWRhdGEub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGluZyB3ZW50IHdyb25nIChcIik7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldCh7IGVycm9yOiBlcnJvci5tYXNzZWdlIH0pO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0KHsgbG9hZGluZzogZmFsc2UgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlUGhvdG86IGFzeW5jIChmb3JtRGF0YSwgeyBwcm9qZWN0SWQgfSkgPT4ge1xyXG4gICAgc2V0KHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBhdGNoKFxyXG4gICAgICAgIGBhcGkvcHJvamVjdHMvYXZhdGFycy8ke3Byb2plY3RJZH1gLFxyXG4gICAgICAgIGZvcm1EYXRhXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0KHsgcGhvdG86IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gZXJyb3IubWFzc2VnZTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldCh7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZSIsInBlcnNpc3QiLCJjcmVhdGVKU09OU3RvcmFnZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwidG9rZW4iLCJzZXRUb2tlbiIsImhlYWRlcnMiLCJjb21tb24iLCJBdXRob3JpemF0aW9uIiwidW5zZXRUb2tlbiIsInVzZUF1dGgiLCJzZXQiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwibG9nSW5Vc2VyIiwiZXZlbnQiLCJkYXRhIiwicG9zdCIsIm9rIiwiRXJyb3IiLCJtYXNzZWdlIiwibmFtZSIsInN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJ1c2VQcm9qZWN0cyIsImdldCIsInByb2plY3QiLCJwaG90byIsImFkZFByb2plY3QiLCJkZWxldGVQcm9qZWN0IiwicHJvamVjdElkIiwiZGVsZXRlIiwidXBkYXRlUGhvdG8iLCJmb3JtRGF0YSIsInJlcyIsInBhdGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store.js\n"));

/***/ })

});