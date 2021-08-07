import React from 'react'
import { Box, Typography } from '@material-ui/core'
import useStyles from './styles'
import Image from 'next/image'

interface PlaylistProps {
    name: string;
    image: string;
    artist: string;
    minutes: string;

}

function Playlist({ name, image, minutes, artist }: PlaylistProps) {

    const classes = useStyles()
    return (
        <Box display="flex" flexDirection="row" className={classes.image}>
            <Box display="flex" flexDirection="row" className={classes.imageMusic}>
                <Image
                    src={image}
                    height={50}
                    width={50}
                    className={classes.albumImageContainer}
                />
                <Box className={classes.musicDescription}>
                    <p className={classes.textColor}>{name}</p>
                    <p className={classes.textColor}>{artist}</p>
                </Box>
            </Box>
            <Box justifyContent="center" alignItems="center" className={classes.time}>
                <Typography variant="body2" className={classes.textColor}>{`${minutes}:00`}</Typography>
            </Box>
        </Box>
    )
}

export default Playlist