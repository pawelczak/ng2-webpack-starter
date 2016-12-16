// 3d party imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// app imports
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { ContactComponent } from './contact/contact.component';
import { RepositoryComponent } from './repositories/components/repository.component';
import { StarColorDirective } from './repositories/directives/star-color.directive';
import { StarCountPipe } from './repositories/pipes/star-count.pipe';


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        RepositoriesComponent,
        RepositoryComponent,
        ContactComponent,
        StarColorDirective,
        StarCountPipe
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
