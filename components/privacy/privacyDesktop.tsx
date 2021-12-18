import HeaderDesktop from '../header/headerDesktop'
import { Container, Typography } from '@mui/material'
import React from 'react'

const PrivacyDesktop = (): JSX.Element => {
    return (
        <>
            <HeaderDesktop />
            <main>
                <Container sx={{marginTop: "64px"}}>
                    <Typography component="h3" variant="h3" color="secondary">Datenschutz</Typography>
                </Container>
            </main>
        </>
    )
}

export default PrivacyDesktop
