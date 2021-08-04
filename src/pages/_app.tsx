import React, { useEffect } from 'react';
import { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { theme } from '../global/theme';
import '../styles/globals.css'
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';

import { wrapper } from '../store';

function MyApp({ Component, pageProps }: AppProps) {
    const store: any = useStore();


    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>Spotify</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>
            <PersistGate persistor={store._persist}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </PersistGate>
        </React.Fragment>
    );
}

export default wrapper.withRedux(MyApp)