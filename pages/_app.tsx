import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../styles/theme'
import { CookiesProvider } from 'react-cookie'
import CookieConsent from 'react-cookie-consent'

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CookiesProvider>
                    <Component {...pageProps} />
                    <CookieConsent
                        cookieName="sours-cookie-consent"
                        location="bottom"
                        buttonText="Alles klar!"
                    >Wir verwenden auf unserer Website nur technisch notwendige Cookies, die für die Funktion der Website erforderlich sind. Weitere Informationen finden Sie in unserer Datenschutzerklärung.</CookieConsent>
                    <CssBaseline/>
                </CookiesProvider>
            </ThemeProvider>
        </>

    )
}

export default MyApp
