import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { Typography } from '@material-ui/core';
import { deepOrange, lightGreen, blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    open: {
      background: lightGreen['A400'],
      border: `2px solid ${lightGreen['A400']}`,
      color: blueGrey[700],
      '&:hover': {
        border: `2px solid ${lightGreen[900]}`,
        background: lightGreen['A700'],
      },
    },
    close: {
      border: '2px solid red',
      background: deepOrange['A400'],
      color: '#fff',
      '&:hover': {
        border: '2px solid red',
        background: deepOrange['A400'],
      },
    },
  }),
);

interface Props {
  floar: string;
  open: boolean;
}

export const LiftButton: FC<Props> = (props: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Fab className={props.open ? classes.open : classes.close} size="large">
        <Typography  variant="h4" align="center">
          {props.floar}
        </Typography>
      </Fab>
    </div>
  );
};
