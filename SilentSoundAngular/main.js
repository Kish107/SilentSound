(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _channel_channel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./channel/channel.component */ "./src/app/channel/channel.component.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: "channel/:id", component: _channel_channel_component__WEBPACK_IMPORTED_MODULE_2__["ChannelComponent"] },
    { path: "", component: _summary_summary_component__WEBPACK_IMPORTED_MODULE_3__["SummaryComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"appContainer\">\r\n\r\n    <nav class=\"navigation\">\r\n        <li><img src=\"assets/NavyIcon.jpg\" /></li>\r\n        <li *ngFor=\"let channel of channels\">\r\n            <a  routerLink=\"/channel/{{ channel.id }}\" \r\n                routerLinkActive=\"active\" \r\n                [routerLinkActiveOptions]=\"{ exact: true }\">\r\n                ערוץ {{ channel.id }}\r\n            </a>\r\n        </li>\r\n        <li><a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">סיכום</a></li>\r\n    </nav>\r\n    \r\n    <div class=\"pageContainer\">        \r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav.navigation {\n  background: #151f54;\n  display: flex;\n  justify-content: space-around;\n  align-items: center; }\n  nav.navigation li {\n    list-style: none; }\n  nav.navigation li img {\n      height: 60px; }\n  nav.navigation li a {\n      color: #fff;\n      text-decoration: none;\n      display: block;\n      border-bottom: 1px solid #151f54;\n      padding: 30px 20px; }\n  nav.navigation li a:hover {\n        background: #00A8FF; }\n  nav.navigation li a.active {\n        background: #00A8FF;\n        border-bottom: none; }\n  nav.navigation li a.success {\n        background: #00C851 !important; }\n  .pageContainer {\n  background: white;\n  overflow: auto;\n  padding: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXERldlRvb2xzXFxXb3Jrc3BhY2VcXHF1aWVudF9ub2lzZV91aS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DOlxcRGV2VG9vbHNcXFdvcmtzcGFjZVxccXVpZW50X25vaXNlX3VpL3NyY1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksb0JDRmU7RURHZixjQUFhO0VBQ2IsOEJBQTZCO0VBQzdCLG9CQUFtQixFQThCdEI7RUFsQ0Q7SUFPUSxpQkFBZ0IsRUEwQm5CO0VBakNMO01BVVksYUFBWSxFQUNmO0VBWFQ7TUFjWSxZQ2RBO01EZUEsc0JBQXFCO01BQ3JCLGVBQWM7TUFDZCxpQ0NsQk87TURtQlAsbUJBQWtCLEVBY3JCO0VBaENUO1FBcUJnQixvQkN2QkMsRUR3Qko7RUF0QmI7UUF5QmdCLG9CQzNCQztRRDRCRCxvQkFBbUIsRUFDdEI7RUEzQmI7UUE4QmdCLCtCQUErQixFQUNsQztFQUtiO0VBQ0ksa0JBQWlCO0VBQ2pCLGVBQWM7RUFDZCxjQUFhLEVBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uL3ZhcmlhYmxlc1wiO1xyXG5cclxubmF2Lm5hdmlnYXRpb24ge1xyXG4gICAgYmFja2dyb3VuZDogJHNlY29uZGFyeTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7IFxyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHNlY29uZGFyeTtcclxuICAgICAgICAgICAgcGFkZGluZzogMzBweCAyMHB4O1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkcHJpbWFyeTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLnN1Y2Nlc3Mge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJHN1Y2Nlc3MgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnBhZ2VDb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn0iLCIkcHJpbWFyeTogIzAwQThGRjtcclxuJHNlY29uZGFyeTogIzE1MWY1NDtcclxuJHdoaXRlOiAjZmZmO1xyXG4kZ3JleTogI2VlZTtcclxuJGVycm9yOiAjZmY0NDQ0O1xyXG4kd2FybmluZzogI2ZmYmIzMztcclxuJHN1Y2Nlc3M6ICMwMEM4NTE7Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Quiet Noise';
        this.channels = [
            { id: 1, status: 1 },
            { id: 2, status: 2 },
            { id: 3, status: 3 },
            { id: 4 },
            { id: 5 }
        ];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _channel_channel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./channel/channel.component */ "./src/app/channel/channel.component.ts");
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary/summary.component */ "./src/app/summary/summary.component.ts");
/* harmony import */ var _web_service_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web-service-provider.service */ "./src/app/web-service-provider.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _channel_channel_component__WEBPACK_IMPORTED_MODULE_4__["ChannelComponent"],
                _summary_summary_component__WEBPACK_IMPORTED_MODULE_5__["SummaryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"]
            ],
            providers: [_web_service_provider_service__WEBPACK_IMPORTED_MODULE_6__["WebServiceProviderService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/channel/channel.component.html":
/*!************************************************!*\
  !*** ./src/app/channel/channel.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"f.form.valid && registerEvent(f)\" #f=\"ngForm\" novalidate>\n  <div class=\"table_container\">\n\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>פרמטרים</th>\n          <th>תיוג (מפעיל)</th>\n          <th>סיווג מכונה</th>\n          <th>וודאות</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let prop of channel.properties;let index = index;trackBy:trackByIndex;\">\n          <td>{{ prop.name }}</td>\n          <td>\n              <input type=\"text\" [ngModel]=\"prop.data\" [name]=\"'user_'+prop.name\">\n              <input type=\"hidden\" [ngModel]=\"prop.data\" [name]=\"'algo_'+prop.name\">\n            </td>\n          <td>{{ prop.data }}</td>\n          <td>{{ prop.confidence }}</td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n  <div class=\"side_task\">\n\n    <textarea placeholder=\"הערות ...\"></textarea>\n\n    <button class=\"startRecord\" *ngIf=\"record == false\" (click)=\"startRecord(); $event.preventDefault();\">התחל הקלטה</button>\n    <button class=\"stopRecord\" *ngIf=\"record == true\" (click)=\"stopRecord(); $event.preventDefault();\">הפסק הקלטה</button>\n    <button class=\"registerEvent\" *ngIf=\"record == true\" type=\"submit\">רישום תיוג</button>\n\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/channel/channel.component.scss":
/*!************************************************!*\
  !*** ./src/app/channel/channel.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table_container {\n  width: 66%;\n  display: inline-block; }\n\n.side_task {\n  width: 30%;\n  display: inline-block;\n  vertical-align: top;\n  padding: 10px; }\n\n.side_task textarea {\n    width: calc(100% - 1.5rem);\n    margin: 10px; }\n\n.side_task .startRecord, .side_task .stopRecord {\n    background: #ff5e5e;\n    border: 1px solid #ff4444;\n    color: #fff;\n    font-size: 14px;\n    padding: 10px;\n    cursor: pointer;\n    border-radius: 5px;\n    display: block;\n    width: 100%;\n    margin: 10px; }\n\n.side_task .startRecord:hover, .side_task .stopRecord:hover {\n      background: #ff4444; }\n\n.side_task .registerEvent {\n    background: #0aabff;\n    border: 1px solid #00A8FF;\n    color: #fff;\n    font-size: 14px;\n    padding: 10px;\n    cursor: pointer;\n    border-radius: 5px;\n    display: block;\n    width: 100%;\n    margin: 10px; }\n\n.side_task .registerEvent:hover {\n      background: #00A8FF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhbm5lbC9DOlxcRGV2VG9vbHNcXFdvcmtzcGFjZVxccXVpZW50X25vaXNlX3VpL3NyY1xcYXBwXFxjaGFubmVsXFxjaGFubmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGFubmVsL0M6XFxEZXZUb29sc1xcV29ya3NwYWNlXFxxdWllbnRfbm9pc2VfdWkvc3JjXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFVO0VBQ1Ysc0JBQXFCLEVBQ3hCOztBQUVEO0VBQ0ksV0FBVTtFQUNWLHNCQUFxQjtFQUNyQixvQkFBbUI7RUFDbkIsY0FBYSxFQXlDaEI7O0FBN0NEO0lBT1EsMkJBQTBCO0lBQzFCLGFBQVksRUFDZjs7QUFUTDtJQVlRLG9CQUErQztJQUMvQywwQkNoQk87SURpQlAsWUNuQkk7SURvQkosZ0JBQWU7SUFDZixjQUFhO0lBQ2IsZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIsZUFBYztJQUNkLFlBQVc7SUFDWCxhQUFZLEVBS2Y7O0FBMUJMO01Bd0JZLG9CQzNCRyxFRDRCTjs7QUF6QlQ7SUE2QlEsb0JBQWlEO0lBQ2pELDBCQ3JDUztJRHNDVCxZQ3BDSTtJRHFDSixnQkFBZTtJQUNmLGNBQWE7SUFDYixnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixlQUFjO0lBQ2QsWUFBVztJQUNYLGFBQVksRUFLZjs7QUEzQ0w7TUF5Q1ksb0JDaERLLEVEaURSIiwiZmlsZSI6InNyYy9hcHAvY2hhbm5lbC9jaGFubmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL3ZhcmlhYmxlc1wiO1xyXG5cclxuLnRhYmxlX2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNjYlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc2lkZV90YXNrIHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuNXJlbSk7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGFydFJlY29yZCwgLnN0b3BSZWNvcmQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJGNvbG9yOiAkZXJyb3IsICRhbW91bnQ6IDUpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRlcnJvcjtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJGVycm9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXJFdmVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGlnaHRlbigkY29sb3I6ICRwcmltYXJ5LCAkYW1vdW50OiAyKTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeTtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHByaW1hcnk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSIsIiRwcmltYXJ5OiAjMDBBOEZGO1xyXG4kc2Vjb25kYXJ5OiAjMTUxZjU0O1xyXG4kd2hpdGU6ICNmZmY7XHJcbiRncmV5OiAjZWVlO1xyXG4kZXJyb3I6ICNmZjQ0NDQ7XHJcbiR3YXJuaW5nOiAjZmZiYjMzO1xyXG4kc3VjY2VzczogIzAwQzg1MTsiXX0= */"

/***/ }),

