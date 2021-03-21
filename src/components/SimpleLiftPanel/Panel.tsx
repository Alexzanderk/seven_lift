import React, { FC } from 'react';
import { Floor } from '../../store/lift/lift.reducer';
import { Paper, makeStyles, createStyles, Theme, Typography, Grid, Box } from '@material-ui/core';
import { getLiftName } from '../../utils/list.util';
import { Button as LiftButton } from './Button';

interface Props {
  section: 'A1' | 'A2' | 'A3' | 'B1' | 'B2';
  floor: Floor[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: `rgba(0,0,0, .75)`,
      maxWidth: '200px',
      display: 'grid',
      flexGrow: 1,
      gridTemplateColumns: `repeat(3, 1fr)`,
      justifyItems: 'center',
      gridGap: '5px',
      alignItems: 'center',
      direction: 'rtl',
      gridAutoFlow: 'dense',
    },
    label: {
      fontSize: '50px',
    },
    bg: {
      background: `rgba(0,0,0, .75)`,
      margin: '5px 0',
      padding: '5px 10px',
    },
  }),
);

export const SimplePanel: FC<Props> = (props: Props) => {
  const classes = useStyles();
  const floor = props.floor.slice().reverse();

  if (!props.floor.length) {
    return <></>;
  }

  return (
    <Grid item>
      <Box className={classes.bg}>
        <Typography component="h4" variant="overline">
          {getLiftName(props.section)}
        </Typography>
      </Box>
      <Paper className={classes.root} elevation={2}>
        {floor.map((item) => (
          <LiftButton key={item.floor} floor={item} />
        ))}
      </Paper>
      <Box className={classes.bg}>
        <Typography component="h4" variant="overline">
          {getLiftName(props.section)}
        </Typography>
      </Box>
    </Grid>
  );
};
