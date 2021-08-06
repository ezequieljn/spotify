import React, { useState, useEffect } from 'react'
import { Menu } from '../../components/Menu'
import { Grid, IconButton, InputBase, Box, Typography } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import ArtistDescription from '../../components/ArtistDescription'
import Playlist from '../../components/Playlist'
import Album from '../../components/Album'
import { GetServerSideProps } from 'next'
import useStyles from './styles'
import { api } from '../../services';
import ArtistAll from '../../components/ArtistAll';
import { useDispatch, useSelector } from 'react-redux'
import { StoreState } from '../../store/createStore';
import { albumSearchSave } from '../../store/modules/album/actions'
import { artistSearchSave } from '../../store/modules/artist/actions'
import { songSearchSave } from '../../store/modules/song/actions'
import Link from 'next/link'
import { artistAlbumSongSearchApi } from '../../store/modules/global/action'

import { ButtonLeftRight } from '../../components/ButtonLeftRight'
import BoxBottomMenu from '../../components/BoxBottomMenu';

interface playlistProps {
    id: string;
    album_id: string;
    name: string;
    artist: string;
    image: string;
    minutes: string;
}

function SearchPage({ artists, songs, albums }) {
    const [searchAlbum, setSearchAlbum] = useState('')

    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(albumSearchSave(albums))
        dispatch(artistSearchSave(artists))
        dispatch(songSearchSave(songs))
    }, [])


    useEffect(() => {
        const timeoutId = setTimeout(() => dispatch(artistAlbumSongSearchApi(searchAlbum)), 500);
        return () => clearTimeout(timeoutId);
    }, [searchAlbum]);

    const { album, artist, song } = useSelector((state: StoreState) => state);
    console.log("song: ", song)


    return (
        <Menu >
            <Box p={2}>
                <Grid container className={classes.container} spacing={1}>
                    <Grid item xs={4} sm={3} md={2} lg={1} xl={1} className={classes.gridContainerButtonLeftRight}>
                        <Box className={classes.containerButtonLeftRight}>
                            <ButtonLeftRight left disabled />
                            <ButtonLeftRight right disabled />
                        </Box>
                    </Grid>
                    <Grid item xs={8} sm={9} md={6} lg={5} xl={4}>
                        <Box component="form" className={classes.root}>
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
                        </Box>
                    </Grid >
                </Grid>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    {
                        artist.artistMain.map((item, index) => (
                            <ArtistDescription
                                key={item.id}
                                name={item.artist}
                                photo={item.image}
                            />
                        ))
                    }
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    {
                        song.data.map(item => <Playlist
                            key={item.id}
                            name={item.name}
                            photoAlbum={item.image}
                            minutes={item.minutes}
                            artist={item.artist}
                        />)
                    }

                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={2}>
                        {
                            artist.artistAll.map(item => (
                                <Grid item xs={6} sm={4} md={3} lg={2} xl={1} key={item.id}>
                                    <ArtistAll
                                        artist={item.artist}
                                        photo={item.image}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Typography>{Album}</Typography>
                        </Grid>
                        {
                            album.data.map(item => (
                                <Grid item xs={6} sm={4} md={3} lg={2} xl={1} key={item.id} >
                                    <Album
                                        id={item.id}
                                        artist={item.artist}
                                        photo={item.image}
                                        album={item.name}
                                    />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
            <BoxBottomMenu />
        </Menu>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { artist } = query

    if (artist) {
        const { data: artists } = await api.post("artist", { artist })
        const { data: songs } = await api.post("songs", { artist })
        const { data: albums } = await api.post("albums", { artist })

        return {
            props: { artists, songs, albums }
        }
    }

    return {
        props: {
            artists: {
                artistAll: [],
                artistMain: []
            },
            songs: [], albums: []
        }
    }
}

export default SearchPage
