import { Component, OnInit } from '@angular/core';
import { BurgerService } from 'src/app/services/burger.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  constructor(private burgerService:BurgerService) { }

  ngOnInit(): void {
  }

  getIngridents() {
    return this.burgerService.ingridients;
  }

  getQuantity(count: number) {
    return Array(count);
  }

  getClassName(ingridName:string) {
    return [ingridName.toLowerCase()];
  }

}
