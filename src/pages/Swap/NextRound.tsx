import React from 'react';
import { Box, Card, Typography, Button } from '@mui/material';

const NextRound = () => {
  return (
    <Card
      style={{
        width: '100%',
        padding: 20,
        height: 350,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <Typography variant='h4'>Next round</Typography>
      <Box>
        <Typography variant='h6'>Price per token: 0.0003 $EGLD</Typography>
        <Typography variant='h6'>Tokens supply: 7500000 $LAND</Typography>
        <Typography variant='h6'>Whitelisted addresses: TBD</Typography>
      </Box>

      <Button
        variant='contained'
        style={{
          backgroundColor: '#6f6097',
          textTransform: 'none',
          fontSize: 16
        }}
      >
        <a
          href='https://twitter.com/landboard_io'
          style={{ width: '100%', color: '#fff', textDecoration: 'none' }}
        >
          Join the community!
        </a>
      </Button>
    </Card>
  );
};

export default NextRound;
