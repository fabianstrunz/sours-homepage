import {
    AppBar,
    Box,
    IconButton,
    List, ListItemButton,
    ListItemText,
    Toolbar, Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import Link from 'next/link'

const HeaderMobile = (): JSX.Element => {
    const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false)

    const handleDrawerToggle = () => {
        setDrawerOpen(!isDrawerOpen)
    }

    const handleDrawerClose = () => {
        setDrawerOpen(false)
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
