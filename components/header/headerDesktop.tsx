import { AppBar, Box, Toolbar} from '@mui/material'
import { ContactLink, HomeLink, MenuLink, NewsLink, ReservationLink } from '../links/links'

const HeaderDesktop = (): JSX.Element => {
    return (
        <nav>
            <AppBar position="static">
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
        </nav>
    )
}

export default HeaderDesktop
