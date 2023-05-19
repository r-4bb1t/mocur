"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: \"319095308496-unc509f2mbcqc7gl24vh9hflmcha41a2.apps.googleusercontent.com\",\n            clientSecret: \"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\"\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    site: process.env.NEXTAUTH_URL,\n    session: {\n        jwt: true\n    },\n    callbacks: {\n        async signIn ({ account , profile  }) {\n            if (account.provider === \"google\") {\n                return profile.email_verified && profile.email.endsWith(\"@gmail.com\");\n            }\n            return true; // Do different verification for other providers that don't have `email_verified`\n        },\n        session: async ({ session , token  })=>{\n            session.id = token.id;\n            session.jwt = token.jwt;\n            session.user.username = token.username; /* ### */ \n            return Promise.resolve(session);\n        }\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQ3VCO0FBRXhELGlFQUFlQSxnREFBUUEsQ0FBQztJQUN0QkUsV0FBVztRQUNURCxpRUFBY0EsQ0FBQztZQUNiRSxVQUFVQywwRUFBaUM7WUFDM0NHLGNBQWNILHFDQUFxQztRQUNyRDtLQUNEO0lBQ0RLLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0ssZUFBZTtJQUNuQ0MsTUFBTVAsUUFBUUMsR0FBRyxDQUFDTyxZQUFZO0lBQzlCQyxTQUFTO1FBQ1BDLEtBQUssSUFBSTtJQUNYO0lBQ0FDLFdBQVc7UUFDVCxNQUFNQyxRQUFPLEVBQUVDLFFBQU8sRUFBRUMsUUFBTyxFQUFFLEVBQUU7WUFDakMsSUFBSUQsUUFBUUUsUUFBUSxLQUFLLFVBQVU7Z0JBQ2pDLE9BQU9ELFFBQVFFLGNBQWMsSUFBSUYsUUFBUUcsS0FBSyxDQUFDQyxRQUFRLENBQUM7WUFDMUQsQ0FBQztZQUNELE9BQU8sSUFBSSxFQUFFLGlGQUFpRjtRQUNoRztRQUNBVCxTQUFTLE9BQU8sRUFBRUEsUUFBTyxFQUFFVSxNQUFLLEVBQUUsR0FBSztZQUNyQ1YsUUFBUVcsRUFBRSxHQUFHRCxNQUFNQyxFQUFFO1lBQ3JCWCxRQUFRQyxHQUFHLEdBQUdTLE1BQU1ULEdBQUc7WUFDdkJELFFBQVFZLElBQUksQ0FBQ0MsUUFBUSxHQUFHSCxNQUFNRyxRQUFRLEVBQUUsT0FBTztZQUUvQyxPQUFPQyxRQUFRQyxPQUFPLENBQUNmO1FBQ3pCO0lBQ0Y7QUFDRixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tb2N1ci8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfSUQsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX1NFQ1JFVCxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXHJcbiAgc2l0ZTogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMLFxyXG4gIHNlc3Npb246IHtcclxuICAgIGp3dDogdHJ1ZSxcclxuICB9LFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2lnbkluKHsgYWNjb3VudCwgcHJvZmlsZSB9KSB7XHJcbiAgICAgIGlmIChhY2NvdW50LnByb3ZpZGVyID09PSBcImdvb2dsZVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb2ZpbGUuZW1haWxfdmVyaWZpZWQgJiYgcHJvZmlsZS5lbWFpbC5lbmRzV2l0aChcIkBnbWFpbC5jb21cIik7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRydWU7IC8vIERvIGRpZmZlcmVudCB2ZXJpZmljYXRpb24gZm9yIG90aGVyIHByb3ZpZGVycyB0aGF0IGRvbid0IGhhdmUgYGVtYWlsX3ZlcmlmaWVkYFxyXG4gICAgfSxcclxuICAgIHNlc3Npb246IGFzeW5jICh7IHNlc3Npb24sIHRva2VuIH0pID0+IHtcclxuICAgICAgc2Vzc2lvbi5pZCA9IHRva2VuLmlkO1xyXG4gICAgICBzZXNzaW9uLmp3dCA9IHRva2VuLmp3dDtcclxuICAgICAgc2Vzc2lvbi51c2VyLnVzZXJuYW1lID0gdG9rZW4udXNlcm5hbWU7IC8qICMjIyAqL1xyXG5cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZXNzaW9uKTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiTkVYVF9QVUJMSUNfR09PR0xFX1NFQ1JFVCIsInNlY3JldCIsIk5FWFRBVVRIX1NFQ1JFVCIsInNpdGUiLCJORVhUQVVUSF9VUkwiLCJzZXNzaW9uIiwiand0IiwiY2FsbGJhY2tzIiwic2lnbkluIiwiYWNjb3VudCIsInByb2ZpbGUiLCJwcm92aWRlciIsImVtYWlsX3ZlcmlmaWVkIiwiZW1haWwiLCJlbmRzV2l0aCIsInRva2VuIiwiaWQiLCJ1c2VyIiwidXNlcm5hbWUiLCJQcm9taXNlIiwicmVzb2x2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();