import React, { useState, useEffect } from 'react'
import { Box, Grid, Slider, Typography } from '@material-ui/core'
import useStyles from './styles'
import { AiFillPauseCircle, AiFillPlayCircle, AiFillStepBackward, AiFillStepForward, AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { FaRandom } from 'react-icons/fa'
import { BsFillVolumeMuteFill, BsFillVolumeUpFill, BsVolumeDown, BsVolumeDownFill } from 'react-icons/bs'
import { RiComputerLine, RiPlayList2Fill } from 'react-icons/ri'

interface MusicCurrentProps {
    nameMusic: string;
    nameArtist: string
}



interface songProps {
    id: string;
    album_id: string;
    name: string;
    minutes: number;
    name_album: string;
    artist: string;
    created_at: string;
}

interface PlayerProps {
    musicCurrent: MusicCurrentProps;
    setMusicCurrent: (MusicCurrentProps) => void;
    album: songProps[],
    playerState: number;
    setPlayerState: (number) => void;
}

function Player({ musicCurrent, album, setMusicCurrent, setPlayerState, playerState }: PlayerProps) {
    const classes = useStyles()


    const [volume, setVolume] = useState(0)
    const [player, setPlayer] = useState(false)

    const handleChangeVolume = (event, newValue) => {
        setVolume(newValue);
    };
    const handleChangePlayer = (event, newValue) => {
        setPlayerState(newValue);
    };

    let intervalID;
    useEffect(() => {
        if (musicCurrent.nameMusic === '') {
            setMusicCurrent({
                nameMusic: album[0].name,
                nameArtist: album[0].artist,
            })
        }

        if (player && playerState < 99) {
            intervalID = setInterval(() => {
                setPlayerState(prop => prop + 2);
            }, 1000);
        }
        else if (playerState > 99) {
            setPlayerState(0)
            return () => clearInterval(intervalID);
        }
        return () => clearInterval(intervalID);
    }, [player]);


    useEffect(() => {
        if (playerState > 99) {
            setPlayerState(0)
            return () => clearInterval(intervalID);
        }
    }, [playerState])



    return (
        <Box className={classes.appBar}>
            <Box className={classes.containerBoxName}>
                <Box className={classes.containerBox}>
                    <Typography variant="subtitle1">{musicCurrent.nameMusic}</Typography>
                    <Typography variant="caption">{musicCurrent.nameArtist}</Typography>
                </Box>
                <Box style={{ marginLeft: 15 }}>
                    {
                        musicCurrent.nameMusic && <AiOutlineHeart />
                    }

                </Box>
            </Box>
            <Box className={classes.containerBoxPlayer}>
                <Box className={classes.containerBoxPlayerIcon}>
                    <FaRandom size={15} className={classes.marginLeftRight20} />
                    <AiFillStepBackward size={15} className={classes.marginLeftRight20} onClick={() => setPlayerState(0)} />
                    {
                        player ?
                            <AiFillPauseCircle size={35} className={classes.marginLeftRight20} onClick={() => setPlayer(prop => !prop)} /> :

                            <AiFillPlayCircle size={35} className={classes.marginLeftRight20} onClick={() => setPlayer(prop => !prop)} />
                    }
                    <AiFillStepForward size={15} className={classes.marginLeftRight20} onClick={() => setPlayerState(0)} />
                    <AiOutlineRetweet size={15} className={classes.marginLeftRight20} />
                </Box>
                <Box >
                    <Box className={classes.containerBoxPlayerTime}>
                        <p>0:00</p>
                        <Slider
                            value={playerState}
                            onChange={handleChangePlayer}
                            aria-labelledby="input-slider"
                            className={classes.slider}
                        />
                        <p>{`9999`}</p>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.containerBoxVolume}>
                <Grid container spacing={2} >
                    <Grid item >
                        <Box p={1}>
                            <RiPlayList2Fill size={20} className={classes.marginLeftRight5} />
                            <RiComputerLine size={20} className={classes.marginLeftRight5} />
                            <BsVolumeDown size={20} className={classes.marginLeftRight5} />
                            {
                                volume == 0 ?
                                    <BsFillVolumeMuteFill size={20} className={classes.marginLeftRight5} /> :
                                    volume > 50 ?
                                        <BsFillVolumeUpFill size={20} className={classes.marginLeftRight5} /> :
                                        <BsVolumeDownFill size={20} className={classes.marginLeftRight5} />

                            }
                        </Box>
                    </Grid>
                    <Grid item xs >
                        <Box p={1}>
                            <Slider
                                value={volume}
                                onChange={handleChangeVolume}
                                aria-labelledby="input-slider"
                                className={classes.sliderVolume}
                            />
                        </Box>
                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default Player