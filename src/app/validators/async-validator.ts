import { AbstractControl, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";

export function streetAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    const allowedStreets = ['Avenue', 'Fluffy'];

    const value = control.value;

    if (!allowedStreets.includes(value)) {
        return of({ 'street': true, 'requiredValue': allowedStreets.toString() });
    }

    return of(null);
}