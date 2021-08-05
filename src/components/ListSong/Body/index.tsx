import React from 'react'
import { Box, Divider, Typography } from '@material-ui/core'
import useStyles from './styles'
import { BiTime } from 'react-icons/bi'
import { FaHashtag } from 'react-icons/fa'


interface SongBodyProps {
    index: number;
    id: string;
    album_id: string;
    name: string;
    minutes: string;
}

function SongBody({ id, album_id, name, minutes, index }: SongBodyProps) {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.containerMusicBodyContainer}>
                <Box className={classes.containerMusicBodyIndex}>
                    <p>{index}</p>
                </Box >
                <Box className={classes.containerMusicBodyDescripition}>
                    <Typography variant="subtitle1" className={classes.containerMusicBodyText}>{name}</Typography>
                    <Typography variant="subtitle2" id="teste" className={classes.containerMusicBodyTextSub}>TÍTULO</Typography>
                </Box>
                <Box className={classes.containerMusicBodyTime}>
                    <p>{`${minutes}:00`}</p>
                </Box>
            </Box>

        </>
    )
}

export default SongBody