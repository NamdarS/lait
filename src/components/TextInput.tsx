'use client'

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateValue } from '../store/slices/textInputSlice';
import { RootState } from '../store/store';

export const TextInput: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.textInput.value);

  return (
    <input
      type="text"
      value={value}
      onChange={(e) => dispatch(updateValue(e.target.value))}
    />
  );
};