/***/ "./src/app/channel/channel.component.ts":
/*!**********************************************!*\
  !*** ./src/app/channel/channel.component.ts ***!
  \**********************************************/
/*! exports provided: ChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelComponent", function() { return ChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _web_service_provider_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../web-service-provider.service */ "./src/app/web-service-provider.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChannelComponent = /** @class */ (function () {
    function ChannelComponent(route, webservice) {
        var _this = this;
        this.route = route;
        this.webservice = webservice;
        this.record = false;
        this.channel = null;
        this.route.params.subscribe(function (params) {
            _this.channel = {
                id: params.id,
            };
            // Run model
            _this.webservice.getModels(_this.channel.id).subscribe(function (data) {
                for (var prop in data) {
                    _this.channel.properties.push({ name: prop, data: data[prop] });
                }
            }, function (err) {
                _this.channel.properties = [];
            });
            var interval = setInterval(function () {
                _this.webservice.getModels(_this.channel.id).subscribe(function (data) {
                    for (var prop in data) {
                        _this.channel.properties.push({ name: prop, data: data[prop] });
                    }
                }, function (err) {
                    _this.channel.properties = [];
                });
            }, 5000);
        });
    }
    ChannelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (parmaps) {
            if (parmaps) {
                (function (data) { return _this.channel = data; });
            }
        });
    };
    ChannelComponent.prototype.startRecord = function () {
        var _this = this;
        console.log(this.channel.id);
        this.webservice.startRecord(this.channel.id).subscribe(function (data) {
            _this.record = true;
        }, function (err) {
            _this.record = false;
            console.log(err);
        });
    };
    ChannelComponent.prototype.stopRecord = function () {
        var _this = this;
        this.webservice.stopRecord(this.channel.id).subscribe(function (data) {
            _this.record = false;
        }, function (err) {
            _this.record = true;
            console.log(err);
        });
    };
    ChannelComponent.prototype.registerEvent = function (f) {
        var formValues = f.form.value;
        this.webservice.postEvent(this.channel.id, formValues).subscribe(function (data) {
            alert("Posted");
        }, function (err) {
            alert("Error");
            console.log(err);
        });
    };
    ChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-channel',
            template: __webpack_require__(/*! ./channel.component.html */ "./src/app/channel/channel.component.html"),
            styles: [__webpack_require__(/*! ./channel.component.scss */ "./src/app/channel/channel.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _web_service_provider_service__WEBPACK_IMPORTED_MODULE_2__["WebServiceProviderService"]])
    ], ChannelComponent);
    return ChannelComponent;
}());



