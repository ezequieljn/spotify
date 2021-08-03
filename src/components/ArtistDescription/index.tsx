import React from 'react'
import { Box, Paper, Typography } from '@material-ui/core'
import useStyles from './styles'
import Image from 'next/image'

function ArtistDescription() {
    const classes = useStyles()
    return (
        <Paper className={classes.containerPaper}>
            <Box className={classes.imagemArtist}>
                <Image
                    src="https://i.scdn.co/image/ab67616100005174a2a0b9e3448c1e702de9dc90"
                    height={92}
                    width={92}
                    className={classes.paperContainer}
                />
            </Box>
            <Box fontWeight>
                <Typography variant="h4">Michael Jackson</Typography>
            </Box>
            <Box className={classes.artistContainer}>
                <Typography variant="body2">ARTISTA</Typography>
            </Box>
        </Paper>
    )
}

export default ArtistDescription