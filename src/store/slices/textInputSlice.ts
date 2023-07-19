import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TextInputState {
  value: string;
}

const initialState: TextInputState = {
  value: '',
};

export const textInputSlice = createSlice({
  name: 'textInput',
  initialState,
  reducers: {
    updateValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

// export reducer
export default textInputSlice.reducer;

// export actions
export const { updateValue } = textInputSlice.actions;
