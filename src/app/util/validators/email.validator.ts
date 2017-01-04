import { FormControl } from '@angular/forms';

import { ValidationResult } from './validation-result';

export class EmailValidator {

    static validEmail(control: FormControl): ValidationResult {
        let value = control.value;

        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ((value && value.length > 0) && !re.test(value)) {
            return {
                invalidEmail: true
            };
        } else {
            return null;
        }
    }
}
