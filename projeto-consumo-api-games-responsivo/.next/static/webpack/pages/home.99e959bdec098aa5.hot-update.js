"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./src/components/EditContent/index.js":
/*!*********************************************!*\
  !*** ./src/components/EditContent/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/auth */ \"./src/utils/auth.js\");\n/* harmony import */ var _components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/EditContent/EditContent.module.css */ \"./src/components/EditContent/EditContent.module.css\");\n/* harmony import */ var _components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst EditContent = (param)=>{\n    let { game, isOpen, onClose, onUpdate } = param;\n    _s();\n    const [formValues, setFormValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        title: \"\",\n        platform: \"\",\n        year: \"\",\n        price: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (game) {\n            setFormValues({\n                id: game._id,\n                title: game.title,\n                platform: game.platform,\n                year: game.year,\n                price: game.price\n            });\n        }\n    }, [\n        game\n    ]);\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormValues((prevValues)=>({\n                ...prevValues,\n                [name]: value\n            }));\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const { id, title, platform, year, price } = formValues;\n        const updatedGame = {\n            title,\n            platform,\n            year,\n            price\n        };\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"https://09-api-node.vercel.app/game/\".concat(id), updatedGame, _utils_auth__WEBPACK_IMPORTED_MODULE_2__.axiosConfig);\n            if (response.status === 200) {\n                alert(\"Game atualizado!\");\n                onUpdate(response.data.game); // Passa o jogo atualizado para o componente pai\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    if (!isOpen) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().editModal), \" \").concat(isOpen ? \"show\" : \"\"),\n        id: \"editModal\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().editContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().modalClose),\n                    onClick: onClose,\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"title\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Editar jogo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                        lineNumber: 70,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"editForm\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"hidden\",\n                            name: \"id\",\n                            value: formValues.id\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"title\",\n                            placeholder: \"Insira o novo t\\xedtulo\",\n                            className: \"inputPrimary\",\n                            value: formValues.title,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"platform\",\n                            placeholder: \"Insira a nova plataforma do jogo\",\n                            className: \"inputPrimary\",\n                            value: formValues.platform,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            name: \"year\",\n                            placeholder: \"Insira o novo ano\",\n                            className: \"inputPrimary\",\n                            value: formValues.year,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"price\",\n                            placeholder: \"Insira o novo pre\\xe7o\",\n                            className: \"inputPrimary\",\n                            value: formValues.price,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 105,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"submit\",\n                            value: \"Alterar\",\n                            className: \"btnPrimary\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n            lineNumber: 67,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n        lineNumber: 66,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditContent, \"5x0GEokZtrs1ySSu0n5K4pt1tIE=\");\n_c = EditContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditContent);\nvar _c;\n$RefreshReg$(_c, \"EditContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RVYsOERBQUNKOzRCQUNDQyxNQUFLOzRCQUNMekIsTUFBSzs0QkFDTDBCLGFBQVk7NEJBQ1pYLFdBQVU7NEJBQ1ZkLE9BQU9YLFdBQVdNLEtBQUs7NEJBQ3ZCK0IsVUFBVTdCOzRCQUNWOEIsUUFBUTs7Ozs7O3NDQUVWLDhEQUFDSjs0QkFDQ0MsTUFBSzs0QkFDTHhCLE9BQU07NEJBQ05jLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRCO0dBckhNOUI7S0FBQUE7QUF1SE4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRWRpdENvbnRlbnQvaW5kZXguanM/MjYxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgYXhpb3NDb25maWcgfSBmcm9tICdAL3V0aWxzL2F1dGgnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL2NvbXBvbmVudHMvRWRpdENvbnRlbnQvRWRpdENvbnRlbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgRWRpdENvbnRlbnQgPSAoeyBnYW1lLCBpc09wZW4sIG9uQ2xvc2UsIG9uVXBkYXRlIH0pID0+IHtcclxuICBjb25zdCBbZm9ybVZhbHVlcywgc2V0Rm9ybVZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBpZDogJycsXHJcbiAgICB0aXRsZTogJycsXHJcbiAgICBwbGF0Zm9ybTogJycsXHJcbiAgICB5ZWFyOiAnJyxcclxuICAgIHByaWNlOiAnJ1xyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGdhbWUpIHtcclxuICAgICAgc2V0Rm9ybVZhbHVlcyh7XHJcbiAgICAgICAgaWQ6IGdhbWUuX2lkLFxyXG4gICAgICAgIHRpdGxlOiBnYW1lLnRpdGxlLFxyXG4gICAgICAgIHBsYXRmb3JtOiBnYW1lLnBsYXRmb3JtLFxyXG4gICAgICAgIHllYXI6IGdhbWUueWVhcixcclxuICAgICAgICBwcmljZTogZ2FtZS5wcmljZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbZ2FtZV0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZS50YXJnZXQ7XHJcbiAgICBzZXRGb3JtVmFsdWVzKHByZXZWYWx1ZXMgPT4gKHtcclxuICAgICAgLi4ucHJldlZhbHVlcyxcclxuICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB7IGlkLCB0aXRsZSwgcGxhdGZvcm0sIHllYXIsIHByaWNlIH0gPSBmb3JtVmFsdWVzO1xyXG5cclxuICAgIGNvbnN0IHVwZGF0ZWRHYW1lID0ge1xyXG4gICAgICB0aXRsZSxcclxuICAgICAgcGxhdGZvcm0sXHJcbiAgICAgIHllYXIsXHJcbiAgICAgIHByaWNlXHJcbiAgICB9O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KFxyXG4gICAgICAgIGBodHRwczovLzA5LWFwaS1ub2RlLnZlcmNlbC5hcHAvZ2FtZS8ke2lkfWAsXHJcbiAgICAgICAgdXBkYXRlZEdhbWUsXHJcbiAgICAgICAgYXhpb3NDb25maWdcclxuICAgICAgKTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgYWxlcnQoXCJHYW1lIGF0dWFsaXphZG8hXCIpO1xyXG4gICAgICAgIG9uVXBkYXRlKHJlc3BvbnNlLmRhdGEuZ2FtZSk7IC8vIFBhc3NhIG8gam9nbyBhdHVhbGl6YWRvIHBhcmEgbyBjb21wb25lbnRlIHBhaVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoIWlzT3Blbikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5lZGl0TW9kYWx9ICR7aXNPcGVuID8gJ3Nob3cnIDogJyd9YH0gaWQ9XCJlZGl0TW9kYWxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0Q29udGVudH0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDbG9zZX0gb25DbGljaz17b25DbG9zZX0+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICA8aDI+RWRpdGFyIGpvZ288L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtIGlkPVwiZWRpdEZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgbmFtZT1cImlkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMuaWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgbyBub3ZvIHTDrXR1bG9cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFByaW1hcnlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy50aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGxhdGZvcm1cIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBhIG5vdmEgcGxhdGFmb3JtYSBkbyBqb2dvXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRQcmltYXJ5XCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMucGxhdGZvcm19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBuYW1lPVwieWVhclwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIG8gbm92byBhbm9cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFByaW1hcnlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy55ZWFyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIG8gbm92byBwcmXDp29cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFByaW1hcnlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy5wcmljZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPVwiQWx0ZXJhclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blByaW1hcnlcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRDb250ZW50OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJheGlvc0NvbmZpZyIsInN0eWxlcyIsIkVkaXRDb250ZW50IiwiZ2FtZSIsImlzT3BlbiIsIm9uQ2xvc2UiLCJvblVwZGF0ZSIsImZvcm1WYWx1ZXMiLCJzZXRGb3JtVmFsdWVzIiwiaWQiLCJ0aXRsZSIsInBsYXRmb3JtIiwieWVhciIsInByaWNlIiwiX2lkIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXZWYWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInVwZGF0ZWRHYW1lIiwicmVzcG9uc2UiLCJwdXQiLCJzdGF0dXMiLCJhbGVydCIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJlZGl0TW9kYWwiLCJlZGl0Q29udGVudCIsInNwYW4iLCJtb2RhbENsb3NlIiwib25DbGljayIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsInJlcXVpcmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/EditContent/index.js\n"));

/***/ })

});