import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { isEqual } from 'lodash';
import { IToast } from './types';
import { RootState } from '@/features/redux/ReduxProvider';

export interface ToastInterface {
  queue: IToast[];
  activeToast: IToast | null;
}

const initialState: ToastInterface = {
  queue: [],
  activeToast: null,
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    addQueueToast: (state, action: PayloadAction<IToast>) => {
      state.queue.push(action.payload);
    },
    showToast: (state, action: PayloadAction<IToast>) => {
      const index = state.queue.findIndex(item => isEqual(item, action.payload));
      state.activeToast = action.payload;
      if (index !== -1) state.queue.splice(index, 1);
    },
    hideActiveToast: state => {
      state.activeToast = null;
    },
    resetToast: state => {
      state = initialState;
    },
  },
});

export const { addQueueToast, showToast, hideActiveToast, resetToast } = toastSlice.actions;

export const toastReducer = toastSlice.reducer;

export const getQueue = (state:RootState) => state.toast.queue;

export const getActiveToast = (state:RootState) => state.toast.activeToast;
