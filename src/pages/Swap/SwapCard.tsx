import React, { useState, useEffect } from 'react';
import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import {
  Box,
  Button,
  Card,
  TextField,
  Typography,
  Container
} from '@mui/material';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';
import data from './data.json';

const SwapCard = () => {
  const { account } = useGetAccountInfo();
  const [fromCurrency] = useState('LAND');
  const [toCurrency] = useState('EGLD');
  const [amount, setAmount] = useState(0);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);
  const [error, setError] = useState(false);
  const [isWhitelisted, setIsWhitelisted] = useState(false);

  const exchangeRate = 0.0002;
  let toAmount, fromAmount;

  //   interface timeProps {
  //     number: number;
  //     time: string;
  //   }

  interface timeProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }
  const Completionist = () => <span>You are good to go!</span>;
  const renderer: React.FC<timeProps> = ({
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
            marginTop: 10
          }}
        >
          <Typography variant='h5'>
            {days}:{hours}:{minutes}:{seconds} left
          </Typography>
        </Container>
      );
    }
  };
  const checkIfBigger = (amount: any) => {
    if (amountInFromCurrency) {
      Number(amount) > 5000
        ? setError(true)
        : Number(amount) < 1000
        ? setError(true)
        : setError(false);
    } else {
      Number(amount) > 1
        ? setError(true)
        : Number(amount) < 0.2
        ? setError(true)
        : setError(false);
    }
  };
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  interface Props {
    selectedCurrency: string;
    onChangeAmount: any;
    amount: number;
    type: string;
  }

  useEffect(() => {
    data?.data?.map((item: any) => {
      if (item.address === account.address) {
        setIsWhitelisted(true);
      }
    });
  }, []);

  useEffect(() => {
    checkIfBigger(amount);
  }, [amount]);

  const CurrencyRow: React.FC<Props> = ({ onChangeAmount, amount, type }) => {
    return (
      <div style={{ width: '100%', position: 'relative' }}>
        <TextField
          type='number'
          className='input'
          value={amount}
          onChange={onChangeAmount}
          style={{ width: '100%', padding: 10, borderRadius: 15 }}
          variant='outlined'
        />
        <div style={{ position: 'absolute', right: '15%', top: '35%' }}>
          {type}
        </div>
      </div>
    );
  };

  function handleFromAmountChange(e: any) {
    e.preventDefault();
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e: any) {
    e.preventDefault();

    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }
  return (
    <Card
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        padding: 50,
        width: '100%',
        maxWidth: 450
      }}
    >
      <Typography variant='h4' style={{ marginBottom: 15 }}>
        Buy $LAND
      </Typography>
      <Box
        style={{
          width: '100%'
        }}
      >
        {CurrencyRow({
          selectedCurrency: fromCurrency,
          onChangeAmount: handleFromAmountChange,
          amount: fromAmount,
          type: 'LAND'
        })}

        <div style={{ textAlign: 'center' }}>=</div>
        {CurrencyRow({
          selectedCurrency: toCurrency,
          onChangeAmount: handleToAmountChange,
          amount: toAmount,
          type: 'EGLD'
        })}

        <Typography variant='body1' style={{ marginTop: 10 }}>
          {' '}
          Balance:{' '}
          {parseFloat((Number(account.balance) / 10 ** 18).toString()).toFixed(
            5
          )}{' '}
          EGLD
        </Typography>
        <Typography>Min buy: 0.2 EGLD</Typography>
        <Typography>Max buy: 1 EGLD</Typography>
      </Box>

      <Button
        variant='contained'
        style={{
          width: '100%',
          marginTop: 20,
          marginBottom: 20,
          textTransform: 'none',
          fontSize: 18
        }}
        disabled={error}
      >
        Buy
      </Button>
      <Typography variant='body1'> 1 EGLD = 5000 LAND</Typography>

      {account?.address === '' ? (
        <>
          <Link to='/connect'>Log in</Link>
        </>
      ) : !isWhitelisted ? (
        'You are not in the whitelist.'
      ) : (
        <>
          <Typography variant='h6' style={{ marginTop: 10 }}>
            Your address is whitelisted!
          </Typography>
          <Countdown date={1645380000000} renderer={renderer} />
        </>
      )}
    </Card>
  );
};

export default SwapCard;
