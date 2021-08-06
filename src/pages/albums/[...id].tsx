import React, { useState } from 'react';
import { Box, Divider, Grid, Typography } from '@material-ui/core';
import Head from 'next/head';
import { Menu } from '../../components/Menu';
import Image from 'next/image'
import useStyles from './styles';
import { AiOutlineHeart, AiFillPlayCircle } from 'react-icons/ai'
import das from '../../assets/album/play.svg'
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'

import SongHeader from '../../components/ListSong/Header';
import SongBody from '../../components/ListSong/Body';
import { GetServerSideProps } from 'next';
import { api } from '../../services';
import BoxBottomMenu from '../../components/BoxBottomMenu';
import { format } from 'date-fns';

import Player from '../../components/Player'

interface songProps {
    id: string;
    album_id: string;
    name: string;
    minutes: number;
    name_album: string;
    artist: string;
    image: string;
    created_at: string;
}

interface albumProps {
    album: songProps[]
}

const Album: React.FC<albumProps> = ({ album }) => {
    const classes = useStyles()
    const [playerState, setPlayerState] = useState(0)
    const [musicCurrent, setMusicCurrent] = useState({ nameMusic: '', nameArtist: '' })

    function PlayerEdit() {
        return <Player album={album} setPlayerState={setPlayerState} playerState={playerState} musicCurrent={musicCurrent} setMusicCurrent={setMusicCurrent} />
    }

    return (
        <>
            <Head>
                <title>{`Spotify | ${album[0].name_album}`}</title>
            </Head>
            <Menu Player={PlayerEdit} >
                <Box className={classes.descriptionContainer}>
                    <Box className={classes.descriptionImageContainer}>
                        <Image
                            className={classes.descriptionImageMain}
                            src={album[0].image}
                            width="200"
                            height="200"
                        />
                    </Box>
                    <Box className={classes.descriptionInfo}>
                        <Box>
                            <Box className={classes.descriptionAlbum}>
                                <p>Álbum</p>
                            </Box>
                            <Typography variant="h1">{album[0].name_album}</Typography>
                            <Box className={classes.descriptionArtistImageContainer}>
                                <Image
                                    className={classes.descriptionArtistImageMain}
                                    src={album[0].image}
                                    width="30"
                                    height="30"
                                />
                                <Box className={classes.description}>
                                    <p>{`${album[0].artist} • ${format(new Date(album[0].created_at), 'yyyy')} • ${album.length} música, ${album.map(item => item.minutes).reduce((s, i) => s + i)} min`}</p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={classes.playContainer}>
                    <Image
                        src={das}
                        width="65"
                        height="65"
                    />
                    <AiOutlineHeart color="#adadad" size={50} style={{ marginLeft: 20, marginRight: 20 }} />
                    <IoEllipsisHorizontalSharp color="#adadad" size={30} style={{ marginLeft: 20, marginRight: 20 }} />
                </Box>
                <Box>
                    <SongHeader />
                    <Divider className={classes.divider} />
                    {
                        album && album.map((song, index) => (
                            <SongBody
                                key={song.id}
                                id={song.id}
                                setPlayerState={setPlayerState}
                                setMusicCurrent={setMusicCurrent}
                                index={index + 1}
                                artist={song.artist}
                                created_at={song.created_at}
                                minutes={song.minutes}
                                album_id={song.album_id}
                                name={song.name}
                            />
                        ))
                    }
                </Box>
                <BoxBottomMenu />
            </Menu>

        </>
    )
}

export default Album;


export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { id } = query

    try {
        const { data: response } = await api.get(`albums/${id[0]}`)

        return {
            props: {
                album: response
            }
        }

    } catch {

    }

    return {
        props: {

        }
    }
}
