import { Component, OnInit } from '@angular/core';

import { Message } from '../message';
import { MessagesService } from '../messages.service';
import { ModalWindowService } from '../../util/modal/modal-window.service';
import { ConfirmMessageRemoveComponent } from './confirm-message-remove.component';
import { ModalConfiguration } from '../../util/modal/modal-configuration';

@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: [
        './message-list.component.ngx.scss'
    ]
})
export class MessageListComponent implements OnInit {

    messages: Array<Message> = [];

    private modalConfig: ModalConfiguration = <ModalConfiguration>{
        title: 'Remove message',
        cancelBtnEnabled: true,
        cancelBtnText: 'Cancel',
        confirmBtnEnabled: true,
        confirmBtnText: 'Remove'
    };

    constructor(private messageService: MessagesService,
                private modalWindowService: ModalWindowService) {}

    ngOnInit() {
        this.messageService
            .getMessages()
            .subscribe((messages) => {
                this.messages = messages;
            });
    }

    remove(message: Message): void {

        const subscription = this.modalWindowService.open(this.modalConfig, ConfirmMessageRemoveComponent);

        subscription
            .subscribe((response: boolean) => {
                if (response) {
                    this.messageService.remove(message);
                }
            });

    }
}
