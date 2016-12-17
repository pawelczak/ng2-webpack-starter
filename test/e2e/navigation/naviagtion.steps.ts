import { binding, given, when, then } from 'cucumber-tsflow';
import { CallbackStepDefinition } from 'cucumber';

@binding()
class NavigationSteps {

    @when(/^user clicks on navigaion link$/)
    private whenUserClickOnLink(callback: CallbackStepDefinition) {
        console.log('asd');
        callback();
    }

    @then(/^user should be redirected to correct page$/)
    private thenUserShouldBeAtThePage(callback: CallbackStepDefinition) {
        console.log('asd2');
        callback();
    }

}

export = NavigationSteps;
