/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_sheep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/sheep */ \"./models/sheep.ts\");\n/* harmony import */ var _models_supersheep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/supersheep */ \"./models/supersheep.ts\");\n/* harmony import */ var _models_tournament__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/tournament */ \"./models/tournament.ts\");\n\r\n\r\n\r\nvar jacquie = new _models_supersheep__WEBPACK_IMPORTED_MODULE_1__[\"SuperSheep\"](\"Jacquie\", _models_sheep__WEBPACK_IMPORTED_MODULE_0__[\"SheepColors\"].White);\r\nvar michel = new _models_supersheep__WEBPACK_IMPORTED_MODULE_1__[\"SuperSheep\"](\"Michel\", _models_sheep__WEBPACK_IMPORTED_MODULE_0__[\"SheepColors\"].Pink);\r\nvar paul = new _models_sheep__WEBPACK_IMPORTED_MODULE_0__[\"Sheep\"](\"Paul\", _models_sheep__WEBPACK_IMPORTED_MODULE_0__[\"SheepColors\"].Black);\r\nvar victor = new _models_sheep__WEBPACK_IMPORTED_MODULE_0__[\"Sheep\"](\"Victor\", _models_sheep__WEBPACK_IMPORTED_MODULE_0__[\"SheepColors\"].Red);\r\nvar hugo = new _models_sheep__WEBPACK_IMPORTED_MODULE_0__[\"Sheep\"](\"Hugo\", _models_sheep__WEBPACK_IMPORTED_MODULE_0__[\"SheepColors\"].Yellow);\r\nvar tourney = new _models_tournament__WEBPACK_IMPORTED_MODULE_2__[\"Tournament\"](jacquie, michel, paul, victor, hugo);\r\ntourney.start();\r\n\n\n//# sourceURL=webpack:///./app.ts?");

/***/ }),

/***/ "./models/sheep.ts":
/*!*************************!*\
  !*** ./models/sheep.ts ***!
  \*************************/
/*! exports provided: SheepColors, Sheep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SheepColors\", function() { return SheepColors; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sheep\", function() { return Sheep; });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ \"./utilities.ts\");\n\r\nvar SheepColors;\r\n(function (SheepColors) {\r\n    SheepColors[\"White\"] = \"White\";\r\n    SheepColors[\"Black\"] = \"Black\";\r\n    SheepColors[\"Red\"] = \"Red\";\r\n    SheepColors[\"Yellow\"] = \"Yellow\";\r\n    SheepColors[\"Pink\"] = \"Pink\";\r\n})(SheepColors || (SheepColors = {}));\r\nvar Sheep = /** @class */ (function () {\r\n    function Sheep(name, color) {\r\n        this.name = name;\r\n        this.color = color;\r\n        this.size = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"getRandomBetweenValues\"])(1, 100);\r\n        this.health = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"getRandomBetweenValues\"])(30, 50);\r\n        this.attack = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"getRandomBetweenValues\"])(5, 15);\r\n        this.defense = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"getRandomBetweenValues\"])(0, 5);\r\n        this.greetText = \"Hello, my name is \" + this.name;\r\n    }\r\n    Sheep.prototype.greet = function () {\r\n        console.log(this.greetText);\r\n    };\r\n    Sheep.prototype.takeDamage = function (damage) {\r\n        var actualDamage = damage - this.defense;\r\n        if (actualDamage < 0)\r\n            actualDamage = 0;\r\n        console.log(this.name + \" takes \" + actualDamage);\r\n        this.health -= actualDamage;\r\n    };\r\n    Sheep.prototype.dealDamage = function (sheep) {\r\n        console.log(sheep.name + \" attacks \" + this.name + \".\");\r\n        sheep.takeDamage(this.attack);\r\n    };\r\n    Sheep.prototype.displayTraits = function () {\r\n        var message = \"Name: \" + this.name + \"\\n\";\r\n        message += \"Color: \" + this.color + \"\\n\";\r\n        message += \"Size: \" + this.size + \"\\n\";\r\n        message += \"Health: \" + this.health + \"\\n\";\r\n        message += \"Attack: \" + this.attack + \"\\n\";\r\n        message += \"Defense: \" + this.defense;\r\n        console.log(message);\r\n    };\r\n    Sheep.prototype.isAlive = function () {\r\n        return this.health > 0;\r\n    };\r\n    return Sheep;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./models/sheep.ts?");

/***/ }),

