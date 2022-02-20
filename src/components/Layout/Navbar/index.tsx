import React from 'react';
import { logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Navbar as BsNavbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { routeNames } from 'routes';
import LandboardLogo from './../../../assets/img/landboard.png';

const Navbar = () => {
  const { address } = useGetAccountInfo();

  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };

  const isLoggedIn = Boolean(address);

  return (
    <BsNavbar className='bg-white border-bottom px-4 py-3'>
      <div className='container-fluid'>
        <Link
          className='d-flex align-items-center navbar-brand mr-0 '
          to={routeNames.presale}
          style={{ width: '20%' }}
        >
          <img src={LandboardLogo} style={{ width: '100%' }} />
        </Link>

        <Nav className='ml-auto'>
          {isLoggedIn ? (
            <NavItem>
              <button className='btn btn-link' onClick={handleLogout}>
                Close
              </button>
            </NavItem>
          ) : (
            <NavItem>
              <Link className='btn btn-link' to={routeNames.connect}>
                Connect Wallet
              </Link>
            </NavItem>
          )}
        </Nav>
      </div>
    </BsNavbar>
  );
};

export default Navbar;
