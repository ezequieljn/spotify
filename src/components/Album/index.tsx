import React from 'react'
import { Box } from '@material-ui/core'
import useStyles from './styles'
import Image from 'next/image'
function Album() {
    const classes = useStyles()
    return (
        <Box className={classes.albumContainer}>
            <Box p={2}>
                <Image
                    src="https://i.scdn.co/image/ab67616100005174a2a0b9e3448c1e702de9dc90"
                    height={400}
                    width={400}
                    className={classes.albumImage}
                />
            </Box>
            <Box p={2}>
                <p>Michael</p>
                <p>Michael Jackson</p>
            </Box>
        </Box>
    )
}

export default Album