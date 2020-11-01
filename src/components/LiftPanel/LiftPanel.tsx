import React, { FC, useEffect } from 'react';
import { Paper, makeStyles, createStyles, Theme, Typography } from '@material-ui/core';
import { LiftButton } from './LiftButton';
import { Floor } from '../../store/lift/lift.reducer';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../core/root.reducer';
import { AuthState } from '../../store/auth/auth.reducer';
import { getLiftPanelFromApi } from '../../store/lift/lift.action';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: `rgba(0,0,0, .75)`,
      maxWidth: '400px',
      display: 'grid',
      flexGrow: 1,
      gridTemplateColumns: `repeat(3, 1fr)`,
      justifyItems: 'center',
      gridGap: '5px',
      alignItems: 'center',
      direction: 'initial',
      gridAutoFlow: 'dense',
    },
    label: {
      fontSize: '50px',
    },
  }),
);

interface Props {
  section: 'A' | 'B';
  floors: Floor[];
}

const LiftPanel: FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { token } = useSelector<AppState, AuthState>((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      console.log({ token });
      dispatch(getLiftPanelFromApi(token));
    }
  }, [token, dispatch]);

  return (
    <Paper className={classes.root} elevation={2}>
      {props.floors.map((element) => (
        <LiftButton
          key={element.floor + element.house}
          section={element.section}
          token={element.token}
          open={element.open}
          floar={element.floor}
        />
      ))}
      <Typography className={classes.label}>{props.section}</Typography>
    </Paper>
  );
};

export default LiftPanel;
