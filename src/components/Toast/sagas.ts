// import { call, fork, put, race, select, take } from 'redux-saga/effects';
// import { addQueueToast, getActiveToast, getQueue, hideActiveToast, resetToast, showToast } from './toastSlice';
// import { IToast } from './types';
// import { LOCATION_CHANGE } from 'connected-react-router';

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
// const TIMEOUT = 5000;

// function* watchLocationChange() {
//   while (true) {
//     yield take(LOCATION_CHANGE);
//     const toast = yield select(getActiveToast);

//     if (toast && toast.persistOnLocationChange) {
//       yield delay(TIMEOUT);
//       yield put(hideActiveToast());
//     } else {
//       yield put(hideActiveToast());
//     }
//   }
// }

// export function* watchToastQueue() {
//   while (true) {
//     yield fork(watchLocationChange);

//     const queue: IToast[] = yield select(getQueue);
//     const activeToast: IToast = yield select(getActiveToast);

//     if (queue.length > 0) {
//       const toast = queue[0];
//       yield put(showToast(toast));

//       yield race({
//         timeout: call(delay, TIMEOUT), // timeout between toasts
//         hide: take(hideActiveToast.type),
//         reset: take(resetToast.type),
//       });
//     } else {
//       if (!activeToast || !activeToast.action) {
//         yield put(hideActiveToast()); // ensure that the last toast hides
//       }
//       yield take([addQueueToast.type, resetToast.type]); // wait before a new toast in the queue
//     }
//   }
// }
export{}