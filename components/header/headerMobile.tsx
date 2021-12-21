import {
    AppBar,
    Box, Breadcrumbs,
    IconButton,
    List, ListItemButton,
    Toolbar, Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import Link from 'next/link'
import { LinkLocation } from './headerEnums'
import { ContactLink, MenuLink, NewsLink, PrivacyLink, ReservationLink } from '../links/links'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

interface HeaderMobileProps {
    location: LinkLocation
}

const HeaderMobile = (props: HeaderMobileProps): JSX.Element => {
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false)

    const handleDrawerToggle = () => {
        setDrawerOpen(!isDrawerOpen)
    }

    const handleDrawerClose = () => {
        setDrawerOpen(false)
    }

    const renderBreadcrumb = (location: LinkLocation): JSX.Element | null => {
        switch (location) {
            case LinkLocation.Contact:
                return <ContactLink />
            case LinkLocation.Menu:
                return <MenuLink />
            case LinkLocation.News:
                return <NewsLink />
            case LinkLocation.Reservation:
                return <ReservationLink />
            case LinkLocation.Privacy:
                return <PrivacyLink />
            default:
                return null
        }
    }

    return (
        <nav>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        id="mobile-menu-button"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon color="secondary"/>
                    </IconButton>
                    <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" color="secondary" />}>
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
                        {
                            renderBreadcrumb(props.location)
                        }
                    </Breadcrumbs>
                </Toolbar>
            </AppBar>
            {
                isDrawerOpen ?
                    <Box>
                        <List>
                            <Link href="/">
                                <ListItemButton>
                                    <Typography variant="h6" component="div" color="secondary">Startseite</Typography>
                                </ListItemButton>
                            </Link>
                            <Link href="/news">
                                <ListItemButton>
                                    <Typography component="div" color="secondary">News</Typography>
                                </ListItemButton>
                            </Link>
                            <Link href="/reservation">
                                <ListItemButton>
                                    <Typography component="div" color="secondary">Tisch reservieren</Typography>
                                </ListItemButton>
                            </Link>
                            <Link href="/menu">
                                <ListItemButton>
                                    <Typography component="div" color="secondary">Speisekarte</Typography>
                                </ListItemButton>
                            </Link>
                            <Link href="/contact">
                                <ListItemButton>
                                    <Typography component="div" color="secondary">Kontakt</Typography>
                                </ListItemButton>
                            </Link>
                        </List>
                    </Box>
                    :
                    <></>
            }
        </nav>
    )
}

export default HeaderMobile
