// tslint:disable:variable-name
import { Location } from '@angular/common';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';


export const StubActivatedRoute = (extraData?: any, params?: any) => ({
    provide: ActivatedRoute,
    useValue: {
        snapshot: {
            data: Object.assign(
                {
                    loan: { loanTransactionId: '' }
                },
                extraData || {}
            ),
            params: params
        },
        queryParams: of({})
    }
});

export const StubHttpService = (requestData?: any) => {
    const spyByVerb = verb => {
        const options = {
            body: Object.assign({}, requestData),
        };
        const response = new HttpResponse(options);
        const response$ = of(response);
        return jasmine.createSpy(verb).and.returnValue(response$);
    };
    return {
        provide: HttpClient,
        useValue: {
            get: spyByVerb('get'),
            post: spyByVerb('post'),
            put: spyByVerb('put'),
            delete: spyByVerb('delete'),
            patch: spyByVerb('patch')
        }
    };
};


export const StubRouterNavigation = {
    provide: Router,
    useValue: {
        events: of(),
        navigate: jasmine.createSpy('navigate'),
        navigateByUrl: jasmine.createSpy('navigateByUrl'),
        url: ''
    }
};

export const StubLocation = (path: string = '') => ({
    provide: Location,
    useValue: {
        path: () => `/${path}`,
        back: jasmine.createSpy('back')
    }
});






