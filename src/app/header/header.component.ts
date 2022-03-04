import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    templateUrl: './header.component.html',
    selector: 'app-header',

})
export class HeaderComponent {
    isShow:boolean = false;
    isShowLink:boolean = false;
    @Output() featureSelected = new EventEmitter<string>();

    onSelect(feature: string): void {
        this.featureSelected.emit(feature)
    }

    openDropDown(){
        this.isShow = !this.isShow
    }

    showLinks(){
          this.isShowLink = !this.isShowLink
    }
}