import React, { FC } from 'react';
import { Paper, makeStyles, createStyles, Theme, Typography } from '@material-ui/core';
import { LiftButton } from './LiftButton';
import { LiftState, Floor } from '../../store/lift/lift.reducer';
// import { AppState } from '../../core/root.reducer';
// import { useSelector } from 'react-redux';

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
  return (
    <Paper className={classes.root} elevation={2}>
      {props.floors.map((element) => (
        <LiftButton key={element.floor} open={element.open} floar={element.floor} />
      ))}
      <Typography className={classes.label}>{props.section}</Typography>
    </Paper>
  );
};

export default LiftPanel;
