import React from 'react';
import { Grid, Container, Typography } from '@mui/material';
import Countdown from 'react-countdown';

const Time = () => {
  interface timeProps {
    number: number;
    time: string;
  }
  const TimeDisplay: React.FC<timeProps> = ({ number, time }) => (
    <Container
      style={{
        backgroundColor: '#fff',
        color: '#000',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '5px 0',
        borderRadius: 15
      }}
    >
      <Typography variant='h4' style={{ color: '#000' }}>
        {number}
      </Typography>
      <Typography
        style={{ color: '#7b5eea', fontSize: 13, textTransform: 'uppercase' }}
      >
        {time}
      </Typography>
    </Container>
  );

  interface Props {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }
  const Completionist = () => <span>You are good to go!</span>;
  const renderer: React.FC<Props> = ({
    days,
    hours,
    minutes,
    seconds,
    completed
  }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Container
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '80%',
            marginTop: 20
          }}
        >
          <Grid
            container
            spacing={2}
            style={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between'
            }}
          >
            <Grid item md={3} xs={12} sm={6}>
              <TimeDisplay number={days} time='Days' />
            </Grid>
            <Grid item md={3} xs={12} sm={6}>
              <TimeDisplay number={hours} time='Hours' />
            </Grid>
            <Grid item md={3} xs={12} sm={6}>
              <TimeDisplay number={minutes} time='Minutes' />
            </Grid>
            <Grid item md={3} xs={12} sm={6}>
              <TimeDisplay number={seconds} time='Seconds' />
            </Grid>
          </Grid>
        </Container>
      );
    }
  };
  return (
    <div>
      {' '}
      <Countdown date={1645380000000} renderer={renderer} />
    </div>
  );
};

export default Time;
