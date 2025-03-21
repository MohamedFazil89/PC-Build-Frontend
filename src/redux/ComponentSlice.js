// componentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedComponents: [],
};

const componentSlice = createSlice({
  name: 'component',
  initialState,
  reducers: {
    setSelectedComponents: (state, action) => {
      state.selectedComponents = action.payload;
    },
  },
});

export const { setSelectedComponents } = componentSlice.actions;
export default componentSlice.reducer;
