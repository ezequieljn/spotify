import React, { useState, useEffect } from 'react'
import { Box, Grid, Slider, Typography } from '@material-ui/core'
import useStyles from './styles'
import { AiFillPauseCircle, AiFillPlayCircle, AiFillStepBackward, AiFillStepForward, AiOutlineHeart, AiOutlineRetweet } from 'react-icons/ai'
import { FaRandom } from 'react-icons/fa'
import { BsFillVolumeMuteFill, BsFillVolumeUpFill, BsVolumeDown, BsVolumeDownFill } from 'react-icons/bs'
import { RiComputerLine, RiPlayList2Fill } from 'react-icons/ri'
import { useTheme } from '@material-ui/core'


interface MusicCurrentProps {
    nameMusic: string;
    nameArtist: string;
    time: string;
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
    album: songProps[];
}

function Player({ musicCurrent, album, setMusicCurrent, }: PlayerProps) {
    const classes = useStyles()


    const [playerState, setPlayerState] = useState(0)

    const [volume, setVolume] = useState(0)
    const [player, setPlayer] = useState(false)

    const handleChangeVolume = (event, newValue) => {
        setVolume(newValue);
    };
    const handleChangePlayer = (event, newValue) => {
        setPlayerState(newValue);
    };

    useEffect(() => {
        if (musicCurrent.nameMusic === '' && album[0]) {
            setMusicCurrent({
                nameMusic: album[0].name,
                nameArtist: album[0].artist,
                time: album[0].minutes,
            })
        }
    }, []);


    let intervalID;
    useEffect(() => {
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

    const theme = useTheme()

    return (
        <Box className={classes.appBar}>
            <Box className={classes.containerBoxName}>
                <Box className={classes.containerBox}>
                    <Typography variant="subtitle1" className={classes.textColor} >{musicCurrent.nameMusic}</Typography>
                    <Typography variant="caption" className={classes.textColor} >{musicCurrent.nameArtist}</Typography>
                </Box>
                <Box style={{ marginLeft: 15 }}>
                    {
                        musicCurrent.nameMusic && <AiOutlineHeart color={theme.palette.text.primary} />
                    }

                </Box>
            </Box>
            <Box className={classes.containerBoxPlayer}>
                <Box className={classes.containerBoxPlayerIcon}>
                    <FaRandom size={15} className={classes.marginLeftRight20} color={theme.palette.text.primary} />
                    <AiFillStepBackward size={15} className={classes.marginLeftRight20} onClick={() => setPlayerState(0)} color={theme.palette.text.primary} />
                    {
                        player ?
                            <AiFillPauseCircle size={35} className={classes.marginLeftRight20} onClick={() => setPlayer(prop => !prop)} color={theme.palette.text.primary} /> :

                            <AiFillPlayCircle size={35} className={classes.marginLeftRight20} onClick={() => setPlayer(prop => !prop)} color={theme.palette.text.primary} />
                    }
                    <AiFillStepForward size={15} className={classes.marginLeftRight20} onClick={() => setPlayerState(0)} color={theme.palette.text.primary} />
                    <AiOutlineRetweet size={15} className={classes.marginLeftRight20} color={theme.palette.text.primary} />
                </Box>
                <Box >
                    <Box className={classes.containerBoxPlayerTime}>
                        <p className={classes.textColor}  >0:00</p>
                        <Slider
                            value={playerState}
                            onChange={handleChangePlayer}
                            aria-labelledby="input-slider"
                            className={classes.slider}
                        />
                        <p className={classes.textColor} >{`${musicCurrent.time}:00`}</p>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.containerBoxVolume}>
                <Grid container spacing={2} >
                    <Grid item >
                        <Box p={1}>
                            <RiPlayList2Fill size={20} className={classes.marginLeftRight5} color={theme.palette.text.primary} />
                            <RiComputerLine size={20} className={classes.marginLeftRight5} color={theme.palette.text.primary} />
                            <BsVolumeDown size={20} className={classes.marginLeftRight5} color={theme.palette.text.primary} />
                            {
                                volume == 0 ?
                                    <BsFillVolumeMuteFill size={20} className={classes.marginLeftRight5} color={theme.palette.text.primary} /> :
                                    volume > 50 ?
                                        <BsFillVolumeUpFill size={20} className={classes.marginLeftRight5} color={theme.palette.text.primary} /> :
                                        <BsVolumeDownFill size={20} className={classes.marginLeftRight5} color={theme.palette.text.primary} />

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