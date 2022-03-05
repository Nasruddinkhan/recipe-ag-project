import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appdropdown]'
})
export class DropdownDirective {
    @HostBinding('class.show') isOpen = false;
    @HostListener('click') toggleOpen(event: Event) {
       // this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
        console.log(event.target);
        this.isOpen =  !this.isOpen ;
    }
    constructor(private elRef: ElementRef) { }
}