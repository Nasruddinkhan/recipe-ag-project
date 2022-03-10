import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] | undefined;
  private subscription!: Subscription;
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          console.log('ingredientsChanged', ingredients);
          this.ingredients = ingredients;
        }
      );
  }

  editIngredient(idx: number): void {
    this.slService.startEditing.next(idx);
  }
  ngOnDestroy(): void {
    console.log('call the ngOnDestroy');
    this.subscription.unsubscribe();
  }

}
