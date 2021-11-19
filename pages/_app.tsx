import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <ThemeProvider theme={theme} >
          <Component {...pageProps} />
          <CssBaseline />
        </ThemeProvider>
      </>

  )
}

export default MyApp
