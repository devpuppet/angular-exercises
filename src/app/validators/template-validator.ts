import { Directive, Input, OnInit } from "@angular/core";
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";
import { StreetService } from "../services/street.service";

@Directive({
    selector: '[streetValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: StreetValidator, multi: true }]
})
export class StreetValidator implements Validator, OnInit {
    @Input('streets') streets!: string;

    constructor(private streetService: StreetService) { }

    validate(control: FormControl): ValidationErrors | null {
        const allowedStreets = this.streets.split(",");

        const street = control.value;

        if (!this.streetService.isValidStreet(street, allowedStreets)) {
            return { 'street': true, 'requiredValue': allowedStreets.toString() }
        }

        return null;
    }
    
    ngOnInit(): void {}

}