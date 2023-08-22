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
    'py-2',
    'w-1/3',
    'focus:outline-none',
    'focus:ring',
    'focus:ring-blue-200',
    'focus:ring-opacity-50',
    'shadow',
  ].join(' ');

  return (
    <div className="pt-32 flex justify-center">
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
