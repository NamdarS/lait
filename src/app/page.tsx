'use client';

import dynamic from 'next/dynamic';
import { TextInput } from '@/components/TextInput';
import { SubmitButton } from '@/components/SubmitButton';
import { LatexRender } from '@/components/LatexRender';

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
    </ClientSideProvider>
  );
};

export default Home;
