'use client';

import React, { FC } from 'react';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { MathJaxProvider, MathJaxNode } from '@yozora/react-mathjax';

export const LatexRender: FC = () => {
  const latexCode = useSelector((state: RootState) => state.latex.latexCode);

  return (
    <div className="h-[400px] rounded border border-dark-beige bg-beige">
      <MathJaxProvider>
        {latexCode && <MathJaxNode inline formula={latexCode} />}
      </MathJaxProvider>
    </div>
  );
};
