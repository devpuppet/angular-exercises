import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[customIf]'
})
export class CustomIfDirective {
    private _customIf!: boolean;

    constructor(private view: ViewContainerRef, private templateRef: TemplateRef<any>) {}

    @Input()
    set customIf(condition: boolean) {
        this._customIf = condition;
        this._updateView();
    }

    _updateView() {
        if (this._customIf) {
            this.view.createEmbeddedView(this.templateRef);
        } else {
            this.view.clear();
        }
    }

}