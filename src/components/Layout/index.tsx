import React from 'react';
import { AuthenticatedRoutesWrapper } from '@elrondnetwork/dapp-core';
import { useLocation } from 'react-router-dom';
import routes, { routeNames } from 'routes';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { search } = useLocation();
  return (
    <div className='bg-light d-flex flex-column flex-fill wrapper'>
      <Navbar />
      <main className='d-flex flex-column flex-grow-1'>
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${routeNames.connect}${search}`}
        >
          {children}
        </AuthenticatedRoutesWrapper>
      </main>
    </div>
  );
};

export default Layout;