/***/ "./models/supersheep.ts":
/*!******************************!*\
  !*** ./models/supersheep.ts ***!
  \******************************/
/*! exports provided: SuperSheep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SuperSheep\", function() { return SuperSheep; });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ \"./utilities.ts\");\n/* harmony import */ var _sheep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sheep */ \"./models/sheep.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\n\r\nvar SuperSheep = /** @class */ (function (_super) {\r\n    __extends(SuperSheep, _super);\r\n    function SuperSheep(name, color) {\r\n        var _this = _super.call(this, name, color) || this;\r\n        _this.defense += Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"getRandomBetweenValues\"])(3, 6);\r\n        _this.attack += Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"getRandomBetweenValues\"])(1, 3);\r\n        return _this;\r\n    }\r\n    SuperSheep.prototype.greet = function () {\r\n        console.log(this.greetText + \" and I am a SuperSheep\");\r\n    };\r\n    return SuperSheep;\r\n}(_sheep__WEBPACK_IMPORTED_MODULE_1__[\"Sheep\"]));\r\n\r\n\n\n//# sourceURL=webpack:///./models/supersheep.ts?");

/***/ }),

/***/ "./models/tournament.ts":
/*!******************************!*\
  !*** ./models/tournament.ts ***!
  \******************************/
/*! exports provided: Tournament */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Tournament\", function() { return Tournament; });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ \"./utilities.ts\");\n\r\nvar Tournament = /** @class */ (function () {\r\n    function Tournament() {\r\n        var sheeps = [];\r\n        for (var _i = 0; _i < arguments.length; _i++) {\r\n            sheeps[_i] = arguments[_i];\r\n        }\r\n        this.sheeps = sheeps;\r\n    }\r\n    Tournament.prototype.start = function () {\r\n        console.log(\"The tournament is starting!\");\r\n        var sheepNb = this.sheeps.length;\r\n        while (this.sheeps.length > 1) {\r\n            for (var _i = 0, _a = this.sheeps; _i < _a.length; _i++) {\r\n                var sheep = _a[_i];\r\n                var targetIndex = void 0;\r\n                var target = sheep;\r\n                while (target == sheep) {\r\n                    targetIndex = Object(_utilities__WEBPACK_IMPORTED_MODULE_0__[\"getRandomBetweenValues\"])(0, sheepNb - 1);\r\n                    target = this.sheeps[targetIndex];\r\n                }\r\n                sheep.dealDamage(target);\r\n                if (target.isAlive() == false) {\r\n                    this.sheeps.splice(targetIndex, 1);\r\n                    sheepNb--;\r\n                }\r\n            }\r\n        }\r\n        var winner = this.sheeps[0];\r\n        console.log(\"The winner is \" + winner.name);\r\n    };\r\n    return Tournament;\r\n}());\r\n\r\n\n\n//# sourceURL=webpack:///./models/tournament.ts?");

/***/ }),

/***/ "./utilities.ts":
/*!**********************!*\
  !*** ./utilities.ts ***!
  \**********************/
/*! exports provided: getRandomBetweenValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRandomBetweenValues\", function() { return getRandomBetweenValues; });\nfunction getRandomBetweenValues(min, max) {\r\n    return Math.floor(Math.random() * (max - min + 1) + min);\r\n}\r\n\n\n//# sourceURL=webpack:///./utilities.ts?");

/***/ })

/******/ });