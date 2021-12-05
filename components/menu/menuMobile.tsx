import HeaderMobile from '../header/headerMobile'
import { LinkLocation } from '../header/headerEnums'
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import FooterMobile from '../footer/footerMobile'
import React from 'react'

const MenuMobile = (): JSX.Element => {
    return (
        <>
            <HeaderMobile location={LinkLocation.Menu}/>
            <main>
                <Container>
                    <Typography component="h3" variant="h3" color="secondary">Getränke</Typography>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Preis</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Bier</TableCell>
                                    <TableCell>3,50 €</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Mehr Bier</TableCell>
                                    <TableCell>3,50 €</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Noch mehr Bier</TableCell>
                                    <TableCell>3,50 €</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography component="h3" variant="h3" color="secondary">Cubanos</Typography>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Preis</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Pulled Pork</TableCell>
                                    <TableCell>7 €</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Vegetarisch</TableCell>
                                    <TableCell>6 €</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Chicken</TableCell>
                                    <TableCell>6,50 €</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Typography component="h3" variant="h3" color="secondary">Wein</Typography>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Preis</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Rotwein</TableCell>
                                    <TableCell>7 €</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Weißwein</TableCell>
                                    <TableCell>6 €</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>Sangria</TableCell>
                                    <TableCell>6,50 €</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </main>
            <FooterMobile />
        </>
    )
}

export default MenuMobile
