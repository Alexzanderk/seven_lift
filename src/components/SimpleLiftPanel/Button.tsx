import { makeStyles, Theme, createStyles, Fab, Typography } from '@material-ui/core';
import { blueGrey } from '@material-ui/core/colors';
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
      background: '#0d5804',
      border: `2px solid #0C7500`,
      color: '#9aa5aa',
      '&:hover': {
        border: `2px solid #0C7500`,
        background: '#0ea902',
      },
    },
    close: {
      border: '2px solid #8A000B',
      background: '#5C0007',
      color: '#e6e6e6',
      '&:hover': {
        border: '2px solid #5F0104',
        background: '#750003',
      }
    }
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
