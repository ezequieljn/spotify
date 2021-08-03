import React from 'react'
import { Box } from '@material-ui/core'
import useStyles from './styles'

function Teste() {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <h1>Ola</h1>
        </Box>
    )
}

export default Teste