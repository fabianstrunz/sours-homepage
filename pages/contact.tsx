import type { NextPage } from 'next'
import { useMediaQuery, useTheme } from '@mui/material'
import ContactMobile from '../components/contact/contactMobile'
import ContactDesktop from '../components/contact/contactDesktop'
import Head from 'next/head'

const Contact: NextPage = () => {
    const theme = useTheme()

    const isMobile: boolean = useMediaQuery(theme.breakpoints.down("md"))
    const isDesktop: boolean = useMediaQuery(theme.breakpoints.up("md"))

    return (
        <>
            <Head>
                <title>Sours Homepage - Kontakt</title>
            </Head>
            {
                isMobile && !isDesktop ?
                    <ContactMobile /> :
                    <ContactDesktop />
            }
        </>
    )

}

export default Contact
