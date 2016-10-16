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
    templateUrl: './repositories.component.html'
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
