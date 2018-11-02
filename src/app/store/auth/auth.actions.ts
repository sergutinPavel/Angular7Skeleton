import {Action} from '@ngrx/store';

export enum ActionTypes {
  SignInAction = '[AuthAction] SignInAction',
  SignInActionSuccess = '[AuthAction] SignInActionSuccess',
  SignInActionFail = '[AuthAction] SignInActionFail',
  LogoutAction = '[AuthAction] LogoutAction',
}


export class SignInAction implements Action {
  readonly type = ActionTypes.SignInAction;
  constructor(public payload?: { email: string, password: string }) {}
}
export class SignInActionSuccess implements Action {
  readonly type = ActionTypes.SignInActionSuccess;
  constructor(public payload?: any) {}
}
export class SignInActionFail implements Action {
  readonly type = ActionTypes.SignInActionFail;
  constructor(public payload?: any) {}
}

export class LogoutAction implements Action {
  readonly type = ActionTypes.LogoutAction;
  constructor() {}
}

export type Actions =
  SignInAction
  | SignInActionSuccess
  | SignInActionFail
  | LogoutAction;
