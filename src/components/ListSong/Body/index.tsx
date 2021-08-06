import React from 'react'
import { Box, Divider, Typography } from '@material-ui/core'
import useStyles from './styles'
import { BiTime } from 'react-icons/bi'
import { FaHashtag } from 'react-icons/fa'


interface MusicCurrentProps {
    nameMusic: string;
    nameArtist: string
}

interface SongBodyProps {
    index: number;
    id: string;
    album_id: string;
    name: string;
    minutes: number;
    artist: string;
    created_at: string;
    setMusicCurrent: (MusicCurrentProps) => void;
    setPlayerState: (number) => void;
}



function SongBody({
    id,
    album_id,
    name,
    minutes,
    index,
    artist,
    created_at,
    setPlayerState,
    setMusicCurrent
}: SongBodyProps) {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.containerMusicBodyContainer} onClick={() => {
                setPlayerState(0)
                setMusicCurrent({ nameMusic: name, nameArtist: artist })
            }}>
                <Box className={classes.containerMusicBodyIndex}>
                    <p>{index}</p>
                </Box >
                <Box className={classes.containerMusicBodyDescripition}>
                    <Typography variant="subtitle1" className={classes.containerMusicBodyText}>{name}</Typography>
                    <Typography variant="subtitle2" id="teste" className={classes.containerMusicBodyTextSub}>{artist}</Typography>
                </Box>
                <Box className={classes.containerMusicBodyTime}>
                    <p>{`${minutes}:00`}</p>
                </Box>
            </Box>

        </>
    )
}

export default SongBody