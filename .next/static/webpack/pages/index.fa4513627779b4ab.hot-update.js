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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   token: function() { return /* binding */ token; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; },\n/* harmony export */   useProjects: function() { return /* binding */ useProjects; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand/middleware */ \"./node_modules/zustand/esm/middleware.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\naxios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.baseURL = \"https://portfolio-api-a758.onrender.com/\";\nconst token = {\n    setToken (token) {\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.common.Authorization = \"Bearer \".concat(token);\n    },\n    unsetToken () {\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.common[\"Authorization\"] = \"\";\n    }\n};\nconst useAuth = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_2__.persist)((set)=>({\n        user: null,\n        loading: false,\n        error: null,\n        logInUser: async (event)=>{\n            set({\n                loading: true\n            });\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"api/auth/login\", event);\n                if (!data.ok) {\n                    throw new Error(\"Someting went wrong (\");\n                }\n                set({\n                    user: data,\n                    error: null\n                });\n                token.setToken(data.token);\n            } catch (error) {\n                set({\n                    error: error.massege\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n                console.log(axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.common);\n            }\n        }\n    }), {\n    name: \"events-storage\",\n    storage: (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_2__.createJSONStorage)(()=>localStorage)\n}));\nconst useProjects = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set, get)=>({\n        project: null,\n        loading: false,\n        error: null,\n        photo: null,\n        addProject: async (event)=>{\n            set({\n                loading: true\n            });\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"api/projects\", event);\n                if (!data.ok) {\n                    throw new Error(\"Someting went wrong (\");\n                }\n                set({\n                    project: data,\n                    error: null\n                });\n            } catch (error) {\n                set({\n                    error: error.massege\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        },\n        deleteProject: async (projectId)=>{\n            set({\n                loading: true\n            });\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"][\"delete\"](\"api/projects/\".concat(projectId));\n                if (!data.ok) {\n                    throw new Error(\"Someting went wrong (\");\n                }\n            } catch (error) {\n                set({\n                    error: error.massege\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        },\n        updatePhoto: async (formData, param)=>{\n            let { projectId } = param;\n            set({\n                loading: true\n            });\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(\"api/projects/avatars/\".concat(projectId), formData);\n                const data = await res.json();\n                set({\n                    photo: data\n                });\n            } catch (error) {\n                return error.massege;\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        }\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU9ILE9BQU87Z0JBQ2QsT0FBT0EsTUFBTU8sT0FBTztZQUN0QixTQUFVO2dCQUNSVixJQUFJO29CQUNGRSxTQUFTO2dCQUNYO1lBQ0Y7UUFDRjtJQUNGLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/NDBmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwienVzdGFuZFwiO1xyXG5pbXBvcnQgeyBwZXJzaXN0LCBjcmVhdGVKU09OU3RvcmFnZSB9IGZyb20gXCJ6dXN0YW5kL21pZGRsZXdhcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IFwiaHR0cHM6Ly9wb3J0Zm9saW8tYXBpLWE3NTgub25yZW5kZXIuY29tL1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRva2VuID0ge1xyXG4gIHNldFRva2VuKHRva2VuKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbi5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgfSxcclxuICB1bnNldFRva2VuKCkge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bXCJBdXRob3JpemF0aW9uXCJdID0gXCJcIjtcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSBjcmVhdGUoXHJcbiAgcGVyc2lzdChcclxuICAgIChzZXQpID0+ICh7XHJcbiAgICAgIHVzZXI6IG51bGwsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBlcnJvcjogbnVsbCxcclxuXHJcbiAgICAgIGxvZ0luVXNlcjogYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgc2V0KHsgbG9hZGluZzogdHJ1ZSB9KTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcImFwaS9hdXRoL2xvZ2luXCIsIGV2ZW50KTtcclxuXHJcbiAgICAgICAgICBpZiAoIWRhdGEub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU29tZXRpbmcgd2VudCB3cm9uZyAoXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgc2V0KHsgdXNlcjogZGF0YSwgZXJyb3I6IG51bGwgfSk7XHJcbiAgICAgICAgICB0b2tlbi5zZXRUb2tlbihkYXRhLnRva2VuKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgc2V0KHsgZXJyb3I6IGVycm9yLm1hc3NlZ2UgfSk7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgIHNldCh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYXhpb3MuZGVmYXVsdHMuY29tbW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJldmVudHMtc3RvcmFnZVwiLFxyXG4gICAgICBzdG9yYWdlOiBjcmVhdGVKU09OU3RvcmFnZSgoKSA9PiBsb2NhbFN0b3JhZ2UpLFxyXG4gICAgfVxyXG4gIClcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQcm9qZWN0cyA9IGNyZWF0ZSgoc2V0LCBnZXQpID0+ICh7XHJcbiAgcHJvamVjdDogbnVsbCxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxuICBwaG90bzogbnVsbCxcclxuXHJcbiAgYWRkUHJvamVjdDogYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBzZXQoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcImFwaS9wcm9qZWN0c1wiLCBldmVudCk7XHJcblxyXG4gICAgICBpZiAoIWRhdGEub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGluZyB3ZW50IHdyb25nIChcIik7XHJcbiAgICAgIH1cclxuICAgICAgc2V0KHsgcHJvamVjdDogZGF0YSwgZXJyb3I6IG51bGwgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXQoeyBlcnJvcjogZXJyb3IubWFzc2VnZSB9KTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldCh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGRlbGV0ZVByb2plY3Q6IGFzeW5jIChwcm9qZWN0SWQpID0+IHtcclxuICAgIHNldCh7IGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5kZWxldGUoYGFwaS9wcm9qZWN0cy8ke3Byb2plY3RJZH1gKTtcclxuXHJcbiAgICAgIGlmICghZGF0YS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNvbWV0aW5nIHdlbnQgd3JvbmcgKFwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0KHsgZXJyb3I6IGVycm9yLm1hc3NlZ2UgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBzZXQoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgIH1cclxuICB9LFxyXG5cclxuICB1cGRhdGVQaG90bzogYXN5bmMgKGZvcm1EYXRhLCB7IHByb2plY3RJZCB9KSA9PiB7XHJcbiAgICBzZXQoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYGFwaS9wcm9qZWN0cy9hdmF0YXJzLyR7cHJvamVjdElkfWAsXHJcbiAgICAgICAgZm9ybURhdGFcclxuICAgICAgKTtcclxuXHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICBzZXQoeyBwaG90bzogZGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiBlcnJvci5tYXNzZWdlO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgc2V0KHtcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxufSkpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlIiwicGVyc2lzdCIsImNyZWF0ZUpTT05TdG9yYWdlIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ0b2tlbiIsInNldFRva2VuIiwiaGVhZGVycyIsImNvbW1vbiIsIkF1dGhvcml6YXRpb24iLCJ1bnNldFRva2VuIiwidXNlQXV0aCIsInNldCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJsb2dJblVzZXIiLCJldmVudCIsImRhdGEiLCJwb3N0Iiwib2siLCJFcnJvciIsIm1hc3NlZ2UiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsInN0b3JhZ2UiLCJsb2NhbFN0b3JhZ2UiLCJ1c2VQcm9qZWN0cyIsImdldCIsInByb2plY3QiLCJwaG90byIsImFkZFByb2plY3QiLCJkZWxldGVQcm9qZWN0IiwicHJvamVjdElkIiwiZGVsZXRlIiwidXBkYXRlUGhvdG8iLCJmb3JtRGF0YSIsInJlcyIsInBhdGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store.js\n"));

/***/ })

});