import React, { FC, useState } from 'react';
import { IconButton, Dialog, DialogTitle, DialogContent, FormControlLabel, Switch } from '@material-ui/core';
import { Settings } from '@material-ui/icons';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../core/root.reducer';
import { ConfigState } from '../../store/config/config.reducer';
import { toggleRevert } from '../../store/config/config.action';

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

export const Options: FC = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { reverse } = useSelector<AppState, ConfigState>((state) => state.config);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton className={classes.menuButton} onClick={handleClickOpen} edge="start" color="inherit" aria-label="menu">
        <Settings />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Settings</DialogTitle>
        <DialogContent>
          <FormControlLabel
            control={<Switch checked={reverse} onChange={() => dispatch(toggleRevert())} name="checkedB" color="primary" />}
            label="Reverse lift panels"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
