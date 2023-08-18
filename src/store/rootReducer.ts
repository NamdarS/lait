import { combineReducers } from '@reduxjs/toolkit';
import textInputReducer from './slices/textInputSlice';
import latexReducer from './slices/latexSlice';

const rootReducer = combineReducers({
  textInput: textInputReducer,
  latex: latexReducer,
});

export default rootReducer;
