// 3d party imports
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RepositoriesService {

    private url: string = 'https://api.github.com/search/repositories?q=angular2&sort=stars&order=desc';

    constructor(private http: Http) {
    }

    getRepositories() {
        return this.http.get(this.url).map((data) => data.json());
    }
}
