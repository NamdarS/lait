'use client';

import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';

interface ClientSideProviderProps {
  children: ReactNode;
}

const ClientSideProvider: React.FC<ClientSideProviderProps> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientSideProvider;
