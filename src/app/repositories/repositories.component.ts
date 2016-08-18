// 3d party imports
import { Component, OnInit } from '@angular/core';

// app imports
import { RepositoriesService } from './services/repositories.service';


@Component({
    selector: 'repositories',
    providers: [
        RepositoriesService
    ],
    template: `Repos
    <p>List of most popular Angular2 repos on github</p>
    <ul>
        <li *ngFor="let repo of repositories">
        {{repo.name}} - {{repo.stargazers_count}}
        </li>
    </ul>
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
