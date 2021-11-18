import { AppBar, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const HeaderMobile = (): JSX.Element => {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default HeaderMobile
