import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    selector: '[customTooltip]'
})
export class TooltipDirective {

    @Input() toolTip!: string;

    elToolTip: any;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('mouseenter')
    public onMouseEnter() {
        if (!this.elToolTip) {
            this.showHint();
        }
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        if (this.elToolTip) {
            this.removeHint();
        }
    }

    removeHint() {
        this.renderer.removeClass(this.elToolTip, 'tooltip');
        this.renderer.removeChild(this.elementRef.nativeElement, this.elToolTip);
        this.elToolTip = null;
    }

    showHint() {
        this.elToolTip = this.renderer.createElement('span');
        const text = this.renderer.createText(this.toolTip);
        this.renderer.appendChild(this.elToolTip, text);

        this.renderer.appendChild(this.elementRef.nativeElement, this.elToolTip);
        this.renderer.addClass(this.elToolTip, 'tooltip');

        let hostPos = this.elementRef.nativeElement.getBoundingClientRect();

        let top = hostPos.bottom + 5;
        let left = hostPos.left;

        this.renderer.setStyle(this.elToolTip, 'top', `${top}px`);
        this.renderer.setStyle(this.elToolTip, 'left', `${left}px`);
    }

}