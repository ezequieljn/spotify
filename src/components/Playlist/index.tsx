import React from 'react'
import { Box, Typography } from '@material-ui/core'
import useStyles from './styles'
import Image from 'next/image'

interface PlaylistProps {
    name: string;
    photoAlbum: string;
    artist: string;
    minutes: string;

}

function Playlist({ name, photoAlbum, minutes, artist }: PlaylistProps) {

    console.log("photoAlbum: ", photoAlbum)


    const classes = useStyles()
    return (
        <Box display="flex" flexDirection="row" className={classes.image}>
            <Box display="flex" flexDirection="row" className={classes.imageMusic}>
                <Image
                    src={photoAlbum}
                    height={50}
                    width={50}
                    className={classes.albumImageContainer}
                />
                <Box className={classes.musicDescription}>
                    <p>{name}</p>
                    <p>{artist}</p>
                </Box>
            </Box>
            <Box justifyContent="center" alignItems="center" className={classes.time}>
                <Typography variant="body2">{`${minutes}:00`}</Typography>
            </Box>
        </Box>
    )
}

export default Playlist