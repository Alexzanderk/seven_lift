import React, { FC } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
// import bg from './img/7.jpg';
import bg from './img/7night.jpg';
import Header from './components/Header/Header';
import LiftPanel from './components/LiftPanel/LiftPanel';
import { LiftState } from './store/lift/lift.reducer';
import { AppState } from './core/root.reducer';
import { useSelector } from 'react-redux';
import { ConfigState } from './store/config/config.reducer';
import { AuthState } from './store/auth/auth.reducer';

interface Props {}

const useStyle = makeStyles((theme) => ({
  bg: {
    minHeight: '100vh',
    background: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
}));

export const App: FC<Props> = (props: Props) => {
  const classes = useStyle();
  const { floorsA, floorsB } = useSelector<AppState, LiftState>((state) => state.lift);
  const { reverse } = useSelector<AppState, ConfigState>((state) => state.config);
  const { token } = useSelector<AppState, AuthState>((state) => state.auth);

  return (
    <div className={classes.bg}>
      <Header />
      <Grid container justify="space-around" direction={reverse ? 'row-reverse' : 'row'}>
        {token ? (
          <>
            <LiftPanel floors={floorsA} section="A" />
            <LiftPanel floors={floorsB} section="B" />
          </>
        ) : ''}
      </Grid>
    </div>
  );
};
