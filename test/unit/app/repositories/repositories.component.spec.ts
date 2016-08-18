import { TestBed } from '@angular/core/testing';

import { RepositoriesComponent } from '../../../../src/app/repositories/repositories.component';


class MockRepositoriesService {
    getRepositories() {}
}


xdescribe('RepositoriesComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RepositoriesComponent],
            providers: []
        });
    });

    it ('should have default template', () => {

        // given
        const fixture = TestBed.createComponent(RepositoriesComponent);

        // when
        fixture.detectChanges();

        // then
        expect(fixture.nativeElement.textContent).toContain('Repos');
    });

});
