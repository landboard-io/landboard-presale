import * as React from 'react';
import { Link } from 'react-router-dom';
import { routeNames } from 'routes';
import landboardLogo from '../../assets/img/landboard.png';

const Home = () => {
  return (
    <div className='d-flex flex-fill align-items-center container'>
      <div className='row w-100'>
        <div className='col-12 col-md-8 col-lg-5 mx-auto'>
          <div className='card shadow-sm rounded p-4 border-0'>
            <div className='card-body text-center'>
              <img
                src={landboardLogo}
                alt='Landboard'
                style={{ width: '70%', marginBottom: 15 }}
              />

              <p className='mb-3'>
                This is an Landboard&apos;s presale page.
                <br /> Login using your Elrond wallet.
              </p>

              <Link
                to={routeNames.unlock}
                className='btn btn-primary mt-3 text-white'
                data-testid='loginBtn'
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
