import { Component, OnInit, OnDestroy } from '@angular/core';

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
export class MessageListComponent implements OnInit, OnDestroy {

    messages: Array<Message> = [];

    private modalConfig: ModalConfiguration = <ModalConfiguration>{
        title: 'Remove message',
        cancelBtnEnabled: true,
        cancelBtnText: 'Cancel',
        confirmBtnEnabled: true,
        confirmBtnText: 'Remove'
    };

    private subscription: any;

    constructor(private messageService: MessagesService,
                private modalWindowService: ModalWindowService) {}

    ngOnInit() {
        this.subscription =
            this.messageService
                .getMessages()
                .subscribe((messages) => {
                    this.messages = messages;
                });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    remove(message: Message): void {

        this.subscription = this.modalWindowService.open(this.modalConfig, ConfirmMessageRemoveComponent);

        this.subscription
            .subscribe((response: boolean) => {
                if (response) {
                    this.messageService.remove(message);
                }
            });

    }
}
