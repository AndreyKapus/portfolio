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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   token: function() { return /* binding */ token; },\n/* harmony export */   useAuth: function() { return /* binding */ useAuth; },\n/* harmony export */   useProjects: function() { return /* binding */ useProjects; }\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zustand */ \"./node_modules/zustand/esm/index.mjs\");\n/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zustand/middleware */ \"./node_modules/zustand/esm/middleware.mjs\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\naxios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.baseURL = \"https://portfolio-api-a758.onrender.com/\";\nconst token = {\n    setToken (token) {\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.common.Authorization = \"Bearer \".concat(token);\n    },\n    unsetToken () {\n        axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].defaults.headers.common.Authorization = \"\";\n    }\n};\nconst useAuth = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_2__.persist)((set)=>({\n        user: null,\n        loading: false,\n        error: null,\n        logInUser: async (event)=>{\n            set({\n                loading: true\n            });\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"api/auth/login\", event);\n                // if (!data.ok) {\n                //   throw new Error(\"Someting went wrong (\");\n                // }\n                set({\n                    user: data,\n                    error: null\n                });\n                token.setToken(data.token);\n            } catch (error) {\n                set({\n                    error: error.massege\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        }\n    }), {\n    name: \"events-storage\",\n    storage: (0,zustand_middleware__WEBPACK_IMPORTED_MODULE_2__.createJSONStorage)(()=>localStorage)\n}));\nconst useProjects = (0,zustand__WEBPACK_IMPORTED_MODULE_1__.create)((set, get)=>({\n        project: null,\n        loading: false,\n        error: null,\n        photo: null,\n        addProject: async (event)=>{\n            set({\n                loading: true\n            });\n            try {\n                const { data } = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"api/projects\", event);\n                if (!data.ok) {\n                    throw new Error(\"Someting went wrong (\");\n                }\n                set({\n                    project: data,\n                    error: null\n                });\n            } catch (error) {\n                set({\n                    error: error.massege\n                });\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        },\n        updatePhoto: async (event)=>{\n            set({\n                loading: true\n            });\n            try {\n                const res = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(\"api/projects/avatars\".concat(event.projectId), event.formData);\n                const data = await res.json();\n                set({\n                    photo: data\n                });\n            } catch (error) {\n                return error.massege;\n            } finally{\n                set({\n                    loading: false\n                });\n            }\n        }\n    }));\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDK0I7QUFDdEM7QUFFMUJHLHNEQUFjLENBQUNFLE9BQU8sR0FBRztBQUVsQixNQUFNQyxRQUFRO0lBQ25CQyxVQUFTRCxLQUFLO1FBQ1pILHNEQUFjLENBQUNLLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxhQUFhLEdBQUcsVUFBZ0IsT0FBTko7SUFDMUQ7SUFDQUs7UUFDRVIsc0RBQWMsQ0FBQ0ssT0FBTyxDQUFDQyxNQUFNLENBQUNDLGFBQWEsR0FBRztJQUNoRDtBQUNGLEVBQUU7QUFFSyxNQUFNRSxVQUFVWiwrQ0FBTUEsQ0FDM0JDLDJEQUFPQSxDQUNMLENBQUNZLE1BQVM7UUFDUkMsTUFBTTtRQUNOQyxTQUFTO1FBQ1RDLE9BQU87UUFFUEMsV0FBVyxPQUFPQztZQUNoQkwsSUFBSTtnQkFBRUUsU0FBUztZQUFLO1lBRXBCLElBQUk7Z0JBQ0YsTUFBTSxFQUFFSSxJQUFJLEVBQUUsR0FBRyxNQUFNaEIsa0RBQVUsQ0FBQyxrQkFBa0JlO2dCQUVwRCxrQkFBa0I7Z0JBQ2xCLDhDQUE4QztnQkFDOUMsSUFBSTtnQkFDSkwsSUFBSTtvQkFBRUMsTUFBTUs7b0JBQU1ILE9BQU87Z0JBQUs7Z0JBQzlCVixNQUFNQyxRQUFRLENBQUNZLEtBQUtiLEtBQUs7WUFDM0IsRUFBRSxPQUFPVSxPQUFPO2dCQUNkSCxJQUFJO29CQUFFRyxPQUFPQSxNQUFNSyxPQUFPO2dCQUFDO1lBQzdCLFNBQVU7Z0JBQ1JSLElBQUk7b0JBQUVFLFNBQVM7Z0JBQU07WUFDdkI7UUFDRjtJQUNGLElBQ0E7SUFDRU8sTUFBTTtJQUNOQyxTQUFTckIscUVBQWlCQSxDQUFDLElBQU1zQjtBQUNuQyxJQUVGO0FBRUssTUFBTUMsY0FBY3pCLCtDQUFNQSxDQUFDLENBQUNhLEtBQUthLE1BQVM7UUFDL0NDLFNBQVM7UUFDVFosU0FBUztRQUNUQyxPQUFPO1FBQ1BZLE9BQU87UUFFUEMsWUFBWSxPQUFPWDtZQUNqQkwsSUFBSTtnQkFBRUUsU0FBUztZQUFLO1lBRXBCLElBQUk7Z0JBQ0YsTUFBTSxFQUFFSSxJQUFJLEVBQUUsR0FBRyxNQUFNaEIsa0RBQVUsQ0FBQyxnQkFBZ0JlO2dCQUVsRCxJQUFJLENBQUNDLEtBQUtXLEVBQUUsRUFBRTtvQkFDWixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUNBbEIsSUFBSTtvQkFBRWMsU0FBU1I7b0JBQU1ILE9BQU87Z0JBQUs7WUFDbkMsRUFBRSxPQUFPQSxPQUFPO2dCQUNkSCxJQUFJO29CQUFFRyxPQUFPQSxNQUFNSyxPQUFPO2dCQUFDO1lBQzdCLFNBQVU7Z0JBQ1JSLElBQUk7b0JBQUVFLFNBQVM7Z0JBQU07WUFDdkI7UUFDRjtRQUVBaUIsYUFBYSxPQUFPZDtZQUNsQkwsSUFBSTtnQkFBRUUsU0FBUztZQUFLO1lBRXBCLElBQUk7Z0JBQ0YsTUFBTWtCLE1BQU0sTUFBTTlCLG1EQUFXLENBQzNCLHVCQUF1QyxPQUFoQmUsTUFBTWlCLFNBQVMsR0FDdENqQixNQUFNa0IsUUFBUTtnQkFFaEIsTUFBTWpCLE9BQU8sTUFBTWMsSUFBSUksSUFBSTtnQkFDM0J4QixJQUFJO29CQUFFZSxPQUFPVDtnQkFBSztZQUNwQixFQUFFLE9BQU9ILE9BQU87Z0JBQ2QsT0FBT0EsTUFBTUssT0FBTztZQUN0QixTQUFVO2dCQUNSUixJQUFJO29CQUNGRSxTQUFTO2dCQUNYO1lBQ0Y7UUFDRjtJQUNGLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/NDBmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tIFwienVzdGFuZFwiO1xyXG5pbXBvcnQgeyBwZXJzaXN0LCBjcmVhdGVKU09OU3RvcmFnZSB9IGZyb20gXCJ6dXN0YW5kL21pZGRsZXdhcmVcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IFwiaHR0cHM6Ly9wb3J0Zm9saW8tYXBpLWE3NTgub25yZW5kZXIuY29tL1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRva2VuID0ge1xyXG4gIHNldFRva2VuKHRva2VuKSB7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vbi5BdXRob3JpemF0aW9uID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgfSxcclxuICB1bnNldFRva2VuKCkge1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5jb21tb24uQXV0aG9yaXphdGlvbiA9IFwiXCI7XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gY3JlYXRlKFxyXG4gIHBlcnNpc3QoXHJcbiAgICAoc2V0KSA9PiAoe1xyXG4gICAgICB1c2VyOiBudWxsLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgZXJyb3I6IG51bGwsXHJcblxyXG4gICAgICBsb2dJblVzZXI6IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIHNldCh7IGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJhcGkvYXV0aC9sb2dpblwiLCBldmVudCk7XHJcblxyXG4gICAgICAgICAgLy8gaWYgKCFkYXRhLm9rKSB7XHJcbiAgICAgICAgICAvLyAgIHRocm93IG5ldyBFcnJvcihcIlNvbWV0aW5nIHdlbnQgd3JvbmcgKFwiKTtcclxuICAgICAgICAgIC8vIH1cclxuICAgICAgICAgIHNldCh7IHVzZXI6IGRhdGEsIGVycm9yOiBudWxsIH0pO1xyXG4gICAgICAgICAgdG9rZW4uc2V0VG9rZW4oZGF0YS50b2tlbik7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIHNldCh7IGVycm9yOiBlcnJvci5tYXNzZWdlIH0pO1xyXG4gICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICBzZXQoeyBsb2FkaW5nOiBmYWxzZSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJldmVudHMtc3RvcmFnZVwiLFxyXG4gICAgICBzdG9yYWdlOiBjcmVhdGVKU09OU3RvcmFnZSgoKSA9PiBsb2NhbFN0b3JhZ2UpLFxyXG4gICAgfVxyXG4gIClcclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQcm9qZWN0cyA9IGNyZWF0ZSgoc2V0LCBnZXQpID0+ICh7XHJcbiAgcHJvamVjdDogbnVsbCxcclxuICBsb2FkaW5nOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxuICBwaG90bzogbnVsbCxcclxuXHJcbiAgYWRkUHJvamVjdDogYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBzZXQoeyBsb2FkaW5nOiB0cnVlIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcImFwaS9wcm9qZWN0c1wiLCBldmVudCk7XHJcblxyXG4gICAgICBpZiAoIWRhdGEub2spIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTb21ldGluZyB3ZW50IHdyb25nIChcIik7XHJcbiAgICAgIH1cclxuICAgICAgc2V0KHsgcHJvamVjdDogZGF0YSwgZXJyb3I6IG51bGwgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXQoeyBlcnJvcjogZXJyb3IubWFzc2VnZSB9KTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldCh7IGxvYWRpbmc6IGZhbHNlIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZVBob3RvOiBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIHNldCh7IGxvYWRpbmc6IHRydWUgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucGF0Y2goXHJcbiAgICAgICAgYGFwaS9wcm9qZWN0cy9hdmF0YXJzJHtldmVudC5wcm9qZWN0SWR9YCxcclxuICAgICAgICBldmVudC5mb3JtRGF0YVxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgc2V0KHsgcGhvdG86IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4gZXJyb3IubWFzc2VnZTtcclxuICAgIH0gZmluYWxseSB7XHJcbiAgICAgIHNldCh7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbn0pKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZSIsInBlcnNpc3QiLCJjcmVhdGVKU09OU3RvcmFnZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwidG9rZW4iLCJzZXRUb2tlbiIsImhlYWRlcnMiLCJjb21tb24iLCJBdXRob3JpemF0aW9uIiwidW5zZXRUb2tlbiIsInVzZUF1dGgiLCJzZXQiLCJ1c2VyIiwibG9hZGluZyIsImVycm9yIiwibG9nSW5Vc2VyIiwiZXZlbnQiLCJkYXRhIiwicG9zdCIsIm1hc3NlZ2UiLCJuYW1lIiwic3RvcmFnZSIsImxvY2FsU3RvcmFnZSIsInVzZVByb2plY3RzIiwiZ2V0IiwicHJvamVjdCIsInBob3RvIiwiYWRkUHJvamVjdCIsIm9rIiwiRXJyb3IiLCJ1cGRhdGVQaG90byIsInJlcyIsInBhdGNoIiwicHJvamVjdElkIiwiZm9ybURhdGEiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store.js\n"));

/***/ })

});