import type { NextPage } from 'next'
import { useMediaQuery, useTheme } from '@mui/material'
import Head from 'next/head'
import PrivacyDesktop from '../components/privacy/privacyDesktop'
import PrivacyMobile from '../components/privacy/privacyMobile'

const Privacy: NextPage = () => {
    const theme = useTheme()

    const isMobile: boolean = useMediaQuery(theme.breakpoints.down("md"))
    const isDesktop: boolean = useMediaQuery(theme.breakpoints.up("md"))
    return (
        <>
            <Head>
                <title>Sours Homepage - Datenschutz</title>
                <meta name="description" content="Visit the Sours in Ingolstadt"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {
                isMobile && !isDesktop ?
                    <PrivacyMobile />
                    :
                    <PrivacyDesktop />
            }
        </>
    )
}

export default Privacy
