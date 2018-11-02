import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs/index';
import { catchError, map, mergeMap, switchMap } from 'rxjs/internal/operators';
import * as generalActions from './general.actions';
import { GeneralService } from './general.service';


@Injectable()
export class GeneralEffects {
  constructor(private _actions$: Actions, private _generalService: GeneralService) {}

  @Effect()
  getTestData: Observable<Action> = this._actions$.pipe(
    ofType<generalActions.GetTestDataAction>(generalActions.GeneralActionTypes.GetTestDataAction),
    switchMap(action => {
      return this._generalService.getTestData(action.payload).pipe(
        map(data => ({ type: generalActions.GeneralActionTypes.GetTestDataActionSuccess, payload: data })),
        catchError(err => of({ type: generalActions.GeneralActionTypes.GetTestDataActionFail, payload: err }))
      );
    })
  );
}
