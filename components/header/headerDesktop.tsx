import { AppBar, Box, Slide, Toolbar, useScrollTrigger } from '@mui/material'
import { ContactLink, HomeLink, MenuLink, NewsLink, ReservationLink } from '../links/links'

const HeaderDesktop = (): JSX.Element => {
    const trigger = useScrollTrigger();
    return (
        <nav>
            <Slide in={!trigger}>
            <AppBar>
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <HomeLink />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <NewsLink />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <ReservationLink />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <MenuLink />
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <ContactLink />
                    </Box>
                </Toolbar>
            </AppBar>
            </Slide>
        </nav>
    )
}

export default HeaderDesktop
