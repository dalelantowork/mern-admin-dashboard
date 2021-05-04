import React from 'react'
import { Typography, Button } from '@material-ui/core';
import useStyles from './styles'
import Link from '@material-ui/core/Link';
import { Grid, Paper, Card, CardContent, Divider } from '@material-ui/core'
import TouchAppIcon from '@material-ui/icons/TouchApp';
import DateRangeIcon from '@material-ui/icons/DateRange';
import UpdateIcon from '@material-ui/icons/Update';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import GroupIcon from '@material-ui/icons/Group';
import Charts from '../DevCharts/Charts';
import DevCharts from '../DevCharts/DevCharts';
import DevChartsVisits from '../DevCharts/DevChartsVisits';
import DevChartsUsers from '../DevCharts/DevChartsUsers';
import ChartsVisits from '../ChartsJS2/ChartsVisits';
import ChartsSales from '../ChartsJS2/ChartsSales';
import ChartsRevenue from '../ChartsJS2/ChartsRevenue';

const Dashboard = () => {
    const classes = useStyles();
    
    return (
        <>
        <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.paper} elevation={4} >
                    <Grid container>
                        <Grid item xs={6} sm={6} md={5}>
                            <Card className={`${classes.cardIconBox} ${classes.icon1}`} elevation={3}>
                                <TouchAppIcon className={classes.cardIcon}/>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6} md={7}>
                            <Typography  variant="subtitle1" color="textSecondary" align="right">VISITS</Typography>
                            <Typography  variant="subtitle2" color="textSecondary" align="right">App {`&`} Site</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                        <Typography  variant="h4" color="textPrimary" align="right">25437</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>                              
                            <Divider className={classes.cardDivider} />
                            <Typography className={classes.cardCaption} variant="caption" color="textSecondary" > <UpdateIcon className={classes.captionIcon}/>From Today</Typography>
                        </Grid>  
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.paper} elevation={4} >
                    <Grid container>
                        <Grid item xs={6} sm={6} md={5}>
                            <Card className={`${classes.cardIconBox} ${classes.icon2}`} elevation={3}>
                                <AccountBalanceIcon className={classes.cardIcon}/>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6} md={7}>
                            <Typography  variant="subtitle1" color="textSecondary" align="right">SALES</Typography>
                            <Typography  variant="subtitle2" color="textSecondary" align="right">USD</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography  variant="h4" color="textPrimary" align="right">182543.34</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>                              
                            <Divider className={classes.cardDivider} />
                            <Typography className={classes.cardCaption} variant="caption" color="textSecondary" > <DateRangeIcon className={classes.captionIcon}/>From Last Month</Typography>
                        </Grid>  
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.paper} elevation={4} >
                    <Grid container>
                        <Grid item xs={6} sm={6} md={5}>
                            <Card className={`${classes.cardIconBox} ${classes.icon3}`} elevation={3}>
                                <AttachMoneyIcon className={classes.cardIcon}/>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6} md={7}>
                            <Typography  variant="subtitle1" color="textSecondary" align="right">Revenue</Typography>
                            <Typography  variant="subtitle2" color="textSecondary" align="right">USD</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography  variant="h4" color="textPrimary" align="right">16543.34</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>                              
                            <Divider className={classes.cardDivider} />
                            <Typography className={classes.cardCaption} variant="caption" color="textSecondary" > <DateRangeIcon className={classes.captionIcon}/>From Last Month</Typography>
                        </Grid>  
                    </Grid>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Card className={classes.paper} elevation={4} >
                    <Grid container>
                        <Grid item xs={6} sm={6} md={5}>
                            <Card className={`${classes.cardIconBox} ${classes.icon4}`} elevation={3}>
                                <GroupIcon className={classes.cardIcon}/>
                            </Card>
                        </Grid>
                        <Grid item xs={6} sm={6} md={7}>
                            <Typography  variant="subtitle1" color="textSecondary" align="right">Users</Typography>
                            <Typography  variant="subtitle2" color="textSecondary" align="right">App {`&`} Site</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>
                            <Typography  variant="h4" color="textPrimary" align="right">82746</Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12}>                              
                            <Divider className={classes.cardDivider} />
                            <Typography className={classes.cardCaption} variant="caption" color="textSecondary" > <DateRangeIcon className={classes.captionIcon}/>From Start to Date</Typography>
                        </Grid>  
                    </Grid>
                </Card>
            </Grid>
        </Grid>
        
        <Grid container spacing={3} >
            <Grid item xs={12} sm={12} md={4} className={classes.gridChartJS}>
                <Card className={classes.paperChartJS} elevation={4} >
                    <ChartsVisits />
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} className={classes.gridChartJS}>
                <Card className={classes.paperChartJS} elevation={4} >
                    <ChartsSales />
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4} className={classes.gridChartJS}>
                <Card className={classes.paperChartJS} elevation={4} >
                    <ChartsRevenue />
                </Card>
            </Grid>
        </Grid>
        <br></br>
        <Typography paragraph>
            Lorem Ipsum for the DASHBOARD Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
            facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
            tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
            consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
            vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
            hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
            tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
            nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
            accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>

        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={3}>
                <Card className={classes.paperChart} elevation={4} >
                    <DevChartsVisits />
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
                <Card className={classes.paperChart} elevation={4} >
                    <DevCharts />
                </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <Card className={classes.paperChart} elevation={4} >
                    <DevChartsUsers />
                </Card>
            </Grid>
        </Grid>
        </div>
        
        </>
    )
}

export default Dashboard
