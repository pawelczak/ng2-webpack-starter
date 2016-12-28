import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

import { Message } from './message';
import { MessageForm } from './contact-form/message.form';

@Injectable()
export class MessagesService {

    private messages: Array<Message> = [];
    private messages$: Subject<Array<Message>> = new BehaviorSubject<Array<Message>>(this.messages);

    getMessages(): Observable<Array<Message>> {
        return this.messages$.asObservable();
    }

    addMessage(form: MessageForm) {

        const message = this.convertMessageFormToMessage(form);

        this.messages.push(message);
        this.messages$.next(this.messages);
    }

    private convertMessageFormToMessage(form: MessageForm): Message {
        let message = new Message();

        message.title = form.title;
        message.email = form.email;
        message.text = form.message;

        return message;
    }
}
