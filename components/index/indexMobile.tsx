import HeaderMobile from '../header/headerMobile'
import { LinkLocation } from '../header/headerEnums'
import { Container, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import hamburger from '../../public/hamburger-gb95ba7e1f_640.jpg'
import React from 'react'
import FooterMobile from '../footer/footerMobile'

const IndexMobile = (): JSX.Element => {
    return (
        <>
            <HeaderMobile location={LinkLocation.Home}/>
            <main>
                <Container>
                    <Typography component="h3" variant="h3" color="secondary">Sours Ingolstadt</Typography>
                    <Paper variant="outlined" square sx={{ marginTop: "1em" }}>
                        <Image
                            src={hamburger}
                            alt="Rotweinglas"
                        />
                    </Paper>
                </Container>
            </main>
            <FooterMobile />
        </>
    )
}

export default IndexMobile
