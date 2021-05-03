import * as React from 'react';
import { Paper,Typography } from '@material-ui/core';
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Title,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from '@devexpress/dx-react-chart';
import {
  curveCatmullRom,
  line,
} from 'd3-shape';
import { confidence as data } from './data-visualization';

const Line = props => (
  <LineSeries.Path
    {...props}
    path={line()
      .x(({ arg }) => arg)
      .y(({ val }) => val)
      .curve(curveCatmullRom)}
  />
);

const format = () => tick => tick;
const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendLabelStyles = theme => ({
  label: {
    paddingTop: theme.spacing(1),
    whiteSpace: 'nowrap',
    marginTop: '-5px',
    marginLeft: '5px',
    paddingLeft: '0px',
  },
});
const legendItemStyles = () => ({
  item: {
    //display: 'flex',
    //flexDirection: 'column',
    marginTop: '0px',
  },
});

const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
  <Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
const Item = withStyles(legendItemStyles, { name: 'LegendItem' })(legendItemBase);
const demoStyles = () => ({
  chart: {
    paddingRight: '20px',
    height: '320px !important'
  },
  titleChart: {
    fontSize: '20px !important',
    paddingBottom: '0px !important',
    marginBottom: '0px !important'
  },
  chartSales :{
      
  }
});

const ValueLabel = (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={`${text}%`}
    />
  );
};

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    const { classes } = this.props;

    return (
       <>
        <Typography className={classes.titleChart} color="textPrimary">
            Monthly Statistics
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
            (Using DevExtreme Charts)
        </Typography>
        <Chart
          data={chartData}
          className={classes.chart}
        >
          <ArgumentAxis tickFormat={format} />
          <ValueAxis
            max={100}
            labelComponent={ValueLabel}
          />

          <LineSeries
            name="Sales"
            valueField="sales"
            argumentField="month"
            color='#ffc107'
            className={classes.chartSales}
            seriesComponent={Line}
          />
          <LineSeries
            name="Revenue"
            valueField="revenue"
            argumentField="month"
            color='#4caf50'
            seriesComponent={Line}
          />
          <Legend className={classes.legend} position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
          
          <Animation />
        </Chart>
      </>
    );
  }
}

export default withStyles(demoStyles, { name: 'Demo' })(Demo);
