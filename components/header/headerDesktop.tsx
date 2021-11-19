import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'

const HeaderDesktop = (): JSX.Element => {
    return (
        <nav>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href="/" passHref>
                            <Typography
                                variant="h6"
                                component="a"
                                color="secondary"
                                sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                            >
                                Startseite
                            </Typography>
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href="/news" passHref>
                            <Typography
                                variant="h6"
                                component="a"
                                color="secondary"
                                sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                            >
                                Neuigkeiten
                            </Typography>
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href="/reservation" passHref>
                            <Typography
                                variant="h6"
                                component="a"
                                color="secondary"
                                sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                            >
                                Tisch reservieren
                            </Typography>
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href="/menu" passHref>
                            <Typography
                                variant="h6"
                                component="a"
                                color="secondary"
                                sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                            >
                                Speisekarte
                            </Typography>
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Link href="/contact" passHref>
                            <Typography
                                variant="h6"
                                component="a"
                                color="secondary"
                                sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}
                            >
                                Kontakt
                            </Typography>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </nav>
    )
}

export default HeaderDesktop
