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

/***/ "./src/components/HomeContent/index.js":
/*!*********************************************!*\
  !*** ./src/components/HomeContent/index.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/auth */ \"./src/utils/auth.js\");\n/* harmony import */ var _components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/HomeContent/HomeContent.module.css */ \"./src/components/HomeContent/HomeContent.module.css\");\n/* harmony import */ var _components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _EditContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../EditContent */ \"./src/components/EditContent/index.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loading */ \"./src/components/Loading/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HomeContent = ()=>{\n    _s();\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGames = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"https://09-api-node.vercel.app/games\", _utils_auth__WEBPACK_IMPORTED_MODULE_2__.axiosConfig);\n                setGames(response.data.games);\n            } catch (error) {\n                console.error(error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchGames();\n    }, []);\n    const deleteGame = async (gameId)=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"][\"delete\"](\"https://09-api-node.vercel.app/game/\".concat(gameId), _utils_auth__WEBPACK_IMPORTED_MODULE_2__.axiosConfig);\n            setGames(games.filter((game)=>game._id !== gameId));\n            alert(\"Jogo deletado com sucesso!\");\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().homeContent),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().listGamesCard),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"title\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Lista de jogos\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            loading: loading\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().games),\n                            id: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().games),\n                            children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"listGames\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"images/game_cd_cover.png\",\n                                            alt: \"Jogo em estoque\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: game.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                \"Plataforma: \",\n                                                game.platform\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                \"Ano: \",\n                                                game.year\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                \"Pre\\xe7o:\",\n                                                game.price.toLocaleString(\"pt-br\", {\n                                                    style: \"currency\",\n                                                    currency: \"BRL\"\n                                                })\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnDel),\n                                            onClick: ()=>deleteGame(game._id),\n                                            children: \"Deletar\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnDel),\n                                            onClick: ()=>editGame(game),\n                                            children: \"Editar\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, game._id, true, {\n                                    fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HomeContent, \"2cQCX88OnxZyMMKuL3+dr4HJtB4=\");\n_c = HomeContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeContent);\nvar _c;\n$RefreshReg$(_c, \"HomeContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lQ29udGVudC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2xCO0FBQ2lCO0FBQzBCO0FBQzVCO0FBQ1I7QUFFakMsTUFBTU8sY0FBYzs7SUFDbEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFDckMsTUFBTSxDQUFDVSxTQUFTQyxXQUFXLEdBQUdYLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLGFBQWE7WUFDakIsSUFBSTtnQkFDRixNQUFNQyxXQUFXLE1BQU1YLGlEQUFTLENBQzlCLHdDQUNBQyxvREFBV0E7Z0JBRWJNLFNBQVNJLFNBQVNFLElBQUksQ0FBQ1AsS0FBSztZQUM5QixFQUFFLE9BQU9RLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQ0E7WUFDaEIsU0FBVTtnQkFDUkwsV0FBVztZQUNiO1FBQ0Y7UUFFQUM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNTSxhQUFhLE9BQU9DO1FBQ3hCLElBQUk7WUFDRixNQUFNakIsdURBQVksQ0FDaEIsdUNBQThDLE9BQVBpQixTQUN2Q2hCLG9EQUFXQTtZQUViTSxTQUFTRCxNQUFNYSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsR0FBRyxLQUFLSjtZQUM3Q0ssTUFBTTtRQUNSLEVBQUUsT0FBT1IsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2hCO0lBQ0Y7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNTO2dCQUFJQyxXQUFXdEIsbUdBQWtCOzBCQUVoQyw0RUFBQ3FCO29CQUFJQyxXQUFXdEIscUdBQW9COztzQ0FFbEMsOERBQUNxQjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0c7MENBQUc7Ozs7Ozs7Ozs7O3NDQUVOLDhEQUFDdkIsZ0RBQU9BOzRCQUFDSSxTQUFTQTs7Ozs7O3NDQUNsQiw4REFBQ2U7NEJBQUlDLFdBQVd0Qiw2RkFBWTs0QkFBRTBCLElBQUkxQiw2RkFBWTtzQ0FFM0NJLE1BQU11QixHQUFHLENBQUMsQ0FBQ1QscUJBQ1YsOERBQUNVO29DQUFrQk4sV0FBVTs7c0RBQzNCLDhEQUFDTzs0Q0FBSUMsS0FBSTs0Q0FBMkJDLEtBQUk7Ozs7OztzREFDeEMsOERBQUNDO3NEQUFJZCxLQUFLZSxLQUFLOzs7Ozs7c0RBQ2YsOERBQUNDOztnREFBRztnREFBYWhCLEtBQUtpQixRQUFROzs7Ozs7O3NEQUM5Qiw4REFBQ0Q7O2dEQUFHO2dEQUFNaEIsS0FBS2tCLElBQUk7Ozs7Ozs7c0RBQ25CLDhEQUFDRjs7Z0RBQUc7Z0RBRURoQixLQUFLbUIsS0FBSyxDQUFDQyxjQUFjLENBQUMsU0FBUztvREFDbENDLE9BQU87b0RBQ1BDLFVBQVU7Z0RBQ1o7Ozs7Ozs7c0RBRUYsOERBQUNDOzRDQUNDbkIsV0FBV3RCLDhGQUFhOzRDQUN4QjJDLFNBQVMsSUFBTTdCLFdBQVdJLEtBQUtDLEdBQUc7c0RBQ25DOzs7Ozs7c0RBR0QsOERBQUNzQjs0Q0FBT25CLFdBQVd0Qiw4RkFBYTs0Q0FBRTJDLFNBQVMsSUFBTUMsU0FBUzFCO3NEQUFPOzs7Ozs7O21DQWxCMURBLEtBQUtDLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkEwQnpCLDhEQUFDbEIsb0RBQVdBOzs7Ozs7O0FBR2xCO0dBN0VNRTtLQUFBQTtBQStFTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lQ29udGVudC9pbmRleC5qcz9lMzZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBheGlvc0NvbmZpZyB9IGZyb20gXCJAL3V0aWxzL2F1dGhcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9jb21wb25lbnRzL0hvbWVDb250ZW50L0hvbWVDb250ZW50Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEVkaXRDb250ZW50IGZyb20gXCIuLi9FZGl0Q29udGVudFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vTG9hZGluZ1wiO1xyXG5cclxuY29uc3QgSG9tZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2dhbWVzLCBzZXRHYW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaEdhbWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gICAgICAgICAgXCJodHRwczovLzA5LWFwaS1ub2RlLnZlcmNlbC5hcHAvZ2FtZXNcIixcclxuICAgICAgICAgIGF4aW9zQ29uZmlnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZXRHYW1lcyhyZXNwb25zZS5kYXRhLmdhbWVzKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaEdhbWVzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBkZWxldGVHYW1lID0gYXN5bmMgKGdhbWVJZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXhpb3MuZGVsZXRlKFxyXG4gICAgICAgIGBodHRwczovLzA5LWFwaS1ub2RlLnZlcmNlbC5hcHAvZ2FtZS8ke2dhbWVJZH1gLFxyXG4gICAgICAgIGF4aW9zQ29uZmlnXHJcbiAgICAgICk7XHJcbiAgICAgIHNldEdhbWVzKGdhbWVzLmZpbHRlcigoZ2FtZSkgPT4gZ2FtZS5faWQgIT09IGdhbWVJZCkpO1xyXG4gICAgICBhbGVydChcIkpvZ28gZGVsZXRhZG8gY29tIHN1Y2Vzc28hXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZUNvbnRlbnR9PlxyXG4gICAgICAgIHsvKiBDQVJEIExJU1RBIERFIEpPR09TICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEdhbWVzQ2FyZH0+XHJcbiAgICAgICAgICB7LyogVElUTEUgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoMj5MaXN0YSBkZSBqb2dvczwvaDI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxMb2FkaW5nIGxvYWRpbmc9e2xvYWRpbmd9IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbWVzfSBpZD17c3R5bGVzLmdhbWVzfT5cclxuICAgICAgICAgICAgey8qIExpc3RhIGRlIGpvZ29zIGlyw6EgYXF1aSAqL31cclxuICAgICAgICAgICAge2dhbWVzLm1hcCgoZ2FtZSkgPT4gKFxyXG4gICAgICAgICAgICAgIDx1bCBrZXk9e2dhbWUuX2lkfSBjbGFzc05hbWU9XCJsaXN0R2FtZXNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2dhbWVfY2RfY292ZXIucG5nXCIgYWx0PVwiSm9nbyBlbSBlc3RvcXVlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxoMz57Z2FtZS50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgPGxpPlBsYXRhZm9ybWE6IHtnYW1lLnBsYXRmb3JtfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+QW5vOiB7Z2FtZS55ZWFyfTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIFByZcOnbzpcclxuICAgICAgICAgICAgICAgICAge2dhbWUucHJpY2UudG9Mb2NhbGVTdHJpbmcoXCJwdC1iclwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeTogXCJCUkxcIixcclxuICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG5EZWx9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZUdhbWUoZ2FtZS5faWQpfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICBEZWxldGFyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRuRGVsfSBvbkNsaWNrPXsoKSA9PiBlZGl0R2FtZShnYW1lKX0+XHJcbiAgICAgICAgICAgICAgICAgIEVkaXRhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxFZGl0Q29udGVudCAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWVDb250ZW50O1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsImF4aW9zQ29uZmlnIiwic3R5bGVzIiwiRWRpdENvbnRlbnQiLCJMb2FkaW5nIiwiSG9tZUNvbnRlbnQiLCJnYW1lcyIsInNldEdhbWVzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaEdhbWVzIiwicmVzcG9uc2UiLCJnZXQiLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwiZGVsZXRlR2FtZSIsImdhbWVJZCIsImRlbGV0ZSIsImZpbHRlciIsImdhbWUiLCJfaWQiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImhvbWVDb250ZW50IiwibGlzdEdhbWVzQ2FyZCIsImgyIiwiaWQiLCJtYXAiLCJ1bCIsImltZyIsInNyYyIsImFsdCIsImgzIiwidGl0bGUiLCJsaSIsInBsYXRmb3JtIiwieWVhciIsInByaWNlIiwidG9Mb2NhbGVTdHJpbmciLCJzdHlsZSIsImN1cnJlbmN5IiwiYnV0dG9uIiwiYnRuRGVsIiwib25DbGljayIsImVkaXRHYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/HomeContent/index.js\n"));

/***/ })

});