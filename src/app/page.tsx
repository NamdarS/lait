'use client';

import dynamic from 'next/dynamic';
import './globals.css';
import { TextInput } from '@/components/TextInput';
import { SubmitButton } from '@/components/SubmitButton';
import { LatexRender } from '@/components/LatexRender';
import { LatexEditor } from '@/components/LatexEditor';
import { ImageUpload } from '@/components/imageUpload';

// Import the Redux Provider only on client side
const ClientSideProvider = dynamic(
  () => import('../components/ClientSideProvider'),
  { ssr: false }
);

const Home: React.FC = () => {
  return (
    <ClientSideProvider>
      <TextInput />

      <div className="flex space-x-3 w-40 mx-auto pt-4">
        <SubmitButton label="Submit" />
        <ImageUpload OCR_API_ENDPOINT="http://localhost:3000/api/ocr" />
      </div>

      <div className="flex py-24 px-24 justify-center">
        <div className="flex-1">
          <LatexEditor />
        </div>
        <div className="flex-1">
          <LatexRender />
        </div>
      </div>
    </ClientSideProvider>
  );
};

export default Home;
