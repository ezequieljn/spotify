import React from 'react'
import { Menu } from '../../components/Menu'
import AppBarSearch from '../../components/AppBar/Search'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import ArtistDescription from '../../components/ArtistDescription'


function SearchPage() {
    const classes = useStyles()
    return (
        <Menu AppBar={AppBarSearch}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <ArtistDescription />
                </Grid>
            </Grid>
        </Menu>
    )
}



export default SearchPage