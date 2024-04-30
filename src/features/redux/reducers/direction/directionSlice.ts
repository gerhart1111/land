import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../ReduxProvider';

export interface DirectionState {
  value: string;
}

const initialState: DirectionState = {
  value: 'ltr',
};

export const directionSlice = createSlice({
  name: 'direction',
  initialState,
  reducers: {
    setDirection: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setDirection } = directionSlice.actions;


export const selectDirection = (state: RootState) => state.direction.value;

export default directionSlice.reducer;
