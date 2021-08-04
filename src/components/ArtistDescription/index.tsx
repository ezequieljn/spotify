import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import useStyles from './styles'
import Image from 'next/image'

interface ArtistDescriptionProsp {
    name: string;
    photo: string;
}

function ArtistDescription({ name, photo }: ArtistDescriptionProsp) {
    const classes = useStyles()
    return (
        <Paper className={classes.containerPaper}>
            <Box className={classes.imagemArtist}>
                <Image
                    src={photo}
                    height={92}
                    width={92}
                    className={classes.paperContainer}
                />
            </Box>
            <Box>
                <Typography variant="h4">{name}</Typography>
            </Box>
            <Box className={classes.artistContainer}>
                <Typography variant="body2">ARTISTA</Typography>
            </Box>
        </Paper>
    )
}

export default ArtistDescription