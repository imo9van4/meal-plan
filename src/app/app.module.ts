import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JournalEntryComponent } from './journal-entry/journal-entry.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { NextMealComponent } from './next-meal/next-meal.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { WeeklyPlannerComponent } from './weekly-planner/weekly-planner.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule ],
  declarations: [ 
    AppComponent,
    JournalEntryComponent,
    NewRecipeComponent,
    NextMealComponent,
    ShoppingListComponent,
    WeeklyPlannerComponent,
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
