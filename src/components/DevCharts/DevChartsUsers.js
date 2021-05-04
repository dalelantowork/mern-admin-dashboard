import * as React from 'react';
import {Paper,Typography} from '@material-ui/core';
import {
  Chart,
  PieSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from '@devexpress/dx-react-chart';
import './styles.css';

const data = [
  { region: 'App', val: 3012956064 },
  { region: 'Site', val: 4119626293 },
];

const legendStyles = () => ({
    root: {
      display: 'flex',
      margin: 'auto',
      flexDirection: 'row',
    },
  });

const legendRootBase = ({ classes, ...restProps }) => (
    <Legend.Root {...restProps} className={classes.root} />
  );

const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <>
        <Typography color="textPrimary" variant="h6">
            Users
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
            (Using DevExtreme Charts)
        </Typography>
        <Chart
          data={chartData}
          className="chartUsers"
        >
          <PieSeries
            valueField="val"
            argumentField="region"
            innerRadius={0.6}
            color="#9c27b0"
          />
            <Legend position="bottom" rootComponent={Root} />
          <Animation />
        </Chart>

      </>
    );
  }
}
