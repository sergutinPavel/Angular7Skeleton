import { Action } from '@ngrx/store';
import { GeneralActionTypes, GeneralActions } from './general.actions';


export interface IGeneralState {
  expandSidebar: boolean;
  testData: any;
  testDataStatus: {
    loading: boolean;
    loaded: boolean;
    error: any;
  };
}

export const initialState: IGeneralState = {
  expandSidebar: false,
  testData: null,
  testDataStatus: {
    loading: false,
    loaded: false,
    error: false
  }
};

export function reducer(state = initialState, action): IGeneralState {
  switch (action.type) {
    case GeneralActionTypes.ToggleSidebarAction:
      // console.log('GeneralActionTypes.ToggleSidebarAction', action.payload);
      return { ...state, expandSidebar: action.payload !== undefined ? !!action.payload : !state.expandSidebar };
    case GeneralActionTypes.GetTestDataAction:
      return { ...state, testData: null, testDataStatus: { loading: true, loaded: false, error: false } };
    case GeneralActionTypes.GetTestDataActionSuccess:
      return { ...state, testData: action.payload, testDataStatus: { loading: false, loaded: true, error: false } };
    case GeneralActionTypes.GetTestDataActionFail:
      return { ...state, testData: null, testDataStatus: { loading: false, loaded: false, error: action.payload } };
    default:
      return state;
  }
}

export const getExpandSidebar = (state: IGeneralState) => state.expandSidebar;
