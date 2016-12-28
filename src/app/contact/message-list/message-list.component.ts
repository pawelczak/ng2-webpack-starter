import { Component, OnInit } from '@angular/core';

import { Message } from '../message';
import { MessagesService } from '../messages.service';

@Component({
    selector: 'message-list',
    templateUrl: './message-list.component.html',
    styleUrls: [
        './message-list.component.scss'
    ]
})
export class MessageListComponent implements OnInit {

    private messages: Array<Message> = [];

    constructor(private messageService: MessagesService) {}

    ngOnInit() {
        this.messageService
            .getMessages()
            .subscribe((messages) => {
                this.messages = messages;
            });
    }
}
