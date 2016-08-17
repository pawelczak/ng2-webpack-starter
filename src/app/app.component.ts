// 3d party imports
import { Component } from '@angular/core';


@Component({
    selector: 'app',
    template: `
    <header>
        <a [routerLink]="['']">Home</a>
        <a [routerLink]="['repos']">Repos</a>
        <a [routerLink]="['about']">About</a>
    </header>

    <div class="content">
        <router-outlet></router-outlet>
    </div>
    
    <footer>
        ng2-webpack-starter
    </footer>
    `
})
export class AppComponent {}