/***/ }),

/***/ "./src/app/summary/summary.component.html":
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate> -->\r\n  <form>\r\n    <div class=\"table_container\">\r\n  \r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th>פרמטרים</th>\r\n            <th>ערוץ 1</th>\r\n            <th>ערוץ 2</th>\r\n            <th>ערוץ 3</th>\r\n            <th>ערוץ 4</th>\r\n            <th>ערוץ 5</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let prop of channel.properties\">\r\n            <td>{{ prop.name }}</td>\r\n            <td>{{ prop.data }}</td>\r\n            <td>{{ prop.data }}</td>\r\n            <td>{{ prop.data }}</td>\r\n            <td>{{ prop.data }}</td>\r\n            <td>{{ prop.data }}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n  \r\n    </div>\r\n    <div class=\"side_task\">\r\n  \r\n      <button class=\"startRecord\" *ngIf=\"record == false\" (click)=\"startRecord()\">התחל הקלטה</button>\r\n      <button class=\"stopRecord\" *ngIf=\"record == true\" (click)=\"stopRecord()\">הפסק הקלטה</button>\r\n      <button class=\"registerEvent\" *ngIf=\"record == true\" type=\"submit\">רישום תיוג</button>\r\n  \r\n    </div>\r\n  </form>\r\n  "

