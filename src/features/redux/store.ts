import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import { createReducer } from './reducers';

const isProduction = process.env.NODE_ENV === 'production';

const sagaMiddleware = createSagaMiddleware();

export default function createStore() {
  const middleware = [sagaMiddleware];
  const reducer = createReducer();

  const store: any = configureStore({
    reducer,
    middleware: getDefaultMiddleware =>
      !isProduction ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
    devTools: !isProduction,
    // preloadedState: persistedState,
    enhancers: [applyMiddleware(...middleware)],
  });

  store.asyncReducers = {};

  // Create an inject reducer function
  // This function adds the async reducer, and creates a new combined reducer
  store.injectReducer = (key:any, asyncReducer:any) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  // Create an inject saga function
  // This function adds the async saga, and creates a new combined saga
  // store.injectSaga = createSagaInjector(sagaMiddleware.run, appSaga);

  return store;
}

// import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import { createReducer } from './reducers';
// // import reducers from './reducers'; // Import your root reducer
// // import rootSaga from './sagas'; // Import your root saga

// // import { createWrapper } from 'next-redux-wrapper';

// const isProduction = process.env.NODE_ENV === 'production';


// const sagaMiddleware = createSagaMiddleware();

// const middleware = [sagaMiddleware];
// const reducer = createReducer()

// const store = configureStore({
//   reducer,
//   middleware: (getDefaultMiddleware) =>
//     !isProduction
//       ? getDefaultMiddleware({
//           serializableCheck: false, // Disable serializability check
//         }).concat(middleware)
//       : middleware,
//   devTools: !isProduction,
// });

// // store.asyncReducers = {};

// // Create an inject reducer function
// // This function adds the async reducer, and creates a new combined reducer
// // store.injectReducer = (key, asyncReducer) => {
// //   store.asyncReducers[key] = asyncReducer;
// //   store.replaceReducer(rootReducer); // You don't need to pass history for this
// // };

// // Create an inject saga function
// // This function adds the async saga, and creates a new combined saga
// // store.injectSaga = (saga) => {
// //   sagaMiddleware.run(saga);
// // };

// // const makeStore = () => store;

// // export const wrapper = createWrapper(makeStore);

// export default store;

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;

