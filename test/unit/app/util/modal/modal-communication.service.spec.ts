import { ModalCommunicationService } from '../../../../../src/app/util/modal/modal-communication.service';

describe('ModalCommunicationService', () => {

    let modalCommunicationService: ModalCommunicationService;

    beforeEach(() => {
        modalCommunicationService = new ModalCommunicationService();
    });

    it ('should emit true and complete after confirm invocation', () => {

        // given
        let action$ = modalCommunicationService.getAction(),
            actualAction: boolean,
            completed: boolean = false;

        action$.subscribe((action: boolean) => {
            actualAction = action;
        }, null , () => {
            completed = true;
        });

        // when
        modalCommunicationService.confirm();

        // then
        expect(actualAction).toEqual(true);
        expect(completed).toEqual(true);

    });

    it ('should emit false and complete after close invocation', () => {

        // given
        let action$ = modalCommunicationService.getAction(),
            actualAction: boolean,
            completed: boolean = false;

        action$.subscribe((action: boolean) => {
            actualAction = action;
        }, null , () => {
            completed = true;
        });

        // when
        modalCommunicationService.close();

        // then
        expect(actualAction).toEqual(false);
        expect(completed).toEqual(true);

    });

    it ('should emit value only once and than complete', () => {

        // given
        let action$ = modalCommunicationService.getAction(),
            actualAction: boolean,
            completed: boolean = false;

        modalCommunicationService.close();

        action$.subscribe((action: boolean) => {
            actualAction = action;
        }, null , () => {
            completed = true;
        });

        // when
        modalCommunicationService.close();

        // then
        expect(actualAction).toBeUndefined();
        expect(completed).toEqual(true);

    });

    it ('should be possible to renew communication', () => {

        // given
        let action$ = modalCommunicationService.getAction(),
            actualAction: boolean,
            completed: boolean = false;

        modalCommunicationService.close();
        modalCommunicationService.renew();
        action$ = modalCommunicationService.getAction();

        action$.subscribe((action: boolean) => {
            actualAction = action;
        }, null , () => {
            completed = true;
        });

        // when
        modalCommunicationService.close();

        // then
        expect(actualAction).toEqual(false);
        expect(completed).toEqual(true);
    })

});
