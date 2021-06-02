"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.IngredientsComponent = void 0;
var core_1 = require("@angular/core");
var IngredientsComponent = /** @class */ (function () {
    function IngredientsComponent(burgerService) {
        this.burgerService = burgerService;
    }
    IngredientsComponent.prototype.ngOnInit = function () {
    };
    IngredientsComponent.prototype.getIngridents = function () {
        return this.burgerService.ingridients;
    };
    IngredientsComponent.prototype.getQuantity = function (count) {
        return Array(count);
    };
    IngredientsComponent.prototype.getClassName = function (ingridName) {
        return [ingridName.toLowerCase()];
    };
    IngredientsComponent = __decorate([
        core_1.Component({
            selector: 'app-ingredients',
            templateUrl: './ingredients.component.html',
            styleUrls: ['./ingredients.component.css']
        })
    ], IngredientsComponent);
    return IngredientsComponent;
}());
exports.IngredientsComponent = IngredientsComponent;
