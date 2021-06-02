import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  path = "../../../assets/";

  ingridients = [
    { name: 'Tomato', count: 0, img: this.path + 'tomato.JPG', price: 3},
    { name: 'Lettuce', count: 0, img: this.path + 'lettuce.JPG', price: 2},
    { name: 'Onion', count: 0, img: this.path + 'onion.JPG', price: 1 },
    { name: 'Cheese', count: 0, img: this.path + 'cheese.JPG', price: 4 },
    { name: 'Meat', count: 0, img: this.path + 'meat.JPG', price: 5 }];

    price = 0;

  constructor() {
    this.ingridients.forEach((i) => {
      this.addRemoveFromPrice(i.count * i.price)
    })
   }

    addRemoveFromPrice(price: number) {
     this.price += price
    }
}
