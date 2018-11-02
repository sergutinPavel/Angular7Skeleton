import { Action } from '@ngrx/store';
import { IFilterParams } from '../../models/sortingParams';

export enum GeneralActionTypes {
  // LoadGeneralActions = '[GeneralAction] Load GeneralActions',
  ToggleSidebarAction = '[GeneralAction] ToggleSidebarAction',
  GetTestDataAction = '[GeneralAction] GetTestDataAction',
  GetTestDataActionSuccess = '[GeneralAction] GetTestDataActionSuccess',
  GetTestDataActionFail = '[GeneralAction] GetTestDataActionFail'
}

// export class LoadGeneralActions implements Action {
//   readonly type = GeneralActionTypes.LoadGeneralActions;
//   constructor(public payload?: any) {}
// }

export class ToggleSidebarAction implements Action {
  readonly type = GeneralActionTypes.ToggleSidebarAction;
  constructor(public payload?: undefined | boolean) {}
}

export class GetTestDataAction implements Action {
  readonly type = GeneralActionTypes.GetTestDataAction;
  constructor(public payload?: IFilterParams) {}
}
export class GetTestDataActionSuccess implements Action {
  readonly type = GeneralActionTypes.GetTestDataActionSuccess;
  constructor(public payload?: any) {}
}
export class GetTestDataActionFail implements Action {
  readonly type = GeneralActionTypes.GetTestDataActionFail;
  constructor(public payload?: any) {}
}

export type GeneralActions =
  ToggleSidebarAction
  | GetTestDataAction
  | GetTestDataActionSuccess
  | GetTestDataActionFail;
