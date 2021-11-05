import React from 'react';

import { Grid } from '@mui/material';

import { Locales } from '../../../locales';
import CurrencyText from '../../atoms/texts/currencyText';
import InfoText from '../../atoms/texts/infoText';
import { useStyles } from './styles';
import { ReceiveAndFiveRewardsFormPropsType } from './types';

const ReceiveAndFiveRewardsForm: React.FC<ReceiveAndFiveRewardsFormPropsType> = ({
  myReward,
  give,
}) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={7} sm={5} md={6}>
        <InfoText text={Locales.MY_REWARDS} />
        <CurrencyText amountCurrency={myReward} />
      </Grid>
      <Grid item xs={5} md={6}>
        <InfoText text={Locales.GIVE} />
        <CurrencyText amountCurrency={give} />
      </Grid>
    </Grid>
  );
};

export default ReceiveAndFiveRewardsForm;
