import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
    selector: '[addClass]'
})
export class AttributeDirective implements OnInit {
    constructor(private el: ElementRef) {}

    @Input() addClass!: string;

    ngOnInit(): void {
        this.el.nativeElement.classList.add(this.addClass);
    }

}