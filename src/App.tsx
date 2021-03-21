import React, { FC, useEffect } from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import { LiftState } from './store/lift/lift.reducer';
import { AppState } from './core/root.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { ConfigState } from './store/config/config.reducer';
import { AuthState } from './store/auth/auth.reducer';
import { SimplePanel } from './components/SimpleLiftPanel/Panel';
import { getLiftPanelFromApi } from './store/lift/lift.action';

interface Props {}

const useStyle = (background: string = 'bg2') => {
  return makeStyles((theme) => ({
    background: {
      minHeight: '100vh',
      background: `url(${require(`./img/${background}.jpg`)})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    },
  }));
}

export const App: FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const { A1, A2, A3, B1, B2 } = useSelector<AppState, LiftState>((state) => state.lift);
  const { bg } = useSelector<AppState, ConfigState>((state) => state.config);
  const classes = useStyle(bg)();
  const { reverse } = useSelector<AppState, ConfigState>((state) => state.config);
  const { token } = useSelector<AppState, AuthState>((state) => state.auth);

  useEffect(() => {
    if (token) {
      console.log({ token });
      dispatch(getLiftPanelFromApi(token));
    }
  }, [token, dispatch]);

  return (
    <div className={classes.background}>
      <Header />
      <Grid container justify="space-around" direction={reverse ? 'row-reverse' : 'row'}>
        {token ? (
          <>
            <SimplePanel floor={A1} section="A1" />
            <SimplePanel floor={A2} section="A2" />
            <SimplePanel floor={A3} section="A3" />
            <SimplePanel floor={B1} section="B1" />
            <SimplePanel floor={B2} section="B2" />
          </>
        ) : (
          ''
        )}
      </Grid>
    </div>
  );
};
