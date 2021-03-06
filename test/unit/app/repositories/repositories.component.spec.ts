// 3d party imports
import { TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

// app imports
import { RepositoriesComponent } from '../../../../src/app/repositories/repositories.component';
import { RepositoriesService } from '../../../../src/app/repositories/services/repositories.service';
import { RepositoryComponent } from '../../../../src/app/repositories/components/repository.component';
import { StarColorDirective } from '../../../../src/app/repositories/directives/star-color.directive';


describe('RepositoriesComponent', () => {

    class MockRepositoriesService {
        getRepositories() {
            // TODO TestFactory
            return new Observable((observer: Observer<any>) => {
                const repos = [
                    {name: 'Repo 1', stargazers_count: 3238},
                    {name: 'Repo 2', stargazers_count: 319},
                    {name: 'Repo 3', stargazers_count: 41}
                ];
                observer.next(repos);
                observer.complete();
            });
        }
    }

    // TODO use mock pipe
    @Pipe({
        name: 'starCount'
    })
    class MockStarCountPipe implements PipeTransform {
        transform(objects: any[], param?: any) {
            return objects.filter(f => {return f.stargazers_count >= 300;}); //.map((obj) => obj.stargazers_count + 100);
        }
    }

    beforeEach(() => {
        TestBed
            .configureTestingModule({
                declarations: [
                    RepositoriesComponent,
                    RepositoryComponent,
                    StarColorDirective,
                    MockStarCountPipe
                ]
            })
            .overrideComponent(RepositoriesComponent, {
                add: {
                    providers: [
                        {provide: RepositoriesService, useClass: MockRepositoriesService}
                    ]
                }
            });
    });

    it ('should have header message', () => {

        // given
        const fixture = TestBed.createComponent(RepositoriesComponent);

        // when
        fixture.detectChanges();

        // then
        expect(fixture.nativeElement.querySelector('p').textContent).toContain('List of most popular* Angular2 repos on github:');
    });

    it ('should have list of repos', () => {

        // given
        const fixture = TestBed.createComponent(RepositoriesComponent),
            compInstance = fixture.componentInstance,
            element = fixture.nativeElement;

        // when
        fixture.detectChanges();

        // then
        expect(compInstance.repositories.length).toEqual(3);
        expect(element.querySelectorAll('li').length).toEqual(2);
    });

});
