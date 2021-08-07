import React, { useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core';
import Head from 'next/head';
import { Menu } from '../components/Menu'
import useStyles from './styles'
import sessions from './search/sessions.json'
import { CardSession } from '../components/CardSession'
import { parseCookies } from 'nookies'
import { GetServerSideProps } from 'next';
import { useTheme } from '../hooks/theme'
interface ItensProps {
    id: string,
    name: string,
    color: string
}

interface SearchProps {
    sessions: ItensProps[]
}

export default function Home({ spotifyTheme }) {
    const classes = useStyles()

    const { changeTheme } = useTheme()

    useEffect(() => {
        if (spotifyTheme) {
            changeTheme(spotifyTheme)
        }
    }, [])
    return (
        <>
            <Head>
                <title>Spotify | Início</title>
            </Head>
            <Menu>
                <Typography variant="h5" className={classes.textSession} >Navegar por todas as seções</Typography>
                <Grid container spacing={2}>
                    {
                        sessions.map((prop: ItensProps, index: number) => (
                            <CardSession
                                key={index}
                                name={prop.name}
                                color={prop.color} />
                        ))
                    }
                </Grid>
            </Menu>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = parseCookies(context)

    return {
        props: {
            spotifyTheme: cookies.spotifyTheme || 'dark'
        }
    }
}