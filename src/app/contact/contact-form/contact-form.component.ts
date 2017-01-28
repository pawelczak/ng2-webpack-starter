import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageForm } from './message.form';
import { MessagesService } from '../messages.service';
import { EmailValidator } from '../../util/validators/email.validator';

@Component({
    selector: 'contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.ngx.scss']
})
export class ContactFormComponent implements OnInit {

    addMessageForm: FormGroup;
    submitted: boolean = false;

    constructor(private formBuilder: FormBuilder,
                private messagesService: MessagesService) {}

    ngOnInit() {
        this.addMessageForm = this.formBuilder.group({
            title: ['', Validators.required],
            email: ['', [Validators.required, EmailValidator.validEmail]],
            message: ['', Validators.required]
        });
    }

    addMessage(message: MessageForm) {
        this.submitted = true;
        if (this.addMessageForm.valid) {
            this.messagesService.addMessage(message);
            this.addMessageForm.reset();
            this.submitted = false;
        }

    }

}
