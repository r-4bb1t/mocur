"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/curriculum/editor",{

/***/ "./components/Editor/Node.tsx":
/*!************************************!*\
  !*** ./components/Editor/Node.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_treeContexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/contexts/treeContexts */ \"./contexts/treeContexts.tsx\");\n/* harmony import */ var classcat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classcat */ \"./node_modules/classcat/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst NodeViewer = next_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(()=>__webpack_require__.e(/*! import() */ \"components_Editor_NodeViewer_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./NodeViewer */ \"./components/Editor/NodeViewer.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"..\\\\components\\\\Editor\\\\Node.tsx -> \" + \"./NodeViewer\"\n        ]\n    },\n    ssr: false\n});\n_c = NodeViewer;\nfunction CustomNode(param) {\n    let { data  } = param;\n    _s();\n    const { setOpenedNodeIndex  } = (0,_contexts_treeContexts__WEBPACK_IMPORTED_MODULE_1__.useTreeContext)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,classcat__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\n            \"bg-white shadow-shadow flex flex-col gap-2 rounded z-50 w-[30rem] px-6 py-4 !visible\"\n        ]),\n        onClick: ()=>setOpenedNodeIndex(data.index),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (0,classcat__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\n                    \"font-bold text-2xl\"\n                ]),\n                children: data.title\n            }, void 0, false, {\n                fileName: \"C:\\\\r4bb1t\\\\programming\\\\web\\\\mocur\\\\components\\\\Editor\\\\Node.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NodeViewer, {\n                data: data\n            }, void 0, false, {\n                fileName: \"C:\\\\r4bb1t\\\\programming\\\\web\\\\mocur\\\\components\\\\Editor\\\\Node.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: data.checklist.map((checklist, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (0,classcat__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([\n                            \"flex text-lg\"\n                        ]),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"checkbox\",\n                                checked: false,\n                                className: \"checkbox checkbox-sm mr-2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\r4bb1t\\\\programming\\\\web\\\\mocur\\\\components\\\\Editor\\\\Node.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            checklist.content\n                        ]\n                    }, i, true, {\n                        fileName: \"C:\\\\r4bb1t\\\\programming\\\\web\\\\mocur\\\\components\\\\Editor\\\\Node.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\r4bb1t\\\\programming\\\\web\\\\mocur\\\\components\\\\Editor\\\\Node.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_5__.Handle, {\n                type: \"target\",\n                position: reactflow__WEBPACK_IMPORTED_MODULE_5__.Position.Top,\n                id: \"top\",\n                className: \"!w-3 !h-3 hover:bg-opacity-80 flex items-center justify-center rounded-full !bg-white !border-[1px] !border-black-200 shadow-shadow\"\n            }, void 0, false, {\n                fileName: \"C:\\\\r4bb1t\\\\programming\\\\web\\\\mocur\\\\components\\\\Editor\\\\Node.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_5__.Handle, {\n                type: \"source\",\n                position: reactflow__WEBPACK_IMPORTED_MODULE_5__.Position.Bottom,\n                id: \"bottom\",\n                className: \"!w-3 !h-3 hover:bg-opacity-80 flex items-center justify-center rounded-full !bg-white !border-[1px] !border-black-200 shadow-shadow\"\n            }, void 0, false, {\n                fileName: \"C:\\\\r4bb1t\\\\programming\\\\web\\\\mocur\\\\components\\\\Editor\\\\Node.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\r4bb1t\\\\programming\\\\web\\\\mocur\\\\components\\\\Editor\\\\Node.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_s(CustomNode, \"NicTq1s8IcGSu7nfdWxKWeyxNk4=\", false, function() {\n    return [\n        _contexts_treeContexts__WEBPACK_IMPORTED_MODULE_1__.useTreeContext\n    ];\n});\n_c1 = CustomNode;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomNode);\nvar _c, _c1;\n$RefreshReg$(_c, \"NodeViewer\");\n$RefreshReg$(_c1, \"CustomNode\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0VkaXRvci9Ob2RlLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDL0I7QUFDdUI7QUFDSjtBQUNWO0FBRW5DLE1BQU1NLGFBQWFELG1EQUFPQSxDQUFDLElBQU0sdUxBQXNCOzs7Ozs7SUFDckRFLEtBQUssS0FBSzs7S0FETkQ7QUFJTixTQUFTRSxXQUFXLEtBQWdDLEVBQUU7UUFBbEMsRUFBRUMsS0FBSSxFQUEwQixHQUFoQzs7SUFDbEIsTUFBTSxFQUFFQyxtQkFBa0IsRUFBRSxHQUFHVixzRUFBY0E7SUFFN0MscUJBQ0UsOERBQUNXO1FBQ0NDLFdBQVdYLG9EQUFFQSxDQUFDO1lBQ1o7U0FHRDtRQUNEWSxTQUFTLElBQU1ILG1CQUFtQkQsS0FBS0ssS0FBSzs7MEJBRTVDLDhEQUFDSDtnQkFDQ0MsV0FBV1gsb0RBQUVBLENBQUM7b0JBQ1o7aUJBR0Q7MEJBRUFRLEtBQUtNLEtBQUs7Ozs7OzswQkFFYiw4REFBQ1Q7Z0JBQVdHLE1BQU1BOzs7Ozs7MEJBQ2xCLDhEQUFDTzswQkFDRVAsS0FBS1EsU0FBUyxDQUFDQyxHQUFHLENBQUMsQ0FBQ0QsV0FBV0Usa0JBQzlCLDhEQUFDQzt3QkFFQ1IsV0FBV1gsb0RBQUVBLENBQUM7NEJBQ1o7eUJBR0Q7OzBDQUVELDhEQUFDb0I7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLFNBQVMsS0FBSztnQ0FDZFgsV0FBVTs7Ozs7OzRCQUVYSyxVQUFVTyxPQUFPOzt1QkFaYkw7Ozs7Ozs7Ozs7MEJBZ0JYLDhEQUFDaEIsNkNBQU1BO2dCQUNMbUIsTUFBSztnQkFDTEcsVUFBVXJCLG1EQUFZO2dCQUN0QnVCLElBQUc7Z0JBQ0hmLFdBQVU7Ozs7OzswQkFFWiw4REFBQ1QsNkNBQU1BO2dCQUNMbUIsTUFBSztnQkFDTEcsVUFBVXJCLHNEQUFlO2dCQUN6QnVCLElBQUc7Z0JBQ0hmLFdBQVU7Ozs7Ozs7Ozs7OztBQUlsQjtHQXZEU0o7O1FBQ3dCUixrRUFBY0E7OztNQUR0Q1E7QUF5RFQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9FZGl0b3IvTm9kZS50c3g/Y2E3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VUcmVlQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHRzL3RyZWVDb250ZXh0c1wiO1xyXG5pbXBvcnQgY2MgZnJvbSBcImNsYXNzY2F0XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBIYW5kbGUsIFBvc2l0aW9uIH0gZnJvbSBcInJlYWN0Zmxvd1wiO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XHJcblxyXG5jb25zdCBOb2RlVmlld2VyID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuL05vZGVWaWV3ZXJcIiksIHtcclxuICBzc3I6IGZhbHNlLFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIEN1c3RvbU5vZGUoeyBkYXRhIH06IHsgZGF0YTogTm9kZURhdGFUeXBlIH0pIHtcclxuICBjb25zdCB7IHNldE9wZW5lZE5vZGVJbmRleCB9ID0gdXNlVHJlZUNvbnRleHQoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtjYyhbXHJcbiAgICAgICAgXCJiZy13aGl0ZSBzaGFkb3ctc2hhZG93IGZsZXggZmxleC1jb2wgZ2FwLTIgcm91bmRlZCB6LTUwIHctWzMwcmVtXSBweC02IHB5LTQgIXZpc2libGVcIixcclxuICAgICAgICAvKiAgZGF0YS5pc19tYWluX2JyYW5jaCAmJiBcInB4LTYgcHktNFwiLFxyXG4gICAgICAgICFkYXRhLmlzX21haW5fYnJhbmNoICYmIFwicHgtNCBweS0yIGJnLW9wYWNpdHktODBcIiwgKi9cclxuICAgICAgXSl9XHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5lZE5vZGVJbmRleChkYXRhLmluZGV4KX1cclxuICAgID5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2MoW1xyXG4gICAgICAgICAgXCJmb250LWJvbGQgdGV4dC0yeGxcIixcclxuICAgICAgICAgIC8qICAgZGF0YS5pc19tYWluX2JyYW5jaCAmJiBcInRleHQtMnhsXCIsXHJcbiAgICAgICAgICAhZGF0YS5pc19tYWluX2JyYW5jaCAmJiBcInRleHQtbGdcIiwgKi9cclxuICAgICAgICBdKX1cclxuICAgICAgPlxyXG4gICAgICAgIHtkYXRhLnRpdGxlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE5vZGVWaWV3ZXIgZGF0YT17ZGF0YX0gLz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtkYXRhLmNoZWNrbGlzdC5tYXAoKGNoZWNrbGlzdCwgaSkgPT4gKFxyXG4gICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjYyhbXHJcbiAgICAgICAgICAgICAgXCJmbGV4IHRleHQtbGdcIixcclxuICAgICAgICAgICAgICAvKiAgZGF0YS5pc19tYWluX2JyYW5jaCAmJiBcInRleHQtbGdcIixcclxuICAgICAgICAgICAgICAhZGF0YS5pc19tYWluX2JyYW5jaCAmJiBcInRleHQtYmFzZVwiLCAqL1xyXG4gICAgICAgICAgICBdKX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICBjaGVja2VkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjaGVja2JveCBjaGVja2JveC1zbSBtci0yXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAge2NoZWNrbGlzdC5jb250ZW50fVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgICAgPEhhbmRsZVxyXG4gICAgICAgIHR5cGU9XCJ0YXJnZXRcIlxyXG4gICAgICAgIHBvc2l0aW9uPXtQb3NpdGlvbi5Ub3B9XHJcbiAgICAgICAgaWQ9XCJ0b3BcIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIiF3LTMgIWgtMyBob3ZlcjpiZy1vcGFjaXR5LTgwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCAhYmctd2hpdGUgIWJvcmRlci1bMXB4XSAhYm9yZGVyLWJsYWNrLTIwMCBzaGFkb3ctc2hhZG93XCJcclxuICAgICAgLz5cclxuICAgICAgPEhhbmRsZVxyXG4gICAgICAgIHR5cGU9XCJzb3VyY2VcIlxyXG4gICAgICAgIHBvc2l0aW9uPXtQb3NpdGlvbi5Cb3R0b219XHJcbiAgICAgICAgaWQ9XCJib3R0b21cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIiF3LTMgIWgtMyBob3ZlcjpiZy1vcGFjaXR5LTgwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtZnVsbCAhYmctd2hpdGUgIWJvcmRlci1bMXB4XSAhYm9yZGVyLWJsYWNrLTIwMCBzaGFkb3ctc2hhZG93XCJcclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbU5vZGU7XHJcbiJdLCJuYW1lcyI6WyJ1c2VUcmVlQ29udGV4dCIsImNjIiwiUmVhY3QiLCJIYW5kbGUiLCJQb3NpdGlvbiIsImR5bmFtaWMiLCJOb2RlVmlld2VyIiwic3NyIiwiQ3VzdG9tTm9kZSIsImRhdGEiLCJzZXRPcGVuZWROb2RlSW5kZXgiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaW5kZXgiLCJ0aXRsZSIsInVsIiwiY2hlY2tsaXN0IiwibWFwIiwiaSIsImxpIiwiaW5wdXQiLCJ0eXBlIiwiY2hlY2tlZCIsImNvbnRlbnQiLCJwb3NpdGlvbiIsIlRvcCIsImlkIiwiQm90dG9tIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Editor/Node.tsx\n"));

/***/ })

});