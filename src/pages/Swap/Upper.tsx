import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Time from './Time';

const Upper = () => {
  return (
    <section style={{ width: '100%', marginBottom: 50 }}>
      <Box
        style={{
          backgroundColor: '#6f6097',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 0',
          width: '100%'
        }}
      >
        <img
          src='https://landboard.io/assets/img/logo.png'
          alt='logo'
          style={{ width: '30%', maxWidth: 250 }}
        />
        <Box
          style={{
            color: '#fff',
            width: '90%',
            maxWidth: 700,
            textAlign: 'center',
            marginTop: 20
          }}
        >
          <Typography variant='h3'>Presale #1</Typography>
          <Box style={{ width: '100%', marginBottom: 15 }}>
            <Time />
          </Box>
          <Typography variant='h5' style={{ marginBottom: 15 }}>
            *for non-whitelisted addresses
          </Typography>
          <Box>
            <Typography variant='h6'>
              $LAND is the utilty token of the Landboard ecosystem.
            </Typography>
            <a
              href='https://landboard.io/assets/litepaper.pdf'
              style={{ color: '#fff', textDecoration: 'none' }}
            >
              <Button
                variant='text'
                style={{ color: '#fff', textTransform: 'none', fontSize: 14 }}
              >
                Read the litepaper
              </Button>
            </a>
            <Typography variant='body1' style={{ marginTop: 15 }}>
              20% of tokens bought will be unlocked, the rest will be unlockable
              starting after 6 months.
            </Typography>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Upper;
