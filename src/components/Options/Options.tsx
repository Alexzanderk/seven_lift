import React, { FC, useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, FormControlLabel, Switch, CardMedia } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../core/root.reducer';
import { ConfigState } from '../../store/config/config.reducer';
import { setBackground, toggleRevert } from '../../store/config/config.action';
import bg from '../../img/bg.jpg';
import bg2 from '../../img/bg2.jpg';

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
    bg: {
      width: 150,
      cursor: 'pointer',
      margin: '5px 0',
    },
    selected: {
      border: '2px solid green',
    },
  }),
);

export const Options: FC = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { reverse, bg: coreBackground } = useSelector<AppState, ConfigState>((state) => state.config);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChangeBG = (bg: string) => () => {
    dispatch(setBackground(bg));
  };

  return (
    <div>
      <IconButton className={classes.menuButton} onClick={handleClickOpen} edge="start" color="inherit" aria-label="menu">
        <Settings />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Налаштування</DialogTitle>
        <DialogContent>
          <FormControlLabel
            control={<Switch checked={reverse} onChange={() => dispatch(toggleRevert())} name="checkedB" color="primary" />}
            label="Поміняти місяціми секції"
          />
          <CardMedia
            className={`${classes.bg} ${'bg' === coreBackground ? classes.selected : ''}`}
            onClick={handleChangeBG('bg')}
            component="img"
            src={bg}
          />
          <CardMedia
            className={`${classes.bg} ${'bg2' === coreBackground ? classes.selected : ''}`}
            onClick={handleChangeBG('bg2')}
            component="img"
            src={bg2}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
