import React, { useState, useEffect } from 'react'
import { Menu } from '../../components/Menu'
import AppBarSearch from '../../components/AppBar/Search'
import { Grid, IconButton, InputBase, Input, Paper } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ArtistDescription from '../../components/ArtistDescription'
import Playlist from '../../components/Playlist'
import Album from '../../components/Album'
import { GetServerSideProps } from 'next'
import useStyles from './styles'


function SearchPage() {
    const [searchAlbum, setSearchAlbum] = useState('')
    const classes = useStyles()

    useEffect(() => {
        const timeoutId = setTimeout(() => console.log(searchAlbum), 500);
        return () => clearTimeout(timeoutId);
    }, [searchAlbum]);


    function AppBarSearchProps() {
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
                            inputProps={{ 'aria-label': 'search artist' }}
                            onChange={(e) => setSearchAlbum(e.target.value)}
                            value={searchAlbum}
                        />
                    </Paper>
                </Grid>
                <Grid item>
                </Grid>
            </Grid>
        )
    }

    return (
        <Menu >
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
                            inputProps={{ 'aria-label': 'search artist' }}
                            onChange={(e) => setSearchAlbum(e.target.value)}
                            value={searchAlbum}
                        />
                    </Paper>
                </Grid>
                <Grid item>
                </Grid>
            </Grid>

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

export const getServerSideProps: GetServerSideProps = async ({ query }) => {


    if (query.artist) {
        console.log(query)
    }


    return {
        props: {

        }
    }
}




export default SearchPage
