import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Age from './Age'
import Gender from './Gender'

export default class AgeWrapper extends PureComponent {
    render() {
    return (
        <Grid container spacing={3}>
        
            <Grid item xs={6}>
          <Paper ><Age /></Paper>
          </Grid>
          <Grid item xs={6}>
          <Paper ><Gender /></Paper>
          </Grid>
        </Grid >
    )
}
}