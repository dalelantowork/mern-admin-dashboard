import React, {useState} from 'react';
import { Typography, Paper } from '@material-ui/core';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import './styles.css';

const data = [
    { day: 'Sun', visits: 23382 },
    { day: 'Mon', visits: 22525 },
    { day: 'Tue', visits: 23018 },
    { day: 'Today', visits: 25437 },
];




export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    const classes = this.props;
    return (
      <>
        <Typography className={classes.titleChart} variant="h6" color="textPrimary">
            Visits
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
            (Using DevExtreme Charts)
        </Typography>
        <Chart
          data={chartData}
          className="chartVisits"
        >
          <ArgumentAxis />
          <ValueAxis max={40000} />

          <BarSeries
            valueField="visits"
            argumentField="day"
          />
          <Animation />
        </Chart>
      </>
    );
  }
}
