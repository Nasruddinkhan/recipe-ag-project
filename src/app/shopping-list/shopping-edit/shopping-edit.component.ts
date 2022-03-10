import { Component, ElementRef, OnInit, ViewChild, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  // @ViewChild('nameInput', { static: false }) nameInputRef!: ElementRef;
  //@ViewChild('amountInput', { static: false }) amountInputRef!: ElementRef;
  @ViewChild('f') slForm!: NgForm;
  editMode = false;
  editIndex!: number;
  subscription!: Subscription;
  editIngredient!: Ingredient;
  constructor(private shoppingService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingService.startEditing.subscribe(
      (index: number) => {
        this.editMode = true
        this.editIndex = index;
        this.editIngredient = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editIngredient.name,
          amount: this.editIngredient.amount
        })
      }
    )
  }

  onAddItem(form: NgForm) {
    console.log(form.value.name);
    console.log(form.value.amount);
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.amountInputRef.nativeElement.value;
    const ingName = form.value.name;
    const ingAmount = form.value.amount;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.editMode ? this.shoppingService.updateIngredient(this.editIndex, newIngredient) : this.shoppingService.addIngredient(newIngredient);
    form.reset();
    this.editMode = false;
  }

  clearForm() {
    this.slForm.reset();
  }

  deleteIngredient() {
    this.editMode = false;
    this.shoppingService.deleteIngredient(this.editIndex);
    this.slForm.reset();
  }
}
