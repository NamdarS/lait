'use client';

import dynamic from 'next/dynamic';
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
      <ImageUpload OCR_API_ENDPOINT="http://localhost:3000/api/ocr" />
      <SubmitButton label="Submit" />
      <LatexRender />
      <LatexEditor />
    </ClientSideProvider>
  );
};

export default Home;
