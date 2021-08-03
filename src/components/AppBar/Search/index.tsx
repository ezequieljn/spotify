import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import useStyles from './styles'
import { Grid } from '@material-ui/core';



function AppBarSearch() {
    const classes = useStyles()

    return (
        <Grid container className={classes.container}>
            <Grid item>
            </Grid>
            <Grid item>
                <Paper component="form" className={classes.root}>
                    <IconButton className={classes.iconButton} aria-label="menu">
                        <SearchIcon className={classes.iconSearch} />
                    </IconButton>
                    <InputBase
                        className={classes.input}
                        placeholder="Artistas, músicas ou podcasts"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                </Paper>
            </Grid>
            <Grid item>
            </Grid>
        </Grid>
    )
}


export default AppBarSearch