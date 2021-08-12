//precio no mayor a 1000
import {AbstractControl} from '@angular/forms';
export class MyValidators {
    static isPriceValid(control: AbstractControl){
        const value = control.value; //obtener el valor 
        console.log(value);
        if(value>10000){
            return {price_invalid: true};
        }
        return null;

    }
}

