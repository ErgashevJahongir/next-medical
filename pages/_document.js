// import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { ServerStyleSheet } from 'styled-components';

// export default class MyDocument extends Document {
//     static async getInitialProps(ctx) {
//         const sheet = new ServerStyleSheet();
//         const originalRenderPage = ctx.renderPage;

//         try {
//             ctx.renderPage = () =>
//                 originalRenderPage({
//                     enhanceApp: (App) => (props) =>
//                         sheet.collectStyles(<App {...props} />),
//                 });

//             const initialProps = await Document.getInitialProps(ctx);
//             return {
//                 ...initialProps,
//                 styles: (
//                     <>
//                         {initialProps.styles}
//                         {sheet.getStyleElement()}
//                     </>
//                 ),
//             };
//         } finally {
//             sheet.seal();
//         }
//     }
//     render() {
//         return (
//             <Html lang="en">
//                 <Head>
//                     <link
//                         rel="stylesheet"
//                         type="text/css"
//                         charSet="UTF-8"
//                         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//                     />
//                     <link
//                         rel="stylesheet"
//                         type="text/css"
//                         href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//                     />
//                     <link
//                         rel="stylesheet"
//                         href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
//                     />
//                     <link
//                         rel="stylesheet"
//                         href="https://fonts.googleapis.com/icon?family=Material+Icons"
//                     />
//                 </Head>
//                 <body>
//                     <Main />
//                     <NextScript />
//                 </body>
//             </Html>
//         );
//     }
// }

// import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { ServerStyleSheets } from '@material-ui/styles';
// import theme from '../src/theme';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const styledComponentsSheet = new ServerStyleSheet();
        const materialSheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        styledComponentsSheet.collectStyles(
                            materialSheets.collect(<App {...props} />)
                        ),
                });
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {materialSheets.getStyleElement()}
                        {styledComponentsSheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            styledComponentsSheet.seal();
        }
    }

    render() {
        return (
            <html lang="en" dir="ltr">
                <Head>
                    <meta charSet="utf-8" />
                    {/* Use minimum-scale=1 to enable GPU rasterization */}
                    <meta
                        name="viewport"
                        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                    />
                    {/* PWA primary color */}
                    {/* <meta
                        name="theme-color"
                        content={theme.palette.primary.main}
                    /> */}
                    {/* <link
                        rel="stylesheet"
                        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                    /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}

export default MyDocument;
