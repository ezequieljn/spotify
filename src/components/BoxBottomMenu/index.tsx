import React from 'react'
import { Box } from '@material-ui/core'
import useStyles from './styles'

function BoxBottomMenu() {
    const classes = useStyles()
    return (
        <Box className={classes.boxSize} />
    )
}

export { BoxBottomMenu }
export default BoxBottomMenu