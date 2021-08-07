import React, { useState, useEffect } from 'react';
import { Box, Divider, Grid, Typography } from '@material-ui/core';
import Head from 'next/head';
import { Menu } from '../../components/Menu';
import Image from 'next/image'
import useStyles from './styles';
import { AiOutlineHeart, AiFillPlayCircle } from 'react-icons/ai'
import PlayerImg from '../../assets/album/play.svg'
import { IoEllipsisHorizontalSharp } from 'react-icons/io5'

import SongHeader from '../../components/ListSong/Header';
import SongBody from '../../components/ListSong/Body';
import { GetServerSideProps, GetStaticProps } from 'next';
import { api } from '../../services';
import BoxBottomMenu from '../../components/BoxBottomMenu';
import { format } from 'date-fns';
import { parseCookies } from 'nookies'
import Player from '../../components/Player'
import { useTheme } from '../../hooks/theme';

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
    album: songProps[],
    spotifyTheme: 'dark' | 'yellow' | 'purple',
}

const Album: React.FC<albumProps> = ({ album, spotifyTheme }) => {
    const classes = useStyles()
    const [musicCurrent, setMusicCurrent] = useState({ nameMusic: '', nameArtist: '', time: '' })
    const { changeTheme } = useTheme()
    useEffect(() => {
        if (spotifyTheme) {
            changeTheme(spotifyTheme)
        }
    }, [])

    function PlayerEdit() {
        if (album[0]) {
            return <Player album={album} musicCurrent={musicCurrent} setMusicCurrent={setMusicCurrent} />
        } else {
            return <></>
        }
    }

    return (
        <>
            <Head>
                <title>{`Spotify | ${!!album[0] ? album[0].name_album : 'Álbum inválido'}`}</title>
            </Head>
            <Menu Player={PlayerEdit} >
                {
                    album[0] && <>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={4} lg={2} xl={1}>
                                <Box className={classes.descriptionImageContainer}>
                                    {
                                        !!album[0] &&
                                        <Image
                                            className={classes.descriptionImageMain}
                                            src={album[0].image}
                                            width="200"
                                            height="200"
                                        />
                                    }
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={8} lg={6} xl={4}>
                                <Box className={classes.descriptionInfo}>
                                    <Box>
                                        <Box className={classes.descriptionAlbum}>
                                            <p className={classes.textColor}>Álbum</p>
                                        </Box>
                                        <Typography variant="h1" className={classes.textColor}>{!!album[0] && album[0].name_album}</Typography>
                                        <Box className={classes.descriptionArtistImageContainer}>
                                            {
                                                !!album[0] &&
                                                <Image
                                                    className={classes.descriptionArtistImageMain}
                                                    src={album[0].image}
                                                    width="30"
                                                    height="30"
                                                />
                                            }
                                            <Box className={classes.description}>
                                                <p className={classes.textColor}>{!!album[0] && `${album[0].artist} • ${format(new Date(album[0].created_at), 'yyyy')} • ${album.length} música, ${album.map(item => item.minutes).reduce((s, i) => s + i)} min`}</p>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box className={classes.playContainer}>
                            <Image
                                src={PlayerImg}
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
                                !!album[0] && album.map((song, index) => (
                                    <SongBody
                                        key={song.id}
                                        id={song.id}
                                        setMusicCurrent={setMusicCurrent}
                                        index={index + 1}
                                        artist={song.artist}
                                        created_at={song.created_at}
                                        minutes={song.minutes}
                                        album_id={song.album_id}
                                        name={song.name || ''}
                                    />
                                ))
                            }
                        </Box>
                    </>
                }
                <BoxBottomMenu />
            </Menu>

        </>
    )
}

export default Album;
/*
export const getStaticProps: GetStaticProps = async () => {
    return {
      props: {
        
      },
      revalidate: 60, // 1 minute
    }
  }
*/
export const getServerSideProps: GetServerSideProps = async (props) => {
    const { id } = props.query
    const cookies = parseCookies(props)
    try {
        const { data: response } = await api.get(`/albums/${id[0]}`)
        return {
            props: {
                album: response,
                spotifyTheme: cookies.spotifyTheme || 'dark'
            }
        }

    } catch (err) {
    }
    return {
        props: {
            album: [],

            spotifyTheme: cookies.spotifyTheme || 'dark'
        }
    }
}
