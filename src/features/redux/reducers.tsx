import { AnyAction, combineReducers, Reducer } from '@reduxjs/toolkit';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
// import languagesListReducer, { LanguagesListState } from './reducers/languagesList/languagesListSlice';
import { ToastInterface, toastReducer } from '@/components/Toast/toastSlice';
import directionReducer, { DirectionState } from './reducers/direction/directionSlice';
// import { DirectionState } from './reducers/direction/directionSlice';

export interface StaticState {
  // router: (state: RouterState, action: AnyAction) => RouterState<any>;
  toast: Reducer<ToastInterface, AnyAction>;
  direction: (state: DirectionState, action: AnyAction) => DirectionState;
  // languagesList: (state: LanguagesListState, action: AnyAction) => LanguagesListState;
}

const createReducer = (
  // history: History,
   asyncReducers: any = null) => {
  const staticReducers = {
    // router: connectRouter(history),
    toast: toastReducer,
    direction: directionReducer,
    // languagesList: languagesListReducer,
  } as StaticState;

  const reducers = combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
  return reducers;
};

export { createReducer };
  // function directionReducer(state: DirectionState, action: AnyAction): DirectionState {
  //   throw new Error('Function not implemented.');
  // }

