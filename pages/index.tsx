import type { NextPage } from 'next'
import Head from 'next/head'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useMediaQuery, useTheme } from '@mui/material'
import IndexMobile from '../components/index/indexMobile'
import IndexDesktop from '../components/index/indexDesktop'

const Home: NextPage = () => {
    const theme = useTheme()

    const isMobile: boolean = useMediaQuery(theme.breakpoints.down("md"))
    const isDesktop: boolean = useMediaQuery(theme.breakpoints.up("md"))

    return (
        <>
            <Head>
                <title>Sours Homepage</title>
                <meta name="description" content="Visit the Sours in Ingolstadt"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {
                isMobile && !isDesktop ?
                    <IndexMobile />
                    :
                    <IndexDesktop />
            }
        </>
    )
}

export default Home
