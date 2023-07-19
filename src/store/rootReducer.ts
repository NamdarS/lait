import { combineReducers } from '@reduxjs/toolkit';
import textInputReducer from './slices/textInputSlice';

const rootReducer = combineReducers({
  textInput: textInputReducer,
});

export default rootReducer;
