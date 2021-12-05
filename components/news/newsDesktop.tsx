import HeaderDesktop from '../header/headerDesktop'
import { Container, Typography } from '@mui/material'
import React from 'react'
import NewsArticle from './article/newsArticle'
import FooterDesktop from '../footer/footerDesktop'

const NewsDesktop = (): JSX.Element => {
    return (
        <>
            <HeaderDesktop />
            <main>
                <Container sx={{ marginTop: "64px" }}>
                    <Typography component="h3" variant="h3" color="secondary">News</Typography>
                    <NewsArticle />
                    <NewsArticle />
                    <NewsArticle />
                    <NewsArticle />
                    <NewsArticle />
                    <NewsArticle />
                </Container>
            </main>
            <FooterDesktop />
        </>
    )
}

export default NewsDesktop
