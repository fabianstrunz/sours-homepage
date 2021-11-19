import type { NextPage } from 'next'
import { useMediaQuery, useTheme } from '@mui/material'
import MenuDesktop from '../components/menu/menuDesktop'
import MenuMobile from '../components/menu/menuMobile'
import Head from 'next/head'

const Menu: NextPage = () => {
    const theme = useTheme()

    const isMobile: boolean = useMediaQuery(theme.breakpoints.down("md"))
    const isDesktop: boolean = useMediaQuery(theme.breakpoints.up("md"))

    return (
        <>
            <Head>
                <title>Sours Homepage - Speisekarte</title>
            </Head>
            {
                isMobile && !isDesktop ?
                    <MenuMobile /> :
                    <MenuDesktop />
            }
        </>
    )
}

export default Menu
