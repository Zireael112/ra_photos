import { createSlice } from '@reduxjs/toolkit';

const initialState = [];


export const photoSlice = createSlice({
  name: 'photo',
  initialState,
  reducers: {
    addValue: (state, action) => {
        state.unshift(action.payload)
    }
  },
});

export const {addValue} = photoSlice.actions

export const selectPhoto = (state) => state.photo;

export default photoSlice.reducer;