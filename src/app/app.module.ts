import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DisplayComponent } from './components/display/display.component';
import { IngredientsComponent } from './components/display/ingredients/ingredients.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DisplayComponent,
    IngredientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
