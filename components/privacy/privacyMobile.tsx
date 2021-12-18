import HeaderMobile from '../header/headerMobile'
import { LinkLocation } from '../header/headerEnums'
import { Container, Typography } from '@mui/material'
import React from 'react'

const PrivacyMobile = (): JSX.Element => {
    return (
        <>
            <HeaderMobile location={LinkLocation.Privacy} />
            <main>
                <Container>
                    <Typography component="h3" variant="h3" color="secondary">Datenschutz</Typography>

                </Container>
            </main>
        </>
    )
}

export default PrivacyMobile
