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

/***/ "./components/Editor/index.tsx":
/*!*************************************!*\
  !*** ./components/Editor/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Editior; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactflow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactflow */ \"./node_modules/reactflow/dist/esm/index.js\");\n/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Node */ \"./components/Editor/Node.tsx\");\n/* harmony import */ var reactflow_dist_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactflow/dist/style.css */ \"./node_modules/reactflow/dist/style.css\");\n/* harmony import */ var reactflow_dist_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactflow_dist_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _contexts_treeContexts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/contexts/treeContexts */ \"./contexts/treeContexts.tsx\");\n/* harmony import */ var _utils_getSampleContents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/getSampleContents */ \"./utils/getSampleContents.ts\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst nodeTypes = {\n    custom: _Node__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n};\nlet id = 100;\nconst getId = ()=>\"\".concat(id++);\nfunction Flow() {\n    _s();\n    //const reactFlowInstance = useReactFlow();\n    const { nodes , setNodes , onNodesChange , edges , setEdges , onEdgesChange , setLists , reset  } = (0,_contexts_treeContexts__WEBPACK_IMPORTED_MODULE_4__.useTreeContext)();\n    const { project  } = (0,reactflow__WEBPACK_IMPORTED_MODULE_6__.useReactFlow)();\n    const onConnect = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((params)=>setEdges((eds)=>(0,reactflow__WEBPACK_IMPORTED_MODULE_6__.addEdge)({\n                ...params,\n                id: (0,nanoid__WEBPACK_IMPORTED_MODULE_7__.nanoid)(),\n                animated: true,\n                style: {\n                    stroke: \"#000\"\n                }\n            }, eds)), []);\n    const reactFlowWrapper = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const connectingNodeId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);\n    const onConnectStart = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((_, param)=>{\n        let { nodeId  } = param;\n        connectingNodeId.current = nodeId;\n    }, []);\n    const onConnectEnd = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((event)=>{\n        const targetIsPane = event.target.classList.contains(\"react-flow__pane\");\n        if (targetIsPane) {\n            // we need to remove the wrapper bounds, in order to get the correct position\n            const { top , left  } = reactFlowWrapper.current.getBoundingClientRect();\n            const id = getId();\n            const sampleContents = (0,_utils_getSampleContents__WEBPACK_IMPORTED_MODULE_5__.getSampleContents)();\n            const newNode = {\n                id,\n                // we are removing the half of the node width (75) to center the new node\n                position: project({\n                    x: event.clientX - left - 75,\n                    y: event.clientY - top\n                }),\n                type: \"custom\",\n                data: {\n                    index: id,\n                    title: sampleContents.title,\n                    content: sampleContents.content,\n                    progress_individual: false,\n                    loc_x: event.clientX - left - 75,\n                    loc_y: event.clientY - top,\n                    checklist: sampleContents.checklist,\n                    is_main_branch: true\n                }\n            };\n            /* setLists((list) => [\r\n          ...list.map((item) => {\r\n            if (item.index === connectingNodeId.current)\r\n              return {\r\n                ...item,\r\n                children: [...item.children, id],\r\n              };\r\n            return item;\r\n          }),\r\n          {\r\n            index: id,\r\n            title: sampleContents.title,\r\n            children: [] as string[],\r\n            parents: [connectingNodeId.current!],\r\n          },\r\n        ]); */ setNodes((nds)=>nds.concat(newNode));\n            setEdges((eds)=>(0,reactflow__WEBPACK_IMPORTED_MODULE_6__.addEdge)({\n                    id,\n                    source: connectingNodeId.current,\n                    target: id,\n                    animated: true,\n                    style: {\n                        stroke: \"#000\"\n                    }\n                }, eds));\n        }\n    }, [\n        project\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        reset();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wrapper w-full\",\n        ref: reactFlowWrapper,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            nodes: nodes,\n            edges: edges,\n            onNodesChange: onNodesChange,\n            onEdgesChange: onEdgesChange,\n            onConnect: onConnect,\n            nodeTypes: nodeTypes,\n            onConnectStart: onConnectStart,\n            onConnectEnd: onConnectEnd,\n            className: \"!overflow-visible\"\n        }, void 0, false, {\n            fileName: \"C:\\\\r4bb1t\\\\programming\\\\web\\\\mocur\\\\components\\\\Editor\\\\index.tsx\",\n            lineNumber: 137,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\r4bb1t\\\\programming\\\\web\\\\mocur\\\\components\\\\Editor\\\\index.tsx\",\n        lineNumber: 136,\n        columnNumber: 5\n    }, this);\n}\n_s(Flow, \"CTvUEz6VZaF/ZjB3V/uljhTNVlI=\", false, function() {\n    return [\n        _contexts_treeContexts__WEBPACK_IMPORTED_MODULE_4__.useTreeContext,\n        reactflow__WEBPACK_IMPORTED_MODULE_6__.useReactFlow\n    ];\n});\n_c = Flow;\nfunction Editior() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full shrink-0\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactflow__WEBPACK_IMPORTED_MODULE_6__.ReactFlowProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Flow, {}, void 0, false, {\n                fileName: \"C:\\\\r4bb1t\\\\programming\\\\web\\\\mocur\\\\components\\\\Editor\\\\index.tsx\",\n                lineNumber: 156,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\r4bb1t\\\\programming\\\\web\\\\mocur\\\\components\\\\Editor\\\\index.tsx\",\n            lineNumber: 155,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\r4bb1t\\\\programming\\\\web\\\\mocur\\\\components\\\\Editor\\\\index.tsx\",\n        lineNumber: 154,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Editior;\nvar _c, _c1;\n$RefreshReg$(_c, \"Flow\");\n$RefreshReg$(_c1, \"Editior\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWVBO1lBQ2ZJLFdBQVdBO1lBQ1hkLFdBQVdBO1lBQ1hzQixnQkFBZ0JBO1lBQ2hCSSxjQUFjQTtZQUNkOEIsV0FBVTs7Ozs7Ozs7Ozs7QUFJbEI7R0ExSFNwRDs7UUFXSFAsa0VBQWNBO1FBQ0VOLG1EQUFZQTs7O0tBWnpCYTtBQTRITSxTQUFTc0QsVUFBVTtJQUNoQyxxQkFDRSw4REFBQ0g7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ2xFLHdEQUFpQkE7c0JBQ2hCLDRFQUFDYzs7Ozs7Ozs7Ozs7Ozs7O0FBSVQsQ0FBQztNQVJ1QnNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRWRpdG9yL2luZGV4LnRzeD9jYTJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdEZsb3csIHtcclxuICBSZWFjdEZsb3dQcm92aWRlcixcclxuICB1c2VSZWFjdEZsb3csXHJcbiAgYWRkRWRnZSxcclxuICBDb25uZWN0aW9uLFxyXG4gIE9uQ29ubmVjdFN0YXJ0UGFyYW1zLFxyXG59IGZyb20gXCJyZWFjdGZsb3dcIjtcclxuaW1wb3J0IEN1c3RvbU5vZGUgZnJvbSBcIi4vTm9kZVwiO1xyXG5pbXBvcnQgXCJyZWFjdGZsb3cvZGlzdC9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHtcclxuICBEaXNwYXRjaCxcclxuICBTZXRTdGF0ZUFjdGlvbixcclxuICB1c2VDYWxsYmFjayxcclxuICB1c2VFZmZlY3QsXHJcbiAgdXNlUmVmLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VUcmVlQ29udGV4dCB9IGZyb20gXCJAL2NvbnRleHRzL3RyZWVDb250ZXh0c1wiO1xyXG5pbXBvcnQgeyBnZXRTYW1wbGVDb250ZW50cyB9IGZyb20gXCJAL3V0aWxzL2dldFNhbXBsZUNvbnRlbnRzXCI7XHJcbmltcG9ydCB7IG5hbm9pZCB9IGZyb20gXCJuYW5vaWRcIjtcclxuXHJcbmNvbnN0IG5vZGVUeXBlcyA9IHtcclxuICBjdXN0b206IEN1c3RvbU5vZGUsXHJcbn07XHJcblxyXG5sZXQgaWQgPSAxMDA7XHJcbmNvbnN0IGdldElkID0gKCkgPT4gYCR7aWQrK31gO1xyXG5cclxuZnVuY3Rpb24gRmxvdygpIHtcclxuICAvL2NvbnN0IHJlYWN0Rmxvd0luc3RhbmNlID0gdXNlUmVhY3RGbG93KCk7XHJcbiAgY29uc3Qge1xyXG4gICAgbm9kZXMsXHJcbiAgICBzZXROb2RlcyxcclxuICAgIG9uTm9kZXNDaGFuZ2UsXHJcbiAgICBlZGdlcyxcclxuICAgIHNldEVkZ2VzLFxyXG4gICAgb25FZGdlc0NoYW5nZSxcclxuICAgIHNldExpc3RzLFxyXG4gICAgcmVzZXQsXHJcbiAgfSA9IHVzZVRyZWVDb250ZXh0KCk7XHJcbiAgY29uc3QgeyBwcm9qZWN0IH0gPSB1c2VSZWFjdEZsb3coKTtcclxuXHJcbiAgY29uc3Qgb25Db25uZWN0ID0gdXNlQ2FsbGJhY2soXHJcbiAgICAocGFyYW1zOiBDb25uZWN0aW9uKSA9PlxyXG4gICAgICBzZXRFZGdlcygoZWRzKSA9PlxyXG4gICAgICAgIGFkZEVkZ2UoXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC4uLnBhcmFtcyxcclxuICAgICAgICAgICAgaWQ6IG5hbm9pZCgpLFxyXG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgc3R5bGU6IHsgc3Ryb2tlOiBcIiMwMDBcIiB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGVkc1xyXG4gICAgICAgIClcclxuICAgICAgKSxcclxuICAgIFtdXHJcbiAgKTtcclxuICBjb25zdCByZWFjdEZsb3dXcmFwcGVyID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuICBjb25zdCBjb25uZWN0aW5nTm9kZUlkID0gdXNlUmVmPHN0cmluZyB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBvbkNvbm5lY3RTdGFydCA9IHVzZUNhbGxiYWNrKFxyXG4gICAgKF86IGFueSwgeyBub2RlSWQgfTogT25Db25uZWN0U3RhcnRQYXJhbXMpID0+IHtcclxuICAgICAgY29ubmVjdGluZ05vZGVJZC5jdXJyZW50ID0gbm9kZUlkO1xyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3Qgb25Db25uZWN0RW5kID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50IHwgYW55KSA9PiB7XHJcbiAgICAgIGNvbnN0IHRhcmdldElzUGFuZSA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZWFjdC1mbG93X19wYW5lXCIpO1xyXG5cclxuICAgICAgaWYgKHRhcmdldElzUGFuZSkge1xyXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZSB3cmFwcGVyIGJvdW5kcywgaW4gb3JkZXIgdG8gZ2V0IHRoZSBjb3JyZWN0IHBvc2l0aW9uXHJcbiAgICAgICAgY29uc3QgeyB0b3AsIGxlZnQgfSA9IHJlYWN0Rmxvd1dyYXBwZXIuY3VycmVudCEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgY29uc3QgaWQgPSBnZXRJZCgpO1xyXG4gICAgICAgIGNvbnN0IHNhbXBsZUNvbnRlbnRzID0gZ2V0U2FtcGxlQ29udGVudHMoKTtcclxuICAgICAgICBjb25zdCBuZXdOb2RlID0ge1xyXG4gICAgICAgICAgaWQsXHJcbiAgICAgICAgICAvLyB3ZSBhcmUgcmVtb3ZpbmcgdGhlIGhhbGYgb2YgdGhlIG5vZGUgd2lkdGggKDc1KSB0byBjZW50ZXIgdGhlIG5ldyBub2RlXHJcbiAgICAgICAgICBwb3NpdGlvbjogcHJvamVjdCh7XHJcbiAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFggLSBsZWZ0IC0gNzUsXHJcbiAgICAgICAgICAgIHk6IGV2ZW50LmNsaWVudFkgLSB0b3AsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIHR5cGU6IFwiY3VzdG9tXCIsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGluZGV4OiBpZCxcclxuICAgICAgICAgICAgdGl0bGU6IHNhbXBsZUNvbnRlbnRzLnRpdGxlLFxyXG4gICAgICAgICAgICBjb250ZW50OiBzYW1wbGVDb250ZW50cy5jb250ZW50LFxyXG4gICAgICAgICAgICBwcm9ncmVzc19pbmRpdmlkdWFsOiBmYWxzZSxcclxuICAgICAgICAgICAgbG9jX3g6IGV2ZW50LmNsaWVudFggLSBsZWZ0IC0gNzUsXHJcbiAgICAgICAgICAgIGxvY195OiBldmVudC5jbGllbnRZIC0gdG9wLFxyXG4gICAgICAgICAgICBjaGVja2xpc3Q6IHNhbXBsZUNvbnRlbnRzLmNoZWNrbGlzdCxcclxuICAgICAgICAgICAgaXNfbWFpbl9icmFuY2g6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8qIHNldExpc3RzKChsaXN0KSA9PiBbXHJcbiAgICAgICAgICAuLi5saXN0Lm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5pbmRleCA9PT0gY29ubmVjdGluZ05vZGVJZC5jdXJyZW50KVxyXG4gICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFsuLi5pdGVtLmNoaWxkcmVuLCBpZF0sXHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaW5kZXg6IGlkLFxyXG4gICAgICAgICAgICB0aXRsZTogc2FtcGxlQ29udGVudHMudGl0bGUsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXSBhcyBzdHJpbmdbXSxcclxuICAgICAgICAgICAgcGFyZW50czogW2Nvbm5lY3RpbmdOb2RlSWQuY3VycmVudCFdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdKTsgKi9cclxuXHJcbiAgICAgICAgc2V0Tm9kZXMoKG5kcykgPT4gbmRzLmNvbmNhdChuZXdOb2RlKSk7XHJcbiAgICAgICAgc2V0RWRnZXMoKGVkcykgPT5cclxuICAgICAgICAgIGFkZEVkZ2UoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICBzb3VyY2U6IGNvbm5lY3RpbmdOb2RlSWQuY3VycmVudCEsXHJcbiAgICAgICAgICAgICAgdGFyZ2V0OiBpZCxcclxuICAgICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBzdHlsZTogeyBzdHJva2U6IFwiIzAwMFwiIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGVkc1xyXG4gICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBbcHJvamVjdF1cclxuICApO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcmVzZXQoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXIgdy1mdWxsXCIgcmVmPXtyZWFjdEZsb3dXcmFwcGVyfT5cclxuICAgICAgPFJlYWN0Rmxvd1xyXG4gICAgICAgIG5vZGVzPXtub2Rlc31cclxuICAgICAgICBlZGdlcz17ZWRnZXN9XHJcbiAgICAgICAgb25Ob2Rlc0NoYW5nZT17b25Ob2Rlc0NoYW5nZX1cclxuICAgICAgICBvbkVkZ2VzQ2hhbmdlPXtvbkVkZ2VzQ2hhbmdlfVxyXG4gICAgICAgIG9uQ29ubmVjdD17b25Db25uZWN0fVxyXG4gICAgICAgIG5vZGVUeXBlcz17bm9kZVR5cGVzfVxyXG4gICAgICAgIG9uQ29ubmVjdFN0YXJ0PXtvbkNvbm5lY3RTdGFydH1cclxuICAgICAgICBvbkNvbm5lY3RFbmQ9e29uQ29ubmVjdEVuZH1cclxuICAgICAgICBjbGFzc05hbWU9XCIhb3ZlcmZsb3ctdmlzaWJsZVwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0aW9yKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzaHJpbmstMFwiPlxyXG4gICAgICA8UmVhY3RGbG93UHJvdmlkZXI+XHJcbiAgICAgICAgPEZsb3cgLz5cclxuICAgICAgPC9SZWFjdEZsb3dQcm92aWRlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0RmxvdyIsIlJlYWN0Rmxvd1Byb3ZpZGVyIiwidXNlUmVhY3RGbG93IiwiYWRkRWRnZSIsIkN1c3RvbU5vZGUiLCJ1c2VDYWxsYmFjayIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVRyZWVDb250ZXh0IiwiZ2V0U2FtcGxlQ29udGVudHMiLCJuYW5vaWQiLCJub2RlVHlwZXMiLCJjdXN0b20iLCJpZCIsImdldElkIiwiRmxvdyIsIm5vZGVzIiwic2V0Tm9kZXMiLCJvbk5vZGVzQ2hhbmdlIiwiZWRnZXMiLCJzZXRFZGdlcyIsIm9uRWRnZXNDaGFuZ2UiLCJzZXRMaXN0cyIsInJlc2V0IiwicHJvamVjdCIsIm9uQ29ubmVjdCIsInBhcmFtcyIsImVkcyIsImFuaW1hdGVkIiwic3R5bGUiLCJzdHJva2UiLCJyZWFjdEZsb3dXcmFwcGVyIiwiY29ubmVjdGluZ05vZGVJZCIsIm9uQ29ubmVjdFN0YXJ0IiwiXyIsIm5vZGVJZCIsImN1cnJlbnQiLCJvbkNvbm5lY3RFbmQiLCJldmVudCIsInRhcmdldElzUGFuZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9wIiwibGVmdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInNhbXBsZUNvbnRlbnRzIiwibmV3Tm9kZSIsInBvc2l0aW9uIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsInR5cGUiLCJkYXRhIiwiaW5kZXgiLCJ0aXRsZSIsImNvbnRlbnQiLCJwcm9ncmVzc19pbmRpdmlkdWFsIiwibG9jX3giLCJsb2NfeSIsImNoZWNrbGlzdCIsImlzX21haW5fYnJhbmNoIiwibmRzIiwiY29uY2F0Iiwic291cmNlIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwiRWRpdGlvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Editor/index.tsx\n"));

/***/ })

});