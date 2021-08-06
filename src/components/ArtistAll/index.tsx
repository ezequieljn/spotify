import React from 'react'
import { Box } from '@material-ui/core'
import useStyles from './styles'
import Image from 'next/image'


interface ArtistProps {
    artist: string;
    photo: string;
}


function ArtistAll({ artist, photo }: ArtistProps) {
    const classes = useStyles()
    return (
        <Box className={classes.artistContainer}>
            <Box className={classes.containerImage}>
                <Image
                    src={photo}
                    height={400}
                    width={400}
                    className={classes.artistImage}
                />
            </Box>
            <Box className={classes.containerDescription}>
                <p className={classes.textColor}>{artist}</p>
                <p className={classes.textColor}>Artista</p>
            </Box>
        </Box>
    )
}

export { ArtistAll }
export default ArtistAll