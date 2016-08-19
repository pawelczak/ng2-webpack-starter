// 3d party imports
import { Component, OnInit } from '@angular/core';

// app imports
import { RepositoriesService } from './services/repositories.service';
import { RepositoryComponent } from './components/repository.component';
import { StarCountPipe } from './pipes/star-count.pipe';


@Component({
    selector: 'repositories',
    providers: [
        RepositoriesService
    ],
    directives: [
        RepositoryComponent
    ],
    pipes: [
        StarCountPipe
    ],
    template: `
    <div>
        <p>List of most popular* Angular2 repos on github:</p>
        <i>(most popular meaning repositories that have more than 300 stars)</i>
    </div>
    <ol>
        <li *ngFor="let repo of (repositories | starCount:300)" >
            <repository [item]="repo" ></repository>
        </li>
    </ol>
`
})
export class RepositoriesComponent implements OnInit {

    public repositories: any[] = [];

    constructor(private repositoriesService: RepositoriesService) {
    }

    ngOnInit() {
        this.repositoriesService
            .getRepositories()
            .subscribe((repos) => {
                this.repositories = repos;
            });
    }
}
