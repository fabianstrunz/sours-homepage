import HeaderDesktop from '../header/headerDesktop'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from '@mui/material'
import FooterDesktop from '../footer/footerDesktop'

const MenuDesktop = (): JSX.Element => {
    return (
        <>
            <HeaderDesktop />
            <main>
                <Container sx={{ marginTop: "64px" }}>
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
            <FooterDesktop />
        </>
    )
}

export default MenuDesktop
