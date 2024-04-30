import { CareerStatus, LocationInterface, UserProfileInterface } from './types';
// import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export const initLocation: LocationInterface = {
  address: '',
  placeId: '',
  street: '',
  zip: '',
  city: '',
  state: '',
  lat: '',
  lng: '',
};

const initialState: { initData: UserProfileInterface; formData: { location: LocationInterface } } = {
  initData: {
    _id: '',
    firstname: '',
    lastname: '',
    email: '',
    careerStatus: CareerStatus.Unemployed,
    avatar: null,
    phoneNumber: '',
    location: initLocation,
    birthday: new Date().toISOString(),
    links: [],
  },
  formData: {
    location: initLocation,
  },
};

// export const profileSlice = createSlice({
//   name: 'profile',
//   initialState,
//   reducers: {
//     setUserProfile: (state, action: PayloadAction<UserProfileInterface>) => {
//       state.initData = action.payload;
//       state.formData = action.payload;
//     },
//     updateValue: (state, action: PayloadAction<{ key: string; value: string | LocationInterface }>) => {
//       state.initData[action.payload.key] = action.payload.value;
//     },
//     updateLocation: (state, action: PayloadAction<LocationInterface>) => {
//       state.formData.location = action.payload;
//     },
//   },
// });
