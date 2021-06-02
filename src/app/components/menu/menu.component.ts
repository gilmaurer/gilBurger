import { Component, OnInit } from '@angular/core';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private burgerService: BurgerService) { }

  ngOnInit(): void {
  }

  getIngrids() {
    return this.burgerService.ingridients
  }

  removeIngridient(ingridName: string, price: number) {
    this.burgerService.ingridients.find(i => i.name === ingridName).count--;
    this.burgerService.addRemoveFromPrice(price);
    
  }

  addIngridient(ingridName: string, price: number) {
    this.burgerService.ingridients.find(i => i.name === ingridName).count++;
    this.burgerService.addRemoveFromPrice(price);
  }

  getQuantity(count: number) {
    return Array(count);
  }

  getTotalPrice() {
    return this.burgerService.price;
  }
}
