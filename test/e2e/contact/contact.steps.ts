import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';
import { element, by, protractor, ElementArrayFinder } from 'protractor';

import { ContactPageObject } from './contact.page';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


declare var browser: any;

@binding()
class NavigationSteps {


    private contactPageObject = new ContactPageObject();

    @given(/^goes to contact page$/)
    private givenUserGoesToHomePage(next: CallbackStepDefinition) {
        element(by.id('nav-contact')).click();
        next();
    }

    @given(/^types title '(.*)'$/)
    private givenTypesTitle(title: string, next: CallbackStepDefinition) {

        this.contactPageObject
            .typeTitle(title)
            .then(() => {
                next();
            });
    }

    @given(/^types email '(.*)'$/)
    private givenTypesEmail(email: string, next: CallbackStepDefinition) {

        this.contactPageObject
            .typeEmail(email)
            .then(() => {
                next();
            });
    }

    @given(/^types message '(.*)'$/)
    private givenTypesMessage(message: string, next: CallbackStepDefinition) {

        this.contactPageObject
            .typeMessage(message)
            .then(() => {
                next();
            });
    }

    @when(/^user clicks add message$/)
    private whenUserClicksSubmit(next: CallbackStepDefinition) {

        this.contactPageObject
            .submitContactForm()
            .then(() => {
                next();
            });
    }

    @then(/^message should be validated '(.*)'$/)
    private thenCheckMessageValidation(valid: string, next: CallbackStepDefinition) {

        if (valid === 'true') {

            this.contactPageObject
                .findAllMessages()
                .count()
                .then((number: any) => {
                    if (number === 1) {
                        next();
                    }
               });
        } else {
            this.contactPageObject
                .findInvalidInputs()
                .count()
                .then((number: any) => {
                    if (number > 0) {
                        next();
                    }
                });
        }
    }

}

export = NavigationSteps;
