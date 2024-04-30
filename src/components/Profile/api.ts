// import { call, put } from 'redux-saga-effects';
// import { get, getErrorMessage, post } from '../../utils/request';
// import { showErrorToast } from '../Toast/actions';
// import { PayloadAction } from '@reduxjs/toolkit';
// import { setUserProfile } from '.';
// import { formatValues } from '../../utils/object';

// export function* createPersonalInformationApi(payload: PayloadAction) {
//   try {
//     yield call(post, { url: '/career/onBoarding/personal-information', data: payload });
//   } catch (e) {
//     const errorMessage = getErrorMessage(e);

//     yield put(showErrorToast(errorMessage));
//   }
// }

// export function* fetchPersonalInformationApi() {
//   try {
//     const user = yield call(get, { url: '/career/onBoarding/personal-information' });
//     const newUser = formatValues(user, null, '');
//     yield put(setUserProfile(newUser));
//   } catch (e) {
//     const errorMessage = getErrorMessage(e);

//     yield put(showErrorToast(errorMessage));
//   }
// }
export{}