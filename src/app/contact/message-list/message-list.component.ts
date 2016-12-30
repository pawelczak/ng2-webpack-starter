import { Component, OnInit } from '@angular/core';

import { Message } from '../message';
import { MessagesService } from '../messages.service';
import { ModalService } from '../../util/modal/modal.service';
import { MessageConfirmRemoveComponent } from './message-confirm-remove.component';
import { ModalConfiguration } from '../../util/modal/modal-configuration';

@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: [
        './message-list.component.scss'
    ]
})
export class MessageListComponent implements OnInit {

    private messages: Array<Message> = [];
    private modalConfig: ModalConfiguration = <ModalConfiguration>{
        title: 'Remove message',
        cancelBtnEnabled: true,
        cancelBtnText: 'Cancel',
        confirmBtnEnabled: true,
        confirmBtnText: 'Remove'
    };

    constructor(private messageService: MessagesService,
                private modalService: ModalService) {}

    ngOnInit() {
        this.messageService
            .getMessages()
            .subscribe((messages) => {
                this.messages = messages;
            });
    }

    remove(message: Message): void {

        const subscription = this.modalService.open(this.modalConfig, MessageConfirmRemoveComponent);

        subscription
            .subscribe((response: boolean) => {
                if (response) {
                    this.messageService.remove(message);
                }
            });

    }
}
