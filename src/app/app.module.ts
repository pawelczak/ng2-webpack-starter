// 3d party imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

// app imports
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { ContactComponent } from './contact/contact.component';
import { RepositoryComponent } from './repositories/components/repository.component';
import { StarColorDirective } from './repositories/directives/star-color.directive';
import { StarCountPipe } from './repositories/pipes/star-count.pipe';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { MessageListComponent } from './contact/message-list/message-list.component';
import { ModalComponent } from './util/modal/modal.component';
import { ModalService } from './util/modal/modal.service';
import { ModalCommunicationService } from './util/modal/modal-communication.service';
import { MessageConfirmRemoveComponent } from './contact/message-list/message-confirm-remove.component';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        RepositoriesComponent,
        RepositoryComponent,
        ContactComponent,
        StarColorDirective,
        StarCountPipe,
        ContactFormComponent,
        MessageListComponent,
        ModalComponent,
        MessageConfirmRemoveComponent
    ],
    providers: [
        ModalService,
        ModalCommunicationService
    ],
    entryComponents: [
        ModalComponent,
        MessageConfirmRemoveComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
