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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/auth */ \"./src/utils/auth.js\");\n/* harmony import */ var _components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/EditContent/EditContent.module.css */ \"./src/components/EditContent/EditContent.module.css\");\n/* harmony import */ var _components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst EditContent = (param)=>{\n    let { game, isOpen, onClose, onUpdate } = param;\n    _s();\n    const [formValues, setFormValues] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        title: \"\",\n        platform: \"\",\n        year: \"\",\n        price: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (game) {\n            setFormValues({\n                id: game._id,\n                title: game.title,\n                platform: game.platform,\n                year: game.year,\n                price: game.price\n            });\n        }\n    }, [\n        game\n    ]);\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormValues((prevValues)=>({\n                ...prevValues,\n                [name]: value\n            }));\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        const { id, title, platform, year, price } = formValues;\n        const updatedGame = {\n            title,\n            platform,\n            year,\n            price\n        };\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].put(\"https://09-api-node.vercel.app/game/\".concat(id), updatedGame, _utils_auth__WEBPACK_IMPORTED_MODULE_2__.axiosConfig);\n            if (response.status === 200) {\n                alert(\"Game atualizado!\");\n                onUpdate(response.data);\n                router.push();\n            }\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    if (!isOpen) {\n        return null;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().editModal),\n        id: \"editModal\",\n        style: {\n            display: \"block\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().editContent),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_components_EditContent_EditContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().modalClose),\n                    onClick: onClose,\n                    children: \"\\xd7\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"title\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Editar jogo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    id: \"editForm\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"hidden\",\n                            name: \"id\",\n                            value: formValues.id\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"title\",\n                            placeholder: \"Insira o novo t\\xedtulo\",\n                            className: \"inputPrimary\",\n                            value: formValues.title,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"platform\",\n                            placeholder: \"Insira a nova plataforma do jogo\",\n                            className: \"inputPrimary\",\n                            value: formValues.platform,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            name: \"year\",\n                            placeholder: \"Insira o novo ano\",\n                            className: \"inputPrimary\",\n                            value: formValues.year,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 98,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            name: \"price\",\n                            placeholder: \"Insira o novo pre\\xe7o\",\n                            className: \"inputPrimary\",\n                            value: formValues.price,\n                            onChange: handleChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"submit\",\n                            value: \"Alterar\",\n                            className: \"btnPrimary\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n            lineNumber: 69,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\EditContent\\\\index.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, undefined);\n};\n_s(EditContent, \"5x0GEokZtrs1ySSu0n5K4pt1tIE=\");\n_c = EditContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditContent);\nvar _c;\n$RefreshReg$(_c, \"EditContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FZGl0Q29udGVudC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2xCO0FBQ2lCO0FBQzBCO0FBQzdCO0FBRXhDLE1BQU1NLGNBQWM7UUFBQyxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3RELE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztRQUMzQ2EsSUFBSTtRQUNKQyxPQUFPO1FBQ1BDLFVBQVU7UUFDVkMsTUFBTTtRQUNOQyxPQUFPO0lBQ1Q7SUFFQWhCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSU0sTUFBTTtZQUNSSyxjQUFjO2dCQUNaQyxJQUFJTixLQUFLVyxHQUFHO2dCQUNaSixPQUFPUCxLQUFLTyxLQUFLO2dCQUNqQkMsVUFBVVIsS0FBS1EsUUFBUTtnQkFDdkJDLE1BQU1ULEtBQUtTLElBQUk7Z0JBQ2ZDLE9BQU9WLEtBQUtVLEtBQUs7WUFDbkI7UUFDRjtJQUNGLEdBQUc7UUFBQ1Y7S0FBSztJQUVULE1BQU1ZLGVBQWUsQ0FBQ0M7UUFDcEIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDWCxjQUFjWSxDQUFBQSxhQUFlO2dCQUMzQixHQUFHQSxVQUFVO2dCQUNiLENBQUNILEtBQUssRUFBRUM7WUFDVjtJQUNGO0lBRUEsTUFBTUcsZUFBZSxPQUFPTDtRQUMxQkEsRUFBRU0sY0FBYztRQUNoQixNQUFNLEVBQUViLEVBQUUsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdOO1FBRTdDLE1BQU1nQixjQUFjO1lBQ2xCYjtZQUNBQztZQUNBQztZQUNBQztRQUNGO1FBRUEsSUFBSTtZQUNGLE1BQU1XLFdBQVcsTUFBTTFCLGlEQUFTLENBQzlCLHVDQUEwQyxPQUFIVyxLQUN2Q2MsYUFDQXhCLG9EQUFXQTtZQUViLElBQUl5QixTQUFTRSxNQUFNLEtBQUssS0FBSztnQkFDM0JDLE1BQU07Z0JBQ05yQixTQUFTa0IsU0FBU0ksSUFBSTtnQkFDdEJDLE9BQU9DLElBQUk7WUFDYjtRQUNGLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2hCO0lBQ0Y7SUFFQSxJQUFJLENBQUMzQixRQUFRO1FBQ1gsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUM2QjtRQUFJQyxXQUFXbEMsaUdBQWdCO1FBQUVTLElBQUc7UUFBWTJCLE9BQU87WUFBRUMsU0FBUztRQUFRO2tCQUN6RSw0RUFBQ0o7WUFBSUMsV0FBV2xDLG1HQUFrQjs7OEJBQ2hDLDhEQUFDdUM7b0JBQUtMLFdBQVdsQyxrR0FBaUI7b0JBQUV5QyxTQUFTcEM7OEJBQVM7Ozs7Ozs4QkFDdEQsOERBQUM0QjtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ1E7a0NBQUc7Ozs7Ozs7Ozs7OzhCQUVOLDhEQUFDQztvQkFBS2xDLElBQUc7b0JBQVdtQyxVQUFVdkI7O3NDQUM1Qiw4REFBQ3dCOzRCQUNDQyxNQUFLOzRCQUNMN0IsTUFBSzs0QkFDTEMsT0FBT1gsV0FBV0UsRUFBRTs7Ozs7O3NDQUV0Qiw4REFBQ29DOzRCQUNDQyxNQUFLOzRCQUNMN0IsTUFBSzs0QkFDTDhCLGFBQVk7NEJBQ1piLFdBQVU7NEJBQ1ZoQixPQUFPWCxXQUFXRyxLQUFLOzRCQUN2QnNDLFVBQVVqQzs0QkFDVmtDLFFBQVE7Ozs7OztzQ0FFViw4REFBQ0o7NEJBQ0NDLE1BQUs7NEJBQ0w3QixNQUFLOzRCQUNMOEIsYUFBWTs0QkFDWmIsV0FBVTs0QkFDVmhCLE9BQU9YLFdBQVdJLFFBQVE7NEJBQzFCcUMsVUFBVWpDOzRCQUNWa0MsUUFBUTs7Ozs7O3NDQUVWLDhEQUFDSjs0QkFDQ0MsTUFBSzs0QkFDTDdCLE1BQUs7NEJBQ0w4QixhQUFZOzRCQUNaYixXQUFVOzRCQUNWaEIsT0FBT1gsV0FBV0ssSUFBSTs0QkFDdEJvQyxVQUFVakM7NEJBQ1ZrQyxRQUFROzs7Ozs7c0NBRVYsOERBQUNKOzRCQUNDQyxNQUFLOzRCQUNMN0IsTUFBSzs0QkFDTDhCLGFBQVk7NEJBQ1piLFdBQVU7NEJBQ1ZoQixPQUFPWCxXQUFXTSxLQUFLOzRCQUN2Qm1DLFVBQVVqQzs0QkFDVmtDLFFBQVE7Ozs7OztzQ0FFViw4REFBQ0o7NEJBQ0NDLE1BQUs7NEJBQ0w1QixPQUFNOzRCQUNOZ0IsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNdEI7R0F0SE1oQztLQUFBQTtBQXdITiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9FZGl0Q29udGVudC9pbmRleC5qcz8yNjFhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IGF4aW9zQ29uZmlnIH0gZnJvbSAnQC91dGlscy9hdXRoJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9jb21wb25lbnRzL0VkaXRDb250ZW50L0VkaXRDb250ZW50Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBFZGl0Q29udGVudCA9ICh7IGdhbWUsIGlzT3Blbiwgb25DbG9zZSwgb25VcGRhdGUgfSkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtVmFsdWVzLCBzZXRGb3JtVmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgIGlkOiAnJyxcclxuICAgIHRpdGxlOiAnJyxcclxuICAgIHBsYXRmb3JtOiAnJyxcclxuICAgIHllYXI6ICcnLFxyXG4gICAgcHJpY2U6ICcnXHJcbiAgfSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZ2FtZSkge1xyXG4gICAgICBzZXRGb3JtVmFsdWVzKHtcclxuICAgICAgICBpZDogZ2FtZS5faWQsXHJcbiAgICAgICAgdGl0bGU6IGdhbWUudGl0bGUsXHJcbiAgICAgICAgcGxhdGZvcm06IGdhbWUucGxhdGZvcm0sXHJcbiAgICAgICAgeWVhcjogZ2FtZS55ZWFyLFxyXG4gICAgICAgIHByaWNlOiBnYW1lLnByaWNlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFtnYW1lXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldEZvcm1WYWx1ZXMocHJldlZhbHVlcyA9PiAoe1xyXG4gICAgICAuLi5wcmV2VmFsdWVzLFxyXG4gICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHsgaWQsIHRpdGxlLCBwbGF0Zm9ybSwgeWVhciwgcHJpY2UgfSA9IGZvcm1WYWx1ZXM7XHJcblxyXG4gICAgY29uc3QgdXBkYXRlZEdhbWUgPSB7XHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBwbGF0Zm9ybSxcclxuICAgICAgeWVhcixcclxuICAgICAgcHJpY2VcclxuICAgIH07XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wdXQoXHJcbiAgICAgICAgYGh0dHBzOi8vMDktYXBpLW5vZGUudmVyY2VsLmFwcC9nYW1lLyR7aWR9YCxcclxuICAgICAgICB1cGRhdGVkR2FtZSxcclxuICAgICAgICBheGlvc0NvbmZpZ1xyXG4gICAgICApO1xyXG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICBhbGVydChcIkdhbWUgYXR1YWxpemFkbyFcIik7XHJcbiAgICAgICAgb25VcGRhdGUocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goKVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpZiAoIWlzT3Blbikge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0TW9kYWx9IGlkPVwiZWRpdE1vZGFsXCIgc3R5bGU9e3sgZGlzcGxheTogJ2Jsb2NrJyB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lZGl0Q29udGVudH0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxDbG9zZX0gb25DbGljaz17b25DbG9zZX0+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICA8aDI+RWRpdGFyIGpvZ288L2gyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxmb3JtIGlkPVwiZWRpdEZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgbmFtZT1cImlkXCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMuaWR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnNpcmEgbyBub3ZvIHTDrXR1bG9cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFByaW1hcnlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy50aXRsZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBuYW1lPVwicGxhdGZvcm1cIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkluc2lyYSBhIG5vdmEgcGxhdGFmb3JtYSBkbyBqb2dvXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXRQcmltYXJ5XCJcclxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1WYWx1ZXMucGxhdGZvcm19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBuYW1lPVwieWVhclwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIG8gbm92byBhbm9cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFByaW1hcnlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy55ZWFyfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIG5hbWU9XCJwcmljZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5zaXJhIG8gbm92byBwcmXDp29cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dFByaW1hcnlcIlxyXG4gICAgICAgICAgICB2YWx1ZT17Zm9ybVZhbHVlcy5wcmljZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgIHZhbHVlPVwiQWx0ZXJhclwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0blByaW1hcnlcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRDb250ZW50OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiYXhpb3NDb25maWciLCJzdHlsZXMiLCJ1c2VSb3V0ZXIiLCJFZGl0Q29udGVudCIsImdhbWUiLCJpc09wZW4iLCJvbkNsb3NlIiwib25VcGRhdGUiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsImlkIiwidGl0bGUiLCJwbGF0Zm9ybSIsInllYXIiLCJwcmljZSIsIl9pZCIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJwcmV2VmFsdWVzIiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJ1cGRhdGVkR2FtZSIsInJlc3BvbnNlIiwicHV0Iiwic3RhdHVzIiwiYWxlcnQiLCJkYXRhIiwicm91dGVyIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImRpdiIsImNsYXNzTmFtZSIsImVkaXRNb2RhbCIsInN0eWxlIiwiZGlzcGxheSIsImVkaXRDb250ZW50Iiwic3BhbiIsIm1vZGFsQ2xvc2UiLCJvbkNsaWNrIiwiaDIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/EditContent/index.js\n"));

/***/ })

});