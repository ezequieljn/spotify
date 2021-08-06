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
import { InfiniteScroll } from '../../components/InfiniteScroll';


function SearchPage({ artists, songs, albums }) {
    const [searchAlbum, setSearchAlbum] = useState('')
    const [page, setPage] = useState(1)
    //const [loading, setLoading] = useState(false)

    const classes = useStyles()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(albumSearchSave(albums))
        dispatch(artistSearchSave(artists))
        dispatch(songSearchSave(songs))
    }, [])

    console.log(">> ", api.defaults.baseURL)
    useEffect(() => {
        const timeoutId = setTimeout(() => dispatch(artistAlbumSongSearchApi(searchAlbum, 1)), 500);
        return () => clearTimeout(timeoutId);
    }, [searchAlbum]);


    function handleScroll() {
        console.log("scroll")
        dispatch(artistAlbumSongSearchApi(searchAlbum, page + 1))
        setPage(prop => prop + 1)
    }
    const { album, artist, song, loading } = useSelector((state: StoreState) => state);

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
                            image={item.image}
                            minutes={item.minutes}
                            artist={item.artist}
                        />)
                    }

                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={2}>
                        {

                            !!artist.artistAll[0] && <Grid item xs={12} md={12} >
                                <Typography className={classes.textColor}>Artistas</Typography>
                            </Grid>
                        }
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
                            {
                                !!album.data[0] && <Grid item xs={12} md={12} >
                                    <Typography className={classes.textColor}>Álbum</Typography>
                                </Grid>
                            }
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
            {
                !!searchAlbum && album.data[0] && !loading.api && (
                    <InfiniteScroll fetchMore={() => handleScroll()} />
                )
            }
            <BoxBottomMenu />
        </Menu>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { artist } = context.query

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
            songs: [], albums: [],

        }
    }
}

export default SearchPage
