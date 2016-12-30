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

    remove(message: Message): void {
        this.messages = this.messages.filter((m) => {
            return m !== message
        });
        this.messages$.next(this.messages);
    }

    private convertMessageFormToMessage(form: MessageForm): Message {
        let message = new Message();

        message.title = form.title;
        message.email = form.email;
        message.text = form.message;
        message.date = this.getDateNow();

        return message;
    }

    private getDateNow(): string {
        let date = new Date();

        return date.getDate() + '.' + (+date.getMonth() + 1) + '.' + date.getFullYear();
    }
}
