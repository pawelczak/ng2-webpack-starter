// 3d party imports
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

// app imports
import { RepositoriesComponent } from '../../../../src/app/repositories/repositories.component';
import { RepositoriesService } from '../../../../src/app/repositories/services/repositories.service';


describe('RepositoriesComponent', () => {

    class MockRepositoriesService {
        getRepositories() {
            // TODO TestFactory
            const repos = [
                {name: 'Repo 1', stargazers_count: 28},
                {name: 'Repo 2', stargazers_count: 19}
            ];
            return Observable.of(repos);
        }
    }

    beforeEach(() => {
        TestBed
            .configureTestingModule({
                declarations: [
                    RepositoriesComponent
                ]
            })
            .overrideComponent(RepositoriesComponent, {
                add: {
                    providers: [
                        {provide: RepositoriesService, useClass: MockRepositoriesService}
                    ]
                }
            })
            ;
    });

    it ('should have header message', () => {

        // given
        const fixture = TestBed.createComponent(RepositoriesComponent);

        // when
        fixture.detectChanges();

        // then
        expect(fixture.nativeElement.querySelector('p').textContent).toContain('List of most popular Angular2 repos on github:');
    });

    it ('should have list of repos', () => {

        // given
        const fixture = TestBed.createComponent(RepositoriesComponent);

        // when
        fixture.detectChanges();

        // then
        expect(fixture.componentInstance.repositories.length).toEqual(2);
    });

});
