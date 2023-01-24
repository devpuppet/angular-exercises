import { Directive, Input, OnInit } from "@angular/core";
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
    selector: '[streetValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: StreetValidator, multi: true }]
})
export class StreetValidator implements Validator, OnInit {
    @Input('streets') streets!: string;

    validate(control: FormControl): ValidationErrors | null {
        const allowedStreets = this.streets.split(",");

        const street = control.value;

        if (!allowedStreets.includes(street)) {
            return { 'street': true, 'requiredValue': allowedStreets.toString() }
        }

        return null;
    }
    
    ngOnInit(): void {}

}