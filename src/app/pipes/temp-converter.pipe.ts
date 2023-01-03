import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

    transform(value: number, unit: string) {
        if (value && isNaN(value)) {
            return 'Enter a number';
        }

        let temperature;
        switch(unit) {
            case 'C':
                temperature = (value - 32) / 1.8;
                break;
            case 'F':
                temperature = (value * 1.8) + 32;
                break;
            default:
                throw new Error(`Unknown unit = ${unit}`);
        }

        return temperature.toFixed(2);
    }

}