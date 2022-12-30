import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[customToggle]'
})
export class ToggleDirective {
    private selected = false;

    constructor(private el: ElementRef) {}

    @HostListener('click')
    private onClick() {
        this.selected = !this.selected;
        if (this.selected) {
            this.el.nativeElement.classList.add('toggle');
        } else {
            this.el.nativeElement.classList.remove('toggle');
        }
    }
}