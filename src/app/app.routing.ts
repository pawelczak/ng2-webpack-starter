// 3d party imports
import { RouterModule, Routes } from '@angular/router';

// app imports
import { HomeComponent } from './home/home.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'repos', component: RepositoriesComponent },
    { path: 'about', component: AboutComponent}
];

export const routing = RouterModule.forRoot(routes);
