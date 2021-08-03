import React from 'react'
import { Box, Typography } from '@material-ui/core'
import useStyles from './styles'
import Image from 'next/image'

function Playlist() {
    const classes = useStyles()
    return (
        <Box display="flex" flexDirection="row" className={classes.image}>
            <Box display="flex" flexDirection="row" className={classes.imageMusic}>
                <Image
                    src="https://i.scdn.co/image/ab67616100005174a2a0b9e3448c1e702de9dc90"
                    height={50}
                    width={50}
                    className={classes.albumImageContainer}
                />
                <Box className={classes.musicDescription}>
                    <p>Billie Jean</p>
                    <p>Michael Jackson</p>
                </Box>
            </Box>
            <Box justifyContent="center" alignItems="center" className={classes.time}>
                <Typography variant="body2">4:30</Typography>
            </Box>
        </Box>
    )
}

export default Playlist