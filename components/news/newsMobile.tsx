import HeaderMobile from '../header/headerMobile'
import { LinkLocation } from '../header/headerEnums'
import { Container, Typography } from '@mui/material'
import NewsArticle from './article/newsArticle'
import React from 'react'

const NewsMobile = (): JSX.Element => {
    return (
        <>
            <HeaderMobile location={LinkLocation.News}/>
            <main>
                <Container>
                    <Typography component="h3" variant="h3" color="secondary">News</Typography>
                    <NewsArticle />
                    <NewsArticle />
                    <NewsArticle />
                    <NewsArticle />
                    <NewsArticle />
                    <NewsArticle />
                </Container>
            </main>
            <footer></footer>
        </>
    )
}

export default NewsMobile
