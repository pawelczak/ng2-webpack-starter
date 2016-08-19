// 3d party imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// app imports
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import {HomeComponent} from "./home/home.component";
import {RepositoriesComponent} from "./repositories/repositories.component";
import {AboutComponent} from "./about/about.component";


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
        AboutComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
