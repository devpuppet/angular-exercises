import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { CityService } from "../services/city-service.service";

@Injectable({
    providedIn: 'root'
})
export class CityValidatorService {
    constructor(private cityService: CityService) {}

    validCity(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const city = control.value;

            if (!this.cityService.isValidCity(city)) {
                return { 'validCity': true, 'requiredValue': this.cityService.getPermittedCities().toString() };
            }

            return null;
        }
    }
}