import { Box, Divider, Grid, Typography } from '@material-ui/core';
import Head from 'next/head';
import React from 'react';
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


interface songProps {
    id: string;
    album_id: string;
    name: string;
    minutes: string;
}

interface albumProps {
    album: songProps[]
}

const Album: React.FC<albumProps> = ({ album }) => {
    const classes = useStyles()

    return (
        <>
            <Head>
                <title>Spotify | 123</title>
            </Head>
            <Menu>


                <Box className={classes.descriptionContainer}>
                    <Box className={classes.descriptionImageContainer}>
                        <Image
                            className={classes.descriptionImageMain}
                            src="https://i.scdn.co/image/ab67616d00001e02de437d960dda1ac0a3586d97"
                            width="200"
                            height="200"
                        />
                    </Box>
                    <Box className={classes.descriptionInfo}>
                        <Box>
                            <Box className={classes.descriptionAlbum}>
                                <p>Álbum</p>
                            </Box>
                            <Typography variant="h1">Thriller</Typography>
                            <Box className={classes.descriptionArtistImageContainer}>
                                <Image
                                    className={classes.descriptionArtistImageMain}
                                    src="https://i.scdn.co/image/ab67616d00001e02de437d960dda1ac0a3586d97"
                                    width="30"
                                    height="30"
                                />
                                <Box className={classes.description}>
                                    <p>Michael Jackson • 1982 • 9 música, 42min21s</p>
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
                    {
                        album && album.map((song, index) => (
                            <SongBody
                                index={index + 1}
                                id={song.id}
                                minutes={song.minutes}
                                album_id={song.album_id}
                                name={song.name}
                            />
                        ))
                    }
                </Box>
                <Box className={classes.boxSize} />
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
