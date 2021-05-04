import React from 'react'
import { Line,defaults } from 'react-chartjs-2';
import { Typography, Paper, Divider } from '@material-ui/core'
import useStyles from './styles'
import DateRangeIcon from '@material-ui/icons/DateRange';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import UpdateIcon from '@material-ui/icons/Update';
const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: "Visits",
        data: [17128, 21947, 18437, 21864, 20437, 25437],
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

const ChartsVisits = () => {
    const classes = useStyles();
    

    return (
        <>
        <Paper className={`${classes.paperChart} ${classes.visits}`} elevation={5}>
            <Line 
                data={data} 
                options={options}
                width={100}
            	height={50}
            />
        </Paper>
        <Typography variant="h6" align="left" color="textPrimary" className={classes.heading}> Visits </Typography>
        <Typography variant="subtitle2" align="left" color="textSecondary" className={classes.cardCaption}> <TrendingUpIcon className={`${classes.captionIcon} ${classes.increase}`}/>30% increase in today visits</Typography>
        <Divider className={classes.cardDivider} />
        <Typography className={classes.cardCaption} variant="caption" color="textSecondary" > <UpdateIcon className={classes.captionIcon}/>From Today</Typography>
        </>
    )
}

export default ChartsVisits