import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import bg from './img/7.jpg';
import Header from './components/Header/Header';

interface Props {}

const useStyle = makeStyles((theme) => ({
  bg: {
    height: '100vh',
    background: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  root: {
    padding: 10,
    color: theme.palette.primary.dark,
    height: 'calc(100vh - 70px)',
  },
  divider: {
    margin: '20px 0',
  },
}));

export const App: FC<Props> = (props: Props) => {
  const classes = useStyle();
  return (
    <div className={classes.bg}>
      <Header />
      <h1 className={classes.root}>HEEEEEEEE</h1>
    </div>
  );
};
