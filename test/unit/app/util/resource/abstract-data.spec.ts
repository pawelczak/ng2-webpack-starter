import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { AbstractData } from '../../../../../src/app/util/resource/abstract-data';


describe('AbstractData', () => {

    class TestAbstractData extends AbstractData<number> {

        private counter = 0;

        constructor() {
            super();
            this.init();
        }

        fetch(): Observable<number> {
            return new Observable((observer: any) => {
                this.counter += 1;
                observer.next(this.counter);
            });
        }

    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                TestAbstractData
            ]
        });
    });

    it ('should return data',
        inject([TestAbstractData], (testAbstractData: TestAbstractData) => {

            // when
            testAbstractData
                .get()
                .subscribe((response: number) => {

                    // then
                    expect(response).toEqual(1);
                });
        })
    );

    it ('should return same data for a couple of subscribers',
        inject([TestAbstractData], (testAbstractData: TestAbstractData) => {

            // given
            const testData = (response: number) => {
                expect(response).toEqual(1);
            };

            // when & then
            const source = testAbstractData.get();

            source
                .subscribe(testData);

            source
                .subscribe(testData);
        })
    );

    it ('should return same data for a couple of subscribers when one unsubscribed',
        inject([TestAbstractData], (testAbstractData: TestAbstractData) => {

            // given
            const testData = (response: number) => {
                expect(response).toEqual(1);
            };

            // when & then
            const source = testAbstractData.get();

            source
                .subscribe(testData)
                .unsubscribe();

            source
                .subscribe(testData);

        })
    );

    it ('should return new data after reload',
        inject([TestAbstractData], (testAbstractData: TestAbstractData) => {

            // given
            const testData = (response: number) => {
                expect(response).toEqual(2);
            };
            spyOn(testAbstractData, 'fetch').and.callThrough();

            // when & then
            const source = testAbstractData.get();
            testAbstractData.reload();

            source
                .subscribe(testData);
            expect(testAbstractData.fetch).toHaveBeenCalledTimes(1);
        })
    );

    it ('should return new data after reload and unsubscribe should not affect returned value',
        inject([TestAbstractData], (testAbstractData: TestAbstractData) => {

            // given
            const testData = (response: number) => {
                expect(response).toEqual(4);
            };
            spyOn(testAbstractData, 'fetch').and.callThrough();

            // when & then
            const source = testAbstractData.get();
            testAbstractData.reload();
            testAbstractData.reload();
            testAbstractData.reload();

            source
                .subscribe(testData)
                .unsubscribe();

            source
                .subscribe(testData);

            expect(testAbstractData.fetch).toHaveBeenCalledTimes(3);
        })
    );

});
