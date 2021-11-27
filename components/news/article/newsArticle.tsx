import { Box, Paper, Typography } from '@mui/material'
import React from 'react'
import EventIcon from '@mui/icons-material/Event';

const NewsArticle = (): JSX.Element => {
    return (
        <article>
            <Box m="1em">
                <Paper sx={{backgroundColor: "darkblue"}} elevation={6}>
                    <Typography component="h4" variant="h4" color="secondary">News Überschrift</Typography>
                    <Typography component="p" color="secondary">Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Deleniti esse odit praesentium qui vitae. Consequuntur cum dolore fugit ipsam, molestias
                        odio officiis omnis quos rem repudiandae soluta suscipit ullam ut!</Typography>
                    <EventIcon color="secondary"/>
                    <Typography component="span" color="secondary">1.1.2021</Typography>
                </Paper>
            </Box>
        </article>
    )

}

export default NewsArticle
