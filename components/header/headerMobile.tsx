import {
    AppBar,
    Box,
    IconButton,
    List, ListItemButton,
    ListItemText,
    Toolbar
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
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        id="mobile-menu-button"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            {
                isDrawerOpen ?
                    <Box>
                        <List>
                            <Link href="/">
                                <ListItemButton>
                                    <ListItemText primary="Startseite"/>
                                </ListItemButton>
                            </Link>
                            <Link href="/news">
                                <ListItemButton>
                                    <ListItemText primary="News"/>
                                </ListItemButton>
                            </Link>
                            <Link href="/reservation">
                                <ListItemButton>
                                    <ListItemText primary="Tisch reservieren"/>
                                </ListItemButton>
                            </Link>
                            <Link href="/menu">
                                <ListItemButton>
                                    <ListItemText primary="Speisekarte"/>
                                </ListItemButton>
                            </Link>
                            <Link href="/contact">
                                <ListItemButton>
                                    <ListItemText primary="Kontakt"/>
                                </ListItemButton>
                            </Link>
                        </List>
                    </Box>
                    :
                    <></>
            }
        </>
    )
}

export default HeaderMobile
