import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/Layout';
import './../styles/index.css';
import GlobalStyle from '../styles/globalStyle';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            {/* <StyledProvider>

            </StyledProvider> */}
            <GlobalStyle />
            <CssBaseline />
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
