import React, { useEffect, useState } from 'react';
import { Box, Card, Typography } from '@mui/material';
import ProgressBar from '@ramonak/react-progress-bar';
import axios from 'axios';
import { contractAddress } from 'config';

const CurrentRound = () => {
  const [count, setCount] = useState(2500000);

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
        <Typography variant='body1'>
          {count} tokens sold out of 2500000
        </Typography>
        <ProgressBar completed={100} maxCompleted={100} />
      </Box>
    </Card>
  );
};

export default CurrentRound;
