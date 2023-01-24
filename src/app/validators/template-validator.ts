import { Directive, OnInit } from "@angular/core";
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[streetValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: StreetValidator, multi: true }]
})
export class StreetValidator implements Validator, OnInit {
    private streets: string[] = ['Long', 'Short'];

    validate(control: FormControl): ValidationErrors | null {
        const street = control.value;

        if (!this.streets.includes(street)) {
            return { 'street': true, 'requiredValue': this.streets.toString() }
        }

        return null;
    }
    
    ngOnInit(): void {}

}