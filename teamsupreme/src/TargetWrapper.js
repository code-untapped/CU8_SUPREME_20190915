import React, { PureComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AgeTarget from './AgeTarget'
import GenderTarget from './GenderTarget'

export default class TargetWrapper extends PureComponent {
    render() {
    return (
        <Grid container spacing={3}>
        
            <Grid item xs={6}>
          <Paper ><AgeTarget /></Paper>
          </Grid>
          <Grid item xs={6}>
          <Paper ><GenderTarget /></Paper>
          </Grid>
        </Grid >
    )
}
}