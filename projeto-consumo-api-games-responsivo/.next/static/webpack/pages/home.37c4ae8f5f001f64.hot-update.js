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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/auth */ \"./src/utils/auth.js\");\n/* harmony import */ var _components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/HomeContent/HomeContent.module.css */ \"./src/components/HomeContent/HomeContent.module.css\");\n/* harmony import */ var _components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _EditContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../EditContent */ \"./src/components/EditContent/index.js\");\n/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loading */ \"./src/components/Loading/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HomeContent = ()=>{\n    _s();\n    const [games, setGames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [selectedGame, setSelectedGame] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // Estado para o jogo selecionado\n    const [isEditModalOpen, setIsEditModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // Estado para controlar o modal\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchGames = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"https://09-api-node.vercel.app/games\", _utils_auth__WEBPACK_IMPORTED_MODULE_2__.axiosConfig);\n                setGames(response.data.games);\n            } catch (error) {\n                console.error(error);\n            } finally{\n                setLoading(false);\n            }\n        };\n        fetchGames();\n    }, []);\n    // Delete\n    const deleteGame = async (gameId)=>{\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"][\"delete\"](\"https://09-api-node.vercel.app/game/\".concat(gameId), _utils_auth__WEBPACK_IMPORTED_MODULE_2__.axiosConfig);\n            setGames(games.filter((game)=>game._id !== gameId));\n            alert(\"Game deletado!\");\n        } catch (error) {\n            console.error(error);\n        }\n    };\n    // Função para abrir o modal de edição com os dados do jogo\n    const openEditModal = (game)=>{\n        setSelectedGame(game);\n        setIsEditModalOpen(true);\n    };\n    // Função para atualizar o jogo editado na lista\n    const handleUpdate = (updatedGame)=>{\n        setGames(games.map((game)=>game._id === updatedGame._id ? updatedGame : game));\n        setIsEditModalOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().homeContent),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().listGamesCard),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"title\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: \"Lista de jogos\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            loading: loading\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().games),\n                            id: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().games),\n                            children: games.map((game)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"listGames\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"images/game_cd_cover.png\",\n                                            alt: \"Jogo em estoque\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            children: game.title\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                \"Plataforma: \",\n                                                game.platform\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                \"Ano: \",\n                                                game.year\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: [\n                                                \"Pre\\xe7o:\",\n                                                game.price.toLocaleString(\"pt-br\", {\n                                                    style: \"currency\",\n                                                    currency: \"BRL\"\n                                                })\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnDel),\n                                            onClick: ()=>deleteGame(game._id),\n                                            children: \"Deletar\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: (_components_HomeContent_HomeContent_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnEdit),\n                                            onClick: ()=>openEditModal(game),\n                                            children: \"Editar\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, game._id, true, {\n                                    fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_EditContent__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                game: selectedGame,\n                isOpen: isEditModalOpen,\n                onClose: ()=>setIsEditModalOpen(false),\n                onUpdate: handleUpdate\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ETEC Registro\\\\OneDrive - Etec Centro Paula Souza\\\\Desktop\\\\projeto-01-consumo-api-games-responsivo\\\\src\\\\components\\\\HomeContent\\\\index.js\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(HomeContent, \"AwwL6PiTiBTLWwg5OZa8+laUnwY=\");\n_c = HomeContent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeContent);\nvar _c;\n$RefreshReg$(_c, \"HomeContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG9EQUFXQTtnQkFDVnFCLE1BQU1kO2dCQUNONEMsUUFBUTFDO2dCQUNSMkMsU0FBUyxJQUFNMUMsbUJBQW1CO2dCQUNsQzJDLFVBQVU1Qjs7Ozs7Ozs7QUFJbEI7R0FwR012QjtLQUFBQTtBQXNHTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lQ29udGVudC9pbmRleC5qcz9lMzZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBheGlvc0NvbmZpZyB9IGZyb20gXCJAL3V0aWxzL2F1dGhcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9jb21wb25lbnRzL0hvbWVDb250ZW50L0hvbWVDb250ZW50Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IEVkaXRDb250ZW50IGZyb20gXCIuLi9FZGl0Q29udGVudFwiO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vTG9hZGluZ1wiO1xyXG5cclxuY29uc3QgSG9tZUNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2dhbWVzLCBzZXRHYW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgY29uc3QgW3NlbGVjdGVkR2FtZSwgc2V0U2VsZWN0ZWRHYW1lXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBFc3RhZG8gcGFyYSBvIGpvZ28gc2VsZWNpb25hZG9cclxuICBjb25zdCBbaXNFZGl0TW9kYWxPcGVuLCBzZXRJc0VkaXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpOyAvLyBFc3RhZG8gcGFyYSBjb250cm9sYXIgbyBtb2RhbFxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hHYW1lcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcclxuICAgICAgICAgIFwiaHR0cHM6Ly8wOS1hcGktbm9kZS52ZXJjZWwuYXBwL2dhbWVzXCIsXHJcbiAgICAgICAgICBheGlvc0NvbmZpZ1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgc2V0R2FtZXMocmVzcG9uc2UuZGF0YS5nYW1lcyk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZmV0Y2hHYW1lcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gRGVsZXRlXHJcbiAgY29uc3QgZGVsZXRlR2FtZSA9IGFzeW5jIChnYW1lSWQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShcclxuICAgICAgICBgaHR0cHM6Ly8wOS1hcGktbm9kZS52ZXJjZWwuYXBwL2dhbWUvJHtnYW1lSWR9YCxcclxuICAgICAgICBheGlvc0NvbmZpZ1xyXG4gICAgICApO1xyXG4gICAgICBzZXRHYW1lcyhnYW1lcy5maWx0ZXIoKGdhbWUpID0+IGdhbWUuX2lkICE9PSBnYW1lSWQpKTtcclxuICAgICAgYWxlcnQoXCJHYW1lIGRlbGV0YWRvIVwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vIEZ1bsOnw6NvIHBhcmEgYWJyaXIgbyBtb2RhbCBkZSBlZGnDp8OjbyBjb20gb3MgZGFkb3MgZG8gam9nb1xyXG4gIGNvbnN0IG9wZW5FZGl0TW9kYWwgPSAoZ2FtZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRHYW1lKGdhbWUpO1xyXG4gICAgc2V0SXNFZGl0TW9kYWxPcGVuKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bsOnw6NvIHBhcmEgYXR1YWxpemFyIG8gam9nbyBlZGl0YWRvIG5hIGxpc3RhXHJcbiAgY29uc3QgaGFuZGxlVXBkYXRlID0gKHVwZGF0ZWRHYW1lKSA9PiB7XHJcbiAgICBzZXRHYW1lcyhnYW1lcy5tYXAoZ2FtZSA9PiBnYW1lLl9pZCA9PT0gdXBkYXRlZEdhbWUuX2lkID8gdXBkYXRlZEdhbWUgOiBnYW1lKSk7XHJcbiAgICBzZXRJc0VkaXRNb2RhbE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVDb250ZW50fT5cclxuICAgICAgICB7LyogQ0FSRCBMSVNUQSBERSBKT0dPUyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RHYW1lc0NhcmR9PlxyXG4gICAgICAgICAgey8qIFRJVExFICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDI+TGlzdGEgZGUgam9nb3M8L2gyPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TG9hZGluZyBsb2FkaW5nPXtsb2FkaW5nfSAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nYW1lc30gaWQ9e3N0eWxlcy5nYW1lc30+XHJcbiAgICAgICAgICAgIHsvKiBMaXN0YSBkZSBqb2dvcyBpcsOhIGFxdWkgKi99XHJcbiAgICAgICAgICAgIHtnYW1lcy5tYXAoKGdhbWUpID0+IChcclxuICAgICAgICAgICAgICA8dWwga2V5PXtnYW1lLl9pZH0gY2xhc3NOYW1lPVwibGlzdEdhbWVzXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImltYWdlcy9nYW1lX2NkX2NvdmVyLnBuZ1wiIGFsdD1cIkpvZ28gZW0gZXN0b3F1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDM+e2dhbWUudGl0bGV9PC9oMz5cclxuICAgICAgICAgICAgICAgIDxsaT5QbGF0YWZvcm1hOiB7Z2FtZS5wbGF0Zm9ybX08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPkFubzoge2dhbWUueWVhcn08L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICBQcmXDp286XHJcbiAgICAgICAgICAgICAgICAgIHtnYW1lLnByaWNlLnRvTG9jYWxlU3RyaW5nKFwicHQtYnJcIiwge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVuY3k6IFwiQlJMXCIsXHJcbiAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRuRGVsfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVHYW1lKGdhbWUuX2lkKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgRGVsZXRhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ0bkVkaXR9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5FZGl0TW9kYWwoZ2FtZSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEVkaXRhclxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxFZGl0Q29udGVudFxyXG4gICAgICAgIGdhbWU9e3NlbGVjdGVkR2FtZX1cclxuICAgICAgICBpc09wZW49e2lzRWRpdE1vZGFsT3Blbn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRJc0VkaXRNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG9uVXBkYXRlPXtoYW5kbGVVcGRhdGV9XHJcbiAgICAgIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZUNvbnRlbnQ7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJheGlvc0NvbmZpZyIsInN0eWxlcyIsIkVkaXRDb250ZW50IiwiTG9hZGluZyIsIkhvbWVDb250ZW50IiwiZ2FtZXMiLCJzZXRHYW1lcyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2VsZWN0ZWRHYW1lIiwic2V0U2VsZWN0ZWRHYW1lIiwiaXNFZGl0TW9kYWxPcGVuIiwic2V0SXNFZGl0TW9kYWxPcGVuIiwiZmV0Y2hHYW1lcyIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwiY29uc29sZSIsImRlbGV0ZUdhbWUiLCJnYW1lSWQiLCJkZWxldGUiLCJmaWx0ZXIiLCJnYW1lIiwiX2lkIiwiYWxlcnQiLCJvcGVuRWRpdE1vZGFsIiwiaGFuZGxlVXBkYXRlIiwidXBkYXRlZEdhbWUiLCJtYXAiLCJkaXYiLCJjbGFzc05hbWUiLCJob21lQ29udGVudCIsImxpc3RHYW1lc0NhcmQiLCJoMiIsImlkIiwidWwiLCJpbWciLCJzcmMiLCJhbHQiLCJoMyIsInRpdGxlIiwibGkiLCJwbGF0Zm9ybSIsInllYXIiLCJwcmljZSIsInRvTG9jYWxlU3RyaW5nIiwic3R5bGUiLCJjdXJyZW5jeSIsImJ1dHRvbiIsImJ0bkRlbCIsIm9uQ2xpY2siLCJidG5FZGl0IiwiaXNPcGVuIiwib25DbG9zZSIsIm9uVXBkYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/HomeContent/index.js\n"));

/***/ })

});