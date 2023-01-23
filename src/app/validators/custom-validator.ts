import { AbstractControl, ValidationErrors } from "@angular/forms";

const validCountries = ['Poland', 'USA', 'England']

export function country(control: AbstractControl): ValidationErrors | null {

    const value = control.value;

    if (!validCountries.includes(value)) {
        return { 'country': true, 'requiredValue': validCountries.toString() }
    }

    return null;
}

export function pincode(control: AbstractControl): ValidationErrors | null {

    const value = control.value as string;

    if (!value.match('\\d{2}[-]\\d{3}')) {
        return { 'pincode': true, 'requiredValue': '\\d+[-]\\d+' }
    }

    return null;
}