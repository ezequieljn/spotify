import React from 'react'
import { Box } from '@material-ui/core'
import useStyles from './styles'
import Image from 'next/image'


interface AlbumProps {
    artist: string;
    photo: string;
    album: string;
}


function Album({ artist, photo, album }: AlbumProps) {
    const classes = useStyles()
    return (
        <Box className={classes.albumContainer}>
            <Box className={classes.containerImage}>
                <Image
                    src={photo}
                    height={400}
                    width={400}
                    className={classes.albumImage}
                />
            </Box>
            <Box className={classes.containerDescription}>
                <p>{album}</p>
                <p>{artist}</p>
            </Box>
        </Box>
    )
}

export default Album