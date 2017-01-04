import { FormControl } from '@angular/forms';

import { EmailValidator } from '../../../../../src/app/util/validators/email.validator';


describe('EmailValidator', () => {

    it ('should validate invalid email', () => {

        // given
        const givenEmails = [
                'john',
                'john.com',
                'john@doe',
                'john@doe.',
                'john@.com',
                '@.com'
            ],
            expectedValue = {
                invalidEmail: true
            };

        // when & then
        givenEmails.forEach((email) => {
            let formControl = new FormControl();
            formControl.setValue(email);

            expect(EmailValidator.validEmail(formControl)).toEqual(expectedValue);
        });

    });

    it ('should validate correct emails', () => {

        // given
        const givenEmails = [
                'john@doe.com'
            ];

        // when & then
        givenEmails.forEach((email) => {
            let formControl = new FormControl();
            formControl.setValue(email);

            expect(EmailValidator.validEmail(formControl)).toBe(null);
        });

    });

});
