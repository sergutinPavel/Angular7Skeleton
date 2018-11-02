import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../store/auth/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private _authService: AuthService, private _router: Router) {
    }

    canActivateChild(next: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this._authService.isLoggedIn()) {
            return true;
        } else {
            this._router.navigateByUrl('/auth/');
            return false;
        }
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this._authService.isLoggedIn()) {
            return true;
        } else {
            this._router.navigateByUrl('/auth/');
            return false;
        }
    }
}

@Injectable()
export class NoAuthGuard implements CanActivate, CanActivateChild {
    constructor(private _authService: AuthService, private _router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // console.log('NoAuthGuard', this.userService.isLoggedIn())
        if (!this._authService.isLoggedIn()) {
            return true;
        } else {
            this._router.navigateByUrl('/dashboard');
            return false;
        }
    }

    canActivateChild(next: ActivatedRouteSnapshot,
                     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        // console.log('NoAuthGuard', this.userService.isLoggedIn())
        if (!this._authService.isLoggedIn()) {
            return true;
        } else {
            this._router.navigateByUrl('/dashboard');
            return false;
        }
    }
}
