import React from 'react';
import { Box, Card, Typography } from '@mui/material';
import ProgressBar from '@ramonak/react-progress-bar';

const CurrentRound = () => {
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
      <Typography variant='h4'>Current Round: 1</Typography>
      <Box style={{ marginTop: 20 }}>
        <Typography variant='h6'>Price per token: 0.0002 $EGLD </Typography>
        <Typography variant='h6'>
          Tokens supply: 2500000 $LAND (2.5%)
        </Typography>
        <Typography variant='h6'>Whitelisted addresses: 500</Typography>
      </Box>
      <Box>
        <Typography variant='body1'>0 tokens sold out of 2500000</Typography>
        <ProgressBar completed={0} maxCompleted={2500000} />
      </Box>
    </Card>
  );
};

export default CurrentRound;
