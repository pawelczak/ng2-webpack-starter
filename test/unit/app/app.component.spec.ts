// 3d party imports
import { Component } from '@angular/core';
import {RouterModule, Routes, Router, provideRoutes} from '@angular/router';
import { TestBed, inject } from '@angular/core/testing';

// app imports
import { AppComponent } from '../../../src/app/app.component';
import {RouterTestingModule} from "@angular/router/testing";


describe('AppComponent', () => {

    @Component({
        selector: 'empty',
        template: ``
    })
    class EmptyComponent {}

    const mockRoutes: Routes = [
        { path: '', component: EmptyComponent },
        { path: 'repos', component: EmptyComponent },
        { path: 'about', component: EmptyComponent}
    ];

    const mockRouting = RouterModule.forRoot(mockRoutes);


    beforeEach(() => {
        TestBed
            .configureTestingModule({
                imports: [
                    RouterTestingModule
                ],
                declarations: [
                    AppComponent,
                    EmptyComponent
                ],
                providers: [
                    provideRoutes([]) // TODO need to change this
                ]
            });
    });

    it ('should have header & footer', inject([Router], (r: Router) => {

        // given
        const fixture = TestBed.createComponent(AppComponent),
            element = fixture.nativeElement;

        // when
        fixture.detectChanges();

        // then
        expect(element.querySelectorAll('header').length).toBe(1);
        expect(element.querySelectorAll('footer').length).toBe(1);
    }));
});
