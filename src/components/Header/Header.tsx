import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Auth from '../Auth/Auth';
import { Options } from '../Options/Options';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: `rgba(0,0,0, .75)`,
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Header: FC = () => {
  const classes = useStyles();

  return (
    <AppBar classes={{ root: classes.root }} position="static">
      <Toolbar>
        <Options />
        <Typography variant="h6" className={classes.title}>
          Lift Control
        </Typography>
        <Auth />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
