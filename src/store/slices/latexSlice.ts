import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LatexState {
  latexCode: string;
}

const initialState: LatexState = {
  latexCode: '',
};

const latexSlice = createSlice({
  name: 'latex',
  initialState,
  reducers: {
    setLatexCode: (state, action: PayloadAction<string>) => {
      state.latexCode = action.payload;
    },
  },
});

export default latexSlice.reducer;

export const { setLatexCode } = latexSlice.actions;

