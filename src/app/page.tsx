'use client';

import dynamic from 'next/dynamic';
import './globals.css';
import { TextInput } from '@/components/TextInput';
import { SubmitButton } from '@/components/SubmitButton';
import { LatexRender } from '@/components/LatexRender';
import { LatexEditor } from '@/components/LatexEditor';
import { ImageUpload } from '@/components/imageUpload';
import { useState } from 'react';
import { roboto_mono } from './fonts';

// Import the Redux Provider only on client side
const ClientSideProvider = dynamic(
  () => import('../components/ClientSideProvider'),
  { ssr: false }
);

const Home: React.FC = () => {
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  return (
    <ClientSideProvider>
      <div className="flex justify-center">
        <h1
          className={`${roboto_mono.className}, py-8 text-center font-mono text-8xl text-blue-600`}
        >
          Lait
        </h1>
      </div>
      <TextInput />
      <div className="flex space-x-3 w-40 mx-auto py-4">
        <SubmitButton label="Submit" />
        <ImageUpload
          OCR_API_ENDPOINT="http://localhost:3000/api/ocr"
          uploadedFileName={uploadedFileName}
          setUploadedFileName={setUploadedFileName}
        />
      </div>
      <div className="flex justify-center">
        {uploadedFileName && <span>{uploadedFileName}</span>}
      </div>
      <div className="flex py-10 px-24 justify-center">
        <div className="flex-1">
          <div className="flex justify-center">
            <h1
              className={`${roboto_mono.className} text-center font-mono text-sm text-blue-600`}
            >
              Write LaTeX Code here
            </h1>
          </div>
          <LatexEditor />
        </div>
        <div className="flex-1">
          <div className="flex justify-center">
            <h1
              className={`${roboto_mono.className} text-center font-mono text-sm text-blue-600`}
            >
              Watch it render here
            </h1>
          </div>
          <LatexRender />
        </div>
      </div>
    </ClientSideProvider>
  );
};

export default Home;
