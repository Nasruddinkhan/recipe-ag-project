import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-ag-project';
  loadFeature: string = 'recipes'
  onNavigate(feature: string) :void {
    console.log(feature);
    this.loadFeature = feature;
  }
}
