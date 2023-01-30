import { Observable } from "rxjs";

export interface DeactivateComponent {
    canExit: () => Observable<boolean> | Promise<boolean> | boolean;
}