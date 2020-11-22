import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { Typography } from '@material-ui/core';
import { deepOrange, lightGreen, blueGrey } from '@material-ui/core/colors';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../core/root.reducer';
import { openDoor, closeDoor } from '../../store/lift/lift.action';
import { OpenCloseDoorRequestBody } from '../../api/api.types';
import { AuthState } from '../../store/auth/auth.reducer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(0.5),
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
  section: string;
  token: number;
}

export const LiftButton: FC<Props> = (props: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { token: UserSID } = useSelector<AppState, AuthState>((state) => state.auth);

  const handleClick = () => {
    const data: OpenCloseDoorRequestBody = {
      Tokens: [props.token],
      UserSID,
    };
    switch (props.open) {
      case true:
        dispatch(closeDoor(data));
        break;

      case false:
        dispatch(openDoor(data));
        break;

      default:
        break;
    }
  };
  return (
    <div className={classes.root}>
      <Fab onClick={handleClick} className={props.open ? classes.open : classes.close} size="medium">
        <Typography variant="h5" align="center">
          {props.floar}
        </Typography>
      </Fab>
    </div>
  );
};
