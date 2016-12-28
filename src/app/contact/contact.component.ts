// 3d party imports
import { Component } from '@angular/core';

import { MessagesService } from './messages.service';


@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    providers: [
        MessagesService
    ]
})
export class ContactComponent {}
