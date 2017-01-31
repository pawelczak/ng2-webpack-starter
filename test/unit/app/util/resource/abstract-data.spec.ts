import { TestBed, inject } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

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
                setTimeout(() => {
                    this.counter += 1;
                    observer.next(this.counter);
                }, 2000);
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

    describe(' different time response', () => {

        class TestAbstractData extends AbstractData<number> {

            private counter = 0;

            private subject$ = new Subject();

            constructor() {
                super();
                this.init();
            }

            fetch(): Observable<number> {
                return this.subject$.asObservable();
            }

            generateData(): void {
                this.counter += 1;
                this.subject$.next(this.counter);
            }

        }

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    TestAbstractData
                ]
            });
        });


        it ('initial data fetching is long',
            inject([TestAbstractData], (testAbstractData: TestAbstractData) => {

                // given
                spyOn(testAbstractData, 'fetch').and.callThrough();

                // when & then
                const source = testAbstractData.get();

                source
                    .subscribe((response: number) => {
                        expect(response).toEqual(null);
                    });

                expect(testAbstractData.fetch).not.toHaveBeenCalled();
            })
        );

        it ('subscriber is subing when data is in reload state',
            inject([TestAbstractData], (testAbstractData: TestAbstractData) => {


                // given

                spyOn(testAbstractData, 'fetch').and.callThrough();

                // when & then
                const source = testAbstractData.get();

                let subscription =
                            source
                                .subscribe((response: number) => {
                                    expect(response).toEqual(1);
                                });

                testAbstractData.generateData();

                subscription.unsubscribe();

                testAbstractData.reload();

                subscription =
                        source
                            .subscribe((response: number) => {
                                expect(response).toEqual(1);
                            });
                subscription.unsubscribe();

                expect(testAbstractData.fetch).toHaveBeenCalledTimes(1);

                testAbstractData.generateData();

                subscription =
                        source
                            .subscribe((response: number) => {
                                expect(response).toEqual(2);
                            });

                expect(testAbstractData.fetch).toHaveBeenCalledTimes(1);
            })
        );

    });



});
