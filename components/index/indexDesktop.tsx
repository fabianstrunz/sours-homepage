import HeaderDesktop from '../header/headerDesktop'
import { Container, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import redWine from '../../public/red-wine-g157ffd000_1920.jpg'
import React from 'react'
import FooterDesktop from '../footer/footerDesktop'

const IndexDesktop = (): JSX.Element => {
    return (
        <>
            <HeaderDesktop/>
            <main>
                <Container sx={{marginTop: "64px"}}>
                    <Typography component="h3" variant="h3" color="secondary">Sours Ingolstadt</Typography>
                    <Paper variant="outlined" square sx={{marginTop: "1em"}}>
                        <Image
                            src={redWine}
                            alt="Rotwein Gläser"
                        />
                    </Paper>
                </Container>
            </main>

            <FooterDesktop/>
        </>
    )
}

export default IndexDesktop
