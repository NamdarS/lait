'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateValue } from '../store/slices/textInputSlice';
import { RootState } from '../store/store';

export const TextInput: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.textInput.value);

  const inputClasses = [
    'border',
    'rounded',
    'px-3',
    'py-3',
    'w-2/5',
    'focus:outline-none',
    'focus:ring',
    'focus:ring-castleton-green',
    'focus:ring-opacity-50',
    'shadow',
  ].join(' ');

  return (
    <div className="py-4 flex justify-center">
      <input
        type="text"
        value={value}
        onChange={(e) => dispatch(updateValue(e.target.value))}
        className={inputClasses}
        placeholder="integral of x cubed from 2 to 8"
      />
    </div>
  );
};
