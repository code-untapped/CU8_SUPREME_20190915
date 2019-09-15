import React from 'react';
import logo from './worldmap1.png';
//import './App.css';
import SimpleTable from './Tables'
import CurrentTrend from './CurrentTrend'
import FutureTrend from './FutureTrend'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Age from './Age'
import Gender from './Gender'
import AgeWrapper from './AgeWrapper'
import TargetWrapper from './TargetWrapper'
import CurrentTrendLine from './CurrentTrendLine'
import FutureTrendLine from './FutureTrendLine'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
            
        
        <Grid container spacing={3}>
        
        <Grid item xs={6}>
          <Paper className={classes.paper}><CurrentTrendLine /></Paper>
          </Grid>
          <Grid item xs={6}>
          <Paper className={classes.paper}><FutureTrendLine /></Paper>
          </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><AgeWrapper />
          
            </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><TargetWrapper /></Paper>
        </Grid>
        
        
      </Grid>
    </div>
  );
}

export default App;
