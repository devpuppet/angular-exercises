import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { map, Observable, of, timer } from "rxjs";

@Injectable()
export class CustomPreloadStrategy extends PreloadingStrategy {
    preload(route: Route, fn: () => Observable<any>): Observable<any> {
        const loadRoute = (delay: number) => delay > 0 ? timer(delay).pipe(map(() => fn())) : fn();
        if (route.data && route.data['preload']) {
            const delay = route.data['delay'] ? route.data['delay'] : 0;
            return loadRoute(delay);
        } else {
            return of(null);
        }
    }
    
}