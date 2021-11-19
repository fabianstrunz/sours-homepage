import type { NextPage } from 'next'
import { useMediaQuery, useTheme } from '@mui/material'
import Head from 'next/head'
import NewsDesktop from '../components/news/newsDesktop'
import NewsMobile from '../components/news/newsMobile'

const News: NextPage = () => {
    const theme = useTheme()

    const isMobile: boolean = useMediaQuery(theme.breakpoints.down("md"))
    const isDesktop: boolean = useMediaQuery(theme.breakpoints.up("md"))

    return (
        <>
            <Head>
                <title>Sours Homepage - News</title>
            </Head>
            {
                isMobile && !isDesktop ?
                    <NewsMobile /> :
                    <NewsDesktop />
            }
        </>
    )
}

export default News
