import { createTheme, responsiveFontSizes } from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: "#000"
        },
        secondary: {
            main: "#ff0"
        },
        background: {
            default: "darkblue"
        },
    }
})

export default responsiveFontSizes(theme)
