import { AbstractControl, ValidationErrors } from "@angular/forms";

export function country(countries: string[]) {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        if (!countries.includes(value)) {
            return { 'country': true, 'requiredValue': countries.toString() }
        }
    
        return null;
    }
}

export function pincode(control: AbstractControl): ValidationErrors | null {

    const value = control.value as string;

    if (!value.match('\\d{2}[-]\\d{3}')) {
        return { 'pincode': true, 'requiredValue': '\\d+[-]\\d+' }
    }

    return null;
}