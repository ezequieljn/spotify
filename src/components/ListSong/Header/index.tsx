import React from 'react'
import { Box, Divider, Typography } from '@material-ui/core'
import useStyles from './styles'
import { BiTime } from 'react-icons/bi'
import { FaHashtag } from 'react-icons/fa'

function SongHeader() {
    const classes = useStyles()
    return (
        <>
            <Box className={classes.containerMusicHeaderContainer}>
                <Box className={classes.containerMusicHeaderIndex}>
                    <FaHashtag color="#adadad" size={15} />
                </Box >
                <Box className={classes.containerMusicHeaderDescripition}>
                    <Typography variant="subtitle2" className={classes.containerMusicHeaderText}>TÍTULO</Typography>
                </Box>
                <Box className={classes.containerMusicHeaderTime}>
                    <BiTime color="#adadad" size={20} />
                </Box>
            </Box>
            <Divider />
        </>
    )
}

export default SongHeader