import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import useStyle from './styles'
interface CardSessionProps {
    color: string;
    name: string
}

function CardSession({ color, name }: CardSessionProps) {
    const classes = useStyle()
    return (
        <Grid item xs={6} sm={4} md={3} lg={2} xl={1}>
            <Box style={{
                marginTop: 25,
                aspectRatio: "18/17",
                borderRadius: 10,
                background: color,
                padding: 15
            }} >
                <Typography variant="h5" className={classes.text}>{name}</Typography>
            </Box>
        </Grid>
    )
}

export { CardSession };