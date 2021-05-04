import React from 'react'
import { Line, Bar, defaults } from 'react-chartjs-2';
import { Typography, Paper, Divider } from '@material-ui/core'
import useStyles from './styles'
import DateRangeIcon from '@material-ui/icons/DateRange';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import UpdateIcon from '@material-ui/icons/Update';
const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: "Revenue",
        data: [16043.34, 13543.34, 14543.34, 12043.34, 14043.34, 11543.34, 16543.34],
        fill: false,
        backgroundColor: 'rgb(255, 255, 255)',
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 4,
        scaleStepWidth: 1,
      },
    ],
  };
  
const options = {
maintainAspectRatio: false,
legend: {
    display: false,
    //position: "top",
    // labels: {
    //     fontColor: "white",
    //     fontSize: 20,
    // }
},
scales: {
    yAxes: [
    {   
        gridLines: {
            borderDash: [1,10],
            // lineWidth: 1,
            display: true,
            color: 'rgb(255,255,255,0.60)'
        },
        ticks: {
            fontColor: "white",
            fontSize: 10,
            stepSize: 0,
            beginAtZero: false,
        },
    },
    ],
    xAxes: [
    {   gridLines: {
            display: false,
            // borderDash: [1, 10],
            // borderWidth: 100,
            color: 'rgb(255,255,255,1)'
        },
        ticks: {
            fontColor: "white",
        },
    },
    ],
},
// scaleShowVerticalLines: false,
// scaleShowHorizontalLines: false
};

const ChartsRevenue = () => {
    const classes = useStyles();
    

    return (
        <>
        <Paper className={`${classes.paperChart} ${classes.revenue}`} elevation={5}>
            <Line
                data={data} 
                options={options}
                width={100}
            	height={50}
            />
        </Paper>
        <Typography variant="h6" align="left" color="textPrimary" className={classes.heading}> Revenue </Typography>
        <Typography variant="subtitle2" align="left" color="textSecondary" className={classes.cardCaption}> Last Months Perfomance</Typography>
        <Divider className={classes.cardDivider} />
        <Typography className={classes.cardCaption} variant="caption" color="textSecondary" > <DateRangeIcon className={classes.captionIcon}/>From Last Month</Typography>
        </>
    )
}

export default ChartsRevenue