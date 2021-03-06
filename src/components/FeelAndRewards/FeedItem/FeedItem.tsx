import React, { useCallback, useEffect, useState } from 'react';

import { Avatar, Grid, Tooltip, Typography } from '@mui/material';
import Moment from 'react-moment';

import { useFirebase } from '../../../firebase/firebase';
import { useStyles } from './FeelItem.styles';
import { DataPropsType } from './types';

export const FeedItem: React.FC<DataPropsType> = ({ from, to, why, date, user }) => {
  const classes = useStyles();
  const [fromUrl, setFromUrl] = useState('');
  const { fromUserIcon } = useFirebase();

  const fetchImageUrl = useCallback(async () => {
    const fromUserImageUrl = await fromUserIcon(from);
    setFromUrl(fromUserImageUrl);
  }, [from, fromUserIcon]);

  const imgUrl = from === user.name ? user.imageUrl : fromUrl;

  useEffect(() => {
    fetchImageUrl();
  }, [fetchImageUrl]);

  return (
    <Grid
      container
      direction={'row'}
      justifyContent={'start'}
      className={classes.root}
      wrap={'nowrap'}
    >
      <Avatar alt={user.name} src={imgUrl as string} classes={{ root: classes.avatar }} />

      <Grid item container direction={'column'} className={classes.itemsContainer}>
        <Grid item container direction={'column'} className={classes.userContainer}>
          <Typography variant={'body1'}>
            {from} rewarded by {to}
          </Typography>

          <Tooltip title={date.toString()} placement="bottom-start">
            <Typography variant={'body2'}>
              <Moment className={classes.dateMoment} toNow>
                {date}
              </Moment>
            </Typography>
          </Tooltip>
        </Grid>
        <Typography variant={'body1'}>{why}</Typography>
      </Grid>
    </Grid>
  );
};
