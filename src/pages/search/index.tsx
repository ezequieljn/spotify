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
import { api } from '../../services';


interface playlistProps {
    id: string;
    album_id: string;
    name: string;
    artist: string;
    photoAlbum: string;
    minutes: string;
}
interface albumstProps {
    name: string;
    artist: string;
    image: string;
}

function SearchPage({ data, songs, albums }) {
    const [searchAlbum, setSearchAlbum] = useState('')


    const [album, setAlbum] = useState<albumstProps[]>([])
    const [artist, setArtist] = useState({
        name: '',
        photo: '',
    })

    const [playlist, setPlaylist] = useState<playlistProps[]>([])

    const classes = useStyles()


    useEffect(() => {

        if (data.artistMain[0]) {
            setArtist({ name: data.artistMain[0].artist, photo: data.artistMain[0].image })
        }

        if (songs[0]) {
            setPlaylist(songs)
        }
        if (albums[0]) {
            console.log(albums)
            setAlbum(albums)
        }
    }, []);




    useEffect(() => {
        const timeoutId = setTimeout(() => console.log(searchAlbum), 500);
        return () => clearTimeout(timeoutId);
    }, [searchAlbum]);




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
                    {
                        artist.name && <ArtistDescription name={artist.name} photo={artist.photo} />
                    }
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    {
                        playlist.map(item => <Playlist
                            name={item.name}
                            photoAlbum={item.photoAlbum}
                            minutes={item.minutes}
                            artist={item.artist}
                        />)
                    }

                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid container spacing={2}>

                        {
                            album.map(item => (
                                <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
                                    <Album artist={item.artist} photo={item.image} album={item.name} />
                                </Grid>
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Menu>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { artist } = query

    let data
    let songs
    let albums

    if (query.artist) {
        const { data: response } = await api.post("artist", { artist })
        const { data: song } = await api.post("songs", { artist })
        const { data: { album } } = await api.post("albums", { artist })

        data = response
        albums = album
        songs = song
    }


    return {
        props: {
            data,
            songs,
            albums
        }
    }
}




export default SearchPage
