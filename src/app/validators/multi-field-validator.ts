import { AbstractControl, ValidationErrors } from "@angular/forms";

export function matchPassword(firstControl: string, secondControl: string) {
    return (control: AbstractControl): ValidationErrors | null => {
        const password = control.get(firstControl)?.value;
        const confirm = control.get(secondControl)?.value;
    
        if (password != confirm) {
            return { 'noMatch': true };
        }
    
        return null;
    }
}