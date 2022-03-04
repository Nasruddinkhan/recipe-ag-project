import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  isShow: boolean = false;

  @Input()
  recipe!: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  openDropDown() {
    this.isShow = !this.isShow
  }

  onAddToShoppingList() {
    console.log(this.recipe.ingredients);
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
