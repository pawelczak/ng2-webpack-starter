import { TestBed, inject } from '@angular/core/testing';

import { ModalWindowService } from '../../../../../src/app/util/modal/modal-window.service';
import { ModalCommunicationService } from '../../../../../src/app/util/modal/modal-communication.service';

describe('ModalWindowService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ModalWindowService,
                ModalCommunicationService
            ]
        });
    });

    it ('should have open & close methods',
        inject([ModalWindowService], (modalWindowService: ModalWindowService) => {

            expect(modalWindowService.open).toBeDefined();
            expect(modalWindowService.close).toBeDefined();
        })
    );

});
