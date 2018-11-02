import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable, of} from 'rxjs/index';
import {catchError, map, mergeMap, switchMap} from 'rxjs/internal/operators';
import * as authActions from './auth.actions';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';


@Injectable()
export class AuthEffects {
  constructor(private _actions$: Actions, private _AuthService: AuthService, private _router: Router) {
  }

  @Effect()
  signIn$: Observable<Action> = this._actions$.pipe(
    ofType<authActions.SignInAction>(authActions.ActionTypes.SignInAction),
    switchMap(action => {
      // return this._AuthService.signIn(action.payload.email, action.payload.password)
        return of({token: 'token_example'})
          .pipe(
        map(data => {
          localStorage.setItem('user', JSON.stringify(data));
          if (data.token) {
            localStorage.setItem('token', JSON.stringify(data.token));
          }
          this._router.navigateByUrl('/dashboard');
          return {type: authActions.ActionTypes.SignInActionSuccess, payload: data};
        }),
        catchError(err => of({type: authActions.ActionTypes.SignInActionFail, payload: err}))
      );
    })
  );
  @Effect()
  logout$: Observable<Action> = this._actions$.pipe(
    ofType<authActions.LogoutAction>(authActions.ActionTypes.LogoutAction),
    mergeMap(action => {
      if (localStorage.getItem('user')) { localStorage.removeItem('user'); }
      if (localStorage.getItem('token')) { localStorage.removeItem('token'); }
      this._router.navigateByUrl('/auth/');
      return of();
    })
  );

}
