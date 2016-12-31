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
import { ConfirmMessageRemoveComponent } from './contact/message-list/confirm-message-remove.component';
import { ModalModule } from './util/modal/modal.module';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ReactiveFormsModule,
        ModalModule,
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
        ConfirmMessageRemoveComponent
    ],
    providers: [],
    entryComponents: [
        ConfirmMessageRemoveComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
