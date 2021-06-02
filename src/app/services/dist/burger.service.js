"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BurgerService = void 0;
var core_1 = require("@angular/core");
var BurgerService = /** @class */ (function () {
    function BurgerService() {
        var _this = this;
        this.path = "../../../assets/";
        this.ingridients = [
            { name: 'Tomato', count: 0, img: this.path + 'tomato.JPG', price: 3 },
            { name: 'Lettuce', count: 0, img: this.path + 'lettuce.JPG', price: 2 },
            { name: 'Onion', count: 0, img: this.path + 'onion.JPG', price: 1 },
            { name: 'Cheese', count: 0, img: this.path + 'cheese.JPG', price: 4 },
            { name: 'Meat', count: 0, img: this.path + 'meat.JPG', price: 5 }
        ];
        this.price = 0;
        this.ingridients.forEach(function (i) {
            _this.addRemoveFromPrice(i.count * i.price);
        });
    }
    BurgerService.prototype.addRemoveFromPrice = function (price) {
        this.price += price;
    };
    BurgerService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], BurgerService);
    return BurgerService;
}());
exports.BurgerService = BurgerService;
