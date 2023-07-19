'use client'

import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface ButtonProps {
  label: string;
}

export const SubmitButton: FC<ButtonProps> = ({ label }) => {
  const value = useSelector((state: RootState) => state.textInput.value);
  const handleClick = () => {
    console.log(value);
  };

  return <button onClick={handleClick}>{label}</button>;
};
