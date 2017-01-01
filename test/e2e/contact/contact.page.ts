import { element, by, protractor, ElementArrayFinder } from 'protractor';
// import Promise = webdriver.promise.Promise;

export class ContactPageObject {

    private titleInput: any;
    private emailInput: any;
    private messageInput: any;
    private submitBtn: any;

    constructor() {
        this.titleInput = element(by.id('contact-form-title'));
        this.emailInput = element(by.id('contact-form-email'));
        this.messageInput = element(by.id('contact-form-message'));
        this.submitBtn = element(by.id('contact-form-submit'));
    }

    typeTitle(title: string): Promise<void> {
        return this.titleInput
                    .clear()
                    .sendKeys(title);
    }

    typeEmail(email: string): Promise<void> {
        return this.emailInput
                    .clear()
                    .sendKeys(email);
    }

    typeMessage(message: string): Promise<void> {
        return this.messageInput
                    .clear()
                    .sendKeys(message);
    }

    submitContactForm(): Promise<void> {
        return this.submitBtn.click();
    }

    findInvalidInputs(): ElementArrayFinder {
        return element.all(by.css('#contact-form .ng-invalid'));
    }

    findAllMessages(): ElementArrayFinder {
        return element.all(by.css('.message'));
    }

}