/***/ }),

/***/ "./src/app/summary/summary.component.scss":
/*!************************************************!*\
  !*** ./src/app/summary/summary.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1bW1hcnkvc3VtbWFyeS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/summary/summary.component.ts":
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/*! exports provided: SummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryComponent", function() { return SummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SummaryComponent = /** @class */ (function () {
    function SummaryComponent(route) {
        var _this = this;
        this.route = route;
        this.channel = null;
        this.route.params.subscribe(function (params) { return _this.channel = {
            id: params.id,
            properties: [
                { name: 'param 1', data: '4', confidence: 0.8 },
                { name: 'param 2', data: '1', confidence: 0.8 },
                { name: 'param 3', data: '0.7', confidence: 0.8 },
                { name: 'param 4', data: '3', confidence: 0.8 },
                { name: 'param 5', data: '2', confidence: 0.8 },
                { name: 'param 6', data: '1', confidence: 0.8 },
                { name: 'param 7', data: '0.1', confidence: 0.8 },
                { name: 'param 8', data: '1', confidence: 0.8 },
                { name: 'param 9', data: '0', confidence: 0.8 },
                { name: 'param 10', data: '3', confidence: 0.8 },
            ]
        }; });
    }
    SummaryComponent.prototype.ngOnInit = function () {
    };
    SummaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-summary',
            template: __webpack_require__(/*! ./summary.component.html */ "./src/app/summary/summary.component.html"),
            styles: [__webpack_require__(/*! ./summary.component.scss */ "./src/app/summary/summary.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "./src/app/web-service-provider.service.ts":
/*!*************************************************!*\
  !*** ./src/app/web-service-provider.service.ts ***!
  \*************************************************/
/*! exports provided: WebServiceProviderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebServiceProviderService", function() { return WebServiceProviderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebServiceProviderService = /** @class */ (function () {
    function WebServiceProviderService(http) {
        this.http = http;
        this.baseUrl = "http://localhost:5000";
    }
    WebServiceProviderService.prototype.startRecord = function (channel) {
        return this.http.post(this.baseUrl + "/StartRecord?Channel=" + channel, {});
    };
    WebServiceProviderService.prototype.stopRecord = function (channel) {
        return this.http.post(this.baseUrl + "/StopRecord?Channel=" + channel, {});
    };
    WebServiceProviderService.prototype.getAllChannels = function () {
        return this.http.get(this.baseUrl + "/GetChannels");
    };
    WebServiceProviderService.prototype.getChannelAI = function (channel) {
        return this.http.get(this.baseUrl + "/channel/ai/" + channel);
    };
    WebServiceProviderService.prototype.getLastChannelEvent = function (channel) {
        return this.http.get(this.baseUrl + "/channel/events/" + channel);
    };
    WebServiceProviderService.prototype.postEvent = function (channel, parameters) {
        return this.http.post(this.baseUrl + "/TagRecording?" +
            Object.keys(parameters).map(function (key) {
                return encodeURIComponent(key) + '=' +
                    encodeURIComponent(parameters[key]);
            }).join('&'), {});
    };
    WebServiceProviderService.prototype.getModels = function (channel) {
        return this.http.get(this.baseUrl + "/GetModelData?Channel=" + channel);
    };
    WebServiceProviderService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WebServiceProviderService);
    return WebServiceProviderService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\DevTools\Workspace\quient_noise_ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map