import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';
import { element, by, protractor, ElementArrayFinder } from 'protractor';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

declare var browser: any;

@binding()
class NavigationSteps {


    @given(/^user goes to home page$/)
    private givenUserGoesToHomePage(callback: CallbackStepDefinition) {
        browser.get('/');
        callback();
    }

    @when(/^user clicks on navigation link$/)
    private whenUserClickOnLink(callback: CallbackStepDefinition) {

        const button = element(by.id('nav-repos'));

        button.click();
        callback();
    }

    @then(/^user should be redirected to correct page$/)
    private thenUserShouldBeAtThePage(callback: CallbackStepDefinition) {

        expect(element(by.css('h1')).getText()).toBe

        browser.isElementPresent(by.css('h1'))
            .then(() => {
                callback();
            });


    }

    @then(/^user should see home link$/)
    private thenHomeLinkExists(next: CallbackStepDefinition) {


        const homeButton = element(by.id('nav-home'));

        expect(homeButton.getText()).to.become('Home').and.notify(next);
    }

    @then(/^user should see repos link$/)
    private thenReposLinkExists(next: CallbackStepDefinition) {


        const homeButton = element(by.id('nav-repos'));

        expect(homeButton.getText()).to.become('Repos').and.notify(next);
    }

    @then(/^user should see contact link$/)
    private thenContactLinkExists(next: CallbackStepDefinition) {


        const homeButton = element(by.id('nav-contact'));

        expect(homeButton.getText()).to.become('Contact').and.notify(next);
    }

    @then(/^user should see github link$/)
    private thenGhLinkExists(next: CallbackStepDefinition) {


        const homeButton = element(by.id('nav-gh'));

        expect(homeButton.getText()).to.become('Github').and.notify(next);
    }

}

export = NavigationSteps;
