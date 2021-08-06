import React from 'react'
import { Box } from '@material-ui/core'
import useStyles from './styles'
import Image from 'next/image'
import Link from 'next/link'


interface AlbumProps {
    id: string;
    artist: string;
    photo: string;
    album: string;
}


function Album({ artist, photo, album, id }: AlbumProps) {
    const classes = useStyles()
    return (
        <Link href={`/albums/${id}`} >
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
                    <p className={classes.textColor}>{album}</p>
                    <p className={classes.textColor}>{artist}</p>
                </Box>
            </Box>
        </Link>
    )
}

export default Album