import React from 'react'
import { Menu } from '../../components/Menu'
import AppBarSearch from '../../components/AppBar/Search'
import { Grid } from '@material-ui/core'
import useStyles from './styles'
import ArtistDescription from '../../components/ArtistDescription'
import Playlist from '../../components/Playlist'
import Album from '../../components/Album'


function SearchPage() {
    const classes = useStyles()
    return (
        <Menu AppBar={AppBarSearch}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <ArtistDescription />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Playlist />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container >
                        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
                            <Album />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Menu>
    )
}



export default SearchPage