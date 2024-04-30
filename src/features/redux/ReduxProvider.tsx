// 'use client'
import { Action, ThunkAction } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'
// import store from './store';
import createStore from './store';
// import { history } from '../history';

const store = createStore();

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
