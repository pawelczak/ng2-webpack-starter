import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/multicast';


export abstract class AbstractData<T> {

    protected bridge$: Subject<T> = new ReplaySubject<T>(1);
    protected data$: Observable<T>;

    constructor() {
        this.load();
    }

    abstract fetch(): Observable<T>;

    get(): Observable<T> {
        return this.data$;
    }

    reload(): void {
        this.fetch()
            .subscribe((res: T) => {
                this.bridge$.next(res);
            });
    }

    protected init() {
        this.data$.subscribe(null);
    }

    private load(): void {
        this.data$ = this.fetch()
                            .multicast(this.bridge$)
                            .refCount();
    }

}
