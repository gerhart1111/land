// import { FETCH_USER_PROFILE, SET_USER_PROFILE } from './constants';
// import { createPersonalInformationApi, fetchPersonalInformationApi } from './api';
// import { put, select, takeEvery, takeLatest } from 'redux-saga-effects';
// import { push } from 'connected-react-router';
// import { selectInitProfile, selectLocation, setUserProfile } from '.';
// import { getObjectDiff } from '../../utils/object';
// import showSuccessToast from '../Toast';
// // import { selectIsAuth } from '../Auth';
// // import { selectPathName } from 'App/features/Auth';


// function* createUserProfile({ payload }: { payload: any; type: typeof SET_USER_PROFILE }) {
//   const location = yield select(selectLocation);
//   payload.location = location;
//   const initProfile = yield select(selectInitProfile);

//   if (getObjectDiff(initProfile, payload).length) {
//     yield createPersonalInformationApi({ ...payload, avatar: payload.avatar?.id });
//     yield put(setUserProfile(payload));
//   }

// //   const pathname = yield select(selectPathName);
// //   if (pathname !== '/account/profile/edit') {
// //     yield put(push('/account/education'));
// //   } else {
// //     yield put(showSuccessToast('Your changes were saved successfully.'));
// //   }
// // }

// // function* loadUserProfile() {
// //   const isAuth = yield select(selectIsAuth);
// //   if (isAuth) {
// //     yield fetchPersonalInformationApi();
// //   }
// // }
//   }
// export function* watchUserProfileSaga() {
//   // yield takeEvery(FETCH_USER_PROFILE, loadUserProfile);
//   yield takeLatest(SET_USER_PROFILE, createUserProfile);
// }
export{}
