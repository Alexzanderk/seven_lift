import { makeStyles, Theme, createStyles, Fab, Typography } from '@material-ui/core';
import { lightGreen, blueGrey, deepOrange } from '@material-ui/core/colors';
import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OpenCloseDoorRequestBody } from '../../api/api.types';
import { AppState } from '../../core/root.reducer';
import { AuthState } from '../../store/auth/auth.reducer';
import { closeDoor, openDoor } from '../../store/lift/lift.action';
import { Floor } from '../../store/lift/lift.reducer';

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
  floor: Floor;
}

export const Button: FC<Props> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { token: UserSID } = useSelector<AppState, AuthState>((state) => state.auth);

  const handleClick = () => {
    const data: OpenCloseDoorRequestBody = {
      Tokens: [props.floor.token],
      UserSID,
    };
    switch (props.floor.open) {
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
      <Fab onClick={handleClick} className={props.floor.open ? classes.open : classes.close} size="medium">
        <Typography variant="h5" align="center">
          {props.floor.floor}
        </Typography>
      </Fab>
    </div>
  );
};
