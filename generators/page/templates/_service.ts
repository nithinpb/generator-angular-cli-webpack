import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { <%= capitalizedPageName %> } from './<%= pluralPageName %>.model';

@Injectable()
export class <%= capitalizedPluralPageName %>Service implements Resolve<any> {
    
    <%= pluralPageName %>: <%= capitalizedPageName %>[];
    on<%= capitalizedPageName %>Changed: BehaviorSubject<any> = new BehaviorSubject({});
    on<%= capitalizedPageName %>Selected: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(private http: HttpClient) {}

     /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {

        return new Promise((resolve, reject) => {
            Promise.all([ this.get<%= pluralPageName %>() ]).then(
                () => {
                    this.get<%= pluralPageName %>();
                    resolve();
                },
                reject
            );
        });
    }

    get<%= pluralPageName %>(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get('api/<%= pluralPageName %>-data.json')
                .subscribe((response: any) => {
                    this.<%= pluralPageName %> = response;
                    this.<%= pluralPageName %> = this.<%= pluralPageName %>.map(<%= pageName %> => {
                        return new <%= capitalizedPageName %>(<%= pageName %>);
                    });                    
                    this.on<%= capitalizedPageName %>Changed.next(this.<%= pluralPageName %>);
                    resolve(response);
                }, reject);
        });
    }
}