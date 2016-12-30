import { Component } from '@angular/core';

import { ModalCommunicationService } from './modal-communication.service';

@Component({
    selector: 'modal-window',
    templateUrl: './modal.component.html',
    styleUrls: [
        './modal.component.scss'
    ]
})
export class ModalComponent {

    title = 'title';

    cancelBtnEnabled: boolean = true;
    cancelBtnText: string = 'Cancel';

    confirmBtnEnabled: boolean = true;
    confirmBtnText: string = 'Confirm';

    constructor(private modalCommunicationService: ModalCommunicationService) {
        this.modalCommunicationService.renew();
    }

    close(): void {
        this.modalCommunicationService.close();
    }

    confirm(): void {
        this.modalCommunicationService.confirm();
    }

}
