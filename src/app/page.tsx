'use client';

import dynamic from 'next/dynamic';
import { TextInput } from '@/components/TextInput';
import { SubmitButton } from '@/components/SubmitButton';
import { LatexRender } from '@/components/LatexRender';
import { LatexEditor } from '@/components/LatexEditor';

// Import the Redux Provider only on client side
const ClientSideProvider = dynamic(() => import('../components/ClientSideProvider'),
  { ssr: false }
);

const Home: React.FC = () => {
  return (
    <ClientSideProvider>
      <TextInput />
      <SubmitButton label='Submit'/>
      <LatexRender />
      <LatexEditor />
    </ClientSideProvider>
  );
};

export default Home;
