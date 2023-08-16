'use client';

import React, { FC } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface ButtonProps {
  label: string;
}

export const SubmitButton: FC<ButtonProps> = ({ label }) => {
  // value of textInput extracted from redux store
  const value = useSelector((state: RootState) => state.textInput.value);
  const handleClick = async () => {
    try {
      const response = await axios.post('/api/convert', {
        prompt: value,
      });

      console.log(response.data);
    } catch (error) {
      console.error('There was a problem with the request:', error);
    }
  };

  return <button onClick={handleClick}>{label}</button>;
};
