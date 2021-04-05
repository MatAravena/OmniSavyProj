webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Components/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<div class=\"title\">About Us</div>\n\n  <p class=\"\">\n    OmniSavy is a professional networking company dedicated to empower people with high ethical and professional standards to have a positive impact at a global scale\n  </p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(route) {
        this.route = route;
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about-us',
            template: __webpack_require__("../../../../../src/app/Components/about-us/about-us.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/events/events.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image {\r\n  max-width: 30%;\r\n}\r\n\r\n.imageTest1 {\r\n  content: url(" + escape(__webpack_require__("../../../../../src/assets/ImgTest1.jpg")) + ");\r\n}\r\n\r\n.imageTest2 {\r\n  content: url(" + escape(__webpack_require__("../../../../../src/assets/ImgTest1.jpg")) + ");\r\n}\r\n\r\n.imageTest3 {\r\n  content: url(" + escape(__webpack_require__("../../../../../src/assets/ImgTest1.jpg")) + ");\r\n}\r\n\r\n.butonColor {\r\n  background-color: springgreen;\r\n  border-color: black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"title\">Events</div>\n  <div class=\"subTitle\">Video Gallery</div>\n  <br>\n  <div *ngFor=\"let eve of lstVideos\">\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-sm image imageTest1\"></div>\n      <div class=\"col-sm\">\n          <div class=\"subTitle\"> {{eve.title}}</div>\n          <div class=\"subtitle\"> {{eve.date |date: 'shortDate'}}</div>\n          <div class=\"subtitle\"> {{eve.speakers}}</div>\n          <div class=\"subtitle\"> {{eve.description}}</div><br>\n          <button class=\"btn btn-light butonColor\" [routerLink]=\"['/video', eve.id]\">See details</button>\n      </div>\n    </div>\n  </div>\n  <hr *ngIf=\"lstVideos.length != 0\">\n\n  <!-- <div *ngFor=\"let eve of lstVideos\" class=\"card\" style=\"width: 18rem;\">\n    <div class=\"row\">\n      <div class=\"col-sm image\">\n        <img class=\"card-img-top imageTest1\"  alt=\"Card image cap\">\n      </div>\n      <div class=\"col-sm\">\n        <div class=\"card-body\">\n        <h5 class=\"card-title\">{{eve.title}}</h5>\n        <p class=\"card-text\">{{eve.date |date: 'shortDate'}}</p>\n        <p class=\"card-text\">{{eve.speakers}}</p>\n        <p class=\"card-text\">{{eve.description}}</p>\n        <button class=\"btn btn-light butonColor\" [routerLink]=\"['/video', eve.id]\">See details</button></div>\n      </div>\n    </div>\n  </div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Models_VideoModel__ = __webpack_require__("../../../../../src/app/Models/VideoModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsComponent = /** @class */ (function () {
    function EventsComponent(route) {
        this.route = route;
        this.video = new __WEBPACK_IMPORTED_MODULE_1__Models_VideoModel__["a" /* VideoModel */]();
        this.lstVideos = [];
    }
    EventsComponent.prototype.ngOnInit = function () {
        this.lstVideos.splice(0, this.lstVideos.length);
        this.lstVideos = this.video.listaVideos();
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-events',
            template: __webpack_require__("../../../../../src/app/Components/events/events.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/events/video/video.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image {\r\n  max-width: 30%;\r\n}\r\n\r\n.imageTest1 {\r\n  max-width: 15%;\r\n  content: url(" + escape(__webpack_require__("../../../../../src/assets/ImgTest1.jpg")) + ");\r\n}\r\n\r\n.filaTexto {\r\n  margin-top: auto;\r\n  padding: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/events/video/video.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" >\n  <div *ngIf=\"this.video != null\">\n    \n    <!-- <div class=\"row\">\n      <div class=\"col-sm image imageTest1\"></div>\n    </div>\n    <div class=\"row filaTexto\">\n      <div class=\"subtitle\"> {{this.video.title}}</div><br>\n      <div class=\"subtitle\"> {{this.video.date |date: 'shortDate'}}</div><br>\n      <div class=\"subtitle\"> {{this.video.speakers}}</div><br>\n      <div class=\"subtitle\"> {{this.video.description}}</div>\n    </div> -->\n\n<div class=\"card\" style=\"width: 80%;\">\n  <div class=\"row\">\n    <div class=\"col-sm image\">\n      <img class=\"card-img-top imageTest1\" alt=\"Card image cap\">\n    </div>\n    <div class=\"col-sm\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{this.video.title}}</h5>\n        <p class=\"card-text\">{{this.video.date |date: 'shortDate'}}</p>\n        <p class=\"card-text\">{{this.video.speakers}}</p>\n        <p class=\"card-text\">{{this.video.description}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/Components/events/video/video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Models_VideoModel__ = __webpack_require__("../../../../../src/app/Models/VideoModel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoComponent = /** @class */ (function () {
    function VideoComponent(router, route) {
        this.router = router;
        this.route = route;
        this.video = new __WEBPACK_IMPORTED_MODULE_2__Models_VideoModel__["a" /* VideoModel */]();
    }
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = Number(this.route.snapshot.paramMap.get('id') == "0" ? "0" : this.route.snapshot.paramMap.get('id').toString());
        this.video = this.video.listaVideos().find(function (x) { return x.id == _this.id; });
    };
    VideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-video',
            template: __webpack_require__("../../../../../src/app/Components/events/video/video.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/events/video/video.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\r\n  -ms-flex-item-align: end;\r\n      -ms-grid-row-align: end;\r\n      align-self: end;\r\n  position: relative;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 2.5rem;\r\n  padding-top: 5%;\r\n  margin-bottom: 20px;\r\n}\r\n.footer ul {\r\n  margin-left: 2em;\r\n  list-style-type: none;\r\n  width: 90%;\r\n  text-align: center;\r\n\r\n  /*Removes indentation*/\r\n  margin: 0 auto;\r\n  padding: 0;\r\n  /* border: solid 1px red; */\r\n}\r\n.footer ul > li {\r\n  display: inline-block;\r\n  width: 2em;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n}\r\nfigure {\r\n  display: block;\r\n  margin: 0;\r\n  width: 100%;\r\n  height: auto;\r\n  /* border: solid 1px yellow; */\r\n}\r\nfigure img {\r\n  /* margin-left: auto; */\r\n  padding-left: 5px;\r\n  margin-right: auto;\r\n  /* border: solid 1px pink; */\r\n}\r\nfigcaption {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  border: solid 1px grey;\r\n}\r\n.footerImage {\r\n  width: 50%;\r\n  max-width: 30px;\r\n}\r\n.footerImage.icoFB {\r\n  content: url(data:image/png;base64,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);\r\n}\r\n.footerImage.icoLinkd {\r\n  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE00lEQVR4nO2bbUxTVxjHf+e2lBaYsKLgVBgYUZAXR5jLNs1Qlpk1c27JpokuxmTTiRuJ02TZvi3Zh/Ft+oWAYVmWvZhMkiVbdCYyiVmyV7dFo6CDMRhEsIj1haKltvfsw3ABlNuDlN5b7O9Te8+Tp//zv+et554rmEBR9eESib5D6DwjBblA6sSYOGNYSHqkRrNAazzXsP7s2EJx+0PxxkOOkNu5T0A1oMVcZmzQJTTYfYE9rU2bgjBqQPHGQ46w23kUqDJVXuxosfkCntamTUENIOR27uP+qTxAVdid/CGAKKo+XCKlfprZ2+wnQxdCW6FJ9B3cf5UH0JByu310tFci1WlngduFJgT9V25y/catmZU400i5zj461RmSn53GuxuLWbV8HjbtP7d0Kfm9w8cHTWc533t9xrXOBFKQIwp3fiONgl58Iof3XykjyX73XhLWJbWHWvniRNeMiJxpDPt+XnYq720unbTyADZN8M7LyylcNCfq4mKBoQG7NxTidNgiJkmya+x6bmnURMUSQwMeWzpXOVFZXsa0xZiBoQEuhbt/m6wMJ3Zb/M2mhoo7+tRH927vMKGwPm1BscbQgF/bLysnmkqslTA0oOFoB32+mxGTDFwLsP/rc1ETFUsMDRgOhKipP8nfF/2TxnR5/dTUn+TacHyuCiMuhAAcdo2tVfmsLZvPwkwXuoS+yzc4ccbLZy1dBEPx1/dvo2TAbCb+5q0oc98bYDdbgApOh43i3HSyMpzMcSUxPBLi8lCQbq+ffoVZyghDAx4tyGTLmjylRJ+3dPFHp++O69WeAopy05Vy7D7w27jvpXkZ7PQUsKY0+/+/4RPp8vppOe3lk+86Gbw+ovQ7YzE0YIHbhadigVKi46cuQued1ysKMlm9fN6URLkfcFC7rZynSrIixuZnp/HaujS2VObxcXMn9d+2E9bVx3XLjQGL5qZw8O3VSpUfiyvZxpvrl1K3ayUpyeo921IGpKcm8eneJ3k4696fxVSWZlP3xko0obbPZykDareV85DbNe08jy+by+vPLlGKtZQBa8uyo5ar5vllLMxMiRhnKQOiiU0TbK3Kjxg3aw0AeGlVbsQtPUsuhMK65Mvv/6H5VD9/9Q0BsGzRHDZX5vH0ivnKedKcdh5Z/CA/nx+cNMZyBviGgry6/yf+vDB+N2qw7RI/tF1ip6eAt14oVM5XscRtaIClukBYl1TX/XJH5cdy4GgHrT3XlHOWL3YbllvKgK9+7OVM99WIcQen8BBmXnqyYbnFDOhRijty8gK6VFvupqc6DMstZUD7hSGluJFbOr6hoFJsekqSYbmlDLgZDCnHDlwNKMVFmgYtZYBiqwbgil+tBUTCUgZMhWhtZMatAdEiYYDZAswmYYDZAswmYYDZAswmYYDZAswmYYDZAswmYYDZAswmYYDZAszGcFu82+tXPgXe7b37SbKW0xfpGRieurIIRCtv4pAUEP3bEz/4NSFR24uehQhJryY1ms0WYhpCHNMEWiMQv0c97x1d6LJRO9ew/qyEBrPVxB5Z39a4oVUDsPsCe4AWkxXFDAnHbb6RvTC6EGpt2hS0+QIekHXM7u6gg6xLk/2ecS9Pj6Wo+nAJUm5HynVSkAOkxVxmdPELSS9CHEOIjya+Pv8vMS1w+Xt3w8YAAAAASUVORK5CYII=);\r\n}\r\n.footerImage.icoIG {\r\n  content: url(data:image/png;base64,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);\r\n}\r\n.footerImage.icoTW {\r\n  content: url(data:image/png;base64,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);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\">\n  <ul>\n    <div> © 2020 by OmniSavy UG (haftungsbeschränkt)</div>\n    <li>\n      <a href=\"https://www.linkedin.com/company/omnisavy/\" target=\"_blank\">\n        <figure><img alt=\"LinkedIn\" class=\"footerImage icoLinkd\" /></figure>\n      </a>\n    </li>\n    <li>\n      <a href=\"https://twitter.com/OmniSavy\" target=\"_blank\">\n        <figure><img  alt=\"Twitter\" class=\"footerImage icoTW\" />\n        </figure>\n      </a>\n    </li><li>\n      <a href=\"https://www.facebook.com/OmniSavy\" target=\"_blank\">\n        <figure><img alt=\"Facebook\" class=\"footerImage icoFB\" /></figure>\n      </a>\n    </li><li>\n      <a href=\"https://www.instagram.com/omnisavy/\" target=\"_blank\">\n        <figure><img alt=\"Instagram\"  class=\"footerImage icoIG\" />\n        </figure>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/Components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/Components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".img {\r\n  margin-left: 10px;\r\n  margin-top: 10px;\r\n  /* width: 10%; */\r\n}\r\n\r\n.imageLogo {\r\n  content: url();\r\n}\r\n\r\n.imageLogo {\r\n  content: url(" + escape(__webpack_require__("../../../../../src/assets/ImgTest1.jpg")) + ");\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light headerPrincipal\">\n<a class=\"navbar-brand\" routerLink=\"/welcome\" tooltip=\"Home\">\n  <img class=\"imageLogo\" width=\"45\" height=\"45\" alt=\"\">\n</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse text-align-right\" id=\"navbarText\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/aboutUs\"  >About Us<span class=\"sr-only\"></span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/events\"  >Events</a>\n      </li>\n     </ul>\n  </div>\n</nav>\n\n\n\n<!-- \n<div id=\"menuNormal\" class=\"ui six item inverted menu blackblue margin1\">\n    <a class=\"item active\" data-tab=\"Cliente\"><i class=\"large inverted user icon\"></i><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Clientes</font></font></a>\n    <a class=\"item\" data-tab=\"Producto\"><i class=\"large inverted dolly icon\"></i><font style=\"vertical-align: inherit;\"><font style=\"vertical-align: inherit;\">Productos</font></font></a>\n</div>\n\n<div id=\"menuResponsivo\" class=\"ui menu\">\n    <div class=\"ui container dropdown\">\n        <a class=\"launch icon item\">\n            <i class=\"content icon\"></i>\n        </a>\n        <div class=\"item\">\n            Menu\n        </div>\n        <div class=\"ui pointing vertical menu\">\n            <a class=\"item active\" data-tab=\"Cliente\">\n                Clientes\n            </a>\n            <a class=\"item\" data-tab=\"Producto\">\n                Productos\n            </a> \n        </div>\n    </div>\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/Components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route) {
        this.route = route;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/Components/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Components/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".imageCenter {\r\n  padding: 2%;\r\n  background-color: aquamarine;\r\n  content: url(" + escape(__webpack_require__("../../../../../src/assets/Lg.webp")) + ");\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Components/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div style=\"text-align:center\">\n    <h1> Welcome to OmniSavy </h1>\n    <img class=\"imageCenter\" width=\"300\" alt=\"Angular Logo\">\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Components/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-welcome',
            template: __webpack_require__("../../../../../src/app/Components/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Components/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Models/VideoModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoModel; });
var VideoModel = /** @class */ (function () {
    function VideoModel(id, title, date, speakers, description) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.speakers = speakers;
        this.description = description;
    }
    VideoModel.prototype.listaVideos = function () {
        var list = [];
        list.push(new VideoModel(1, "First Event", new Date(), "Sandra", "Charla super interesante"));
        list.push(new VideoModel(2, "Second Event", new Date(), "Sofia", "Charla mas o menos interesante"));
        list.push(new VideoModel(3, "Third Event", new Date(), "Josefina", "Charla no tan interesante"));
        return list;
    };
    return VideoModel;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Components_events_events_component__ = __webpack_require__("../../../../../src/app/Components/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_about_us_about_us_component__ = __webpack_require__("../../../../../src/app/Components/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/Components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_events_video_video_component__ = __webpack_require__("../../../../../src/app/Components/events/video/video.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_2__Components_events_events_component__["a" /* EventsComponent */] },
    { path: 'aboutUs', component: __WEBPACK_IMPORTED_MODULE_3__Components_about_us_about_us_component__["a" /* AboutUsComponent */] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_4__Components_welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'video', component: __WEBPACK_IMPORTED_MODULE_5__Components_events_video_video_component__["a" /* VideoComponent */] },
    { path: 'video/:id', component: __WEBPACK_IMPORTED_MODULE_5__Components_events_video_video_component__["a" /* VideoComponent */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, {
                    useHash: true
                    //    , enableTracing: true
                })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\r\n  font-size: larger;\r\n  font-weight: bold;\r\n  text-align: left;\r\n}\r\n\r\n.subTitle {\r\n  font-size: large;\r\n  text-align: center;\r\n}\r\n\r\n.text {\r\n  font-size: medium;\r\n  text-align: justify;\r\n  text-justify: inter-word;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <app-header></app-header>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_header_header_component__ = __webpack_require__("../../../../../src/app/Components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_footer_footer_component__ = __webpack_require__("../../../../../src/app/Components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_about_us_about_us_component__ = __webpack_require__("../../../../../src/app/Components/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Components_events_events_component__ = __webpack_require__("../../../../../src/app/Components/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Components_welcome_welcome_component__ = __webpack_require__("../../../../../src/app/Components/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Components_events_video_video_component__ = __webpack_require__("../../../../../src/app/Components/events/video/video.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__Components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_6__Components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Components_about_us_about_us_component__["a" /* AboutUsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__Components_events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__Components_welcome_welcome_component__["a" /* WelcomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__Components_events_video_video_component__["a" /* VideoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/assets/ImgTest1.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ImgTest1.e0bad63364a867fea652.jpg";

/***/ }),

/***/ "../../../../../src/assets/Lg.webp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Lg.9c3a0692bd08716858aa.webp";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map