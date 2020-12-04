import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from './CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import MultipleMeasurements from '../Features/MultipleMeasurements/MultipleMeasurements';
import LineChart from './lineChart';

const useStyles = makeStyles({
  card: {
    margin: '5% 5%',
  },
});

export default () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader title="OK, MattZhao, you're all setup. Now What?" />
      <CardContent>
      <MultipleMeasurements />
      <LineChart />
      </CardContent>
    </Card>
  );
};
