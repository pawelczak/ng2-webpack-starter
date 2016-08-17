import { TestBed } from '@angular/core/testing';

import { AboutComponent } from '../../../../src/app/about/about.component';

describe('AboutComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [AboutComponent]});
    });

    it ('should have default template', () => {

        // given
        const fixture = TestBed.createComponent(AboutComponent);

        // when
        fixture.detectChanges();

        // then
        expect(fixture.nativeElement.textContent).toContain('About');
    });

});
