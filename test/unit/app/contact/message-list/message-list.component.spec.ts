import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { MessageListComponent } from '../../../../../src/app/contact/message-list/message-list.component';
import { MessagesService } from '../../../../../src/app/contact/messages.service';
import { ModalWindowService } from '../../../../../src/app/util/modal/modal-window.service';
import { Message } from '../../../../../src/app/contact/message';


describe('MessageListComponent', () => {


    class MockMessagesService {

        getMessages(): Observable<Array<Message>> {
            return new Observable(() => {
            });
        }
        remove(message: Message): void {}
    }

    class MockModalWindowService {}

    beforeEach(() => {
        TestBed
            .configureTestingModule({
                declarations: [
                    MessageListComponent
                ]
            })
            .overrideComponent(MessageListComponent, {
                add: {
                    providers: [
                        {provide: MessagesService, useClass: MockMessagesService},
                        {provide: ModalWindowService, useClass: MockModalWindowService}
                    ]
                }
            });
    });


    it ('should display information when there is no messages', () => {

        // given
        class MockMessagesService {
            getMessages(): Observable<Array<Message>> {
                return new Observable((observer: Observer<Array<Message>>) => {
                    observer.next([]);
                });
            }
        }

        TestBed.overrideComponent(MessageListComponent, {
            add: {
                providers: [
                    {provide: MessagesService, useClass: MockMessagesService}
                ]
            }
        });

        const fixture = TestBed.createComponent(MessageListComponent),
            compInstance = fixture.componentInstance,
            element = fixture.nativeElement;

        // when
        fixture.detectChanges();

        // then
        expect(compInstance.messages.length).toEqual(0);
        expect(element.querySelectorAll('.message').length).toEqual(0);
        expect(element.querySelectorAll('.no-messages').length).toEqual(1);

    });


    it ('should display list of messages', () => {

        // given
        const messageOne = new Message();
        messageOne.title = 'Awesome message';
        messageOne.email = 'jane@doe.com';
        messageOne.text = 'This message is the best';
        messageOne.date = '12.01.2016';

        const messageTwo = new Message();
        messageTwo.title = 'Wow';
        messageTwo.email = 'bot@beep.beep';
        messageTwo.text = 'I am a bot beep beep !';
        messageTwo.date = '05.07.2026';

        const messageThree = new Message();
        messageThree.title = 'Nice job';
        messageThree.email = 'mister@nice.eu';
        messageThree.text = 'Perfecto !';
        messageThree.date = '27.10.1984';

        const messages: Array<Message> = [messageOne, messageTwo, messageThree];


        class MockMessagesService {
            getMessages(): Observable<Array<Message>> {
                return new Observable((observer: Observer<Array<Message>>) => {
                    observer.next(messages);
                });
            }
        }

        TestBed.overrideComponent(MessageListComponent, {
            add: {
                providers: [
                    {provide: MessagesService, useClass: MockMessagesService}
                ]
            }
        });

        const fixture = TestBed.createComponent(MessageListComponent),
            compInstance = fixture.componentInstance,
            element = fixture.nativeElement;

        // when
        fixture.detectChanges();

        // then
        const messageElements = element.querySelectorAll('.message');

        expect(compInstance.messages.length).toEqual(messages.length);
        expect(messageElements.length).toEqual(messages.length);

        expect(messageElements[0].querySelector('.title strong').textContent).toEqual(messageOne.title);
        expect(messageElements[0].querySelector('.info i').textContent).toEqual(messageOne.email);
        expect(messageElements[0].querySelector('.info strong').textContent).toEqual(messageOne.date);
        expect(messageElements[0].querySelector('.message-text').textContent).toEqual(messageOne.text);

        expect(messageElements[1].querySelector('.title strong').textContent).toEqual(messageTwo.title);
        expect(messageElements[1].querySelector('.info i').textContent).toEqual(messageTwo.email);
        expect(messageElements[1].querySelector('.info strong').textContent).toEqual(messageTwo.date);
        expect(messageElements[1].querySelector('.message-text').textContent).toEqual(messageTwo.text);

        expect(messageElements[2].querySelector('.title strong').textContent).toEqual(messageThree.title);
        expect(messageElements[2].querySelector('.info i').textContent).toEqual(messageThree.email);
        expect(messageElements[2].querySelector('.info strong').textContent).toEqual(messageThree.date);
        expect(messageElements[2].querySelector('.message-text').textContent).toEqual(messageThree.text);
    });


    it ('should be possible to remove message', () => {
        // given
        const messageOne = new Message();
        messageOne.title = 'Message to remove';
        messageOne.email = 'confidential@no.domain';
        messageOne.text = 'Please remove this';
        messageOne.date = '12.01.2016';

        const messages: Array<Message> = [messageOne];

        class MockMessagesService {

            private messages$ = new BehaviorSubject(messages);

            getMessages(): Observable<Array<Message>> {
                return this.messages$.asObservable();
            }

            remove(message: Message): void {
                this.messages$.next([]);
            }
        }

        class MockModalWindowService {
            open() {
                return new Observable((observer: Observer<boolean>) => {
                    observer.next(true);
                    observer.complete();
                });
            }
        }

        const modalWindowService = new MockModalWindowService();
        spyOn(modalWindowService, 'open').and.callThrough();

        TestBed.overrideComponent(MessageListComponent, {
            add: {
                providers: [
                    {provide: MessagesService, useClass: MockMessagesService},
                    {provide: ModalWindowService, useValue: modalWindowService}
                ]
            }
        });

        const fixture = TestBed.createComponent(MessageListComponent),
            compInstance = fixture.componentInstance,
            element = fixture.nativeElement;

        // when
        fixture.detectChanges();
        expect(compInstance.messages.length).toEqual(messages.length);
        expect(element.querySelectorAll('.message').length).toEqual(messages.length);

        element.querySelector('.message .title span').click();
        fixture.detectChanges();

        // then
        const messageElements = element.querySelectorAll('.message');

        expect(compInstance.messages.length).toEqual(0);
        expect(messageElements.length).toEqual(0);
        expect(modalWindowService.open).toHaveBeenCalled();

    });

});
