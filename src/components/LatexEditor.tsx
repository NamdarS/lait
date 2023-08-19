'use client';

import React, { FC } from 'react';
import AceEditor from 'react-ace';
import { RootState } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { setLatexCode } from '../store/slices/latexSlice';

// Import the LaTeX mode and a theme for syntax highlighting
import 'ace-builds/src-noconflict/mode-latex';
import 'ace-builds/src-noconflict/theme-monokai';

export const LatexEditor: FC = () => {
  const dispatch = useDispatch();
  const latexCode = useSelector((state: RootState) => state.latex.latexCode);

  const handleLatexChange = (newLatex: string) => {
    dispatch(setLatexCode(newLatex)); 
  };

  return (
    <AceEditor
      mode="latex"
      theme="monokai"
      onChange={handleLatexChange}
      value={latexCode}
      name="LatexEditorDiv" // This should be a unique ID for the editor div
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        fontSize: '16pt',
        showLineNumbers: true,
      }}
    />
  );
};
