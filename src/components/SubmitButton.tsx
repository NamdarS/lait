'use client';

import React, { FC } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setLatexCode } from '../store/slices/latexSlice';
import { RootState } from '../store/store';

interface ButtonProps {
  label: string;
}

export const SubmitButton: FC<ButtonProps> = ({ label }) => {
  const dispatch = useDispatch();
  // value of textInput extracted from redux store
  const userInput = useSelector((state: RootState) => state.textInput.value);

  const handleClick = async () => {
    try {
      const response = await axios.post('/api/convert', {
        prompt: userInput,
      });

      const { data } = response;
      dispatch(setLatexCode(data.text));
    } catch (error) {
      console.error('There was a problem with the request:', error);
    }
  };

  return <button onClick={handleClick}>{label}</button>;
};
